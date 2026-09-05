import * as THREE from 'three';

export interface BillboardOptions {
  texture: THREE.CanvasTexture;
  width?: number;
  height?: number;
  name?: string;
  isInteractable?: boolean;
}

export class BillboardSprite {
  public group: THREE.Group;
  public mesh: THREE.Mesh;
  public material: THREE.MeshLambertMaterial;
  public name: string;
  public isInteractable: boolean;
  private markerMesh?: THREE.Mesh;
  private animTimer: number = 0;
  public isMoving: boolean = false;
  private initialY: number;

  constructor(options: BillboardOptions) {
    this.name = options.name ?? '';
    this.isInteractable = options.isInteractable ?? false;
    const w = options.width ?? 2.0;
    const h = options.height ?? 3.0;

    this.group = new THREE.Group();

    const geo = new THREE.PlaneGeometry(w, h);
    this.material = new THREE.MeshLambertMaterial({
      map: options.texture,
      transparent: true,
      alphaTest: 0.2,
      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.position.y = h / 2;
    this.mesh.castShadow = true;
    this.initialY = this.mesh.position.y;
    this.group.add(this.mesh);

    // Lock billboard to isometric pitch angle
    this.mesh.rotation.x = -Math.atan(1 / Math.SQRT2);
    this.mesh.rotation.y = Math.PI / 4;
  }

  public setMarker(kind: 'quest_available' | 'quest_turnin' | 'none'): void {
    if (this.markerMesh) {
      this.group.remove(this.markerMesh);
      this.markerMesh = undefined;
    }

    if (kind === 'none') return;

    const size = 16;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (kind === 'quest_available') {
      ctx.fillStyle = '#ffcc00';
      ctx.fillText('!', size / 2, size / 2);
    } else {
      ctx.fillStyle = '#ffaa00';
      ctx.fillText('?', size / 2, size / 2);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;

    const markerGeo = new THREE.PlaneGeometry(0.8, 0.8);
    const markerMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true });
    this.markerMesh = new THREE.Mesh(markerGeo, markerMat);
    this.markerMesh.position.y = 3.6;
    this.markerMesh.rotation.x = -Math.atan(1 / Math.SQRT2);
    this.markerMesh.rotation.y = Math.PI / 4;
    this.group.add(this.markerMesh);
  }

  public update(delta: number): void {
    if (this.markerMesh) {
      this.markerMesh.position.y = 3.6 + Math.sin(Date.now() * 0.005) * 0.15;
    }

    if (this.isMoving) {
      this.animTimer += delta * 12;
      this.mesh.position.y = this.initialY + Math.abs(Math.sin(this.animTimer)) * 0.15;
    } else {
      this.mesh.position.y = this.initialY;
    }
  }

  public setFacing(directionX: number): void {
    if (directionX < -0.05) {
      this.mesh.scale.x = -1; // Flip horizontally
    } else if (directionX > 0.05) {
      this.mesh.scale.x = 1;
    }
  }
}
