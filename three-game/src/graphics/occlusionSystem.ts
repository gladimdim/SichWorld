import * as THREE from 'three';

export interface OccludableEntry {
  group?: THREE.Group;
  meshes: THREE.Mesh[];
  materials: THREE.Material[];
  currentOpacity: number;
  targetOpacity: number;
  isOccluding: boolean;
}

export class OcclusionSystem {
  private entries: OccludableEntry[] = [];
  private meshToEntry: Map<THREE.Mesh, OccludableEntry> = new Map();
  private allMeshes: THREE.Mesh[] = [];

  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private sampleOffsets: THREE.Vector3[] = [
    new THREE.Vector3(0, 1.1, 0),    // Torso center
    new THREE.Vector3(0, 1.75, 0),   // Head
    new THREE.Vector3(-0.45, 1.2, 0.45), // Left flank
    new THREE.Vector3(0.45, 1.2, -0.45), // Right flank
    new THREE.Vector3(0, 0.4, 0)     // Feet/legs
  ];

  /**
   * Registers a group (such as a Tree, Palisade segment, or Boulder) for Fallout-style
   * translucency when occluding the player character.
   */
  public registerGroup(group: THREE.Group): void {
    const meshes: THREE.Mesh[] = [];
    const materials: Set<THREE.Material> = new Set();

    group.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        meshes.push(mesh);

        // Clone material so fading this object does not affect others sharing the same material
        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map((m) => {
            const clone = m.clone();
            clone.transparent = true;
            materials.add(clone);
            return clone;
          });
        } else if (mesh.material) {
          const clone = mesh.material.clone();
          clone.transparent = true;
          mesh.material = clone;
          materials.add(clone);
        }
      }
    });

    if (meshes.length === 0) return;

    const entry: OccludableEntry = {
      group,
      meshes,
      materials: Array.from(materials),
      currentOpacity: 1.0,
      targetOpacity: 1.0,
      isOccluding: false
    };

    this.entries.push(entry);
    for (const m of meshes) {
      this.meshToEntry.set(m, entry);
      this.allMeshes.push(m);
    }
  }

  /**
   * Updates occlusion rays from player towards the camera and smoothly fades blocking objects
   */
  public update(delta: number, playerPos: THREE.Vector3, camera: THREE.Camera): void {
    // 1. Reset all entries' occlusion flags
    for (const entry of this.entries) {
      entry.isOccluding = false;
    }

    // 2. Vector from player towards camera
    const rayDir = new THREE.Vector3().subVectors(camera.position, playerPos).normalize();

    // 3. Multi-point raycast from player towards camera
    const rayOrigin = new THREE.Vector3();
    for (const offset of this.sampleOffsets) {
      rayOrigin.copy(playerPos).add(offset);
      this.raycaster.set(rayOrigin, rayDir);
      this.raycaster.far = 120.0;

      const hits = this.raycaster.intersectObjects(this.allMeshes, false);

      for (const hit of hits) {
        // Only consider hits that are distinctly in front of the player along the view line
        if (hit.distance > 0.4) {
          const entry = this.meshToEntry.get(hit.object as THREE.Mesh);
          if (entry) {
            entry.isOccluding = true;
          }
        }
      }
    }

    // 4. Smoothly interpolate opacity towards target (0.20 when occluding, 1.0 when clear)
    const lerpSpeed = Math.min(1.0, delta * 9.5);

    for (const entry of this.entries) {
      entry.targetOpacity = entry.isOccluding ? 0.20 : 1.0;

      if (Math.abs(entry.currentOpacity - entry.targetOpacity) > 0.005) {
        entry.currentOpacity = THREE.MathUtils.lerp(
          entry.currentOpacity,
          entry.targetOpacity,
          lerpSpeed
        );

        for (const mat of entry.materials) {
          mat.opacity = entry.currentOpacity;
        }

        // Performance & shadow cleanup: hide if near zero
        const isVisible = entry.currentOpacity > 0.03;
        for (const m of entry.meshes) {
          m.visible = isVisible;
        }
      }
    }
  }
}
