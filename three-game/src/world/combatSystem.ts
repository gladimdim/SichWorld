import * as THREE from 'three';
import { Creature3D } from '../graphics/creature3D.js';
import { SteppeTerrain } from '../graphics/terrain.js';
import { CollisionSystem } from './collisionSystem.js';
import { CharacterStats, RpgSystem } from '../core/rpgSystem.js';
import { EventBus } from '../core/eventBus.js';
import { ITEM_DATABASE } from '../core/items.js';

export type MobAiState = 'idle' | 'warning' | 'chase' | 'attack' | 'stagger' | 'dead';

export interface CombatMob {
  id: string;
  name: string;
  kind: 'wolf' | 'saiga' | 'shapeshifter';
  creature: Creature3D;
  hp: number;
  maxHp: number;
  armor: number;
  damage: number;
  speed: number;
  detectionRadius: number;
  attackRadius: number;
  state: MobAiState;
  anchorPos: THREE.Vector3;
  loot: Record<string, number>;
  isLooted: boolean;
  attackCooldown: number;
  staggerTimer: number;
  warningTimer: number;
  xpReward: number;
  patrolAngle: number;
}

export interface FloatingText {
  x: number;
  y: number;
  text: string;
  color: string;
  isCrit: boolean;
  lifetime: number;
  maxLifetime: number;
}

export class CombatSystem {
  public mobs: Map<string, CombatMob> = new Map();
  private scene: THREE.Scene;
  private terrain: SteppeTerrain;
  private collision: CollisionSystem;
  private bus: EventBus;

  public activeTarget: CombatMob | null = null;
  public floatingTexts: FloatingText[] = [];
  public targetHudEl: HTMLElement | null = null;
  public floatingTextContainer: HTMLElement | null = null;

  constructor(
    scene: THREE.Scene,
    terrain: SteppeTerrain,
    collision: CollisionSystem,
    bus: EventBus
  ) {
    this.scene = scene;
    this.terrain = terrain;
    this.collision = collision;
    this.bus = bus;

    this.createDomElements();
  }

  private createDomElements(): void {
    // Target Health Bar at top center
    this.targetHudEl = document.createElement('div');
    this.targetHudEl.id = 'target-hud';
    this.targetHudEl.style.display = 'none';
    document.body.appendChild(this.targetHudEl);

    // Floating combat text overlay
    this.floatingTextContainer = document.createElement('div');
    this.floatingTextContainer.id = 'floating-text-container';
    this.floatingTextContainer.style.position = 'absolute';
    this.floatingTextContainer.style.top = '0';
    this.floatingTextContainer.style.left = '0';
    this.floatingTextContainer.style.width = '100%';
    this.floatingTextContainer.style.height = '100%';
    this.floatingTextContainer.style.pointerEvents = 'none';
    this.floatingTextContainer.style.zIndex = '90';
    document.body.appendChild(this.floatingTextContainer);
  }

  public registerMob(
    id: string,
    creature: Creature3D,
    kind: 'wolf' | 'saiga' | 'shapeshifter',
    options?: {
      maxHp?: number;
      armor?: number;
      damage?: number;
      speed?: number;
      xpReward?: number;
      loot?: Record<string, number>;
    }
  ): void {
    const defaultHp = kind === 'shapeshifter' ? 180 : kind === 'wolf' ? 45 : 60;
    const defaultArmor = kind === 'shapeshifter' ? 14 : kind === 'wolf' ? 4 : 2;
    const defaultDmg = kind === 'shapeshifter' ? 26 : kind === 'wolf' ? 12 : 6;
    const defaultSpeed = kind === 'shapeshifter' ? 6.2 : kind === 'wolf' ? 5.6 : 6.8;
    const defaultXp = kind === 'shapeshifter' ? 250 : kind === 'wolf' ? 45 : 60;

    let loot: Record<string, number> = {};
    if (kind === 'wolf') {
      loot = { wolf_pelt: 1, wolf_fang: 1, raw_meat: 2 };
    } else if (kind === 'saiga') {
      loot = { saiga_horns: 1, saiga_carcass: 1, raw_meat: 3 };
    } else if (kind === 'shapeshifter') {
      loot = { bog_amulet: 1, wolf_pelt: 2, raw_meat: 4 };
    }

    const mob: CombatMob = {
      id,
      name: creature.name,
      kind,
      creature,
      hp: options?.maxHp ?? defaultHp,
      maxHp: options?.maxHp ?? defaultHp,
      armor: options?.armor ?? defaultArmor,
      damage: options?.damage ?? defaultDmg,
      speed: options?.speed ?? defaultSpeed,
      detectionRadius: kind === 'saiga' ? 14.0 : 10.5,
      attackRadius: 2.2,
      state: 'idle',
      anchorPos: creature.group.position.clone(),
      loot: options?.loot ?? loot,
      isLooted: false,
      attackCooldown: 0,
      staggerTimer: 0,
      warningTimer: 0,
      xpReward: options?.xpReward ?? defaultXp,
      patrolAngle: Math.random() * Math.PI * 2
    };

    this.mobs.set(id, mob);
  }

  public removeMob(id: string): void {
    const mob = this.mobs.get(id);
    if (mob) {
      this.scene.remove(mob.creature.group);
      this.mobs.delete(id);
      if (this.activeTarget?.id === id) {
        this.activeTarget = null;
      }
    }
  }

  public update(
    delta: number,
    playerPos: THREE.Vector3,
    playerStats: CharacterStats,
    onPlayerDamage: (damage: number) => void
  ): void {
    let closestHostile: CombatMob | null = null;
    let minDist = 14.0;

    for (const mob of this.mobs.values()) {
      if (mob.state === 'dead') continue;

      const mobPos = mob.creature.group.position;
      const distToPlayer = mobPos.distanceTo(playerPos);

      if (distToPlayer < minDist) {
        minDist = distToPlayer;
        closestHostile = mob;
      }

      // Update timers
      if (mob.attackCooldown > 0) mob.attackCooldown -= delta;
      if (mob.staggerTimer > 0) mob.staggerTimer -= delta;
      if (mob.warningTimer > 0) mob.warningTimer -= delta;

      // MOB STATE MACHINE
      switch (mob.state) {
        case 'idle':
          this.updateIdleState(mob, delta, distToPlayer);
          break;

        case 'warning':
          this.updateWarningState(mob, delta, distToPlayer, playerPos);
          break;

        case 'chase':
          this.updateChaseState(mob, delta, distToPlayer, playerPos);
          break;

        case 'attack':
          this.updateAttackState(mob, delta, distToPlayer, playerPos, playerStats, onPlayerDamage);
          break;

        case 'stagger':
          if (mob.staggerTimer <= 0) {
            mob.state = 'chase';
          }
          break;
      }

      mob.creature.update(delta);
    }

    this.activeTarget = closestHostile;
    this.updateTargetHud();
    this.updateFloatingTexts(delta);
  }

  private updateIdleState(mob: CombatMob, delta: number, distToPlayer: number): void {
    // If player approaches within detection radius
    if (distToPlayer < mob.detectionRadius) {
      if (mob.kind === 'saiga') {
        // Saiga bolts away from player immediately!
        mob.state = 'chase';
      } else {
        // Wolves & shapeshifters first give warning growl!
        mob.state = 'warning';
        mob.warningTimer = 1.4;
      }
      return;
    }

    // Gentle roaming around anchorPos
    mob.patrolAngle += delta * 0.4;
    const patrolRadius = 3.5;
    const targetX = mob.anchorPos.x + Math.cos(mob.patrolAngle) * patrolRadius;
    const targetZ = mob.anchorPos.z + Math.sin(mob.patrolAngle) * patrolRadius;

    const pos = mob.creature.group.position;
    const dx = targetX - pos.x;
    const dz = targetZ - pos.z;
    const dist = Math.sqrt(dx * dx + dz * dz);

    if (dist > 0.2) {
      const step = Math.min(dist, 1.2 * delta);
      pos.x += (dx / dist) * step;
      pos.z += (dz / dist) * step;
      pos.y = this.terrain.getHeightAt(pos.x, pos.z);
      mob.creature.setFacingDirection(dx, dz);
    }
  }

  private updateWarningState(
    mob: CombatMob,
    _delta: number,
    distToPlayer: number,
    playerPos: THREE.Vector3
  ): void {
    const mobPos = mob.creature.group.position;
    mob.creature.setFacingDirection(playerPos.x - mobPos.x, playerPos.z - mobPos.z);

    if (distToPlayer < 7.0 || mob.warningTimer <= 0) {
      // Player pushed too close or stood ground too long -> CHASE!
      mob.state = 'chase';
    } else if (distToPlayer > mob.detectionRadius + 2.0) {
      // Player backed off peacefully
      mob.state = 'idle';
    }
  }

  private updateChaseState(
    mob: CombatMob,
    delta: number,
    distToPlayer: number,
    playerPos: THREE.Vector3
  ): void {
    const mobPos = mob.creature.group.position;

    if (mob.kind === 'saiga') {
      // Flee in opposite direction from player
      const fleeX = mobPos.x - playerPos.x;
      const fleeZ = mobPos.z - playerPos.z;
      const len = Math.sqrt(fleeX * fleeX + fleeZ * fleeZ) || 1;

      mobPos.x += (fleeX / len) * mob.speed * delta;
      mobPos.z += (fleeZ / len) * mob.speed * delta;
      mobPos.y = this.terrain.getHeightAt(mobPos.x, mobPos.z);
      mob.creature.setFacingDirection(fleeX, fleeZ);

      if (distToPlayer > 25.0) {
        mob.state = 'idle';
        mob.anchorPos.copy(mobPos);
      }
      return;
    }

    // Hostile predator charging player
    const toPlayerX = playerPos.x - mobPos.x;
    const toPlayerZ = playerPos.z - mobPos.z;
    const len = Math.sqrt(toPlayerX * toPlayerX + toPlayerZ * toPlayerZ) || 1;

    mob.creature.setFacingDirection(toPlayerX, toPlayerZ);

    if (distToPlayer <= mob.attackRadius) {
      mob.state = 'attack';
      return;
    }

    // Sprint toward player
    const step = mob.speed * delta;
    mobPos.x += (toPlayerX / len) * step;
    mobPos.z += (toPlayerZ / len) * step;
    mobPos.y = this.terrain.getHeightAt(mobPos.x, mobPos.z);
  }

  private updateAttackState(
    mob: CombatMob,
    _delta: number,
    distToPlayer: number,
    playerPos: THREE.Vector3,
    _playerStats: CharacterStats,
    onPlayerDamage: (damage: number) => void
  ): void {
    const mobPos = mob.creature.group.position;
    mob.creature.setFacingDirection(playerPos.x - mobPos.x, playerPos.z - mobPos.z);

    if (mob.attackCooldown <= 0) {
      mob.attackCooldown = 1.6;

      // Deal Gothic damage to player
      const rawDamage = Math.max(4, Math.floor(mob.damage + (Math.random() * 6 - 3)));
      onPlayerDamage(rawDamage);

      this.addFloatingText(
        window.innerWidth / 2,
        window.innerHeight / 2 - 40,
        `-${rawDamage} HP`,
        '#ef4444',
        false
      );
    }

    if (distToPlayer > mob.attackRadius + 0.8) {
      mob.state = 'chase';
    }
  }

  public playerAttack(
    playerStats: CharacterStats,
    playerPos: THREE.Vector3
  ): { hit: boolean; mob?: CombatMob; damage?: number; isCrit?: boolean; killed?: boolean } {
    let closestMob: CombatMob | null = null;
    let minDist = 3.6;

    for (const mob of this.mobs.values()) {
      if (mob.state === 'dead') continue;
      const dist = playerPos.distanceTo(mob.creature.group.position);
      if (dist < minDist) {
        minDist = dist;
        closestMob = mob;
      }
    }

    if (!closestMob) {
      return { hit: false };
    }

    // Gothic combat calculation
    const weaponDamage = 28;
    const { damage, isCrit } = RpgSystem.calculateDamage(
      playerStats.weaponSkills.saber,
      weaponDamage,
      closestMob.armor
    );

    closestMob.hp -= damage;
    closestMob.creature.flashHurt();

    // Stagger mob backwards
    const mobPos = closestMob.creature.group.position;
    const pushX = mobPos.x - playerPos.x;
    const pushZ = mobPos.z - playerPos.z;
    const pLen = Math.sqrt(pushX * pushX + pushZ * pushZ) || 1;
    mobPos.x += (pushX / pLen) * 0.8;
    mobPos.z += (pushZ / pLen) * 0.8;
    mobPos.y = this.terrain.getHeightAt(mobPos.x, mobPos.z);

    closestMob.state = 'stagger';
    closestMob.staggerTimer = 0.45;

    // Floating text on screen
    this.addFloatingText(
      window.innerWidth / 2 + (Math.random() - 0.5) * 60,
      window.innerHeight / 2 - 100,
      isCrit ? `CRITICAL! -${damage}` : `-${damage}`,
      isCrit ? '#fbbf24' : '#ffffff',
      isCrit
    );

    // Check mob death
    if (closestMob.hp <= 0) {
      closestMob.hp = 0;
      closestMob.state = 'dead';
      closestMob.creature.setDead();

      // Award XP
      const { leveledUp, newLevel } = RpgSystem.addXp(playerStats, closestMob.xpReward);

      // Emit quest kill events
      if (closestMob.id.includes('pasture_wolves') || closestMob.id.includes('wolf')) {
        this.bus.emit('kill:wolves_pasture');
        this.bus.emit('kill:wolf');
      } else if (closestMob.id.includes('saiga')) {
        this.bus.emit('kill:old_saiga');
      } else if (closestMob.id.includes('shapeshifter')) {
        this.bus.emit('kill:shapeshifter');
      }

      return {
        hit: true,
        mob: closestMob,
        damage,
        isCrit,
        killed: true
      };
    }

    return {
      hit: true,
      mob: closestMob,
      damage,
      isCrit,
      killed: false
    };
  }

  public lootNearbyCorpse(
    playerPos: THREE.Vector3,
    inventory: Record<string, number>
  ): { looted: boolean; items?: string[]; mobName?: string } {
    let closestDead: CombatMob | null = null;
    let minDist = 3.2;

    for (const mob of this.mobs.values()) {
      if (mob.state === 'dead' && !mob.isLooted) {
        const dist = playerPos.distanceTo(mob.creature.group.position);
        if (dist < minDist) {
          minDist = dist;
          closestDead = mob;
        }
      }
    }

    if (!closestDead) return { looted: false };

    closestDead.isLooted = true;
    const gainedItems: string[] = [];

    for (const [itemId, count] of Object.entries(closestDead.loot)) {
      inventory[itemId] = (inventory[itemId] || 0) + count;
      const itemDef = ITEM_DATABASE[itemId];
      gainedItems.push(`${itemDef?.name ?? itemId} x${count}`);
    }

    return {
      looted: true,
      items: gainedItems,
      mobName: closestDead.name
    };
  }

  public getNearbyLootableCorpse(playerPos: THREE.Vector3): CombatMob | null {
    for (const mob of this.mobs.values()) {
      if (mob.state === 'dead' && !mob.isLooted) {
        const dist = playerPos.distanceTo(mob.creature.group.position);
        if (dist < 3.2) {
          return mob;
        }
      }
    }
    return null;
  }

  public addFloatingText(x: number, y: number, text: string, color: string, isCrit: boolean): void {
    this.floatingTexts.push({
      x,
      y,
      text,
      color,
      isCrit,
      lifetime: 1.2,
      maxLifetime: 1.2
    });
  }

  private updateFloatingTexts(delta: number): void {
    if (!this.floatingTextContainer) return;

    this.floatingTexts = this.floatingTexts.filter((t) => {
      t.lifetime -= delta;
      t.y -= delta * 35; // float upward
      return t.lifetime > 0;
    });

    let html = '';
    for (const t of this.floatingTexts) {
      const opacity = Math.min(1.0, t.lifetime / (t.maxLifetime * 0.4));
      const scale = t.isCrit ? 1.4 : 1.0;
      html += `
        <div style="
          position: absolute;
          left: ${t.x}px;
          top: ${t.y}px;
          color: ${t.color};
          font-family: 'Cinzel', serif;
          font-size: ${16 * scale}px;
          font-weight: 700;
          text-shadow: 2px 2px 4px #000;
          opacity: ${opacity};
          transform: translate(-50%, -50%);
          pointer-events: none;
        ">${t.text}</div>
      `;
    }
    this.floatingTextContainer.innerHTML = html;
  }

  private updateTargetHud(): void {
    if (!this.targetHudEl) return;

    if (!this.activeTarget || this.activeTarget.state === 'dead') {
      this.targetHudEl.style.display = 'none';
      return;
    }

    const mob = this.activeTarget;
    const hpPercent = Math.max(0, Math.min(100, (mob.hp / mob.maxHp) * 100));

    this.targetHudEl.style.display = 'block';
    this.targetHudEl.innerHTML = `
      <div class="target-card">
        <div class="target-title">
          <span>${mob.name}</span>
          <span class="target-state-badge state-${mob.state}">${mob.state.toUpperCase()}</span>
        </div>
        <div class="target-bar">
          <div class="target-fill" style="width: ${hpPercent}%;"></div>
          <span class="target-hp-label">${mob.hp} / ${mob.maxHp} HP</span>
        </div>
      </div>
    `;
  }
}
