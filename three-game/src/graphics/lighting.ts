import * as THREE from 'three';

export class DayNightLighting {
  public scene: THREE.Scene;
  public sunLight: THREE.DirectionalLight;
  public ambientLight: THREE.AmbientLight;
  public hemiLight: THREE.HemisphereLight;
  public pointLights: { light: THREE.PointLight; baseIntensity: number; flicker: boolean }[] = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Hemisphere light for soft sky/ground bounce
    this.hemiLight = new THREE.HemisphereLight(0xffeedd, 0x5a6350, 0.7);
    this.scene.add(this.hemiLight);

    // Ambient light
    this.ambientLight = new THREE.AmbientLight(0xffeedd, 0.3);
    this.scene.add(this.ambientLight);

    // Directional Sun/Moon with high-res soft shadow map
    this.sunLight = new THREE.DirectionalLight(0xfff7e8, 1.4);
    this.sunLight.position.set(45, 65, 35);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 180;
    this.sunLight.shadow.camera.left = -45;
    this.sunLight.shadow.camera.right = 45;
    this.sunLight.shadow.camera.top = 45;
    this.sunLight.shadow.camera.bottom = -45;
    this.sunLight.shadow.bias = -0.0005;
    this.sunLight.shadow.radius = 2.5; // Soft shadow filter
    this.scene.add(this.sunLight);
  }

  public addCampfireLight(position: THREE.Vector3): THREE.PointLight {
    const light = new THREE.PointLight(0xff6611, 3.5, 18, 1.4);
    light.position.copy(position);
    light.position.y += 0.7;
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 512;
    light.shadow.mapSize.height = 512;
    this.scene.add(light);

    this.pointLights.push({ light, baseIntensity: 3.5, flicker: true });
    return light;
  }

  public addTorchLight(position: THREE.Vector3): THREE.PointLight {
    const light = new THREE.PointLight(0xff8822, 2.2, 14, 1.6);
    light.position.copy(position);
    this.scene.add(light);

    this.pointLights.push({ light, baseIntensity: 2.2, flicker: true });
    return light;
  }

  public update(timeMinutes: number, delta: number): void {
    const normalizedTime = (timeMinutes % 1440) / 1440;

    // Organic flickering for torches and campfires
    for (const pl of this.pointLights) {
      if (pl.flicker) {
        const noise = (Math.random() - 0.5) * 0.5;
        pl.light.intensity = pl.baseIntensity + noise;
      }
    }

    if (normalizedTime >= 0.25 && normalizedTime < 0.35) {
      // Dawn (06:00 - 08:24)
      const t = (normalizedTime - 0.25) / 0.10;
      this.sunLight.color.setRGB(1.0, 0.75 + t * 0.2, 0.55 + t * 0.4);
      this.sunLight.intensity = 0.5 + t * 0.9;
      this.hemiLight.color.setRGB(0.9 + t * 0.1, 0.7 + t * 0.25, 0.6 + t * 0.35);
      this.hemiLight.intensity = 0.4 + t * 0.3;
    } else if (normalizedTime >= 0.35 && normalizedTime < 0.70) {
      // Day (08:24 - 16:48)
      this.sunLight.color.setRGB(1.0, 0.97, 0.92);
      this.sunLight.intensity = 1.4;
      this.hemiLight.color.setRGB(1.0, 0.95, 0.9);
      this.hemiLight.intensity = 0.7;
    } else if (normalizedTime >= 0.70 && normalizedTime < 0.82) {
      // Dusk (16:48 - 19:40)
      const t = (normalizedTime - 0.70) / 0.12;
      this.sunLight.color.setRGB(1.0 - t * 0.4, 0.85 - t * 0.5, 0.75 - t * 0.55);
      this.sunLight.intensity = 1.4 - t * 1.0;
      this.hemiLight.color.setRGB(0.9 - t * 0.6, 0.7 - t * 0.5, 0.6 - t * 0.4);
      this.hemiLight.intensity = 0.7 - t * 0.4;
    } else {
      // Night (19:40 - 06:00)
      this.sunLight.color.setRGB(0.35, 0.4, 0.7); // Cool Moonlight
      this.sunLight.intensity = 0.35;
      this.hemiLight.color.setRGB(0.15, 0.18, 0.32); // Dark Blue sky/ground
      this.hemiLight.intensity = 0.3;
    }
  }
}
