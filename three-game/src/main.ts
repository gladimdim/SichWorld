import * as THREE from 'three';
import { SceneRenderer } from './graphics/renderer.js';
import { IsometricCamera } from './graphics/camera.js';
import { DayNightLighting } from './graphics/lighting.js';
import { SteppeTerrain } from './graphics/terrain.js';
import { OutpostProps } from './graphics/props.js';
import { Character3D } from './graphics/character3D.js';
import { AtmosphericParticles } from './graphics/particles.js';

import { EventBus } from './core/eventBus.js';
import { QuestManager } from './core/questManager.js';
import { DialogueRunner } from './core/dialogueRunner.js';
import { WorldDirector } from './world/worldDirector.js';
import { PlayerController } from './world/playerController.js';
import { CollisionSystem } from './world/collisionSystem.js';
import { CombatSystem } from './world/combatSystem.js';
import { BuildingManager } from './world/buildingManager.js';
import { OcclusionSystem } from './graphics/occlusionSystem.js';

import { DialogueView } from './ui/dialogueView.js';
import { JournalView } from './ui/journalView.js';
import { HudView } from './ui/hudView.js';
import { DebugOverlay } from './ui/debugOverlay.js';
import { TrainerView } from './ui/trainerView.js';
import { TradeView } from './ui/tradeView.js';
import { InventoryView } from './ui/inventoryView.js';

import { ALL_INITIAL_QUESTS } from './data/quests.js';
import { ALL_INITIAL_DIALOGUES } from './data/dialogue.js';

class SichGame {
  private container: HTMLElement;
  private renderer: SceneRenderer;
  private isoCamera: IsometricCamera;
  private scene: THREE.Scene;
  private terrain: SteppeTerrain;
  private lighting: DayNightLighting;
  private particles: AtmosphericParticles;
  private collision: CollisionSystem;
  private combat: CombatSystem;
  private buildingManager: BuildingManager;
  private occlusionSystem: OcclusionSystem;
  private campfirePos: THREE.Vector3 = new THREE.Vector3(0, 0, -2);
  private mazankaInteriorLights: THREE.PointLight[] = [];

  private bus: EventBus;
  private questManager: QuestManager;
  private dialogueRunner: DialogueRunner;
  private worldDirector: WorldDirector;
  private player: PlayerController;

  private hud: HudView;
  private dialogueUI: DialogueView;
  private journalUI: JournalView;
  private debugOverlay: DebugOverlay;
  private trainerUI: TrainerView;
  private tradeUI: TradeView;
  private inventoryUI: InventoryView;

  private lastTime: number = 0;

  constructor() {
    this.container = document.getElementById('app-container')!;

    // 1. Core Quest Engine (Pure TypeScript)
    this.bus = new EventBus();
    this.questManager = new QuestManager(
      {
        flags: {},
        knowledge: {},
        rep: { ingulsk: 0, taras_trust: 0, naum_trust: 0, honta_trust: 0 },
        timeMinutes: 480, // 08:00 AM
        chapter: 1,
        inventory: {
          salo: 2,
          cossack_saber: 1,
          paturnakh_ring: 1 // Start with Paturnakh's secret signet ring from Chapter 0!
        }
      },
      this.bus
    );
    this.questManager.registerQuests(ALL_INITIAL_QUESTS);

    this.dialogueRunner = new DialogueRunner(this.questManager, this.bus);
    this.dialogueRunner.registerTrees(ALL_INITIAL_DIALOGUES);

    // 2. High-Resolution 3D Graphics Pipeline
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a2129);
    this.scene.fog = new THREE.FogExp2(0x526054, 0.007);

    this.renderer = new SceneRenderer({
      container: this.container
    });

    this.isoCamera = new IsometricCamera(window.innerWidth / window.innerHeight);

    // 3. Environment, Terrain & Soft Lighting
    this.lighting = new DayNightLighting(this.scene);
    this.terrain = new SteppeTerrain(this.scene);

    // 4. Spatial Collision, Dynamic Combat, Buildings & Fallout Occlusion
    this.collision = new CollisionSystem();
    this.setupColliders();

    this.combat = new CombatSystem(this.scene, this.terrain, this.collision, this.bus);
    this.buildingManager = new BuildingManager();
    this.occlusionSystem = new OcclusionSystem();

    this.buildingManager.onBuildingStateChange = (_id, isInside, name) => {
      if (isInside) {
        this.hud.showToast(`Entered ${name}`);
      }
    };

    // 5. World Director with Gothic Schedules & Wildlife
    this.worldDirector = new WorldDirector(
      this.scene,
      this.terrain,
      this.lighting,
      this.questManager,
      this.dialogueRunner,
      this.collision,
      this.combat
    );

    // 6. Build High-Detail 3D Outpost Architecture & Flora
    this.buildOutpostEnvironment();

    // 7. Atmospheric Particle Systems (Campfire sparks + air motes / night fireflies)
    this.particles = new AtmosphericParticles(this.scene, this.campfirePos);

    // 8. Spawn Sophisticated 3D NPCs
    this.spawnNpcs();

    // 9. Spawn High-Detail 3D Player Character
    const playerChar = new Character3D({
      role: 'player',
      name: 'Player Cossack'
    });
    playerChar.group.position.set(0, 0, 4);
    this.scene.add(playerChar.group);

    this.player = new PlayerController(
      playerChar,
      this.terrain,
      this.worldDirector,
      this.bus,
      this.collision,
      this.combat
    );
    this.isoCamera.snapToTarget(playerChar.group.position);

    // 10. Setup Gothic UI Systems
    this.hud = new HudView();
    this.dialogueUI = new DialogueView(this.dialogueRunner);
    this.journalUI = new JournalView(this.questManager);
    this.debugOverlay = new DebugOverlay(this.questManager, this.player, this.worldDirector);
    this.trainerUI = new TrainerView();
    this.tradeUI = new TradeView();
    this.inventoryUI = new InventoryView();

    // UI Wireups
    this.hud.onJournalClick(() => this.journalUI.toggle());
    this.hud.onDebugClick(() => this.debugOverlay.toggle());
    this.hud.onInventoryClick(() => this.inventoryUI.toggle());

    // Dialogue special actions (TRAIN & TRADE)
    this.dialogueUI.onSpecialAction((action, npcId) => {
      if (action === 'TRAIN') {
        this.trainerUI.open(
          npcId,
          this.player.stats,
          (skillName, newTier) => {
            const tierMsg = newTier ? ` You reached ${newTier} rank!` : '';
            this.hud.showToast(`Trained ${skillName}!${tierMsg}`);
            this.hud.updateStats(this.player.stats);
          },
          () => {
            this.player.isInteracting = false;
            this.worldDirector.interactingNpcId = null;
          }
        );
      } else if (action === 'TRADE') {
        this.tradeUI.open(
          npcId,
          this.player.stats,
          this.questManager.getWorldState().inventory,
          (msg) => {
            this.hud.showToast(msg);
            this.hud.updateStats(this.player.stats);
          },
          () => {
            this.player.isInteracting = false;
            this.worldDirector.interactingNpcId = null;
          }
        );
      }
    });

    // Inventory consumption hook
    this.inventoryUI.open(
      (item) => {
        this.hud.showToast(`Consumed ${item.name}! Restored ${item.healHp} HP.`);
        this.hud.updateStats(this.player.stats);
      }
    );
    this.inventoryUI.close(); // Start closed

    // Quest notifications toast
    this.questManager.onJournal((entry) => {
      this.hud.showToast(entry);
    });

    // 11. Input Listeners
    window.addEventListener('keydown', (e) => {
      if (this.isAnyModalOpen()) return;

      if (e.key.toLowerCase() === 'e' || e.code === 'KeyE' || e.key === 'у') {
        this.handleInteract();
      } else if (e.code === 'Space' || e.key === ' ') {
        this.handleAttack();
      }
    });

    window.addEventListener('resize', () => {
      this.isoCamera.setAspect(window.innerWidth / window.innerHeight);
    });

    // Welcome banner
    setTimeout(() => {
      this.hud.showToast('Welcome to SichWorld! [WASD] Move, [Space] Saber Slash, [Q] Dodge Roll, [E] Interact/Loot, [+/- or Wheel] Zoom, [I] Bag, [J] Journal.');
    }, 600);

    // Start 60fps Loop
    requestAnimationFrame(this.loop.bind(this));
  }

  private isAnyModalOpen(): boolean {
    return (
      this.dialogueUI.isOpen() ||
      this.trainerUI.isOpen() ||
      this.tradeUI.isOpen() ||
      this.inventoryUI.isOpen() ||
      this.journalUI.isOpen()
    );
  }

  private setupColliders(): void {
    // --- Naum's Kurin (Headquarters) Outer Walls & Doorway ---
    // Center (-6, -18), width 9.5, length 14.5, doorway width 2.2 at Z = -10.75
    // Left outer wall
    this.collision.addBox(-11.1, -10.4, -25.5, -10.5);
    // Right outer wall
    this.collision.addBox(-1.6, -0.9, -25.5, -10.5);
    // Back outer wall
    this.collision.addBox(-11.0, -1.0, -25.6, -24.9);
    // Front wall Left of door
    this.collision.addBox(-11.0, -7.1, -11.1, -10.4);
    // Front wall Right of door
    this.collision.addBox(-4.9, -1.0, -11.1, -10.4);
    // Council table inside
    this.collision.addBox(-7.4, -4.6, -20.2, -18.8);
    // Skrynya chest inside
    this.collision.addBox(-10.4, -8.8, -25.0, -23.5);

    // --- Honta's Workshop Outer Walls & Doorway ---
    // Center (16, -14), width 8.0, length 10.5, doorway width 2.2 at Z = -8.75
    // Left outer wall
    this.collision.addBox(11.6, 12.4, -19.5, -8.5);
    // Right outer wall
    this.collision.addBox(19.6, 20.4, -19.5, -8.5);
    // Back outer wall
    this.collision.addBox(11.8, 20.2, -19.6, -18.9);
    // Front wall Left of door
    this.collision.addBox(11.8, 14.9, -9.1, -8.4);
    // Front wall Right of door
    this.collision.addBox(17.1, 20.2, -9.1, -8.4);
    // Workbench inside
    this.collision.addBox(12.3, 13.7, -15.8, -12.2);

    // Sheep Pen fence perimeter
    this.collision.addBox(-20.0, -10.0, 3.0, 13.0);

    // Central Campfire stone ring
    this.collision.addCircle(this.campfirePos.x, this.campfirePos.z, 1.25);

    // Western Palisade
    this.collision.addBox(-29.0, -27.0, -16.0, 16.0);

    // Northern Palisade
    this.collision.addBox(-22.0, 22.0, -33.5, -30.5);

    // Large Boulders
    const boulderSpots = [
      [34, 16, 2.0],
      [44, -2, 2.6],
      [48, 22, 1.8],
      [32, -24, 2.2],
      [-32, -18, 1.8],
      [-26, -28, 2.6]
    ];
    for (const [x, z, r] of boulderSpots) {
      this.collision.addCircle(x, z, r * 0.85);
    }

    // Steppe Oak Trunks
    const treeTrunks = [
      [24, -20, 0.9],
      [-22, -14, 0.9],
      [36, 18, 0.8],
      [-24, 22, 0.8]
    ];
    for (const [x, z, r] of treeTrunks) {
      this.collision.addCircle(x, z, r);
    }

    // Ukrainian Steppe Water Well
    this.collision.addCircle(5.0, -8.0, 1.4);

    // Wood Chopping Block
    this.collision.addCircle(-4.2, -3.2, 0.7);

    // Cossack Wooden Wagon
    this.collision.addBox(-15.2, -12.8, -0.3, 3.3);

    // Traditional Steppe Haystack
    this.collision.addCircle(-17.5, 14.5, 2.0);

    // Wattle Fences (Плетений тин)
    // Naum's Kurin front courtyard
    this.collision.addBox(-10.6, -5.0, -6.3, -5.7);
    this.collision.addBox(-2.0, 0.5, -6.3, -5.7);
    this.collision.addBox(0.1, 0.7, -13.0, -6.0);
    // Workshop front courtyard
    this.collision.addBox(9.2, 13.8, -5.8, -5.2);
    this.collision.addBox(17.5, 21.5, -5.8, -5.2);
  }

  private buildOutpostEnvironment(): void {
    // 0. Ground Footpaths connecting camp
    const footpaths = OutpostProps.createGroundFootpaths(this.terrain);
    this.scene.add(footpaths);

    // 1. Kurin (Naum's Headquarters - Enterable with disappearable roof)
    const hqResult = OutpostProps.createEnterableKurin(9.5, 14.5, 3.8, 'headquarters');
    hqResult.group.position.set(-6, 0, -18);
    this.scene.add(hqResult.group);
    this.mazankaInteriorLights.push(hqResult.interiorLight);

    this.buildingManager.registerBuilding({
      id: 'headquarters',
      name: "Naum's Headquarters",
      group: hqResult.group,
      roofGroup: hqResult.roofGroup,
      interiorGroup: hqResult.interiorGroup,
      bounds: {
        minX: -10.75,
        maxX: -1.25,
        minZ: -25.25,
        maxZ: -8.8 // Includes doorway and porch
      },
      roofMaterials: hqResult.roofMaterials,
      currentRoofOpacity: 1.0,
      targetRoofOpacity: 1.0,
      isPlayerInside: false
    });

    // 2. Honta's Bowyer Workshop - Enterable with disappearable roof
    const shopResult = OutpostProps.createEnterableKurin(8.0, 10.5, 3.6, 'workshop');
    shopResult.group.position.set(16, 0, -14);
    this.scene.add(shopResult.group);
    this.mazankaInteriorLights.push(shopResult.interiorLight);

    this.buildingManager.registerBuilding({
      id: 'workshop',
      name: "Honta's Workshop",
      group: shopResult.group,
      roofGroup: shopResult.roofGroup,
      interiorGroup: shopResult.interiorGroup,
      bounds: {
        minX: 12.0,
        maxX: 20.0,
        minZ: -19.25,
        maxZ: -6.8 // Includes doorway and porch
      },
      roofMaterials: shopResult.roofMaterials,
      currentRoofOpacity: 1.0,
      targetRoofOpacity: 1.0,
      isPlayerInside: false
    });

    // Register Kurin roofs with OcclusionSystem as well (for camera ray occlusion when outside)
    this.occlusionSystem.registerGroup(hqResult.roofGroup);
    this.occlusionSystem.registerGroup(shopResult.roofGroup);

    // 3. Traditional Ukrainian Wicker Wattle Fences (Плетений тин) with drying jugs
    // Naum's Kurin courtyard
    const naumFenceLeft = OutpostProps.createWattleFence(5.5, 1.15, true);
    naumFenceLeft.position.set(-7.8, this.terrain.getHeightAt(-7.8, -6.0), -6.0);
    this.scene.add(naumFenceLeft);
    this.occlusionSystem.registerGroup(naumFenceLeft);

    const naumFenceRight = OutpostProps.createWattleFence(2.5, 1.15, true);
    naumFenceRight.position.set(-0.8, this.terrain.getHeightAt(-0.8, -6.0), -6.0);
    this.scene.add(naumFenceRight);
    this.occlusionSystem.registerGroup(naumFenceRight);

    const naumFenceEast = OutpostProps.createWattleFence(7.0, 1.15, false);
    naumFenceEast.rotation.y = Math.PI / 2;
    naumFenceEast.position.set(0.4, this.terrain.getHeightAt(0.4, -9.5), -9.5);
    this.scene.add(naumFenceEast);
    this.occlusionSystem.registerGroup(naumFenceEast);

    // Bowyer Workshop courtyard
    const shopFenceLeft = OutpostProps.createWattleFence(4.6, 1.15, true);
    shopFenceLeft.position.set(11.5, this.terrain.getHeightAt(11.5, -5.5), -5.5);
    this.scene.add(shopFenceLeft);
    this.occlusionSystem.registerGroup(shopFenceLeft);

    const shopFenceRight = OutpostProps.createWattleFence(4.0, 1.15, true);
    shopFenceRight.position.set(19.5, this.terrain.getHeightAt(19.5, -5.5), -5.5);
    this.scene.add(shopFenceRight);
    this.occlusionSystem.registerGroup(shopFenceRight);

    // 4. Blooming Sunflowers (Соняшники коло хати)
    const sunflowerSpots = [
      [-2.2, -10.5, 5],
      [-0.8, -14.5, 4],
      [-5.2, -6.2, 4],
      [11.5, -8.2, 5],
      [7.4, -8.2, 4]
    ];
    for (const [sx, sz, count] of sunflowerSpots) {
      const sf = OutpostProps.createSunflowerCluster(count);
      const sy = this.terrain.getHeightAt(sx, sz);
      sf.position.set(sx, sy, sz);
      this.scene.add(sf);
      this.occlusionSystem.registerGroup(sf);
    }

    // 5. Ukrainian Mallows (Мальви)
    const mallowSpots = [
      [-11.1, -15.0, 4],
      [20.4, -13.0, 4]
    ];
    for (const [mx, mz, count] of mallowSpots) {
      const ml = OutpostProps.createMallowCluster(count);
      const my = this.terrain.getHeightAt(mx, mz);
      ml.position.set(mx, my, mz);
      this.scene.add(ml);
      this.occlusionSystem.registerGroup(ml);
    }

    // 6. Steppe Water Well (Криниця)
    const well = OutpostProps.createSteppeWell();
    const wy = this.terrain.getHeightAt(5.0, -8.0);
    well.position.set(5.0, wy, -8.0);
    this.scene.add(well);
    this.occlusionSystem.registerGroup(well);

    // 7. Wood Chopping Block & Cossack Axe
    const chopBlock = OutpostProps.createChoppingBlock();
    const cby = this.terrain.getHeightAt(-4.2, -3.2);
    chopBlock.position.set(-4.2, cby, -3.2);
    this.scene.add(chopBlock);

    // 8. Cossack Wooden Wagon (Віз з сіном та мішками)
    const cart = OutpostProps.createCossackCart();
    const cy = this.terrain.getHeightAt(-14.0, 1.5);
    cart.position.set(-14.0, cy, 1.5);
    cart.rotation.y = 0.35;
    this.scene.add(cart);
    this.occlusionSystem.registerGroup(cart);

    // 9. Traditional Steppe Haystack (Копиця сіна)
    const haystack = OutpostProps.createHaystack(2.1, 2.8);
    const hy = this.terrain.getHeightAt(-17.5, 14.5);
    haystack.position.set(-17.5, hy, 14.5);
    this.scene.add(haystack);
    this.occlusionSystem.registerGroup(haystack);

    // 10. Outdoor Benches on the Mazanka Pryzba
    const bench1 = OutpostProps.createOutsideBench(2.2);
    bench1.position.set(-3.7, this.terrain.getHeightAt(-3.7, -10.4), -10.4);
    this.scene.add(bench1);

    const bench2 = OutpostProps.createOutsideBench(2.2);
    bench2.position.set(18.3, this.terrain.getHeightAt(18.3, -8.4), -8.4);
    this.scene.add(bench2);

    // 11. Sheep Pen near pasture
    const sheepPen = OutpostProps.createSheepPen(10, 10);
    sheepPen.position.set(-15, 0, 8);
    this.scene.add(sheepPen);

    // 12. Central 3D Campfire with stone ring, logs, and layered flame mesh
    const fire = OutpostProps.createCampfire();
    fire.position.copy(this.campfirePos);
    this.scene.add(fire);
    this.lighting.addCampfireLight(this.campfirePos);

    // Western Palisade
    const palisadeLeft = OutpostProps.createPalisade(32, 3.4);
    palisadeLeft.rotation.y = Math.PI / 2;
    palisadeLeft.position.set(-28, 0, 0);
    this.scene.add(palisadeLeft);
    this.occlusionSystem.registerGroup(palisadeLeft);

    // Northern Palisade
    const palisadeTop = OutpostProps.createPalisade(44, 3.4);
    palisadeTop.position.set(0, 0, -32);
    this.scene.add(palisadeTop);
    this.occlusionSystem.registerGroup(palisadeTop);

    // Gnarled Steppe Oak Trees
    const oakSpots = [
      [24, -20, 7.5],
      [-22, -14, 8.0],
      [36, 18, 6.8],
      [-24, 22, 7.2]
    ];
    for (const [x, z, h] of oakSpots) {
      const oak = OutpostProps.createSteppeOak(h);
      const y = this.terrain.getHeightAt(x, z);
      oak.position.set(x, y, z);
      this.scene.add(oak);
      this.occlusionSystem.registerGroup(oak);
    }

    // Weathered Steppe Boulders
    const boulderSpots = [
      [34, 16, 2.0],
      [44, -2, 2.6],
      [48, 22, 1.8],
      [32, -24, 2.2],
      [-32, -18, 1.8],
      [-26, -28, 2.6]
    ];
    for (const [x, z, r] of boulderSpots) {
      const boulder = OutpostProps.createBoulder(r);
      const by = this.terrain.getHeightAt(x, z);
      boulder.position.set(x, by, z);
      this.scene.add(boulder);
      this.occlusionSystem.registerGroup(boulder);
    }
  }

  private spawnNpcs(): void {
    // Kurinnyi Naum Lysenko (Crimson Velvet Kaftan & Gold Bulava)
    const naum = new Character3D({
      role: 'naum',
      name: 'Naum Lysenko (Kurinnyi)',
      isInteractable: true
    });
    this.worldDirector.registerNpc('naum_lysenko', naum, 'naum_kurin');

    // Taras Chub by the sheep pen (Sheepskin vest & fur hat)
    const taras = new Character3D({
      role: 'taras',
      name: 'Taras Chub (Shepherd)',
      isInteractable: true
    });
    this.worldDirector.registerNpc('taras_chub', taras, 'sheep_pen');

    // Honta by the archery workshop (Hunter Green tunic, composite bow & quiver)
    const honta = new Character3D({
      role: 'honta',
      name: 'Honta (Bowyer)',
      isInteractable: true
    });
    this.worldDirector.registerNpc('honta', honta, 'honta_workshop');
  }

  private handleInteract(): void {
    if (this.isAnyModalOpen()) return;

    // 1. Check corpse looting first
    if (this.player.nearbyLootMob) {
      const res = this.player.loot(this.questManager.getWorldState().inventory);
      if (res.looted) {
        this.hud.showToast(`Looted ${res.mobName}: ${res.items?.join(', ')}`);
        this.hud.updateStats(this.player.stats);
        return;
      }
    }

    // 2. Check NPC conversation
    const nearbyNpc = this.player.nearbyNpcId;
    if (nearbyNpc) {
      this.player.isInteracting = true;
      this.worldDirector.interactingNpcId = nearbyNpc;

      // Make NPC turn to face player during conversation
      const npc = this.worldDirector.npcs.get(nearbyNpc);
      if (npc) {
        const playerPos = this.player.character.group.position;
        const npcPos = npc.group.position;
        npc.setFacingDirection(playerPos.x - npcPos.x, playerPos.z - npcPos.z);
      }

      this.dialogueUI.open(nearbyNpc, () => {
        this.player.isInteracting = false;
        this.worldDirector.interactingNpcId = null;
        this.worldDirector.updateNpcMarkers();
      });
    }
  }

  private handleAttack(): void {
    if (this.isAnyModalOpen()) return;

    const res = this.player.attack();
    if (res.hit) {
      const critText = res.isCrit ? 'CRITICAL HIT! ' : '';
      if (res.killed) {
        this.hud.showToast(`${critText}Slayed ${res.mobName}! (Press [E] to loot)`);
      }
      this.hud.updateStats(this.player.stats);
    }
  }

  private loop(currentTime: number): void {
    requestAnimationFrame(this.loop.bind(this));

    if (this.lastTime === 0) {
      this.lastTime = currentTime;
    }
    const delta = Math.min(0.1, (currentTime - this.lastTime) / 1000);
    this.lastTime = currentTime;

    const playerPos = this.player.character.group.position;

    // 1. Update Player (3D Movement, collision sliding, dodge roll)
    this.player.update(delta);

    // 2. Update Active Combat & Mob AI (warning snarls, chasing, lunging attacks)
    this.combat.update(delta, playerPos, this.player.stats, (dmg) => {
      this.player.takeDamage(dmg);
      this.hud.updateStats(this.player.stats);
    });

    // 3. Update Enterable Building Roofs (smoothly disappears when player enters)
    this.buildingManager.update(delta, playerPos);

    // 4. Update Fallout-Style Camera Occlusion (overlapping trees, boulders, walls fade translucent)
    this.occlusionSystem.update(delta, playerPos, this.isoCamera.camera);

    // 5. Camera strictly follows Player in locked isometric orientation
    this.isoCamera.followTarget(playerPos, 0.08);

    // 6. Update World Director (Gothic NPC schedules, sheep grazing, hares fleeing)
    this.worldDirector.update(delta, playerPos);

    // 7. Update Water ripples, Mazanka pech firelight & Atmospheric particles
    const timeMinutes = this.questManager.getWorldState().timeMinutes;
    this.terrain.update(currentTime * 0.001);
    this.particles.update(delta, this.campfirePos, timeMinutes);

    // Warm organic flickering for interior pech masonry stoves
    const lightFlicker = Math.sin(currentTime * 0.007) * 0.35 + Math.sin(currentTime * 0.017) * 0.2;
    for (const light of this.mazankaInteriorLights) {
      light.intensity = 2.6 + lightFlicker;
    }

    // 8. Update HUD & Context
    this.hud.updateStats(this.player.stats);
    this.hud.updateTime(this.questManager.getWorldState());
    this.inventoryUI.setContext(this.questManager.getWorldState().inventory, this.player.stats);

    // Proximity prompt
    if (this.player.nearbyLootMob && !this.isAnyModalOpen()) {
      this.hud.showPrompt(`Press <strong>[E]</strong> to loot fallen <strong>${this.player.nearbyLootMob.name}</strong>`);
    } else if (this.player.nearbyNpcName && !this.isAnyModalOpen()) {
      this.hud.showPrompt(`Press <strong>[E]</strong> to speak with <strong>${this.player.nearbyNpcName}</strong>`);
    } else {
      this.hud.hidePrompt();
    }

    // 9. Render 3D Scene
    this.renderer.render(this.scene, this.isoCamera.camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new SichGame();
});
