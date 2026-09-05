import * as THREE from 'three';
import { Character3D } from '../graphics/character3D.js';
import { SteppeTerrain } from '../graphics/terrain.js';
import { WorldDirector } from './worldDirector.js';
import { EventBus } from '../core/eventBus.js';
import { CharacterStats, RpgSystem } from '../core/rpgSystem.js';
import { CollisionSystem } from './collisionSystem.js';
import { CombatSystem, CombatMob } from './combatSystem.js';

export class PlayerController {
  public character: Character3D;
  public terrain: SteppeTerrain;
  public director: WorldDirector;
  public bus: EventBus;
  public collision: CollisionSystem;
  public combat: CombatSystem;
  public stats: CharacterStats;

  public moveSpeed: number = 8.5;
  private velocity: THREE.Vector3 = new THREE.Vector3();
  private keys: Record<string, boolean> = {};
  public nearbyNpcId: string | null = null;
  public nearbyNpcName: string | null = null;
  public nearbyLootMob: CombatMob | null = null;
  public isInteracting: boolean = false;

  // Dodge roll / dash
  private isDodging: boolean = false;
  private dodgeTimer: number = 0;
  private dodgeDir: THREE.Vector2 = new THREE.Vector2(0, 1);
  private dodgeCooldown: number = 0;

  constructor(
    character: Character3D,
    terrain: SteppeTerrain,
    director: WorldDirector,
    bus: EventBus,
    collision: CollisionSystem,
    combat: CombatSystem
  ) {
    this.character = character;
    this.terrain = terrain;
    this.director = director;
    this.bus = bus;
    this.collision = collision;
    this.combat = combat;

    this.stats = {
      level: 1,
      xp: 0,
      trainingPoints: 10, // Start with 10 LP like in Gothic tutorial
      strength: 15,
      agility: 12,
      intelligence: 10,
      maxHp: 65,
      currentHp: 65,
      weaponSkills: {
        saber: 25,
        bow: 15,
        musket: 5
      },
      gold: 75
    };

    window.addEventListener('keydown', (e) => {
      this.keys[e.key.toLowerCase()] = true;
      this.keys[e.code] = true;

      if ((e.code === 'KeyQ' || e.key.toLowerCase() === 'q' || e.key === 'й') && !this.isInteracting) {
        this.dodge();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.key.toLowerCase()] = false;
      this.keys[e.code] = false;
    });
  }

  public dodge(): void {
    if (this.isDodging || this.dodgeCooldown > 0) return;

    this.isDodging = true;
    this.dodgeTimer = 0.28;
    this.dodgeCooldown = 0.85;

    // Use current velocity or facing direction
    if (this.velocity.lengthSq() > 0.1) {
      this.dodgeDir.set(this.velocity.x, this.velocity.z).normalize();
    } else {
      const rot = this.character.visualGroup.rotation.y;
      this.dodgeDir.set(Math.sin(rot), Math.cos(rot)).normalize();
    }
  }

  public update(delta: number): void {
    if (this.dodgeCooldown > 0) {
      this.dodgeCooldown -= delta;
    }

    if (this.isInteracting) {
      this.character.isMoving = false;
      this.character.update(delta);
      return;
    }

    // Handle active dodge roll
    if (this.isDodging) {
      this.dodgeTimer -= delta;
      const dodgeSpeed = 16.5;

      const pos = this.character.group.position;
      const resolved = this.collision.resolveMovement(
        pos.x,
        pos.z,
        this.dodgeDir.x * dodgeSpeed * delta,
        this.dodgeDir.y * dodgeSpeed * delta,
        0.45
      );
      pos.x = resolved.x;
      pos.z = resolved.z;
      pos.y = this.terrain.getHeightAt(pos.x, pos.z);

      if (this.dodgeTimer <= 0) {
        this.isDodging = false;
      }

      this.character.update(delta);
      this.checkProximities();
      return;
    }

    // Isometric movement translation in XZ plane
    let moveX = 0;
    let moveZ = 0;

    const isUp = this.keys['w'] || this.keys['ц'] || this.keys['KeyW'] || this.keys['ArrowUp'];
    const isDown = this.keys['s'] || this.keys['і'] || this.keys['ы'] || this.keys['KeyS'] || this.keys['ArrowDown'];
    const isLeft = this.keys['a'] || this.keys['ф'] || this.keys['KeyA'] || this.keys['ArrowLeft'];
    const isRight = this.keys['d'] || this.keys['в'] || this.keys['KeyD'] || this.keys['ArrowRight'];

    if (isUp) {
      moveX -= 1;
      moveZ -= 1;
    }
    if (isDown) {
      moveX += 1;
      moveZ += 1;
    }
    if (isLeft) {
      moveX -= 1;
      moveZ += 1;
    }
    if (isRight) {
      moveX += 1;
      moveZ -= 1;
    }

    const inputLen = Math.sqrt(moveX * moveX + moveZ * moveZ);
    if (inputLen > 0) {
      moveX /= inputLen;
      moveZ /= inputLen;
      this.velocity.set(moveX * this.moveSpeed, 0, moveZ * this.moveSpeed);
      this.character.isMoving = true;
      this.character.setFacingDirection(moveX, moveZ);
    } else {
      this.velocity.set(0, 0, 0);
      this.character.isMoving = false;
    }

    // Update 3D position with collision resolution
    const pos = this.character.group.position;
    const resolved = this.collision.resolveMovement(
      pos.x,
      pos.z,
      this.velocity.x * delta,
      this.velocity.z * delta,
      0.45
    );
    pos.x = resolved.x;
    pos.z = resolved.z;
    pos.y = this.terrain.getHeightAt(pos.x, pos.z);

    this.character.update(delta);
    this.checkProximities();
  }

  private checkProximities(): void {
    const pos = this.character.group.position;

    // Check NPC interaction proximity
    let closestNpc: string | null = null;
    let closestName: string | null = null;
    let minDist = 3.5;

    for (const [id, npc] of this.director.npcs) {
      const dist = pos.distanceTo(npc.group.position);
      if (dist < minDist) {
        minDist = dist;
        closestNpc = id;
        closestName = npc.name;
      }
    }

    this.nearbyNpcId = closestNpc;
    this.nearbyNpcName = closestName;

    // Check corpse loot proximity
    this.nearbyLootMob = this.combat.getNearbyLootableCorpse(pos);
  }

  public takeDamage(rawAmount: number): void {
    if (this.isDodging) return; // Invulnerability frames during dodge!

    const armor = 5; // Basic Cossack tunic
    const netDamage = Math.max(2, rawAmount - armor);
    this.stats.currentHp = Math.max(0, this.stats.currentHp - netDamage);

    // Flash screen red or handle death
    if (this.stats.currentHp <= 0) {
      // Respawn at camp with minimum health
      this.stats.currentHp = 30;
      this.character.group.position.set(0, 0, 4);
      this.character.group.position.y = this.terrain.getHeightAt(0, 4);
    }
  }

  public attack(): { hit: boolean; mobName?: string; damage?: number; isCrit?: boolean; killed?: boolean } {
    this.character.triggerAttack();

    const res = this.combat.playerAttack(this.stats, this.character.group.position);
    if (res.hit) {
      return {
        hit: true,
        mobName: res.mob?.name,
        damage: res.damage,
        isCrit: res.isCrit,
        killed: res.killed
      };
    }

    return { hit: false };
  }

  public loot(inventory: Record<string, number>): { looted: boolean; items?: string[]; mobName?: string } {
    const res = this.combat.lootNearbyCorpse(this.character.group.position, inventory);
    if (res.looted) {
      this.nearbyLootMob = null;
    }
    return res;
  }
}
