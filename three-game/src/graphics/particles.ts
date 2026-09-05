import * as THREE from 'three';

export class AtmosphericParticles {
  private scene: THREE.Scene;
  private campfireEmbers: THREE.Points;
  private emberPositions: Float32Array;
  private emberVelocities: Float32Array;
  private emberLifes: Float32Array;
  private emberCount: number = 80;

  private ambientMotes: THREE.Points;
  private motePositions: Float32Array;
  private moteCount: number = 200;

  constructor(scene: THREE.Scene, campfirePos: THREE.Vector3) {
    this.scene = scene;

    // 1. Campfire Embers Particle System
    const emberGeo = new THREE.BufferGeometry();
    this.emberPositions = new Float32Array(this.emberCount * 3);
    this.emberVelocities = new Float32Array(this.emberCount * 3);
    this.emberLifes = new Float32Array(this.emberCount);

    for (let i = 0; i < this.emberCount; i++) {
      this.resetEmber(i, campfirePos);
      this.emberLifes[i] = Math.random(); // staggered starts
    }

    emberGeo.setAttribute('position', new THREE.BufferAttribute(this.emberPositions, 3));

    // Glow dot texture
    const emberCanvas = document.createElement('canvas');
    emberCanvas.width = 16;
    emberCanvas.height = 16;
    const eCtx = emberCanvas.getContext('2d')!;
    const eGrad = eCtx.createRadialGradient(8, 8, 1, 8, 8, 8);
    eGrad.addColorStop(0, 'rgba(255, 180, 50, 1)');
    eGrad.addColorStop(0.4, 'rgba(255, 70, 0, 0.8)');
    eGrad.addColorStop(1, 'rgba(255, 0, 0, 0)');
    eCtx.fillStyle = eGrad;
    eCtx.fillRect(0, 0, 16, 16);

    const emberTex = new THREE.CanvasTexture(emberCanvas);

    const emberMat = new THREE.PointsMaterial({
      size: 0.35,
      map: emberTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.campfireEmbers = new THREE.Points(emberGeo, emberMat);
    this.scene.add(this.campfireEmbers);

    // 2. Ambient Steppe Motes / Dust Floating in Air
    const moteGeo = new THREE.BufferGeometry();
    this.motePositions = new Float32Array(this.moteCount * 3);

    for (let i = 0; i < this.moteCount; i++) {
      this.motePositions[i * 3 + 0] = (Math.random() - 0.5) * 60;
      this.motePositions[i * 3 + 1] = Math.random() * 8 + 0.5;
      this.motePositions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }

    moteGeo.setAttribute('position', new THREE.BufferAttribute(this.motePositions, 3));

    const moteCanvas = document.createElement('canvas');
    moteCanvas.width = 16;
    moteCanvas.height = 16;
    const mCtx = moteCanvas.getContext('2d')!;
    const mGrad = mCtx.createRadialGradient(8, 8, 1, 8, 8, 8);
    mGrad.addColorStop(0, 'rgba(255, 240, 200, 0.8)');
    mGrad.addColorStop(1, 'rgba(255, 240, 200, 0)');
    mCtx.fillStyle = mGrad;
    mCtx.fillRect(0, 0, 16, 16);

    const moteTex = new THREE.CanvasTexture(moteCanvas);

    const moteMat = new THREE.PointsMaterial({
      size: 0.2,
      map: moteTex,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.ambientMotes = new THREE.Points(moteGeo, moteMat);
    this.scene.add(this.ambientMotes);
  }

  private resetEmber(i: number, origin: THREE.Vector3): void {
    const idx = i * 3;
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 0.4;
    this.emberPositions[idx + 0] = origin.x + Math.cos(angle) * radius;
    this.emberPositions[idx + 1] = origin.y + 0.3 + Math.random() * 0.2;
    this.emberPositions[idx + 2] = origin.z + Math.sin(angle) * radius;

    this.emberVelocities[idx + 0] = (Math.random() - 0.5) * 0.4;
    this.emberVelocities[idx + 1] = 1.2 + Math.random() * 1.4; // float upwards
    this.emberVelocities[idx + 2] = (Math.random() - 0.5) * 0.4;

    this.emberLifes[i] = 1.0;
  }

  public update(delta: number, campfirePos: THREE.Vector3, timeMinutes: number): void {
    // 1. Update campfire embers
    const posAttr = this.campfireEmbers.geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < this.emberCount; i++) {
      const idx = i * 3;
      this.emberLifes[i] -= delta * 0.65;

      if (this.emberLifes[i] <= 0) {
        this.resetEmber(i, campfirePos);
      } else {
        // Turbulent sway
        this.emberPositions[idx + 0] += (this.emberVelocities[idx + 0] + Math.sin(Date.now() * 0.003 + i) * 0.3) * delta;
        this.emberPositions[idx + 1] += this.emberVelocities[idx + 1] * delta;
        this.emberPositions[idx + 2] += (this.emberVelocities[idx + 2] + Math.cos(Date.now() * 0.003 + i) * 0.3) * delta;
      }
    }
    posAttr.needsUpdate = true;

    // 2. Update ambient motes / fireflies
    const isNight = timeMinutes < 360 || timeMinutes > 1140;
    const motePosAttr = this.ambientMotes.geometry.attributes.position as THREE.BufferAttribute;
    const speed = isNight ? 0.8 : 0.3;

    for (let i = 0; i < this.moteCount; i++) {
      const idx = i * 3;
      this.motePositions[idx + 0] += Math.sin(Date.now() * 0.001 + i) * speed * delta;
      this.motePositions[idx + 1] += Math.cos(Date.now() * 0.0012 + i) * (speed * 0.5) * delta;
      this.motePositions[idx + 2] += Math.sin(Date.now() * 0.0009 + i) * speed * delta;

      // Wrap around bounds
      if (this.motePositions[idx + 1] < 0.2) this.motePositions[idx + 1] = 7.0;
      if (this.motePositions[idx + 1] > 8.0) this.motePositions[idx + 1] = 0.5;
    }
    motePosAttr.needsUpdate = true;

    // Night fireflies glow more greenish-yellow
    const moteMat = this.ambientMotes.material as THREE.PointsMaterial;
    if (isNight) {
      moteMat.color.setRGB(0.7, 1.0, 0.3); // Bioluminescent fireflies
      moteMat.opacity = 0.75;
      moteMat.size = 0.28;
    } else {
      moteMat.color.setRGB(1.0, 0.95, 0.8); // Steppe dust motes
      moteMat.opacity = 0.35;
      moteMat.size = 0.18;
    }
  }
}
