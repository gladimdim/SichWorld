import * as THREE from 'three';
import { Effect } from '../core/types.js';
import { QuestManager } from '../core/questManager.js';
import { DialogueRunner } from '../core/dialogueRunner.js';
import { DayNightLighting } from '../graphics/lighting.js';
import { SteppeTerrain } from '../graphics/terrain.js';
import { Character3D } from '../graphics/character3D.js';
import { Creature3D } from '../graphics/creature3D.js';
import { CollisionSystem } from './collisionSystem.js';
import { NpcScheduleManager } from './npcSchedule.js';
import { CombatSystem } from './combatSystem.js';

export interface WorldMarker {
  id: string;
  mesh: THREE.Group;
  label: string;
}

export class WorldDirector {
  public scene: THREE.Scene;
  public terrain: SteppeTerrain;
  public lighting: DayNightLighting;
  public questManager: QuestManager;
  public dialogueRunner: DialogueRunner;
  public collision: CollisionSystem;
  public combat: CombatSystem;
  public scheduler: NpcScheduleManager;

  public npcs: Map<string, Character3D> = new Map();
  public mobs: Map<string, Creature3D> = new Map();
  public markers: Map<string, WorldMarker> = new Map();

  // Domestic & wild life
  public sheepList: Creature3D[] = [];
  public rabbitList: { creature: Creature3D; vx: number; vz: number; timer: number }[] = [];
  public interactingNpcId: string | null = null;

  private registeredLocations: Record<string, THREE.Vector3> = {
    camp_center: new THREE.Vector3(0, 0, 0),
    pasture: new THREE.Vector3(-18, 0, 14),
    sheep_pen: new THREE.Vector3(-15, 0, 8),
    eastern_ravine: new THREE.Vector3(42, -2.5, 8),
    watering_hole: new THREE.Vector3(38, -2.8, -18),
    naum_kurin: new THREE.Vector3(-6, 0, -11),
    honta_workshop: new THREE.Vector3(13, 0, -9),
    pechyborshch_hut: new THREE.Vector3(14, 0, 10),
    ostap_hut: new THREE.Vector3(5, 0, 35)
  };

  constructor(
    scene: THREE.Scene,
    terrain: SteppeTerrain,
    lighting: DayNightLighting,
    questManager: QuestManager,
    dialogueRunner: DialogueRunner,
    collision: CollisionSystem,
    combat: CombatSystem
  ) {
    this.scene = scene;
    this.terrain = terrain;
    this.lighting = lighting;
    this.questManager = questManager;
    this.dialogueRunner = dialogueRunner;
    this.collision = collision;
    this.combat = combat;
    this.scheduler = new NpcScheduleManager(this.collision, this.terrain);

    // Listen to effects emitted by QuestManager
    this.questManager.onEffect(this.handleEffect.bind(this));
    this.questManager.onQuestChange(() => this.updateNpcMarkers());

    // Spawn camp animals & roaming wildlife
    this.spawnFauna();
  }

  public registerNpc(id: string, character: Character3D, locationKey?: string): void {
    this.npcs.set(id, character);
    this.scheduler.registerNpc(id, character);

    if (locationKey && this.registeredLocations[locationKey]) {
      const loc = this.registeredLocations[locationKey];
      character.group.position.copy(loc);
      character.group.position.y = this.terrain.getHeightAt(loc.x, loc.z);
    }
    this.scene.add(character.group);
    this.updateNpcMarkers();
  }

  private spawnFauna(): void {
    // 1. Domestic Sheep inside the pen (x in [-18, -12], z in [5, 11])
    const sheepCoords = [
      [-16, 7],
      [-14, 9],
      [-15.5, 10],
      [-13.5, 6.5]
    ];

    for (const [x, z] of sheepCoords) {
      const sheep = new Creature3D('sheep', 'Steppe Sheep');
      sheep.isGrazing = true;
      sheep.group.position.set(x, this.terrain.getHeightAt(x, z), z);
      sheep.visualGroup.rotation.y = Math.random() * Math.PI * 2;
      this.scene.add(sheep.group);
      this.sheepList.push(sheep);
    }

    // 2. Wild Steppe Hares hopping around grass patches
    const rabbitCoords = [
      [12, 16],
      [-8, 22],
      [28, 4],
      [32, 12],
      [-5, -8]
    ];

    for (const [x, z] of rabbitCoords) {
      const rabbit = new Creature3D('rabbit', 'Steppe Hare');
      rabbit.isHopping = true;
      rabbit.group.position.set(x, this.terrain.getHeightAt(x, z), z);
      this.scene.add(rabbit.group);
      this.rabbitList.push({
        creature: rabbit,
        vx: (Math.random() - 0.5) * 1.8,
        vz: (Math.random() - 0.5) * 1.8,
        timer: Math.random() * 4
      });
    }

    // 3. Roaming Ravine Wolves (outskirts predators)
    const wildWolfCoords = [
      [38, 12],
      [42, 6]
    ];
    for (let i = 0; i < wildWolfCoords.length; i++) {
      const [wx, wz] = wildWolfCoords[i];
      const wolf = new Creature3D('wolf', 'Ravine Wolf');
      const wy = this.terrain.getHeightAt(wx, wz);
      wolf.group.position.set(wx, wy, wz);
      this.scene.add(wolf.group);
      const id = `wild_wolf_${i}`;
      this.mobs.set(id, wolf);
      this.combat.registerMob(id, wolf, 'wolf', { maxHp: 40, damage: 10, xpReward: 35 });
    }
  }

  public handleEffect(effect: Effect): void {
    switch (effect.t) {
      case 'spawn':
        this.handleSpawn(effect.table, effect.at, effect.tag);
        break;

      case 'despawn':
        this.handleDespawn(effect.tag);
        break;

      case 'marker':
        if (effect.op === 'add' && effect.at) {
          this.addMarker(effect.id, effect.at, effect.label ?? effect.id);
        } else if (effect.op === 'remove') {
          this.removeMarker(effect.id);
        }
        break;

      case 'routine':
        console.log(`[WorldDirector] NPC ${effect.npc} routine changed to ${effect.routine}`);
        break;
    }
  }

  private handleSpawn(table: string, atKey: string, tag?: string): void {
    const loc = this.registeredLocations[atKey] ?? new THREE.Vector3(0, 0, 0);

    if (table === 'wolves_pasture') {
      for (let i = 0; i < 3; i++) {
        const wolf = new Creature3D('wolf', 'Pasture Wolf');
        const offsetX = (Math.random() - 0.5) * 6;
        const offsetZ = (Math.random() - 0.5) * 6;
        const x = loc.x + offsetX;
        const z = loc.z + offsetZ;
        wolf.group.position.set(x, this.terrain.getHeightAt(x, z), z);
        this.scene.add(wolf.group);

        const mobId = tag ? `${tag}_${i}` : `wolf_${Date.now()}_${i}`;
        this.mobs.set(mobId, wolf);
        this.combat.registerMob(mobId, wolf, 'wolf');
      }
    } else if (table === 'old_saiga_steppe') {
      const saiga = new Creature3D('saiga', 'Horned Old Saiga');
      saiga.group.position.set(loc.x, this.terrain.getHeightAt(loc.x, loc.z), loc.z);
      this.scene.add(saiga.group);
      const mobId = tag ?? 'saiga_target';
      this.mobs.set(mobId, saiga);
      this.combat.registerMob(mobId, saiga, 'saiga');
    } else if (table === 'shapeshifter_night') {
      const beast = new Creature3D('shapeshifter', 'Shapeshifter (Vovkulaka)');
      beast.group.position.set(loc.x, this.terrain.getHeightAt(loc.x, loc.z), loc.z);
      this.scene.add(beast.group);
      const mobId = tag ?? 'shapeshifter_boss';
      this.mobs.set(mobId, beast);
      this.combat.registerMob(mobId, beast, 'shapeshifter');
    }
  }

  private handleDespawn(tag: string): void {
    for (const [id, mob] of Array.from(this.mobs.entries())) {
      if (id.startsWith(tag)) {
        this.scene.remove(mob.group);
        this.mobs.delete(id);
        this.combat.removeMob(id);
      }
    }
  }

  public addMarker(id: string, atKey: string, label: string): void {
    this.removeMarker(id);
    const loc = this.registeredLocations[atKey] ?? new THREE.Vector3(0, 0, 0);

    const markerGroup = new THREE.Group();
    const pinGeo = new THREE.OctahedronGeometry(0.5, 0);
    pinGeo.scale(0.8, 1.6, 0.8);
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xff3322,
      emissive: 0x991100,
      emissiveIntensity: 0.8,
      roughness: 0.2
    });
    const pin = new THREE.Mesh(pinGeo, pinMat);
    pin.position.y = 2.4;
    markerGroup.add(pin);

    markerGroup.position.set(loc.x, this.terrain.getHeightAt(loc.x, loc.z) + 1.2, loc.z);
    this.scene.add(markerGroup);
    this.markers.set(id, { id, mesh: markerGroup, label });
  }

  public removeMarker(id: string): void {
    const existing = this.markers.get(id);
    if (existing) {
      this.scene.remove(existing.mesh);
      this.markers.delete(id);
    }
  }

  public updateNpcMarkers(): void {
    const allQuests = this.questManager.getAllQuests();

    for (const [npcId, char] of this.npcs) {
      let mark: 'quest_available' | 'quest_turnin' | 'none' = 'none';

      for (const q of allQuests) {
        const def = this.questManager.getQuestDef(q.id);
        if (!def || def.giver !== npcId) continue;

        if (q.state === 'available') {
          mark = 'quest_available';
          break;
        } else if (q.state === 'active' && q.stage === 'report') {
          mark = 'quest_turnin';
          break;
        }
      }

      char.setMarker(mark);
    }
  }

  public update(delta: number, playerPos: THREE.Vector3): void {
    const ws = this.questManager.getWorldState();
    ws.timeMinutes = (ws.timeMinutes + delta * 2) % 1440;

    // 1. Update Day/Night lighting
    this.lighting.update(ws.timeMinutes, delta);

    // 2. Drive Gothic NPC Daily Schedules
    this.scheduler.update(ws.timeMinutes, delta, this.interactingNpcId);

    // 3. Update 3D Character animations
    for (const npc of this.npcs.values()) {
      npc.update(delta);
    }
    for (const mob of this.mobs.values()) {
      mob.update(delta);
    }

    // 4. Update Sheep (domestic life in pen)
    for (const s of this.sheepList) {
      s.update(delta);
    }

    // 5. Update Wild Hares (hop around, flee from player if within 6 meters!)
    for (const r of this.rabbitList) {
      r.timer -= delta;
      const rPos = r.creature.group.position;
      const distToPlayer = rPos.distanceTo(playerPos);

      if (distToPlayer < 6.0) {
        // Bolt away from player
        const fleeX = rPos.x - playerPos.x;
        const fleeZ = rPos.z - playerPos.z;
        const len = Math.sqrt(fleeX * fleeX + fleeZ * fleeZ) || 1;
        r.vx = (fleeX / len) * 4.5;
        r.vz = (fleeZ / len) * 4.5;
        r.creature.isHopping = true;
      } else if (r.timer <= 0) {
        // Change hop direction or pause
        r.timer = 2 + Math.random() * 3;
        if (Math.random() < 0.6) {
          r.vx = (Math.random() - 0.5) * 2.0;
          r.vz = (Math.random() - 0.5) * 2.0;
          r.creature.isHopping = true;
        } else {
          r.vx = 0;
          r.vz = 0;
          r.creature.isHopping = false;
        }
      }

      if (r.vx !== 0 || r.vz !== 0) {
        rPos.x += r.vx * delta;
        rPos.z += r.vz * delta;
        rPos.y = this.terrain.getHeightAt(rPos.x, rPos.z);
        r.creature.visualGroup.rotation.y = Math.atan2(r.vx, r.vz);
      }

      r.creature.update(delta);
    }

    // 6. Bob 3D quest markers
    for (const m of this.markers.values()) {
      m.mesh.rotation.y += delta * 2.8;
      m.mesh.position.y += Math.sin(Date.now() * 0.005) * 0.006;
    }
  }
}
