import * as THREE from 'three';
import { MaterialFactory } from './materials.js';

export type CharacterRole = 'player' | 'naum' | 'taras' | 'honta' | 'hryts';

export interface Character3DOptions {
  role: CharacterRole;
  name: string;
  isInteractable?: boolean;
}

export class Character3D {
  public group: THREE.Group;
  public visualGroup: THREE.Group;
  public name: string;
  public isInteractable: boolean;

  // Hierarchical skeletal parts for procedural animation
  private pelvis: THREE.Group;
  private torso: THREE.Mesh;
  private headGroup: THREE.Group;
  private oseledetsLock?: THREE.Group;
  private leftArmGroup: THREE.Group;
  private rightArmGroup: THREE.Group;
  private leftLegGroup: THREE.Group;
  private rightLegGroup: THREE.Group;
  private scabbardGroup: THREE.Group;
  private saberGroup: THREE.Group;
  private backEquipGroup: THREE.Group;
  private markerGroup?: THREE.Group;

  // Animation states
  public isMoving: boolean = false;
  public isAttacking: boolean = false;
  private animTime: number = 0;
  private attackTime: number = 0;
  private targetRotationY: number = 0;

  constructor(options: Character3DOptions) {
    this.name = options.name;
    this.isInteractable = options.isInteractable ?? false;

    this.group = new THREE.Group();
    this.visualGroup = new THREE.Group();
    this.group.add(this.visualGroup);

    this.pelvis = new THREE.Group();
    this.visualGroup.add(this.pelvis);

    const palette = this.getRolePalette(options.role);

    // Common PBR Materials
    const steelMat = MaterialFactory.getSteelMaterial();
    const goldMat = MaterialFactory.getGoldMaterial();
    const leatherMat = MaterialFactory.getLeatherMaterial();
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf3be95, roughness: 0.65 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x221710, roughness: 0.85 });

    // --- 1. Torso & Caftan (Zhupan) with embroidered frogging ---
    const coatTex = MaterialFactory.createFabricTexture(palette.coatHex, options.role === 'naum');
    const coatMat = new THREE.MeshStandardMaterial({
      map: coatTex,
      roughness: 0.65,
      metalness: 0.05
    });

    // Anatomical chest & waist taper
    const torsoGeo = new THREE.CylinderGeometry(0.38, 0.32, 0.9, 10);
    this.torso = new THREE.Mesh(torsoGeo, coatMat);
    this.torso.position.y = 1.35;
    this.torso.castShadow = true;
    this.torso.receiveShadow = true;
    this.pelvis.add(this.torso);

    // Inner embroidered shirt (Vyshyvanka) at open chest
    const shirtGeo = new THREE.PlaneGeometry(0.2, 0.38);
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.6 });
    const shirt = new THREE.Mesh(shirtGeo, shirtMat);
    shirt.position.set(0, 0.22, 0.32);
    this.torso.add(shirt);

    // Gold/Silver frogging buttons (Brandebourgs)
    const buttonGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.16, 6);
    buttonGeo.rotateZ(Math.PI / 2);
    const btnMat = options.role === 'naum' ? goldMat : steelMat;
    for (let i = 0; i < 4; i++) {
      const btn = new THREE.Mesh(buttonGeo, btnMat);
      btn.position.set(0, 0.12 - i * 0.12, 0.33);
      this.torso.add(btn);
    }

    // Wide Silk Sash (Poias) with wrapped volume
    const sashMat = new THREE.MeshStandardMaterial({ color: palette.sash, roughness: 0.35 });
    const sashGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.22, 12);
    const sash = new THREE.Mesh(sashGeo, sashMat);
    sash.position.y = -0.36;
    this.torso.add(sash);

    // Hanging sash tails on left hip with tassels
    const tailGeo = new THREE.BoxGeometry(0.12, 0.45, 0.06);
    const sashTail = new THREE.Mesh(tailGeo, sashMat);
    sashTail.position.set(-0.32, -0.55, 0.1);
    sashTail.rotation.z = -0.15;
    this.torso.add(sashTail);

    const tassel = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.12, 6), goldMat);
    tassel.position.set(-0.36, -0.8, 0.1);
    this.torso.add(tassel);

    // --- 2. Head, Oseledets, & Mustache ---
    this.headGroup = new THREE.Group();
    this.headGroup.position.y = 0.68;

    // Chiseled head geometry
    const headGeo = new THREE.CylinderGeometry(0.2, 0.18, 0.42, 10);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.castShadow = true;
    this.headGroup.add(head);

    // Nose
    const noseGeo = new THREE.ConeGeometry(0.04, 0.12, 4);
    noseGeo.rotateX(-Math.PI / 2);
    const nose = new THREE.Mesh(noseGeo, skinMat);
    nose.position.set(0, 0.02, 0.22);
    this.headGroup.add(nose);

    // Astrakhan Fur Hat (Kushma / Papakha)
    const hatBaseGeo = new THREE.CylinderGeometry(0.25, 0.23, 0.28, 10);
    const hatMat = new THREE.MeshStandardMaterial({ color: palette.hat, roughness: 0.85 });
    const hat = new THREE.Mesh(hatBaseGeo, hatMat);
    hat.position.y = 0.26;
    hat.castShadow = true;
    this.headGroup.add(hat);

    // Velvet top fold
    const hatTopGeo = new THREE.SphereGeometry(0.23, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    const hatTopMat = new THREE.MeshStandardMaterial({ color: palette.hatTop, roughness: 0.6 });
    const hatTop = new THREE.Mesh(hatTopGeo, hatTopMat);
    hatTop.position.y = 0.38;
    this.headGroup.add(hatTop);

    // Long Cossack Oseledets (Hair lock draped from crown)
    this.oseledetsLock = new THREE.Group();
    this.oseledetsLock.position.set(0.18, 0.24, 0.05);

    const lockSegmentGeo = new THREE.CylinderGeometry(0.03, 0.025, 0.18, 5);
    const lock1 = new THREE.Mesh(lockSegmentGeo, hairMat);
    lock1.position.y = -0.08;
    lock1.rotation.z = 0.2;
    this.oseledetsLock.add(lock1);

    const lock2 = new THREE.Mesh(lockSegmentGeo, hairMat);
    lock2.position.set(0.05, -0.22, 0);
    lock2.rotation.z = 0.35;
    this.oseledetsLock.add(lock2);
    this.headGroup.add(this.oseledetsLock);

    // Iconic Curled Drooping Mustache
    const stacheCenter = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.07, 0.1), hairMat);
    stacheCenter.position.set(0, -0.09, 0.21);
    this.headGroup.add(stacheCenter);

    // Left and right curving mustache tips
    const tipGeo = new THREE.CylinderGeometry(0.025, 0.01, 0.18, 5);
    tipGeo.rotateZ(Math.PI / 4);

    const tipL = new THREE.Mesh(tipGeo, hairMat);
    tipL.position.set(-0.16, -0.16, 0.2);
    this.headGroup.add(tipL);

    const tipR = new THREE.Mesh(tipGeo, hairMat);
    tipR.rotation.y = Math.PI;
    tipR.position.set(0.16, -0.16, 0.2);
    this.headGroup.add(tipR);

    this.torso.add(this.headGroup);

    // --- 3. Arms & Hands ---
    const sleeveGeo = new THREE.CylinderGeometry(0.13, 0.11, 0.65, 8);

    // Left Arm
    this.leftArmGroup = new THREE.Group();
    this.leftArmGroup.position.set(-0.46, 0.32, 0);
    const sleeveL = new THREE.Mesh(sleeveGeo, coatMat);
    sleeveL.position.y = -0.28;
    sleeveL.castShadow = true;
    this.leftArmGroup.add(sleeveL);

    // Left Hand
    const handL = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 6), skinMat);
    handL.position.y = -0.62;
    this.leftArmGroup.add(handL);
    this.torso.add(this.leftArmGroup);

    // Right Arm (Weapon Arm)
    this.rightArmGroup = new THREE.Group();
    this.rightArmGroup.position.set(0.46, 0.32, 0);
    const sleeveR = new THREE.Mesh(sleeveGeo, coatMat);
    sleeveR.position.y = -0.28;
    sleeveR.castShadow = true;
    this.rightArmGroup.add(sleeveR);

    const handR = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 6), skinMat);
    handR.position.y = -0.62;
    this.rightArmGroup.add(handR);
    this.torso.add(this.rightArmGroup);

    // --- 4. Weapon: Damascus Steel Cossack Saber ---
    this.saberGroup = new THREE.Group();
    this.saberGroup.position.set(0, -0.62, 0.1);

    // Brass eagle pommel & horn grip
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.028, 0.2, 8), leatherMat);
    this.saberGroup.add(grip);

    const pommel = new THREE.Mesh(new THREE.DodecahedronGeometry(0.045, 0), goldMat);
    pommel.position.y = -0.11;
    this.saberGroup.add(pommel);

    const crossguard = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.035, 0.05), goldMat);
    crossguard.position.y = 0.11;
    this.saberGroup.add(crossguard);

    // Curved saber blade with fuller groove
    const bladeGeo = new THREE.BoxGeometry(0.048, 0.95, 0.018);
    const blade = new THREE.Mesh(bladeGeo, steelMat);
    blade.position.set(0.06, 0.6, 0);
    blade.rotation.z = -0.12; // curved arc
    blade.castShadow = true;
    this.saberGroup.add(blade);

    this.rightArmGroup.add(this.saberGroup);

    // Scabbard hanging at left hip
    this.scabbardGroup = new THREE.Group();
    this.scabbardGroup.position.set(-0.36, -0.38, 0.05);
    this.scabbardGroup.rotation.z = 0.35;
    const scabbardMesh = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.9, 0.03), leatherMat);
    scabbardMesh.position.y = -0.35;
    this.scabbardGroup.add(scabbardMesh);
    const scabbardChape = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.1, 0.035), goldMat);
    scabbardChape.position.y = -0.75;
    this.scabbardGroup.add(scabbardChape);
    this.torso.add(this.scabbardGroup);

    // --- 5. Role Specific Back Equipment ---
    this.backEquipGroup = new THREE.Group();
    if (options.role === 'honta') {
      // Recurve composite bow on back
      const bowMesh = new THREE.Mesh(
        new THREE.TorusGeometry(0.45, 0.035, 6, 12, Math.PI * 0.9),
        MaterialFactory.getWoodMaterial()
      );
      bowMesh.position.set(0, 0.1, -0.35);
      bowMesh.rotation.y = Math.PI / 4;
      this.backEquipGroup.add(bowMesh);

      // Arrow Quiver
      const quiver = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.7, 8), leatherMat);
      quiver.position.set(0.18, 0.1, -0.32);
      quiver.rotation.z = -0.35;
      this.backEquipGroup.add(quiver);
    } else if (options.role === 'naum') {
      // Bulava (Cossack commander mace of power) on belt
      const bulava = new THREE.Group();
      bulava.position.set(0.32, -0.4, 0.1);
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.45, 6), MaterialFactory.getWoodMaterial());
      bulava.add(shaft);
      const maceHead = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), goldMat);
      maceHead.position.y = 0.24;
      bulava.add(maceHead);
      this.torso.add(bulava);
    }
    this.torso.add(this.backEquipGroup);

    // --- 6. Flowing Cossack Sharovary Pants & Riding Boots ---
    const pantsMat = new THREE.MeshStandardMaterial({
      color: palette.pants,
      roughness: 0.7,
      metalness: 0.05
    });

    // Left Leg Group
    this.leftLegGroup = new THREE.Group();
    this.leftLegGroup.position.set(-0.2, 0.85, 0);

    // Billowing sharovary cloth folds
    const sharovaryGeo = new THREE.SphereGeometry(0.24, 8, 8);
    sharovaryGeo.scale(1.1, 1.6, 1.2);
    const pantsL = new THREE.Mesh(sharovaryGeo, pantsMat);
    pantsL.position.y = -0.32;
    pantsL.castShadow = true;
    this.leftLegGroup.add(pantsL);

    // Leather riding boot with heel
    const bootGeo = new THREE.CylinderGeometry(0.11, 0.09, 0.45, 8);
    const bootL = new THREE.Mesh(bootGeo, leatherMat);
    bootL.position.set(0, -0.65, 0.03);
    bootL.castShadow = true;
    this.leftLegGroup.add(bootL);

    const footL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.28), leatherMat);
    footL.position.set(0, -0.84, 0.09);
    footL.castShadow = true;
    this.leftLegGroup.add(footL);

    this.pelvis.add(this.leftLegGroup);

    // Right Leg Group
    this.rightLegGroup = new THREE.Group();
    this.rightLegGroup.position.set(0.2, 0.85, 0);

    const pantsR = new THREE.Mesh(sharovaryGeo, pantsMat);
    pantsR.position.y = -0.32;
    pantsR.castShadow = true;
    this.rightLegGroup.add(pantsR);

    const bootR = new THREE.Mesh(bootGeo, leatherMat);
    bootR.position.set(0, -0.65, 0.03);
    bootR.castShadow = true;
    this.rightLegGroup.add(bootR);

    const footR = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.28), leatherMat);
    footR.position.set(0, -0.84, 0.09);
    footR.castShadow = true;
    this.rightLegGroup.add(footR);

    this.pelvis.add(this.rightLegGroup);
  }

  private getRolePalette(role: CharacterRole): {
    coatHex: string;
    pants: number;
    sash: number;
    hat: number;
    hatTop: number;
  } {
    switch (role) {
      case 'naum':
        return { coatHex: '#801818', pants: 0x242436, sash: 0xd4af37, hat: 0x1f1f1f, hatTop: 0x8a1c1c };
      case 'taras':
        return { coatHex: '#523f2f', pants: 0x6e2c2c, sash: 0x8a7056, hat: 0x3d3025, hatTop: 0x544233 };
      case 'honta':
        return { coatHex: '#2b472e', pants: 0x3d3329, sash: 0xa88d67, hat: 0x1e3321, hatTop: 0x244028 };
      case 'hryts':
        return { coatHex: '#5f6978', pants: 0x7a2828, sash: 0x485261, hat: 0x2b3038, hatTop: 0x4d5563 };
      case 'player':
      default:
        return { coatHex: '#183a66', pants: 0x992424, sash: 0xd93838, hat: 0x1c1712, hatTop: 0x183a66 };
    }
  }

  public setMarker(kind: 'quest_available' | 'quest_turnin' | 'none'): void {
    if (this.markerGroup) {
      this.visualGroup.remove(this.markerGroup);
      this.markerGroup = undefined;
    }

    if (kind === 'none') return;

    this.markerGroup = new THREE.Group();
    this.markerGroup.position.y = 2.8;

    const color = kind === 'quest_available' ? 0xffcc00 : 0xff8800;
    const geom = new THREE.OctahedronGeometry(0.24, 0);
    geom.scale(0.8, 1.4, 0.8);
    const mat = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 0.85,
      metalness: 0.9,
      roughness: 0.15
    });

    const diamond = new THREE.Mesh(geom, mat);
    this.markerGroup.add(diamond);

    // Glowing halo ring around marker
    const haloGeo = new THREE.TorusGeometry(0.26, 0.02, 6, 16);
    haloGeo.rotateX(Math.PI / 2);
    const halo = new THREE.Mesh(haloGeo, mat);
    this.markerGroup.add(halo);

    this.visualGroup.add(this.markerGroup);
  }

  public setFacingDirection(dirX: number, dirZ: number): void {
    if (Math.abs(dirX) > 0.001 || Math.abs(dirZ) > 0.001) {
      this.targetRotationY = Math.atan2(dirX, dirZ);
    }
  }

  public triggerAttack(): void {
    this.isAttacking = true;
    this.attackTime = 0;
  }

  public update(delta: number): void {
    // 1. Smooth 3D Yaw Rotation towards target facing
    const currentRot = this.visualGroup.rotation.y;
    let diff = this.targetRotationY - currentRot;
    while (diff < -Math.PI) diff += Math.PI * 2;
    while (diff > Math.PI) diff -= Math.PI * 2;
    this.visualGroup.rotation.y += diff * Math.min(1, delta * 16);

    // 2. Animate Marker
    if (this.markerGroup) {
      this.markerGroup.rotation.y += delta * 2.8;
      this.markerGroup.position.y = 2.8 + Math.sin(Date.now() * 0.004) * 0.14;
    }

    // 3. Combat Slash Animation
    if (this.isAttacking) {
      this.attackTime += delta * 5.5;
      if (this.attackTime >= 1.0) {
        this.isAttacking = false;
        this.attackTime = 0;
        this.rightArmGroup.rotation.set(0, 0, 0);
        this.torso.rotation.y = 0;
      } else {
        const progress = Math.sin(this.attackTime * Math.PI);
        // Dynamic saber strike slash across body
        this.rightArmGroup.rotation.x = -Math.PI * 0.85 * progress;
        this.rightArmGroup.rotation.y = -Math.PI * 0.45 * progress;
        this.rightArmGroup.rotation.z = Math.PI * 0.4 * progress;
        this.torso.rotation.y = -0.35 * progress; // torso torso twists into the blow
      }
      return;
    }

    // 4. Locomotion Walk Cycle
    if (this.isMoving) {
      this.animTime += delta * 9.5;
      const swing = Math.sin(this.animTime) * 0.7;

      // Legs swing opposite
      this.leftLegGroup.rotation.x = swing;
      this.rightLegGroup.rotation.x = -swing;

      // Arms swing opposite to legs
      this.leftArmGroup.rotation.x = -swing * 0.75;
      this.rightArmGroup.rotation.x = swing * 0.75;

      // Torso vertical & horizontal gait bob
      this.torso.position.y = 1.35 + Math.abs(Math.sin(this.animTime * 2)) * 0.08;
      this.torso.rotation.z = Math.sin(this.animTime) * 0.04;

      // Hair lock sways with movement
      if (this.oseledetsLock) {
        this.oseledetsLock.rotation.z = 0.2 + Math.sin(this.animTime * 1.5) * 0.15;
      }
    } else {
      // Idle Breathing & subtle weight shift
      this.animTime += delta * 2.2;
      const breath = Math.sin(this.animTime) * 0.025;

      this.leftLegGroup.rotation.x = THREE.MathUtils.lerp(this.leftLegGroup.rotation.x, 0, delta * 8);
      this.rightLegGroup.rotation.x = THREE.MathUtils.lerp(this.rightLegGroup.rotation.x, 0, delta * 8);
      this.leftArmGroup.rotation.x = THREE.MathUtils.lerp(this.leftArmGroup.rotation.x, 0, delta * 8);
      this.rightArmGroup.rotation.x = THREE.MathUtils.lerp(this.rightArmGroup.rotation.x, 0, delta * 8);

      this.torso.position.y = 1.35 + breath;
      this.torso.rotation.z = THREE.MathUtils.lerp(this.torso.rotation.z, 0, delta * 8);

      if (this.oseledetsLock) {
        this.oseledetsLock.rotation.z = 0.2 + Math.sin(this.animTime) * 0.05;
      }
    }
  }
}
