import * as THREE from 'three';

export interface BoxCollider {
  type: 'box';
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

export interface CircleCollider {
  type: 'circle';
  x: number;
  z: number;
  radius: number;
}

export type Collider = BoxCollider | CircleCollider;

export class CollisionSystem {
  private colliders: Collider[] = [];

  public addBox(minX: number, maxX: number, minZ: number, maxZ: number): void {
    this.colliders.push({
      type: 'box',
      minX: Math.min(minX, maxX),
      maxX: Math.max(minX, maxX),
      minZ: Math.min(minZ, maxZ),
      maxZ: Math.max(minZ, maxZ)
    });
  }

  public addCircle(x: number, z: number, radius: number): void {
    this.colliders.push({
      type: 'circle',
      x,
      z,
      radius
    });
  }

  /**
   * Resolves proposed movement with smooth wall-sliding.
   * Returns corrected [newX, newZ].
   */
  public resolveMovement(
    currentX: number,
    currentZ: number,
    dx: number,
    dz: number,
    bodyRadius: number = 0.45
  ): { x: number; z: number } {
    let targetX = currentX + dx;
    let targetZ = currentZ + dz;

    // Iterate collision resolution passes to handle corners
    for (let pass = 0; pass < 2; pass++) {
      for (const col of this.colliders) {
        if (col.type === 'circle') {
          const toX = targetX - col.x;
          const toZ = targetZ - col.z;
          const distSq = toX * toX + toZ * toZ;
          const minDist = bodyRadius + col.radius;

          if (distSq < minDist * minDist) {
            const dist = Math.sqrt(distSq);
            if (dist > 0.0001) {
              const nx = toX / dist;
              const nz = toZ / dist;
              const penetration = minDist - dist;
              targetX += nx * penetration;
              targetZ += nz * penetration;
            } else {
              targetX += minDist;
            }
          }
        } else if (col.type === 'box') {
          // Clamp target point to box bounds to find closest point on AABB
          const closestX = Math.max(col.minX, Math.min(targetX, col.maxX));
          const closestZ = Math.max(col.minZ, Math.min(targetZ, col.maxZ));

          const diffX = targetX - closestX;
          const diffZ = targetZ - closestZ;
          const distSq = diffX * diffX + diffZ * diffZ;

          if (distSq < bodyRadius * bodyRadius) {
            const dist = Math.sqrt(distSq);
            if (dist > 0.0001) {
              const nx = diffX / dist;
              const nz = diffZ / dist;
              const penetration = bodyRadius - dist;
              targetX += nx * penetration;
              targetZ += nz * penetration;
            } else {
              // Deep inside box: push out along shortest axis
              const dMinX = Math.abs(targetX - col.minX);
              const dMaxX = Math.abs(col.maxX - targetX);
              const dMinZ = Math.abs(targetZ - col.minZ);
              const dMaxZ = Math.abs(col.maxZ - targetZ);
              const minD = Math.min(dMinX, dMaxX, dMinZ, dMaxZ);

              if (minD === dMinX) targetX = col.minX - bodyRadius;
              else if (minD === dMaxX) targetX = col.maxX + bodyRadius;
              else if (minD === dMinZ) targetZ = col.minZ - bodyRadius;
              else targetZ = col.maxZ + bodyRadius;
            }
          }
        }
      }
    }

    // World boundaries clamping (180x180 map)
    targetX = Math.max(-85, Math.min(85, targetX));
    targetZ = Math.max(-85, Math.min(85, targetZ));

    return { x: targetX, z: targetZ };
  }
}
