import * as THREE from 'three';
import { MaterialFactory } from './materials.js';
import { OutpostProps } from './props.js';

export class SteppeTerrain {
  public mesh: THREE.Mesh;
  public group: THREE.Group;
  public waterMesh: THREE.Mesh;
  private width: number = 190;
  private depth: number = 190;
  private segments: number = 100;

  constructor(scene: THREE.Scene) {
    this.group = new THREE.Group();

    // 1. 3D Terrain Heightmap Mesh
    const geo = new THREE.PlaneGeometry(this.width, this.depth, this.segments, this.segments);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const y = this.calculateHeight(x, z);
      pos.setY(i, y);
    }
    geo.computeVertexNormals();

    const groundTex = MaterialFactory.createSteppeGroundTexture();
    const mat = new THREE.MeshStandardMaterial({
      map: groundTex,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: true
    });

    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.receiveShadow = true;
    this.group.add(this.mesh);

    // 2. Translucent Watering Hole in the Eastern Ravine
    const waterGeo = new THREE.PlaneGeometry(28, 36, 16, 16);
    waterGeo.rotateX(-Math.PI / 2);
    const waterMat = MaterialFactory.getWaterMaterial();
    this.waterMesh = new THREE.Mesh(waterGeo, waterMat);
    this.waterMesh.position.set(38, -2.4, 6);
    this.waterMesh.receiveShadow = true;
    this.group.add(this.waterMesh);

    // 3. Scatter Steppe Boulders
    this.spawnBoulders();

    // 4. Scatter Feather Grass Tufts across camp and ravine edges
    this.spawnGrassTufts();

    scene.add(this.group);
  }

  private spawnBoulders(): void {
    const rockMat = new THREE.MeshStandardMaterial({
      map: MaterialFactory.createRockTexture(),
      roughness: 0.85,
      flatShading: true
    });
    const rockGeo = new THREE.DodecahedronGeometry(1.0, 1);

    const spots = [
      [34, 16, 1.8],
      [44, -2, 2.4],
      [48, 22, 1.6],
      [32, -24, 2.0],
      [28, -6, 1.4],
      [-32, -18, 1.6],
      [-26, -28, 2.5],
      [-16, 26, 1.5]
    ];

    for (const [x, z, scale] of spots) {
      const rock = new THREE.Mesh(rockGeo, rockMat);
      const y = this.calculateHeight(x, z);
      rock.position.set(x, y + (scale * 0.35), z);
      rock.scale.set(scale * 1.3, scale * 0.75, scale * 1.0);
      rock.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * 0.5);
      rock.castShadow = true;
      rock.receiveShadow = true;
      this.group.add(rock);
    }
  }

  private spawnGrassTufts(): void {
    const tuftCount = 45;
    for (let i = 0; i < tuftCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 5 + Math.random() * 40;
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist;

      // Don't spawn inside campfire or main kurin
      if (Math.abs(x) < 4 && Math.abs(z) < 4) continue;

      const tuft = OutpostProps.createGrassTuft();
      const y = this.calculateHeight(x, z);
      tuft.position.set(x, y, z);
      tuft.rotation.y = Math.random() * Math.PI * 2;
      const scale = 0.8 + Math.random() * 0.5;
      tuft.scale.set(scale, scale, scale);
      this.group.add(tuft);
    }
  }

  public calculateHeight(x: number, z: number): number {
    let h = 0;

    // Northern elevated ridge
    if (z < -25) {
      const dist = Math.min(1, (-25 - z) / 20);
      h += dist * 3.6;
    }

    // Eastern dry ravine with watering hole
    if (x > 25) {
      const dist = Math.min(1, (x - 25) / 14);
      h -= dist * 3.0;
      h += Math.sin(z * 0.18) * 0.45;
    }

    // Gentle steppe rolling terrain
    h += Math.sin(x * 0.07) * Math.cos(z * 0.07) * 0.7;

    // Flatten center camp area
    const distFromCamp = Math.sqrt(x * x + z * z);
    if (distFromCamp < 24) {
      const flattenFactor = distFromCamp / 24;
      h *= flattenFactor;
    }

    return h;
  }

  public getHeightAt(x: number, z: number): number {
    return this.calculateHeight(x, z);
  }

  public update(time: number): void {
    // Subtle water ripple animation
    const pos = this.waterMesh.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const wave = Math.sin(time * 2.0 + u * 0.5 + v * 0.4) * 0.04;
      pos.setZ(i, wave);
    }
    pos.needsUpdate = true;
  }
}
