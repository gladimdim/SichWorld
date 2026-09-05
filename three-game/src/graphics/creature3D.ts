import * as THREE from 'three';

export type CreatureKind = 'wolf' | 'saiga' | 'shapeshifter' | 'sheep' | 'rabbit';

export class Creature3D {
  public group: THREE.Group;
  public visualGroup: THREE.Group;
  public kind: CreatureKind;
  public name: string;

  private body!: THREE.Mesh;
  private head!: THREE.Group;
  private legs: THREE.Group[] = [];
  private tail?: THREE.Group;
  private animTime: number = 0;
  public isGrazing: boolean = false;
  public isHopping: boolean = false;
  public isDead: boolean = false;
  private flashTimer: number = 0;
  private origMats: Map<THREE.Mesh, THREE.Material | THREE.Material[]> = new Map();

  constructor(kind: CreatureKind, name?: string) {
    this.kind = kind;
    this.name = name ?? (
      kind === 'wolf' ? 'Steppe Wolf' :
      kind === 'saiga' ? 'Old Saiga' :
      kind === 'sheep' ? 'Steppe Sheep' :
      kind === 'rabbit' ? 'Steppe Hare' : 'Shapeshifter'
    );

    this.group = new THREE.Group();
    this.visualGroup = new THREE.Group();
    this.group.add(this.visualGroup);

    if (kind === 'wolf') {
      this.buildWolf();
    } else if (kind === 'saiga') {
      this.buildSaiga();
    } else if (kind === 'sheep') {
      this.buildSheep();
    } else if (kind === 'rabbit') {
      this.buildRabbit();
    } else {
      this.buildShapeshifter();
    }
  }

  private buildWolf(): void {
    const furDark = new THREE.MeshStandardMaterial({ color: 0x48423b, roughness: 0.85 });
    const furLight = new THREE.MeshStandardMaterial({ color: 0x6e655c, roughness: 0.85 });
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xffcc00,
      emissive: 0xaa7700,
      emissiveIntensity: 0.5
    });

    // Anatomical body (ribcage + haunches)
    const ribGeo = new THREE.CylinderGeometry(0.32, 0.28, 0.7, 8);
    ribGeo.rotateX(Math.PI / 2);
    this.body = new THREE.Mesh(ribGeo, furDark);
    this.body.position.y = 0.7;
    this.body.castShadow = true;
    this.visualGroup.add(this.body);

    const haunchGeo = new THREE.SphereGeometry(0.28, 8, 8);
    haunchGeo.scale(0.9, 1.1, 1.2);
    const haunches = new THREE.Mesh(haunchGeo, furDark);
    haunches.position.set(0, 0.02, -0.38);
    this.body.add(haunches);

    // Fluffy neck ruff & mane
    const maneGeo = new THREE.ConeGeometry(0.42, 0.5, 7);
    maneGeo.rotateX(Math.PI / 3);
    const mane = new THREE.Mesh(maneGeo, furLight);
    mane.position.set(0, 0.24, 0.38);
    this.body.add(mane);

    // Head Group
    this.head = new THREE.Group();
    this.head.position.set(0, 0.42, 0.58);

    const skullGeo = new THREE.BoxGeometry(0.3, 0.28, 0.32);
    const skull = new THREE.Mesh(skullGeo, furDark);
    skull.castShadow = true;
    this.head.add(skull);

    // Snout with nostrils & fangs
    const snoutGeo = new THREE.CylinderGeometry(0.1, 0.16, 0.32, 6);
    snoutGeo.rotateX(Math.PI / 2);
    const snout = new THREE.Mesh(snoutGeo, furDark);
    snout.position.set(0, -0.05, 0.26);
    this.head.add(snout);

    // Glowing predator amber eyes
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), eyeMat);
    eyeL.position.set(-0.1, 0.06, 0.16);
    this.head.add(eyeL);

    const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), eyeMat);
    eyeR.position.set(0.1, 0.06, 0.16);
    this.head.add(eyeR);

    // Pointed ears with inner pink/light fur
    const earGeo = new THREE.ConeGeometry(0.07, 0.22, 4);
    const earL = new THREE.Mesh(earGeo, furDark);
    earL.position.set(-0.11, 0.2, -0.04);
    earL.rotation.z = -0.15;
    this.head.add(earL);

    const earR = new THREE.Mesh(earGeo, furDark);
    earR.position.set(0.11, 0.2, -0.04);
    earR.rotation.z = 0.15;
    this.head.add(earR);

    this.body.add(this.head);

    // 4 Articulated jointed legs with paws
    const legUpperGeo = new THREE.CylinderGeometry(0.09, 0.07, 0.35, 6);
    const legLowerGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.35, 6);
    const pawGeo = new THREE.BoxGeometry(0.1, 0.06, 0.15);

    const legOffsets = [
      [-0.2, 0.48, 0.32],
      [0.2, 0.48, 0.32],
      [-0.2, 0.48, -0.38],
      [0.2, 0.48, -0.38]
    ];

    for (const [x, y, z] of legOffsets) {
      const legRoot = new THREE.Group();
      legRoot.position.set(x, y, z);

      const upper = new THREE.Mesh(legUpperGeo, furDark);
      upper.position.y = -0.16;
      upper.castShadow = true;
      legRoot.add(upper);

      const lower = new THREE.Mesh(legLowerGeo, furDark);
      lower.position.y = -0.42;
      lower.castShadow = true;
      legRoot.add(lower);

      const paw = new THREE.Mesh(pawGeo, furDark);
      paw.position.set(0, -0.58, 0.04);
      legRoot.add(paw);

      this.visualGroup.add(legRoot);
      this.legs.push(legRoot);
    }

    // Bushy Tail
    this.tail = new THREE.Group();
    this.tail.position.set(0, 0.15, -0.55);
    const tailGeo = new THREE.CylinderGeometry(0.05, 0.12, 0.5, 6);
    tailGeo.rotateX(-Math.PI / 3.5);
    const tailMesh = new THREE.Mesh(tailGeo, furLight);
    tailMesh.position.set(0, -0.18, -0.18);
    this.tail.add(tailMesh);
    this.body.add(this.tail);
  }

  private buildSaiga(): void {
    const coatMat = new THREE.MeshStandardMaterial({ color: 0xc4a478, roughness: 0.75 });
    const bellyMat = new THREE.MeshStandardMaterial({ color: 0xe8dfd1, roughness: 0.75 });
    const hornMat = new THREE.MeshStandardMaterial({
      color: 0xf5eedc,
      roughness: 0.35,
      metalness: 0.15
    });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x2e2319, roughness: 0.8 });

    // Slender body
    const bodyGeo = new THREE.CylinderGeometry(0.28, 0.25, 0.9, 8);
    bodyGeo.rotateX(Math.PI / 2);
    this.body = new THREE.Mesh(bodyGeo, coatMat);
    this.body.position.y = 0.9;
    this.body.castShadow = true;
    this.visualGroup.add(this.body);

    const belly = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.2, 0.7), bellyMat);
    belly.position.y = -0.15;
    this.body.add(belly);

    // Slender neck
    const neckGeo = new THREE.CylinderGeometry(0.14, 0.18, 0.55, 6);
    neckGeo.rotateX(Math.PI / 3.5);
    const neck = new THREE.Mesh(neckGeo, coatMat);
    neck.position.set(0, 0.32, 0.45);
    this.body.add(neck);

    // Head
    this.head = new THREE.Group();
    this.head.position.set(0, 0.58, 0.7);

    const headBase = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.26, 0.3), coatMat);
    this.head.add(headBase);

    // Famous bulbous downward curved snout
    const bulbousNose = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), darkMat);
    bulbousNose.scale.set(0.85, 1.2, 1.3);
    bulbousNose.position.set(0, -0.12, 0.22);
    this.head.add(bulbousNose);

    // Large lyre-shaped spiraled horns with ribbed tiers
    for (let side = -1; side <= 1; side += 2) {
      const hornRoot = new THREE.Group();
      hornRoot.position.set(side * 0.09, 0.22, -0.05);

      const h1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.25, 6), hornMat);
      h1.rotation.x = -0.2;
      h1.rotation.z = side * 0.15;
      h1.position.y = 0.12;
      hornRoot.add(h1);

      const h2 = new THREE.Mesh(new THREE.ConeGeometry(0.038, 0.4, 6), hornMat);
      h2.position.set(side * 0.04, 0.4, -0.06);
      h2.rotation.x = 0.1;
      h2.rotation.z = side * -0.1;
      hornRoot.add(h2);

      this.head.add(hornRoot);
    }

    this.body.add(this.head);

    // 4 Long slender antelope legs with hooves
    const legGeo = new THREE.CylinderGeometry(0.045, 0.035, 0.85, 6);
    const hoofGeo = new THREE.BoxGeometry(0.07, 0.08, 0.1);

    const offsets = [
      [-0.18, 0.65, 0.38],
      [0.18, 0.65, 0.38],
      [-0.18, 0.65, -0.38],
      [0.18, 0.65, -0.38]
    ];

    for (const [x, y, z] of offsets) {
      const legRoot = new THREE.Group();
      legRoot.position.set(x, y, z);

      const leg = new THREE.Mesh(legGeo, coatMat);
      leg.position.y = -0.4;
      leg.castShadow = true;
      legRoot.add(leg);

      const hoof = new THREE.Mesh(hoofGeo, darkMat);
      hoof.position.set(0, -0.82, 0.02);
      legRoot.add(hoof);

      this.visualGroup.add(legRoot);
      this.legs.push(legRoot);
    }
  }

  private buildShapeshifter(): void {
    const beastMat = new THREE.MeshStandardMaterial({
      color: 0x1c1714,
      roughness: 0.9,
      metalness: 0.1
    });
    const spineFurMat = new THREE.MeshStandardMaterial({
      color: 0x332822,
      roughness: 0.95
    });
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0xff0000,
      emissiveIntensity: 1.8
    });
    const fangMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });

    // Hulking hunched muscular torso
    const chestGeo = new THREE.BoxGeometry(1.0, 0.95, 0.8);
    this.body = new THREE.Mesh(chestGeo, beastMat);
    this.body.position.y = 1.45;
    this.body.rotation.x = 0.32; // aggressive hunch
    this.body.castShadow = true;
    this.visualGroup.add(this.body);

    // Spiky jagged spine crest
    for (let i = 0; i < 5; i++) {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.5, 4), spineFurMat);
      spike.position.set(0, 0.28 + i * 0.06, -0.42);
      spike.rotation.x = -Math.PI / 4;
      this.body.add(spike);
    }

    // Demonic wolf skull head
    this.head = new THREE.Group();
    this.head.position.set(0, 0.55, 0.48);

    const skull = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.48, 0.55), beastMat);
    skull.castShadow = true;
    this.head.add(skull);

    // Snout with sharp fangs
    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.26, 0.42), beastMat);
    snout.position.set(0, -0.1, 0.36);
    this.head.add(snout);

    // Glowing Crimson Eyes with point light
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), eyeMat);
    eyeL.position.set(-0.16, 0.1, 0.3);
    this.head.add(eyeL);

    const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), eyeMat);
    eyeR.position.set(0.16, 0.1, 0.3);
    this.head.add(eyeR);

    const eyeGlow = new THREE.PointLight(0xff0000, 1.2, 5, 2.0);
    eyeGlow.position.set(0, 0.1, 0.4);
    this.head.add(eyeGlow);

    // Vicious fangs
    for (const sx of [-0.09, 0.09]) {
      const fang = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.16, 4), fangMat);
      fang.position.set(sx, -0.25, 0.48);
      fang.rotation.x = Math.PI;
      this.head.add(fang);
    }

    this.body.add(this.head);

    // Heavy clawed quadrupedal limbs
    const limbGeo = new THREE.CylinderGeometry(0.16, 0.13, 0.9, 8);
    const clawGeo = new THREE.BoxGeometry(0.24, 0.12, 0.3);

    const offsets = [
      [-0.52, 1.15, 0.35],
      [0.52, 1.15, 0.35],
      [-0.42, 0.95, -0.42],
      [0.42, 0.95, -0.42]
    ];

    for (const [x, y, z] of offsets) {
      const limbRoot = new THREE.Group();
      limbRoot.position.set(x, y, z);

      const limb = new THREE.Mesh(limbGeo, beastMat);
      limb.position.y = -0.45;
      limb.castShadow = true;
      limbRoot.add(limb);

      const claw = new THREE.Mesh(clawGeo, beastMat);
      claw.position.set(0, -0.9, 0.08);
      limbRoot.add(claw);

      this.visualGroup.add(limbRoot);
      this.legs.push(limbRoot);
    }
  }

  private buildSheep(): void {
    const woolMat = new THREE.MeshStandardMaterial({ color: 0xe5dfd3, roughness: 0.95, flatShading: true });
    const faceMat = new THREE.MeshStandardMaterial({ color: 0x2e2722, roughness: 0.8 });

    // Fluffy woolly body
    const bodyGeo = new THREE.SphereGeometry(0.38, 8, 8);
    bodyGeo.scale(1.1, 1.0, 1.4);
    this.body = new THREE.Mesh(bodyGeo, woolMat);
    this.body.position.y = 0.58;
    this.body.castShadow = true;
    this.visualGroup.add(this.body);

    // Head
    this.head = new THREE.Group();
    this.head.position.set(0, 0.28, 0.45);

    const headMesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.28), faceMat);
    this.head.add(headMesh);

    // Floppy ears
    const earGeo = new THREE.BoxGeometry(0.12, 0.04, 0.06);
    const earL = new THREE.Mesh(earGeo, faceMat);
    earL.position.set(-0.14, 0.04, 0);
    earL.rotation.z = -0.3;
    this.head.add(earL);

    const earR = new THREE.Mesh(earGeo, faceMat);
    earR.position.set(0.14, 0.04, 0);
    earR.rotation.z = 0.3;
    this.head.add(earR);

    this.body.add(this.head);

    // 4 short black trotting legs
    const legGeo = new THREE.CylinderGeometry(0.045, 0.04, 0.45, 6);
    const offsets = [
      [-0.18, 0.4, 0.3],
      [0.18, 0.4, 0.3],
      [-0.18, 0.4, -0.3],
      [0.18, 0.4, -0.3]
    ];

    for (const [x, y, z] of offsets) {
      const legRoot = new THREE.Group();
      legRoot.position.set(x, y, z);
      const leg = new THREE.Mesh(legGeo, faceMat);
      leg.position.y = -0.22;
      leg.castShadow = true;
      legRoot.add(leg);
      this.visualGroup.add(legRoot);
      this.legs.push(legRoot);
    }
  }

  private buildRabbit(): void {
    const furMat = new THREE.MeshStandardMaterial({ color: 0x9c8365, roughness: 0.8 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.9 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x221811, roughness: 0.5 });

    // Body
    const bodyGeo = new THREE.SphereGeometry(0.18, 8, 8);
    bodyGeo.scale(0.9, 0.9, 1.3);
    this.body = new THREE.Mesh(bodyGeo, furMat);
    this.body.position.y = 0.22;
    this.body.castShadow = true;
    this.visualGroup.add(this.body);

    // Head
    this.head = new THREE.Group();
    this.head.position.set(0, 0.14, 0.16);
    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.1, 7, 7), furMat);
    this.head.add(headMesh);

    // Long upright ears
    const earGeo = new THREE.BoxGeometry(0.04, 0.2, 0.02);
    const earL = new THREE.Mesh(earGeo, furMat);
    earL.position.set(-0.04, 0.14, -0.02);
    earL.rotation.z = -0.15;
    this.head.add(earL);

    const earR = new THREE.Mesh(earGeo, furMat);
    earR.position.set(0.04, 0.14, -0.02);
    earR.rotation.z = 0.15;
    this.head.add(earR);

    // Eyes
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.02, 5, 5), darkMat);
    eyeL.position.set(-0.07, 0.02, 0.06);
    this.head.add(eyeL);

    const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.02, 5, 5), darkMat);
    eyeR.position.set(0.07, 0.02, 0.06);
    this.head.add(eyeR);

    this.body.add(this.head);

    // Cotton puff tail
    const tail = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), whiteMat);
    tail.position.set(0, 0.05, -0.22);
    this.body.add(tail);

    // Hind legs
    const haunchGeo = new THREE.SphereGeometry(0.08, 6, 6);
    haunchGeo.scale(0.8, 1.2, 1.2);
    for (const sx of [-0.09, 0.09]) {
      const haunch = new THREE.Mesh(haunchGeo, furMat);
      haunch.position.set(sx, 0.14, -0.08);
      haunch.castShadow = true;
      this.visualGroup.add(haunch);
      this.legs.push(haunch as any);
    }
  }

  public setFacingDirection(dx: number, dz: number): void {
    if (this.isDead) return;
    const angle = Math.atan2(dx, dz);
    this.visualGroup.rotation.y = angle;
  }

  public flashHurt(): void {
    this.flashTimer = 0.18;
    const hurtMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
    this.visualGroup.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (!this.origMats.has(mesh)) {
          this.origMats.set(mesh, mesh.material);
        }
        mesh.material = hurtMat;
      }
    });
  }

  public setDead(): void {
    if (this.isDead) return;
    this.isDead = true;
    this.visualGroup.rotation.z = Math.PI / 2;
    this.visualGroup.position.y = -0.3;
    this.visualGroup.position.x = 0.2;
  }

  public update(delta: number): void {
    if (this.flashTimer > 0) {
      this.flashTimer -= delta;
      if (this.flashTimer <= 0) {
        // Restore original materials
        this.origMats.forEach((mat, mesh) => {
          mesh.material = mat;
        });
        this.origMats.clear();
      }
    }

    if (this.isDead) return;

    this.animTime += delta * 7.5;

    if (this.kind === 'sheep') {
      // Grazing idle: head dips to ground occasionally
      const chew = Math.sin(this.animTime * 0.8) * 0.25;
      this.head.rotation.x = 0.4 + chew;
      if (this.isGrazing) {
        const trot = Math.sin(this.animTime * 0.6) * 0.25;
        this.legs[0].rotation.x = trot;
        this.legs[1].rotation.x = -trot;
      }
      return;
    }

    if (this.kind === 'rabbit') {
      // Hopping animation
      if (this.isHopping) {
        const hopProgress = Math.abs(Math.sin(this.animTime * 1.5));
        this.body.position.y = 0.22 + hopProgress * 0.25;
        this.head.rotation.x = -hopProgress * 0.3;
      } else {
        // Idle twitching nose/ears
        this.head.rotation.y = Math.sin(this.animTime * 0.3) * 0.15;
      }
      return;
    }

    // Trotting / prowling limb cycle for quadrupeds (wolf, saiga, shapeshifter)
    if (this.legs.length === 4) {
      const swing = Math.sin(this.animTime) * 0.55;
      this.legs[0].rotation.x = swing;
      this.legs[1].rotation.x = -swing;
      this.legs[2].rotation.x = -swing;
      this.legs[3].rotation.x = swing;
    }

    if (this.tail) {
      this.tail.rotation.y = Math.sin(this.animTime * 0.8) * 0.35;
    }

    if (this.head) {
      this.head.rotation.z = Math.sin(this.animTime * 0.5) * 0.06;
    }
  }
}
