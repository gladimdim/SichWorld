import * as THREE from 'three';

export class IsometricCamera {
  public camera: THREE.OrthographicCamera;
  public zoom: number = 11.5; // Frustum vertical half-height in world units (zoomed in for close Gothic/CRPG detail)
  public targetZoom: number = 11.5;
  public minZoom: number = 6.0;
  public maxZoom: number = 22.0;
  private aspect: number = 16 / 9;
  public target: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
  private cameraDistance: number = 70;

  // Fixed true isometric orientation (locked - cannot be rotated by user)
  public static readonly PITCH_ANGLE = Math.atan(1 / Math.SQRT2); // ~35.264 deg
  public static readonly YAW_ANGLE = Math.PI / 4; // 45 deg

  constructor(aspect: number = 16 / 9) {
    this.aspect = aspect;
    const h = this.zoom;
    const w = this.zoom * this.aspect;

    this.camera = new THREE.OrthographicCamera(-w, w, h, -h, 0.1, 500);
    this.updatePosition();

    // Event listeners if running in browser DOM
    if (typeof window !== 'undefined') {
      // Smooth zoom with mouse wheel (locked to safe bounds, never rotates)
      window.addEventListener(
        'wheel',
        (e) => {
          const delta = Math.sign(e.deltaY) * 1.0;
          this.setTargetZoom(this.targetZoom + delta);
        },
        { passive: true }
      );

      // Keyboard zoom controls (+/- or [/])
      window.addEventListener('keydown', (e) => {
        if (e.key === '=' || e.key === '+' || e.key === '[' || e.code === 'BracketLeft') {
          this.setTargetZoom(this.targetZoom - 1.2);
        } else if (e.key === '-' || e.key === '_' || e.key === ']' || e.code === 'BracketRight') {
          this.setTargetZoom(this.targetZoom + 1.2);
        }
      });
    }
  }

  public setAspect(aspect: number): void {
    this.aspect = aspect;
    this.updateFrustum();
  }

  public setTargetZoom(zoom: number): void {
    this.targetZoom = Math.max(this.minZoom, Math.min(this.maxZoom, zoom));
  }

  public setZoom(zoom: number): void {
    this.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, zoom));
    this.targetZoom = this.zoom;
    this.updateFrustum();
  }

  private updateFrustum(): void {
    const h = this.zoom;
    const w = this.zoom * this.aspect;
    this.camera.left = -w;
    this.camera.right = w;
    this.camera.top = h;
    this.camera.bottom = -h;
    this.camera.updateProjectionMatrix();
  }

  public followTarget(targetPos: THREE.Vector3, lerpFactor: number = 0.08): void {
    this.target.lerp(targetPos, lerpFactor);

    // Smoothly animate zoom toward targetZoom
    if (Math.abs(this.zoom - this.targetZoom) > 0.005) {
      this.zoom = THREE.MathUtils.lerp(this.zoom, this.targetZoom, 0.14);
      this.updateFrustum();
    }

    this.updatePosition();
  }

  public snapToTarget(targetPos: THREE.Vector3): void {
    this.target.copy(targetPos);
    this.updatePosition();
  }

  private updatePosition(): void {
    // Strictly locked isometric vector from target (zero user rotation allowed)
    const pitch = IsometricCamera.PITCH_ANGLE;
    const yaw = IsometricCamera.YAW_ANGLE;

    const offsetX = this.cameraDistance * Math.cos(pitch) * Math.sin(yaw);
    const offsetY = this.cameraDistance * Math.sin(pitch);
    const offsetZ = this.cameraDistance * Math.cos(pitch) * Math.cos(yaw);

    this.camera.position.set(
      this.target.x + offsetX,
      this.target.y + offsetY,
      this.target.z + offsetZ
    );

    this.camera.lookAt(this.target);
  }
}
