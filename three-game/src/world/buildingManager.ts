import * as THREE from 'three';

export interface EnterableBuilding {
  id: string;
  name: string;
  group: THREE.Group;
  roofGroup: THREE.Group;
  interiorGroup: THREE.Group;
  bounds: {
    minX: number;
    maxX: number;
    minZ: number;
    maxZ: number;
  };
  roofMaterials: THREE.Material[];
  currentRoofOpacity: number;
  targetRoofOpacity: number;
  isPlayerInside: boolean;
}

export class BuildingManager {
  public buildings: Map<string, EnterableBuilding> = new Map();
  public onBuildingStateChange?: (buildingId: string, isInside: boolean, buildingName: string) => void;

  public registerBuilding(building: EnterableBuilding): void {
    // Ensure all roof materials have transparent flag enabled
    building.roofMaterials.forEach((mat) => {
      mat.transparent = true;
      mat.depthWrite = true;
    });

    this.buildings.set(building.id, building);
  }

  public update(delta: number, playerPos: THREE.Vector3): void {
    for (const building of this.buildings.values()) {
      const b = building.bounds;
      const isInside =
        playerPos.x >= b.minX &&
        playerPos.x <= b.maxX &&
        playerPos.z >= b.minZ &&
        playerPos.z <= b.maxZ;

      if (isInside !== building.isPlayerInside) {
        building.isPlayerInside = isInside;
        building.targetRoofOpacity = isInside ? 0.0 : 1.0;

        if (this.onBuildingStateChange) {
          this.onBuildingStateChange(building.id, isInside, building.name);
        }
      }

      // Smooth opacity interpolation (Fallout / CRPG style roof transition)
      if (Math.abs(building.currentRoofOpacity - building.targetRoofOpacity) > 0.005) {
        building.currentRoofOpacity = THREE.MathUtils.lerp(
          building.currentRoofOpacity,
          building.targetRoofOpacity,
          Math.min(1.0, delta * 8.5)
        );

        building.roofMaterials.forEach((mat) => {
          mat.opacity = building.currentRoofOpacity;
        });

        // Hide completely when faded to 0 to eliminate shadows & occlusions
        building.roofGroup.visible = building.currentRoofOpacity > 0.02;
      }
    }
  }

  public isInsideAnyBuilding(playerPos: THREE.Vector3): boolean {
    for (const b of this.buildings.values()) {
      if (
        playerPos.x >= b.bounds.minX &&
        playerPos.x <= b.bounds.maxX &&
        playerPos.z >= b.bounds.minZ &&
        playerPos.z <= b.bounds.maxZ
      ) {
        return true;
      }
    }
    return false;
  }
}
