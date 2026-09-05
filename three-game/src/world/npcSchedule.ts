import * as THREE from 'three';
import { Character3D } from '../graphics/character3D.js';
import { CollisionSystem } from './collisionSystem.js';
import { SteppeTerrain } from '../graphics/terrain.js';

export type NpcActivity = 'work' | 'patrol' | 'sit_fire' | 'sleep' | 'stand';

export interface RoutineBlock {
  startMin: number; // 0 - 1440
  endMin: number;   // 0 - 1440
  activity: NpcActivity;
  waypoint: { x: number; z: number };
  facingYaw: number;
  activityDesc: string;
}

export interface NpcSchedule {
  npcId: string;
  blocks: RoutineBlock[];
}

export class NpcScheduleManager {
  private schedules: Map<string, NpcSchedule> = new Map();
  private npcs: Map<string, Character3D> = new Map();
  private collision: CollisionSystem;
  private terrain: SteppeTerrain;
  public walkSpeed: number = 2.4;

  constructor(collision: CollisionSystem, terrain: SteppeTerrain) {
    this.collision = collision;
    this.terrain = terrain;
    this.setupDefaultSchedules();
  }

  public registerNpc(id: string, character: Character3D): void {
    this.npcs.set(id, character);
  }

  private setupDefaultSchedules(): void {
    // 1. Shepherd Taras Chub
    this.schedules.set('taras_chub', {
      npcId: 'taras_chub',
      blocks: [
        {
          startMin: 360, // 06:00
          endMin: 660,   // 11:00
          activity: 'work',
          waypoint: { x: -15, z: 8 },
          facingYaw: 0,
          activityDesc: 'Tending the sheep pen'
        },
        {
          startMin: 660, // 11:00
          endMin: 1080,  // 18:00
          activity: 'patrol',
          waypoint: { x: -18, z: 14 },
          facingYaw: Math.PI / 4,
          activityDesc: 'Inspecting pasture border for wolf tracks'
        },
        {
          startMin: 1080, // 18:00
          endMin: 1350,  // 22:30
          activity: 'sit_fire',
          waypoint: { x: -2.8, z: -2.2 },
          facingYaw: Math.PI / 2,
          activityDesc: 'Warming hands by the campfire'
        },
        {
          startMin: 1350, // 22:30
          endMin: 360,   // 06:00
          activity: 'sleep',
          waypoint: { x: -12, z: 12 },
          facingYaw: Math.PI,
          activityDesc: 'Sleeping in shepherd lean-to'
        }
      ]
    });

    // 2. Bowyer Honta
    this.schedules.set('honta', {
      npcId: 'honta',
      blocks: [
        {
          startMin: 390, // 06:30
          endMin: 720,   // 12:00
          activity: 'work',
          waypoint: { x: 13, z: -9 },
          facingYaw: -Math.PI / 2,
          activityDesc: 'Shaving yew bow staves'
        },
        {
          startMin: 720, // 12:00
          endMin: 1050,  // 17:30
          activity: 'work',
          waypoint: { x: 18, z: -11 },
          facingYaw: 0,
          activityDesc: 'Fletching arrows and testing bowstrings'
        },
        {
          startMin: 1050, // 17:30
          endMin: 1380,  // 23:00
          activity: 'sit_fire',
          waypoint: { x: 2.8, z: -1.8 },
          facingYaw: -Math.PI / 2,
          activityDesc: 'Drinking horilka and telling hunting tales'
        },
        {
          startMin: 1380, // 23:00
          endMin: 390,   // 06:30
          activity: 'sleep',
          waypoint: { x: 16, z: -14 },
          facingYaw: 0,
          activityDesc: 'Sleeping inside workshop'
        }
      ]
    });

    // 3. Kurinnyi Naum Lysenko
    this.schedules.set('naum_lysenko', {
      npcId: 'naum_lysenko',
      blocks: [
        {
          startMin: 420, // 07:00
          endMin: 780,   // 13:00
          activity: 'stand',
          waypoint: { x: -6, z: -11 },
          facingYaw: 0,
          activityDesc: 'Reviewing palanka scouting reports on the porch'
        },
        {
          startMin: 780, // 13:00
          endMin: 1080,  // 18:00
          activity: 'patrol',
          waypoint: { x: -8, z: -22 },
          facingYaw: Math.PI / 3,
          activityDesc: 'Inspecting northern palisade battlements'
        },
        {
          startMin: 1080, // 18:00
          endMin: 1320,  // 22:00
          activity: 'sit_fire',
          waypoint: { x: 0, z: -4.2 },
          facingYaw: 0,
          activityDesc: 'Smoking his lulka pipe by the campfire'
        },
        {
          startMin: 1320, // 22:00
          endMin: 420,   // 07:00
          activity: 'sleep',
          waypoint: { x: -6, z: -16 },
          facingYaw: 0,
          activityDesc: 'Sleeping in headquarters'
        }
      ]
    });
  }

  public update(timeMinutes: number, delta: number, interactingNpcId: string | null): void {
    const currentMin = Math.floor(timeMinutes % 1440);

    for (const [id, character] of this.npcs) {
      // If player is talking to this NPC, stop and face player
      if (interactingNpcId === id) {
        character.isMoving = false;
        continue;
      }

      const schedule = this.schedules.get(id);
      if (!schedule) continue;

      const activeBlock = this.findActiveBlock(schedule, currentMin);
      if (!activeBlock) continue;

      const pos = character.group.position;
      const target = activeBlock.waypoint;
      const dx = target.x - pos.x;
      const dz = target.z - pos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist > 0.45) {
        // Move towards waypoint using collision avoidance
        const step = Math.min(dist, this.walkSpeed * delta);
        const dirX = dx / dist;
        const dirZ = dz / dist;

        const resolved = this.collision.resolveMovement(
          pos.x,
          pos.z,
          dirX * step,
          dirZ * step,
          0.4
        );

        pos.x = resolved.x;
        pos.z = resolved.z;
        pos.y = this.terrain.getHeightAt(pos.x, pos.z);

        character.isMoving = true;
        character.setFacingDirection(dirX, dirZ);
      } else {
        // Arrived at station
        character.isMoving = false;
        character.setFacingDirection(
          Math.sin(activeBlock.facingYaw),
          Math.cos(activeBlock.facingYaw)
        );
      }
    }
  }

  private findActiveBlock(schedule: NpcSchedule, currentMin: number): RoutineBlock | null {
    for (const b of schedule.blocks) {
      if (b.startMin < b.endMin) {
        if (currentMin >= b.startMin && currentMin < b.endMin) return b;
      } else {
        // Over midnight boundary (e.g. 22:00 to 06:00)
        if (currentMin >= b.startMin || currentMin < b.endMin) return b;
      }
    }
    return schedule.blocks[0] ?? null;
  }
}
