import * as THREE from 'three';
import { MaterialFactory } from './materials.js';

export class OutpostProps {
  /**
   * Builds an elaborate 3D Cossack Kurin (wooden longhut) with round timber logs,
   * chinked mortar, corner saddle notches, layered thatch roof, porch, and carved pillars.
   */
  public static createKurin(width: number = 8.5, length: number = 13.0, height: number = 3.8): THREE.Group {
    const kurin = new THREE.Group();

    const woodMat = MaterialFactory.getWoodMaterial();
    const thatchMat = MaterialFactory.getThatchMaterial();
    const chinkMat = new THREE.MeshStandardMaterial({ color: 0xded1be, roughness: 0.9 });
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x332214, roughness: 0.8 });

    // Round stacked logs with corner saddle-notch extensions
    const logRadius = 0.22;
    const layers = Math.floor(height / (logRadius * 1.8));

    for (let i = 0; i < layers; i++) {
      const y = i * (logRadius * 1.8) + logRadius;

      // Front and Back wall logs (extended by 0.6m at corners for saddle notches)
      const logFBGeo = new THREE.CylinderGeometry(logRadius * 0.95, logRadius, length + 1.2, 8);
      logFBGeo.rotateX(Math.PI / 2);

      const logL = new THREE.Mesh(logFBGeo, woodMat);
      logL.position.set(-width / 2, y, 0);
      logL.castShadow = true;
      kurin.add(logL);

      const logR = new THREE.Mesh(logFBGeo, woodMat);
      logR.position.set(width / 2, y, 0);
      logR.castShadow = true;
      kurin.add(logR);

      // Left and Right wall logs
      const logLRGeo = new THREE.CylinderGeometry(logRadius * 0.95, logRadius, width + 1.2, 8);
      logLRGeo.rotateZ(Math.PI / 2);

      const logFront = new THREE.Mesh(logLRGeo, woodMat);
      logFront.position.set(0, y + logRadius * 0.9, length / 2);
      logFront.castShadow = true;
      kurin.add(logFront);

      const logBack = new THREE.Mesh(logLRGeo, woodMat);
      logBack.position.set(0, y + logRadius * 0.9, -length / 2);
      logBack.castShadow = true;
      kurin.add(logBack);

      // White clay/mortar chinking filler plane between logs
      if (i < layers - 1) {
        const filler = new THREE.Mesh(new THREE.BoxGeometry(width - 0.1, 0.08, length - 0.1), chinkMat);
        filler.position.set(0, y + logRadius * 0.9, 0);
        kurin.add(filler);
      }
    }

    // Carved Wooden Entrance Porch (Prytula)
    const porchDepth = 2.4;
    const porchWidth = 3.2;

    const porchFloor = new THREE.Mesh(new THREE.BoxGeometry(porchWidth, 0.2, porchDepth), darkWoodMat);
    porchFloor.position.set(0, 0.1, length / 2 + porchDepth / 2);
    porchFloor.castShadow = true;
    porchFloor.receiveShadow = true;
    kurin.add(porchFloor);

    // Carved porch pillars
    const pillarGeo = new THREE.CylinderGeometry(0.12, 0.15, 2.6, 8);
    const pillarL = new THREE.Mesh(pillarGeo, darkWoodMat);
    pillarL.position.set(-porchWidth / 2 + 0.2, 1.4, length / 2 + porchDepth - 0.2);
    pillarL.castShadow = true;
    kurin.add(pillarL);

    const pillarR = new THREE.Mesh(pillarGeo, darkWoodMat);
    pillarR.position.set(porchWidth / 2 - 0.2, 1.4, length / 2 + porchDepth - 0.2);
    pillarR.castShadow = true;
    kurin.add(pillarR);

    // Porch Overhang Thatched Roof
    const porchRoofGeo = new THREE.ConeGeometry(2.4, 1.4, 4);
    porchRoofGeo.rotateY(Math.PI / 4);
    const porchRoof = new THREE.Mesh(porchRoofGeo, thatchMat);
    porchRoof.position.set(0, 3.2, length / 2 + porchDepth / 2);
    porchRoof.castShadow = true;
    kurin.add(porchRoof);

    // Main Door with iron hinges
    const door = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.3, 0.12), darkWoodMat);
    door.position.set(0, 1.25, length / 2 + 0.05);
    kurin.add(door);

    const hingeGeo = new THREE.BoxGeometry(0.5, 0.06, 0.14);
    const ironMat = MaterialFactory.getSteelMaterial();
    const hinge1 = new THREE.Mesh(hingeGeo, ironMat);
    hinge1.position.set(-0.35, 1.9, length / 2 + 0.08);
    kurin.add(hinge1);

    const hinge2 = new THREE.Mesh(hingeGeo, ironMat);
    hinge2.position.set(-0.35, 0.6, length / 2 + 0.08);
    kurin.add(hinge2);

    // High Layered Thatched Gable Roof with Overhangs & Ridge Crest (Konyok)
    const roofHeight = 3.2;
    const roofOverhangX = width + 2.0;
    const roofOverhangZ = length + 2.0;

    const roofGeo = new THREE.ConeGeometry(Math.max(roofOverhangX, roofOverhangZ) * 0.72, roofHeight, 4);
    roofGeo.rotateY(Math.PI / 4);
    roofGeo.scale(roofOverhangX / (roofOverhangX * 0.72 * Math.SQRT2), 1, roofOverhangZ / (roofOverhangZ * 0.72 * Math.SQRT2));

    const roof = new THREE.Mesh(roofGeo, thatchMat);
    roof.position.y = height + roofHeight / 2 - 0.25;
    roof.castShadow = true;
    roof.receiveShadow = true;
    kurin.add(roof);

    // Ridge crest pole along apex
    const ridgePole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, roofOverhangZ, 6), darkWoodMat);
    ridgePole.rotateX(Math.PI / 2);
    ridgePole.position.set(0, height + roofHeight - 0.1, 0);
    kurin.add(ridgePole);

    return kurin;
  }

  /**
   * Builds high-detail sharpened timber palisade
   */
  public static createPalisade(length: number = 10, height: number = 3.4): THREE.Group {
    const group = new THREE.Group();
    const woodMat = MaterialFactory.getWoodMaterial();
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x3d2b1b, roughness: 0.85 });

    const logRadius = 0.24;
    const count = Math.floor(length / (logRadius * 2));

    for (let i = 0; i < count; i++) {
      const x = (i - count / 2) * (logRadius * 2);
      const varHeight = height + (Math.random() - 0.5) * 0.4;

      const logMesh = new THREE.Mesh(new THREE.CylinderGeometry(logRadius * 0.8, logRadius, varHeight, 8), woodMat);
      logMesh.position.set(x, varHeight / 2, 0);
      logMesh.castShadow = true;
      group.add(logMesh);

      const tipMesh = new THREE.Mesh(new THREE.ConeGeometry(logRadius * 0.8, 0.75, 8), woodMat);
      tipMesh.position.set(x, varHeight + 0.35, 0);
      tipMesh.castShadow = true;
      group.add(tipMesh);
    }

    // Double reinforcement crossbeams with iron brackets
    for (const h of [height * 0.3, height * 0.75]) {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(length + 0.4, 0.2, 0.16), darkWoodMat);
      beam.position.set(0, h, -logRadius);
      beam.castShadow = true;
      group.add(beam);
    }

    return group;
  }

  /**
   * Builds high-detail campfire with ash bed, glowing embers, and layered animated flame mesh
   */
  public static createCampfire(): THREE.Group {
    const fire = new THREE.Group();

    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x54524c, roughness: 0.9, flatShading: true });
    const logMat = MaterialFactory.getWoodMaterial();

    // Natural stone circle
    const numStones = 12;
    for (let i = 0; i < numStones; i++) {
      const angle = (i / numStones) * Math.PI * 2;
      const r = 0.95 + (Math.random() - 0.5) * 0.15;
      const stoneGeo = new THREE.DodecahedronGeometry(0.24 + Math.random() * 0.08, 0);
      const stone = new THREE.Mesh(stoneGeo, stoneMat);
      stone.position.set(Math.cos(angle) * r, 0.14, Math.sin(angle) * r);
      stone.scale.set(1.2, 0.75, 1.1);
      stone.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      stone.castShadow = true;
      fire.add(stone);
    }

    // Black ash bed
    const ashBed = new THREE.Mesh(
      new THREE.CylinderGeometry(0.75, 0.8, 0.1, 12),
      new THREE.MeshStandardMaterial({ color: 0x1f1a16, roughness: 0.95 })
    );
    ashBed.position.y = 0.05;
    fire.add(ashBed);

    // Glowing coals in center
    const coalMat = new THREE.MeshStandardMaterial({
      color: 0xff3300,
      emissive: 0xff2200,
      emissiveIntensity: 2.2,
      roughness: 0.6
    });
    const coals = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 6), coalMat);
    coals.scale.set(1.4, 0.4, 1.4);
    coals.position.y = 0.12;
    fire.add(coals);

    // Split firewood logs in teepee stack
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 1.25, 6), logMat);
      log.rotation.z = Math.PI / 4.5;
      log.rotation.y = angle;
      log.position.set(Math.cos(angle) * 0.35, 0.28, Math.sin(angle) * 0.35);
      log.castShadow = true;
      fire.add(log);
    }

    // 3D Multi-Layered Flame Mesh
    const flameCore = new THREE.Mesh(
      new THREE.ConeGeometry(0.22, 0.75, 6),
      new THREE.MeshStandardMaterial({
        color: 0xffea00,
        emissive: 0xffcc00,
        emissiveIntensity: 2.5,
        roughness: 0.1
      })
    );
    flameCore.position.y = 0.65;
    fire.add(flameCore);

    const flameOuter = new THREE.Mesh(
      new THREE.ConeGeometry(0.36, 0.95, 6),
      new THREE.MeshStandardMaterial({
        color: 0xff4400,
        emissive: 0xff2200,
        emissiveIntensity: 1.8,
        transparent: true,
        opacity: 0.85
      })
    );
    flameOuter.position.y = 0.72;
    fire.add(flameOuter);

    return fire;
  }

  /**
   * Stylized 3D Steppe Oak Tree with gnarled branches and canopy
   */
  public static createSteppeOak(height: number = 7.0): THREE.Group {
    const tree = new THREE.Group();
    const woodMat = MaterialFactory.getWoodMaterial();
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x3d5c2c,
      roughness: 0.8,
      flatShading: true
    });

    // Gnarled tapered trunk
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.55, height * 0.5, 8), woodMat);
    trunk.position.y = (height * 0.5) / 2;
    trunk.castShadow = true;
    tree.add(trunk);

    // Sprawling branches
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.2, height * 0.3, 6), woodMat);
      branch.position.set(Math.cos(angle) * 0.5, height * 0.45, Math.sin(angle) * 0.5);
      branch.rotation.z = Math.PI / 4;
      branch.rotation.y = angle;
      tree.add(branch);

      // Foliage cluster on each branch
      const foliage = new THREE.Mesh(new THREE.DodecahedronGeometry(1.6 + Math.random() * 0.4, 1), leafMat);
      foliage.position.set(Math.cos(angle) * 1.8, height * 0.68, Math.sin(angle) * 1.8);
      foliage.castShadow = true;
      foliage.receiveShadow = true;
      tree.add(foliage);
    }

    // Main Crown Foliage Dome
    const crown = new THREE.Mesh(new THREE.DodecahedronGeometry(2.4, 1), leafMat);
    crown.position.y = height * 0.82;
    crown.scale.set(1.3, 0.9, 1.3);
    crown.castShadow = true;
    crown.receiveShadow = true;
    tree.add(crown);

    return tree;
  }

  /**
   * Clustered steppe feather grass / kovyl tuft
   */
  public static createGrassTuft(): THREE.Group {
    const tuft = new THREE.Group();
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x9e995b, // golden-green feather grass
      roughness: 0.9,
      side: THREE.DoubleSide
    });

    const bladeGeo = new THREE.PlaneGeometry(0.12, 0.7);
    for (let i = 0; i < 7; i++) {
      const blade = new THREE.Mesh(bladeGeo, grassMat);
      const angle = (i / 7) * Math.PI * 2;
      blade.rotation.y = angle;
      blade.rotation.x = 0.25;
      blade.position.set(Math.cos(angle) * 0.08, 0.32, Math.sin(angle) * 0.08);
      tuft.add(blade);
    }

    return tuft;
  }

  /**
   * Builds high-detail wooden sheep pen
   */
  public static createSheepPen(width: number = 8, length: number = 10): THREE.Group {
    const pen = new THREE.Group();
    const fenceHeight = 1.35;
    const woodMat = MaterialFactory.getWoodMaterial();

    const postGeo = new THREE.CylinderGeometry(0.12, 0.14, fenceHeight, 6);
    const corners = [
      [-width / 2, -length / 2],
      [width / 2, -length / 2],
      [-width / 2, length / 2],
      [width / 2, length / 2],
      [-width / 2, 0],
      [width / 2, 0]
    ];
    for (const [x, z] of corners) {
      const post = new THREE.Mesh(postGeo, woodMat);
      post.position.set(x, fenceHeight / 2, z);
      post.castShadow = true;
      pen.add(post);
    }

    const railXGeo = new THREE.BoxGeometry(width, 0.12, 0.08);
    const railZGeo = new THREE.BoxGeometry(0.08, 0.12, length);

    for (const h of [fenceHeight * 0.35, fenceHeight * 0.75]) {
      const railL = new THREE.Mesh(railZGeo, woodMat);
      railL.position.set(-width / 2, h, 0);
      railL.castShadow = true;
      pen.add(railL);

      const railR = new THREE.Mesh(railZGeo, woodMat);
      railR.position.set(width / 2, h, 0);
      railR.castShadow = true;
      pen.add(railR);

      const railB = new THREE.Mesh(railXGeo, woodMat);
      railB.position.set(0, h, -length / 2);
      railB.castShadow = true;
      pen.add(railB);
    }

    return pen;
  }

  /**
   * Stylized weathered steppe boulder
   */
  public static createBoulder(radius: number = 2.0): THREE.Group {
    const group = new THREE.Group();
    const rockMat = MaterialFactory.getRockMaterial();
    const geo = new THREE.DodecahedronGeometry(radius, 1);

    const posAttr = geo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i);
      const vy = posAttr.getY(i);
      const vz = posAttr.getZ(i);
      const factor = 1.0 + (Math.sin(vx * 2.5) + Math.cos(vz * 2.5)) * 0.08;
      posAttr.setXYZ(i, vx * factor, vy * (0.85 + factor * 0.1), vz * factor);
    }
    geo.computeVertexNormals();

    const mesh = new THREE.Mesh(geo, rockMat);
    mesh.position.y = radius * 0.65;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    return group;
  }

  /**
   * Builds an authentic Ukrainian Mazanka (білена хата-мазанка) with:
   * - Whitewashed clay walls (білені вапном стіни з округлими кутами)
   * - Terracotta/ochre clay foundation plinth (підведена призьба)
   * - Traditional 4-sloped hipped straw/reed thatch roof (пишна чотирисхила стріха) with deep hanging eaves (залоби)
   *   and carved ridge finials (коники/півники)
   * - Cornflower blue window surrounds (сині лиштви та віконниці)
   * - Carved wooden porch (ґаночок) with open doorway
   * - Authentic Ukrainian interior:
   *   - Massive whitewashed masonry stove with sleeping bench (піч з лежанкою) & glowing hearth
   *   - Central carved ceiling timber (сволок) with hanging dried steppe herbs & garlic
   *   - Red corner (покуть) with icons draped in embroidered Ukrainian towels (рушники)
   *   - Oak dining table & benches (стіл та лави) with homespun runners & clay glechyks
   *   - Carved Cossack treasury chest (скриня)
   *   - Specialized props for Headquarters (map, bulava, weapons) and Bowyer (workbench, arrows, staves)
   * - Detachable/fading roof group for Fallout-style roof disappearing on enter.
   */
  public static createEnterableMazanka(
    width: number = 8.5,
    length: number = 13.0,
    height: number = 3.4,
    interiorType: 'headquarters' | 'workshop' = 'headquarters'
  ): {
    group: THREE.Group;
    roofGroup: THREE.Group;
    interiorGroup: THREE.Group;
    roofMaterials: THREE.Material[];
    doorway: { x: number; z: number; width: number; height: number };
    interiorLight: THREE.PointLight;
  } {
    const mazanka = new THREE.Group();
    const interiorGroup = new THREE.Group();
    const roofGroup = new THREE.Group();
    const wallsGroup = new THREE.Group();

    mazanka.add(interiorGroup);
    mazanka.add(wallsGroup);
    mazanka.add(roofGroup);

    const wallMat = MaterialFactory.getMazankaWallMaterial();
    const pryzbaMat = MaterialFactory.getPryzbaMaterial();
    const blueTrimMat = MaterialFactory.getMazankaTrimMaterial();
    const rushnykMat = MaterialFactory.getRushnykMaterial();
    const pechMat = MaterialFactory.getPechMaterial();
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x362314, roughness: 0.82 });
    const woodMat = MaterialFactory.getWoodMaterial();

    const thatchMat = MaterialFactory.getThatchMaterial().clone();
    thatchMat.transparent = true;
    const roofWoodMat = darkWoodMat.clone();
    roofWoodMat.transparent = true;
    const roofMaterials: THREE.Material[] = [thatchMat, roofWoodMat];

    const doorwayWidth = 2.2;
    const doorwayHeight = 2.45;
    const wallThick = 0.42;

    // 1. Terracotta/Ochre Clay Plinth (Підведена призьба)
    const pryzbaHeight = 0.42;
    const pryzbaGeo = new THREE.BoxGeometry(width + 0.8, pryzbaHeight, length + 0.8);
    const pryzba = new THREE.Mesh(pryzbaGeo, pryzbaMat);
    pryzba.position.set(0, pryzbaHeight / 2, 0);
    pryzba.receiveShadow = true;
    wallsGroup.add(pryzba);

    // 2. Interior Floorboards (Weathered Ukrainian oak planks)
    const floorGeo = new THREE.BoxGeometry(width - 0.2, 0.16, length - 0.2);
    const floor = new THREE.Mesh(floorGeo, darkWoodMat);
    floor.position.set(0, 0.1, 0);
    floor.receiveShadow = true;
    interiorGroup.add(floor);

    // 3. Whitewashed Clay Walls (Білені вапном стіни)
    // Left Wall
    const wallL = new THREE.Mesh(new THREE.BoxGeometry(wallThick, height, length), wallMat);
    wallL.position.set(-width / 2, height / 2, 0);
    wallL.castShadow = true;
    wallL.receiveShadow = true;
    wallsGroup.add(wallL);

    // Right Wall
    const wallR = new THREE.Mesh(new THREE.BoxGeometry(wallThick, height, length), wallMat);
    wallR.position.set(width / 2, height / 2, 0);
    wallR.castShadow = true;
    wallR.receiveShadow = true;
    wallsGroup.add(wallR);

    // Back Wall
    const wallBack = new THREE.Mesh(new THREE.BoxGeometry(width, height, wallThick), wallMat);
    wallBack.position.set(0, height / 2, -length / 2);
    wallBack.castShadow = true;
    wallBack.receiveShadow = true;
    wallsGroup.add(wallBack);

    // Front Wall with open doorway
    const flankW = (width - doorwayWidth) / 2;
    const wallFrontL = new THREE.Mesh(new THREE.BoxGeometry(flankW, height, wallThick), wallMat);
    wallFrontL.position.set(-width / 2 + flankW / 2, height / 2, length / 2);
    wallFrontL.castShadow = true;
    wallFrontL.receiveShadow = true;
    wallsGroup.add(wallFrontL);

    const wallFrontR = new THREE.Mesh(new THREE.BoxGeometry(flankW, height, wallThick), wallMat);
    wallFrontR.position.set(width / 2 - flankW / 2, height / 2, length / 2);
    wallFrontR.castShadow = true;
    wallFrontR.receiveShadow = true;
    wallsGroup.add(wallFrontR);

    // Lintel wall above door
    const lintelHeight = height - doorwayHeight;
    const lintelWall = new THREE.Mesh(new THREE.BoxGeometry(doorwayWidth, lintelHeight, wallThick), wallMat);
    lintelWall.position.set(0, doorwayHeight + lintelHeight / 2, length / 2);
    lintelWall.castShadow = true;
    wallsGroup.add(lintelWall);

    // Rounded handmade clay corners (characteristic Ukrainian mazanka rounded corners)
    const cornerGeo = new THREE.CylinderGeometry(wallThick * 0.65, wallThick * 0.65, height, 10);
    for (const cx of [-width / 2, width / 2]) {
      for (const cz of [-length / 2, length / 2]) {
        const cornerMesh = new THREE.Mesh(cornerGeo, wallMat);
        cornerMesh.position.set(cx, height / 2, cz);
        wallsGroup.add(cornerMesh);
      }
    }

    // 4. Traditional Ukrainian Windows with Cornflower Blue Trim & Shutters (Сині лиштви та віконниці)
    const createWindow = (wx: number, wy: number, wz: number, rotY: number = 0) => {
      const winGroup = new THREE.Group();
      winGroup.position.set(wx, wy, wz);
      winGroup.rotation.y = rotY;

      // Blue carved frame (Лиштва)
      const frameGeo = new THREE.BoxGeometry(1.25, 1.45, 0.08);
      const frame = new THREE.Mesh(frameGeo, blueTrimMat);
      winGroup.add(frame);

      // Glass / Parchment panes
      const glassMat = new THREE.MeshStandardMaterial({
        color: 0xd9ebf5,
        roughness: 0.1,
        metalness: 0.1,
        transparent: true,
        opacity: 0.75
      });
      const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.2), glassMat);
      glass.position.z = 0.045;
      winGroup.add(glass);

      // Window cross-mullions
      const mullionH = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.05, 0.06), blueTrimMat);
      mullionH.position.z = 0.05;
      winGroup.add(mullionH);

      const mullionV = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.2, 0.06), blueTrimMat);
      mullionV.position.z = 0.05;
      winGroup.add(mullionV);

      // Carved decorative shutters (Віконниці) swung open
      const shutterGeo = new THREE.BoxGeometry(0.48, 1.35, 0.06);
      const shutterL = new THREE.Mesh(shutterGeo, blueTrimMat);
      shutterL.position.set(-0.78, 0, 0.04);
      shutterL.rotation.y = -0.35;
      winGroup.add(shutterL);

      const shutterR = new THREE.Mesh(shutterGeo, blueTrimMat);
      shutterR.position.set(0.78, 0, 0.04);
      shutterR.rotation.y = 0.35;
      winGroup.add(shutterR);

      wallsGroup.add(winGroup);
    };

    // Front windows flanking the door
    createWindow(-width / 4 - 0.2, 1.6, length / 2 + 0.22, 0);
    createWindow(width / 4 + 0.2, 1.6, length / 2 + 0.22, 0);
    // Side windows
    createWindow(-width / 2 - 0.22, 1.6, 0, -Math.PI / 2);
    createWindow(width / 2 + 0.22, 1.6, 0, Math.PI / 2);

    // 5. Entrance Porch (Ґанок) & Open Door
    const porchDepth = 2.4;
    const porchWidth = 3.6;
    const porchFloor = new THREE.Mesh(new THREE.BoxGeometry(porchWidth, 0.22, porchDepth), darkWoodMat);
    porchFloor.position.set(0, 0.11, length / 2 + porchDepth / 2);
    porchFloor.receiveShadow = true;
    wallsGroup.add(porchFloor);

    // Carved porch balusters
    const pillarGeo = new THREE.CylinderGeometry(0.11, 0.14, 2.5, 8);
    const pillarL = new THREE.Mesh(pillarGeo, darkWoodMat);
    pillarL.position.set(-porchWidth / 2 + 0.25, 1.35, length / 2 + porchDepth - 0.25);
    pillarL.castShadow = true;
    wallsGroup.add(pillarL);

    const pillarR = new THREE.Mesh(pillarGeo, darkWoodMat);
    pillarR.position.set(porchWidth / 2 - 0.25, 1.35, length / 2 + porchDepth - 0.25);
    pillarR.castShadow = true;
    wallsGroup.add(pillarR);

    // Doorposts and lintel
    const postGeo = new THREE.BoxGeometry(0.18, doorwayHeight, 0.28);
    const postL = new THREE.Mesh(postGeo, darkWoodMat);
    postL.position.set(-doorwayWidth / 2, doorwayHeight / 2, length / 2);
    wallsGroup.add(postL);

    const postR = new THREE.Mesh(postGeo, darkWoodMat);
    postR.position.set(doorwayWidth / 2, doorwayHeight / 2, length / 2);
    wallsGroup.add(postR);

    // Heavy weathered plank door swung open inwards against the inner wall
    const openDoor = new THREE.Mesh(new THREE.BoxGeometry(1.1, doorwayHeight - 0.12, 0.08), darkWoodMat);
    openDoor.position.set(-doorwayWidth / 2 + 0.35, (doorwayHeight - 0.12) / 2, length / 2 - 0.5);
    openDoor.rotation.y = 1.25;
    openDoor.castShadow = true;
    interiorGroup.add(openDoor);

    // 6. Authentic Ukrainian Interior
    // A. Massive Whitewashed Masonry Stove with Sleeping Shelf (Велика білена піч з лежанкою)
    const pechGroup = new THREE.Group();
    const pechX = -width / 2 + 1.6;
    const pechZ = -length / 2 + 1.8;
    pechGroup.position.set(pechX, 0, pechZ);

    // Stove body
    const pechBody = new THREE.Mesh(new THREE.BoxGeometry(2.3, 2.0, 2.6), pechMat);
    pechBody.position.set(0, 1.0, 0);
    pechBody.castShadow = true;
    pechGroup.add(pechBody);

    // Arched hearth opening (Челюсті)
    const hearthOpening = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 0.75, 0.8),
      new THREE.MeshStandardMaterial({ color: 0x14100c, roughness: 0.95 })
    );
    hearthOpening.position.set(0.65, 0.65, 0.95);
    pechGroup.add(hearthOpening);

    // Glowing coals in hearth
    const embers = new THREE.Mesh(
      new THREE.SphereGeometry(0.24, 6, 6),
      new THREE.MeshStandardMaterial({
        color: 0xff3b00,
        emissive: 0xff2200,
        emissiveIntensity: 2.5,
        roughness: 0.5
      })
    );
    embers.scale.set(1.4, 0.4, 1.2);
    embers.position.set(0.65, 0.4, 0.95);
    pechGroup.add(embers);

    // Sleeping shelf (Лежанка) adjoining the stove
    const lezhanka = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.85, 2.6), pechMat);
    lezhanka.position.set(-1.4, 0.42, 0);
    pechGroup.add(lezhanka);

    // Homespun patchwork quilt & pillows on lezhanka
    const quilt = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.12, 2.3), new THREE.MeshStandardMaterial({ color: 0x8a3028, roughness: 0.9 }));
    quilt.position.set(-1.4, 0.9, 0);
    pechGroup.add(quilt);

    // Cast iron pot (Чавунець) & oven peel (Рогач)
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 0.25, 8), MaterialFactory.getSteelMaterial());
    pot.position.set(0.85, 1.05, 0.9);
    pechGroup.add(pot);

    const rohadz = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.8, 4), darkWoodMat);
    rohadz.rotation.z = -0.25;
    rohadz.position.set(1.2, 0.9, 1.2);
    pechGroup.add(rohadz);

    interiorGroup.add(pechGroup);

    // B. Central Carved Ceiling Timber (Сволок) with hanging dried herbs
    const svolok = new THREE.Mesh(new THREE.BoxGeometry(width - 0.2, 0.25, 0.35), darkWoodMat);
    svolok.position.set(0, height - 0.2, 0);
    interiorGroup.add(svolok);

    // Dried steppe herb bunches (mint, wormwood, chamomile) hanging from svolok
    for (let h = -2.5; h <= 2.5; h += 1.2) {
      const herbGeo = new THREE.ConeGeometry(0.14, 0.55, 5);
      herbGeo.rotateX(Math.PI);
      const herbMat = new THREE.MeshStandardMaterial({
        color: h < 0 ? 0x4a6b32 : 0x8a7d3c,
        roughness: 0.95
      });
      const herb = new THREE.Mesh(herbGeo, herbMat);
      herb.position.set(h, height - 0.5, 0);
      interiorGroup.add(herb);
    }

    // C. Holy / Red Corner (Покуть / Красний кут) opposite the stove
    const pokutGroup = new THREE.Group();
    pokutGroup.position.set(width / 2 - 0.35, 1.8, -length / 2 + 0.35);

    // Icon shelf
    const iconShelf = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.06, 0.8), darkWoodMat);
    pokutGroup.add(iconShelf);

    // Wood icons
    const iconMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.45, 0.65, 0.04),
      new THREE.MeshStandardMaterial({ color: 0x734b22, roughness: 0.7 })
    );
    iconMesh.position.set(0, 0.35, 0);
    iconMesh.rotation.y = -Math.PI / 4;
    pokutGroup.add(iconMesh);

    // Authentic Ukrainian Embroidered Rushnyk draped over the icon (Вишитий рушник)
    const rushnyk = new THREE.Mesh(new THREE.PlaneGeometry(0.65, 1.1), rushnykMat);
    rushnyk.position.set(0, 0.3, 0.04);
    rushnyk.rotation.y = -Math.PI / 4;
    pokutGroup.add(rushnyk);

    // Red glass vigil lampada
    const lampada = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.06, 0.12, 6),
      new THREE.MeshStandardMaterial({ color: 0xb31b1b, emissive: 0x801010 })
    );
    lampada.position.set(0, 0.1, 0.1);
    pokutGroup.add(lampada);

    interiorGroup.add(pokutGroup);

    // D. Solid Oak Dining Table & Benches (Стіл та лави)
    const tableTop = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.12, 1.35), darkWoodMat);
    tableTop.position.set(0.6, 0.85, -0.6);
    tableTop.castShadow = true;
    interiorGroup.add(tableTop);

    for (const lx of [-1.15, 1.15]) {
      for (const lz of [-0.55, 0.55]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.8, 0.12), darkWoodMat);
        leg.position.set(0.6 + lx, 0.44, -0.6 + lz);
        interiorGroup.add(leg);
      }
    }

    // Homespun red table runner
    const runner = new THREE.Mesh(
      new THREE.PlaneGeometry(2.3, 0.6),
      new THREE.MeshStandardMaterial({ color: 0x94261f, roughness: 0.85 })
    );
    runner.rotateX(-Math.PI / 2);
    runner.position.set(0.6, 0.92, -0.6);
    interiorGroup.add(runner);

    // Traditional Ukrainian clay Glechyk (глечик) & wooden bowl
    const glechyk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.16, 0.35, 8),
      new THREE.MeshStandardMaterial({ color: 0x8a4628, roughness: 0.65 })
    );
    glechyk.position.set(0.2, 1.1, -0.6);
    interiorGroup.add(glechyk);

    // Wooden benches along walls
    const benchR = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.48, length - 2.5), darkWoodMat);
    benchR.position.set(width / 2 - 0.45, 0.25, 0);
    interiorGroup.add(benchR);

    // Carved Ukrainian Skrynya (Розписна козацька скриня)
    const skrynya = new THREE.Mesh(
      new THREE.BoxGeometry(1.35, 0.75, 0.85),
      new THREE.MeshStandardMaterial({ color: 0x4a2a16, roughness: 0.75 })
    );
    skrynya.position.set(width / 2 - 1.1, 0.42, length / 2 - 1.2);
    skrynya.castShadow = true;
    interiorGroup.add(skrynya);

    // Specialized interior props
    if (interiorType === 'headquarters') {
      // Hetman's unrolled Black Sea & Dnieper Rapids map
      const map = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 0.85),
        new THREE.MeshStandardMaterial({ color: 0xded0ba, roughness: 0.85 })
      );
      map.rotateX(-Math.PI / 2);
      map.position.set(0.8, 0.93, -0.6);
      interiorGroup.add(map);

      // Gold Hetman's Bulava (Золота гетьманська булава) on velvet cushion
      const bulavaCushion = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.1, 0.3),
        new THREE.MeshStandardMaterial({ color: 0x6e1b1b })
      );
      bulavaCushion.position.set(1.4, 0.94, -0.6);
      interiorGroup.add(bulavaCushion);

      const bulavaShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.45, 6), MaterialFactory.getGoldMaterial());
      bulavaShaft.rotation.z = Math.PI / 2;
      bulavaShaft.position.set(1.4, 1.02, -0.6);
      interiorGroup.add(bulavaShaft);

      const bulavaHead = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), MaterialFactory.getGoldMaterial());
      bulavaHead.position.set(1.6, 1.02, -0.6);
      interiorGroup.add(bulavaHead);

      // Crossed Cossack sabers on whitewashed wall
      const saber1 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.05, 0.03), MaterialFactory.getSteelMaterial());
      saber1.rotation.z = Math.PI / 5;
      saber1.position.set(0.6, 2.2, -length / 2 + 0.24);
      interiorGroup.add(saber1);

      const saber2 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.05, 0.03), MaterialFactory.getSteelMaterial());
      saber2.rotation.z = -Math.PI / 5;
      saber2.position.set(0.6, 2.2, -length / 2 + 0.26);
      interiorGroup.add(saber2);
    } else {
      // Bowyer Workshop interior: Woodcraft bench
      const bench = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.14, 2.8), darkWoodMat);
      bench.position.set(width / 2 - 0.8, 0.85, 0);
      interiorGroup.add(bench);

      // Bundles of hunting arrows in clay glechyks
      for (let j = 0; j < 2; j++) {
        const arrowJar = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.3, 0.6, 8), new THREE.MeshStandardMaterial({ color: 0x8a4628 }));
        arrowJar.position.set(width / 2 - 0.8, 0.35, j === 0 ? -1.6 : 1.6);
        interiorGroup.add(arrowJar);

        for (let a = 0; a < 8; a++) {
          const arrow = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.85, 4), MaterialFactory.getSteelMaterial());
          arrow.position.set(width / 2 - 0.8 + (Math.random() - 0.5) * 0.15, 0.75, (j === 0 ? -1.6 : 1.6) + (Math.random() - 0.5) * 0.15);
          arrow.rotation.z = (Math.random() - 0.5) * 0.25;
          interiorGroup.add(arrow);
        }
      }

      // Bow staves in seasoning
      for (let s = 0; s < 3; s++) {
        const stave = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.8, 6), woodMat);
        stave.position.set(width / 2 - 0.35, 1.2 + s * 0.35, 0);
        stave.rotation.x = Math.PI / 2;
        interiorGroup.add(stave);
      }
    }

    // Warm Interior Lantern & Pech point light
    const interiorLight = new THREE.PointLight(0xffaa44, 2.6, 14.0);
    interiorLight.position.set(0, 2.7, 0);
    interiorLight.castShadow = true;
    interiorGroup.add(interiorLight);

    // 7. Traditional Ukrainian 4-Sloped Thatched Strikha (Пишна чотирисхила стріха)
    const roofHeight = 3.4;
    const overhangX = width + 2.4;
    const overhangZ = length + 2.4;

    // A. Bulbous Hanging Eaves (Залоби / Нижня частина стріхи)
    const eaveGeo = new THREE.BoxGeometry(overhangX, 0.55, overhangZ);
    const eaveMesh = new THREE.Mesh(eaveGeo, thatchMat);
    eaveMesh.position.set(0, height + 0.15, 0);
    eaveMesh.castShadow = true;
    eaveMesh.receiveShadow = true;
    roofGroup.add(eaveMesh);

    // B. Main 4-sloped Hipped Thatch Roof (Чотирисхилий очеретяний дах)
    const baseConeR = Math.max(overhangX, overhangZ) * 0.72;
    const roofGeo = new THREE.ConeGeometry(baseConeR, roofHeight, 4);
    roofGeo.rotateY(Math.PI / 4);
    roofGeo.scale(overhangX / (baseConeR * Math.SQRT2), 1, overhangZ / (baseConeR * Math.SQRT2));

    const mainRoof = new THREE.Mesh(roofGeo, thatchMat);
    mainRoof.position.set(0, height + roofHeight / 2 + 0.35, 0);
    mainRoof.castShadow = true;
    mainRoof.receiveShadow = true;
    roofGroup.add(mainRoof);

    // C. Traditional Carved Wooden Ridge Crest & Crossed Finials (Коник та півники)
    const ridgeLen = Math.max(1.0, overhangZ - overhangX + 1.2);
    const ridgePole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, ridgeLen, 6), roofWoodMat);
    ridgePole.rotateX(Math.PI / 2);
    ridgePole.position.set(0, height + roofHeight + 0.35, 0);
    roofGroup.add(ridgePole);

    // Crossed horse-head finials at the ends (Півники/коники)
    for (const rz of [-ridgeLen / 2, ridgeLen / 2]) {
      const finial1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.85, 0.1), roofWoodMat);
      finial1.rotation.x = Math.PI / 4;
      finial1.position.set(0, height + roofHeight + 0.65, rz);
      roofGroup.add(finial1);

      const finial2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.85, 0.1), roofWoodMat);
      finial2.rotation.x = -Math.PI / 4;
      finial2.position.set(0, height + roofHeight + 0.65, rz);
      roofGroup.add(finial2);
    }

    // D. Porch Thatched Canopy (Дашок ґанку)
    const porchCanopyGeo = new THREE.ConeGeometry(2.8, 1.6, 4);
    porchCanopyGeo.rotateY(Math.PI / 4);
    const porchCanopy = new THREE.Mesh(porchCanopyGeo, thatchMat);
    porchCanopy.position.set(0, 3.25, length / 2 + porchDepth / 2);
    porchCanopy.castShadow = true;
    roofGroup.add(porchCanopy);

    // E. Whitewashed clay chimney (Білений димар) protruding through roof
    const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.65, 1.4, 0.65), wallMat);
    chimney.position.set(pechX, height + roofHeight * 0.75, pechZ);
    chimney.castShadow = true;
    roofGroup.add(chimney);

    return {
      group: mazanka,
      roofGroup,
      interiorGroup,
      roofMaterials,
      doorway: {
        x: 0,
        z: length / 2,
        width: doorwayWidth,
        height: doorwayHeight
      },
      interiorLight
    };
  }

  /**
   * Alias for createEnterableMazanka
   */
  public static createEnterableKurin(
    width: number = 8.5,
    length: number = 13.0,
    height: number = 3.4,
    interiorType: 'headquarters' | 'workshop' = 'headquarters'
  ) {
    return this.createEnterableMazanka(width, length, height, interiorType);
  }

  /**
   * Traditional Ukrainian Wicker Wattle Fence (Плетений тин) with drying clay milk jugs (Глечики)
   */
  public static createWattleFence(length: number = 6.0, height: number = 1.15, hasPots: boolean = true): THREE.Group {
    const fence = new THREE.Group();
    const woodMat = MaterialFactory.getWoodMaterial();
    const willowMat = MaterialFactory.getWillowMaterial();
    const glechykMat = MaterialFactory.getGlechykMaterial();

    const postSpacing = 0.72;
    const postCount = Math.max(2, Math.floor(length / postSpacing) + 1);
    const actualSpacing = length / (postCount - 1);
    const postH = height + 0.35;
    const postGeo = new THREE.CylinderGeometry(0.045, 0.055, postH, 6);

    for (let i = 0; i < postCount; i++) {
      const x = -length / 2 + i * actualSpacing;
      const post = new THREE.Mesh(postGeo, woodMat);
      post.position.set(x, postH / 2, 0);
      post.rotation.z = (Math.sin(i * 1.7) * 0.04);
      post.rotation.x = (Math.cos(i * 1.3) * 0.04);
      post.castShadow = true;
      fence.add(post);

      // Drying clay jug on top of fence post (Глечик на тину)
      if (hasPots && (i % 2 === 1 || (postCount > 3 && i === postCount - 2))) {
        const potGroup = new THREE.Group();
        potGroup.position.set(x, height + 0.22, 0);

        // Flared belly of pot
        const belly = new THREE.Mesh(new THREE.SphereGeometry(0.12, 7, 6), glechykMat);
        belly.scale.set(1.0, 1.25, 1.0);
        potGroup.add(belly);

        // Inverted neck & rim resting over the post point
        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.08, 0.12, 7), glechykMat);
        neck.position.y = -0.11;
        potGroup.add(neck);

        // Clay handle loop
        const handle = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.016, 4, 8, Math.PI), glechykMat);
        handle.rotation.z = Math.PI / 2;
        handle.position.set(0.11, 0, 0);
        potGroup.add(handle);

        potGroup.castShadow = true;
        fence.add(potGroup);
      }
    }

    // Interwoven horizontal willow rods (Плетива лози)
    const rowCount = 6;
    for (let r = 0; r < rowCount; r++) {
      const y = 0.18 + (r / (rowCount - 1)) * (height - 0.28);
      for (let i = 0; i < postCount - 1; i++) {
        const x1 = -length / 2 + i * actualSpacing;
        const x2 = x1 + actualSpacing;
        const midX = (x1 + x2) / 2;
        const zWave = ((i + r) % 2 === 0 ? 1 : -1) * 0.042;

        const rodLen = actualSpacing * 1.08;
        const rodGeo = new THREE.CylinderGeometry(0.018, 0.018, rodLen, 5);
        rodGeo.rotateZ(Math.PI / 2);
        const rod = new THREE.Mesh(rodGeo, willowMat);
        rod.position.set(midX, y + (Math.sin(i * 3 + r) * 0.015), zWave);
        rod.castShadow = true;
        fence.add(rod);
      }
    }

    return fence;
  }

  /**
   * Blooming Ukrainian Sunflowers (Квітучі соняшники коло хати)
   */
  public static createSunflowerCluster(count: number = 4): THREE.Group {
    const cluster = new THREE.Group();
    const diskMat = MaterialFactory.getSunflowerDiskMaterial();
    const petalMat = MaterialFactory.getSunflowerPetalMaterial();
    const leafMat = MaterialFactory.getSunflowerLeafMaterial();

    const offsets = [
      [0, 0, 2.3],
      [0.6, -0.25, 2.0],
      [-0.55, 0.2, 2.5],
      [0.35, 0.5, 1.85],
      [-0.3, -0.4, 2.15]
    ];

    const petalCount = 14;
    const petalGeo = new THREE.BoxGeometry(0.08, 0.22, 0.015);
    const leafGeo = new THREE.BoxGeometry(0.24, 0.02, 0.38);

    for (let i = 0; i < Math.min(count, offsets.length); i++) {
      const [ox, oz, baseHeight] = offsets[i];
      const h = baseHeight + (Math.sin(i * 2.1) * 0.15);
      const flowerGroup = new THREE.Group();
      flowerGroup.position.set(ox, 0, oz);

      // Stalk
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.045, h, 6), leafMat);
      stalk.position.y = h / 2;
      stalk.rotation.z = (Math.sin(i * 1.4) * 0.06);
      stalk.rotation.x = -0.09; // Leaned slightly toward south-east sun
      stalk.castShadow = true;
      flowerGroup.add(stalk);

      // Broad spade leaves along stem
      for (let l = 1; l <= 3; l++) {
        const ly = h * (0.28 + l * 0.18);
        const leaf = new THREE.Mesh(leafGeo, leafMat);
        const isRight = l % 2 === 0;
        leaf.position.set(isRight ? 0.16 : -0.16, ly, 0.05);
        leaf.rotation.set(0.3, isRight ? 0.8 : -0.8, isRight ? -0.3 : 0.3);
        leaf.castShadow = true;
        flowerGroup.add(leaf);
      }

      // Flower head at top
      const headGroup = new THREE.Group();
      headGroup.position.set(0, h + 0.05, 0.1);
      headGroup.rotation.x = 0.55; // Tilted forward to face camera and sun
      headGroup.rotation.y = 0.25;

      // Center seed disk
      const diskGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.05, 14);
      diskGeo.rotateX(Math.PI / 2);
      const disk = new THREE.Mesh(diskGeo, diskMat);
      disk.castShadow = true;
      headGroup.add(disk);

      // Radial bright yellow petals
      for (let p = 0; p < petalCount; p++) {
        const theta = (p / petalCount) * Math.PI * 2;
        const petal = new THREE.Mesh(petalGeo, petalMat);
        petal.position.set(Math.cos(theta) * 0.27, Math.sin(theta) * 0.27, 0);
        petal.rotation.z = theta - Math.PI / 2;
        petal.rotation.x = 0.15; // Subtle outward flare
        headGroup.add(petal);
      }

      flowerGroup.add(headGroup);
      cluster.add(flowerGroup);
    }

    return cluster;
  }

  /**
   * Colorful Ukrainian Mallows / Hollyhocks (Мальви)
   */
  public static createMallowCluster(count: number = 3): THREE.Group {
    const cluster = new THREE.Group();
    const leafMat = MaterialFactory.getSunflowerLeafMaterial();
    const colors = [0xd92b5e, 0xad1a3c, 0xf58aa5];

    const offsets = [
      [0, 0, 1.9],
      [0.45, 0.15, 1.7],
      [-0.4, -0.1, 2.1],
      [0.2, -0.3, 1.6]
    ];

    const flowerGeo = new THREE.CylinderGeometry(0.11, 0.04, 0.06, 6);
    flowerGeo.rotateX(Math.PI / 2);

    for (let i = 0; i < Math.min(count, offsets.length); i++) {
      const [ox, oz, h] = offsets[i];
      const mallowMat = MaterialFactory.getMallowFlowerMaterial(colors[i % colors.length]);

      const stemGroup = new THREE.Group();
      stemGroup.position.set(ox, 0, oz);

      // Tall slender flower spike
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, h, 6), leafMat);
      stem.position.y = h / 2;
      stem.castShadow = true;
      stemGroup.add(stem);

      // Blossoms studded along stem
      const blossomCount = 8;
      for (let b = 0; b < blossomCount; b++) {
        const by = h * (0.35 + (b / blossomCount) * 0.6);
        const theta = b * 2.4;
        const flower = new THREE.Mesh(flowerGeo, mallowMat);
        flower.position.set(Math.cos(theta) * 0.07, by, Math.sin(theta) * 0.07);
        flower.rotation.set(0.2, theta, 0);
        flower.castShadow = true;
        stemGroup.add(flower);
      }

      cluster.add(stemGroup);
    }

    return cluster;
  }

  /**
   * Traditional Ukrainian Steppe Water Well (Криниця з корбою та дашком)
   */
  public static createSteppeWell(): THREE.Group {
    const well = new THREE.Group();
    const stoneMat = MaterialFactory.getWellStoneMaterial();
    const woodMat = MaterialFactory.getWoodMaterial();
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x362314, roughness: 0.85 });
    const steelMat = MaterialFactory.getSteelMaterial();
    const thatchMat = MaterialFactory.getThatchMaterial();
    const waterMat = MaterialFactory.getWaterMaterial();

    // 1. Octagonal stone curb (Зруб криниці)
    const curbRadius = 1.15;
    const curbHeight = 0.85;
    const curbGeo = new THREE.CylinderGeometry(curbRadius, curbRadius * 1.05, curbHeight, 8);
    const curbMesh = new THREE.Mesh(curbGeo, stoneMat);
    curbMesh.position.y = curbHeight / 2;
    curbMesh.castShadow = true;
    curbMesh.receiveShadow = true;
    well.add(curbMesh);

    // Inner well shaft & dark water plane
    const shaftGeo = new THREE.CylinderGeometry(curbRadius * 0.82, curbRadius * 0.82, 0.4, 8);
    const shaftMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.95 });
    const shaft = new THREE.Mesh(shaftGeo, shaftMat);
    shaft.position.y = curbHeight - 0.18;
    well.add(shaft);

    const water = new THREE.Mesh(new THREE.CircleGeometry(curbRadius * 0.78, 8), waterMat);
    water.rotateX(-Math.PI / 2);
    water.position.y = curbHeight - 0.25;
    well.add(water);

    // Weathered timber rim
    const rimGeo = new THREE.TorusGeometry(curbRadius * 0.94, 0.09, 4, 8);
    rimGeo.rotateX(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, darkWoodMat);
    rim.position.y = curbHeight + 0.04;
    rim.castShadow = true;
    well.add(rim);

    // 2. Twin timber upright posts (Стовпи)
    const postH = 2.4;
    const postGeo = new THREE.BoxGeometry(0.15, postH, 0.15);
    for (const sx of [-curbRadius * 0.85, curbRadius * 0.85]) {
      const post = new THREE.Mesh(postGeo, woodMat);
      post.position.set(sx, postH / 2, 0);
      post.castShadow = true;
      well.add(post);
    }

    // 3. Horizontal wooden windlass drum (Коловорот / вал)
    const drumGeo = new THREE.CylinderGeometry(0.1, 0.1, curbRadius * 1.6, 8);
    drumGeo.rotateZ(Math.PI / 2);
    const drum = new THREE.Mesh(drumGeo, woodMat);
    drum.position.set(0, 1.45, 0);
    drum.castShadow = true;
    well.add(drum);

    // Coiled rope around drum
    const ropeGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.45, 8);
    ropeGeo.rotateZ(Math.PI / 2);
    const ropeMat = new THREE.MeshStandardMaterial({ color: 0xa8936f, roughness: 0.9 });
    const rope = new THREE.Mesh(ropeGeo, ropeMat);
    rope.position.set(-0.15, 1.45, 0);
    well.add(rope);

    // Iron crank handle (Корба)
    const crankArm = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.35, 0.04), steelMat);
    crankArm.position.set(curbRadius * 0.85 + 0.1, 1.45 - 0.12, 0);
    well.add(crankArm);

    const crankGrip = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.18, 6), darkWoodMat);
    crankGrip.rotateX(Math.PI / 2);
    crankGrip.position.set(curbRadius * 0.85 + 0.1, 1.45 - 0.28, 0.09);
    well.add(crankGrip);

    // 4. Wooden water bucket on the curb (Цеберко)
    const bucketGroup = new THREE.Group();
    bucketGroup.position.set(0.35, curbHeight + 0.18, 0.4);
    const bucketBody = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.34, 8), darkWoodMat);
    bucketGroup.add(bucketBody);
    const hoop = new THREE.Mesh(new THREE.CylinderGeometry(0.182, 0.142, 0.05, 8), steelMat);
    bucketGroup.add(hoop);
    const bucketHandle = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.015, 4, 8, Math.PI), steelMat);
    bucketHandle.position.y = 0.17;
    bucketGroup.add(bucketHandle);
    bucketGroup.castShadow = true;
    well.add(bucketGroup);

    // 5. Gabled Thatch Roof Canopy (Дашок криниці)
    const roofWidth = 2.4;
    const roofDepth = 1.9;
    const roofH = 1.0;
    const roofGeo = new THREE.ConeGeometry(roofWidth * 0.72, roofH, 4);
    roofGeo.rotateY(Math.PI / 4);
    roofGeo.scale(1.0, 1.0, roofDepth / roofWidth);
    const roofMesh = new THREE.Mesh(roofGeo, thatchMat);
    roofMesh.position.set(0, postH + roofH / 2 - 0.15, 0);
    roofMesh.castShadow = true;
    roofMesh.receiveShadow = true;
    well.add(roofMesh);

    // Paved stone apron around base
    const apronGeo = new THREE.CircleGeometry(curbRadius + 0.75, 8);
    apronGeo.rotateX(-Math.PI / 2);
    const apron = new THREE.Mesh(apronGeo, stoneMat);
    apron.position.y = 0.02;
    apron.receiveShadow = true;
    well.add(apron);

    return well;
  }

  /**
   * Wood Chopping Block with Axe & Firewood (Колода для дров та козацька сокира)
   */
  public static createChoppingBlock(): THREE.Group {
    const block = new THREE.Group();
    const woodMat = MaterialFactory.getWoodMaterial();
    const steelMat = MaterialFactory.getSteelMaterial();
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x362314, roughness: 0.85 });

    // 1. Oak stump
    const stumpH = 0.65;
    const stumpR = 0.42;
    const stump = new THREE.Mesh(new THREE.CylinderGeometry(stumpR * 0.95, stumpR, stumpH, 8), woodMat);
    stump.position.y = stumpH / 2;
    stump.castShadow = true;
    stump.receiveShadow = true;
    block.add(stump);

    // Top face ring
    const topCap = new THREE.Mesh(new THREE.CircleGeometry(stumpR * 0.95, 8), darkWoodMat);
    topCap.rotateX(-Math.PI / 2);
    topCap.position.y = stumpH + 0.005;
    block.add(topCap);

    // 2. Cossack Axe struck in stump
    const axeGroup = new THREE.Group();
    axeGroup.position.set(0.05, stumpH + 0.05, 0);
    axeGroup.rotation.z = -0.3;
    axeGroup.rotation.y = 0.4;

    const bladeGeo = new THREE.BoxGeometry(0.24, 0.15, 0.035);
    const blade = new THREE.Mesh(bladeGeo, steelMat);
    blade.position.set(0, 0.06, 0);
    axeGroup.add(blade);

    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.028, 0.8, 6), darkWoodMat);
    handle.position.set(0.06, 0.42, 0);
    handle.rotation.z = -0.15;
    axeGroup.add(handle);

    axeGroup.castShadow = true;
    block.add(axeGroup);

    // 3. Stack of split firewood logs
    const logGeo = new THREE.CylinderGeometry(0.075, 0.075, 0.65, 6);
    logGeo.rotateZ(Math.PI / 2);
    const logPositions = [
      [0.6, 0.08, -0.15],
      [0.6, 0.08, 0.05],
      [0.6, 0.08, 0.25],
      [0.6, 0.22, -0.05],
      [0.6, 0.22, 0.15],
      [0.6, 0.35, 0.05]
    ];
    for (const [lx, ly, lz] of logPositions) {
      const log = new THREE.Mesh(logGeo, woodMat);
      log.position.set(lx, ly, lz);
      log.castShadow = true;
      block.add(log);
    }

    // Wood chips scattered on ground
    const chipGeo = new THREE.BoxGeometry(0.08, 0.015, 0.05);
    for (let c = 0; c < 8; c++) {
      const chip = new THREE.Mesh(chipGeo, darkWoodMat);
      const angle = (c / 8) * Math.PI * 2;
      const dist = 0.45 + (Math.sin(c * 2) * 0.15);
      chip.position.set(Math.cos(angle) * dist, 0.01, Math.sin(angle) * dist);
      chip.rotation.y = c * 0.8;
      block.add(chip);
    }

    return block;
  }

  /**
   * Traditional Ukrainian Cossack Cart / Wagon (Чумацький віз з сіном та мішками)
   */
  public static createCossackCart(): THREE.Group {
    const cart = new THREE.Group();
    const woodMat = MaterialFactory.getWoodMaterial();
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x362314, roughness: 0.85 });
    const steelMat = MaterialFactory.getSteelMaterial();
    const hayMat = MaterialFactory.getHayMaterial();

    const cartW = 1.5;
    const cartL = 3.4;
    const bedY = 0.65;

    // Bed frame
    const bed = new THREE.Mesh(new THREE.BoxGeometry(cartW, 0.12, cartL), darkWoodMat);
    bed.position.y = bedY;
    bed.castShadow = true;
    cart.add(bed);

    // Flared side slats (Полудрабки)
    for (const side of [-1, 1]) {
      const sideSlat = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.55, cartL), woodMat);
      sideSlat.position.set((cartW / 2 + 0.06) * side, bedY + 0.3, 0);
      sideSlat.rotation.z = side * -0.18; // Flared outward
      sideSlat.castShadow = true;
      cart.add(sideSlat);
    }

    // Front and back boards
    for (const f of [-1, 1]) {
      const endBoard = new THREE.Mesh(new THREE.BoxGeometry(cartW, 0.5, 0.08), woodMat);
      endBoard.position.set(0, bedY + 0.28, (cartL / 2) * f);
      endBoard.castShadow = true;
      cart.add(endBoard);
    }

    // Axles
    for (const az of [-cartL * 0.35, cartL * 0.35]) {
      const axle = new THREE.Mesh(new THREE.BoxGeometry(cartW + 0.55, 0.1, 0.1), darkWoodMat);
      axle.position.set(0, bedY - 0.18, az);
      cart.add(axle);
    }

    // 4 Spoked wooden wheels
    const makeWheel = (radius: number, spokes: number) => {
      const wGroup = new THREE.Group();
      const rim = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.045, 6, 12), darkWoodMat);
      wGroup.add(rim);
      const tire = new THREE.Mesh(new THREE.TorusGeometry(radius + 0.02, 0.015, 4, 12), steelMat);
      wGroup.add(tire);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.18, 8), darkWoodMat);
      hub.rotateX(Math.PI / 2);
      wGroup.add(hub);
      for (let s = 0; s < spokes; s++) {
        const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, radius * 1.85, 4), woodMat);
        spoke.rotation.z = (s / spokes) * Math.PI;
        wGroup.add(spoke);
      }
      return wGroup;
    };

    // Front wheels
    const fWheelL = makeWheel(0.42, 6);
    fWheelL.rotation.y = Math.PI / 2;
    fWheelL.position.set(-cartW / 2 - 0.22, 0.42, -cartL * 0.35);
    cart.add(fWheelL);

    const fWheelR = makeWheel(0.42, 6);
    fWheelR.rotation.y = Math.PI / 2;
    fWheelR.position.set(cartW / 2 + 0.22, 0.42, -cartL * 0.35);
    cart.add(fWheelR);

    // Rear wheels (slightly larger)
    const rWheelL = makeWheel(0.55, 8);
    rWheelL.rotation.y = Math.PI / 2;
    rWheelL.position.set(-cartW / 2 - 0.22, 0.55, cartL * 0.35);
    cart.add(rWheelL);

    const rWheelR = makeWheel(0.55, 8);
    rWheelR.rotation.y = Math.PI / 2;
    rWheelR.position.set(cartW / 2 + 0.22, 0.55, cartL * 0.35);
    cart.add(rWheelR);

    // Front hitch shafts (Голоблі)
    const shaftGeo = new THREE.CylinderGeometry(0.04, 0.05, 2.2, 6);
    for (const sx of [-0.4, 0.4]) {
      const shaft = new THREE.Mesh(shaftGeo, woodMat);
      shaft.position.set(sx, 0.35, -cartL / 2 - 1.0);
      shaft.rotation.x = Math.PI / 2 + 0.12;
      cart.add(shaft);
    }

    // Cargo: Hay mound inside
    const hayMound = new THREE.Mesh(new THREE.SphereGeometry(cartW * 0.55, 8, 6), hayMat);
    hayMound.scale.set(0.9, 0.65, 1.8);
    hayMound.position.set(0, bedY + 0.45, 0.2);
    hayMound.castShadow = true;
    cart.add(hayMound);

    // Sacks of grain
    const sackMat = new THREE.MeshStandardMaterial({ color: 0xb5a382, roughness: 0.9 });
    for (let k = 0; k < 2; k++) {
      const sack = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.3, 0.7), sackMat);
      sack.position.set(-0.25 + k * 0.5, bedY + 0.35, -0.9);
      sack.rotation.y = (k === 0 ? -0.15 : 0.2);
      cart.add(sack);
    }

    // Wooden Barrel
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.34, 0.75, 8), darkWoodMat);
    barrel.position.set(0.2, bedY + 0.45, 0.9);
    cart.add(barrel);

    return cart;
  }

  /**
   * Sturdy outdoor oak plank bench (Призьбова лава)
   */
  public static createOutsideBench(length: number = 2.0): THREE.Group {
    const bench = new THREE.Group();
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x362314, roughness: 0.85 });

    // Seat plank
    const plank = new THREE.Mesh(new THREE.BoxGeometry(length, 0.08, 0.42), darkWoodMat);
    plank.position.y = 0.44;
    plank.castShadow = true;
    bench.add(plank);

    // Legs
    for (const lx of [-length / 2 + 0.22, length / 2 - 0.22]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.42, 0.36), darkWoodMat);
      leg.position.set(lx, 0.21, 0);
      leg.castShadow = true;
      bench.add(leg);
    }

    // Stretcher bar
    const bar = new THREE.Mesh(new THREE.BoxGeometry(length - 0.4, 0.06, 0.06), darkWoodMat);
    bar.position.y = 0.16;
    bench.add(bar);

    return bench;
  }

  /**
   * Traditional Ukrainian Steppe Haystack (Стіг / Копиця сіна)
   */
  public static createHaystack(radius: number = 1.9, height: number = 2.6): THREE.Group {
    const haystack = new THREE.Group();
    const hayMat = MaterialFactory.getHayMaterial();
    const woodMat = MaterialFactory.getWoodMaterial();

    // Conical rounded hay dome
    const domeGeo = new THREE.ConeGeometry(radius, height, 10);
    const dome = new THREE.Mesh(domeGeo, hayMat);
    dome.position.y = height / 2;
    dome.scale.set(1.0, 1.0, 0.95);
    dome.castShadow = true;
    dome.receiveShadow = true;
    haystack.add(dome);

    // Central wooden spire pole protruding through apex
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, height + 0.8, 6), woodMat);
    pole.position.y = (height + 0.8) / 2;
    haystack.add(pole);

    return haystack;
  }

  /**
   * Ground footpaths connecting campfire, mazankas, sheep pen, and well
   */
  public static createGroundFootpaths(terrain: { getHeightAt(x: number, z: number): number }): THREE.Group {
    const pathsGroup = new THREE.Group();
    const pathMat = MaterialFactory.getPathMaterial();

    const trails: THREE.Vector3[][] = [
      // Campfire to Naum's Kurin
      [
        new THREE.Vector3(0, 0, -2),
        new THREE.Vector3(-1.8, 0, -4.5),
        new THREE.Vector3(-3.5, 0, -7.5),
        new THREE.Vector3(-5.8, 0, -10.5)
      ],
      // Campfire to Bowyer Honta's Workshop
      [
        new THREE.Vector3(0, 0, -2),
        new THREE.Vector3(4.0, 0, -3.8),
        new THREE.Vector3(8.5, 0, -5.5),
        new THREE.Vector3(13.0, 0, -7.0),
        new THREE.Vector3(15.8, 0, -8.5)
      ],
      // Campfire to Sheep Pen
      [
        new THREE.Vector3(0, 0, -2),
        new THREE.Vector3(-4.0, 0, 0.5),
        new THREE.Vector3(-8.5, 0, 3.5),
        new THREE.Vector3(-12.5, 0, 6.5)
      ],
      // Campfire to Water Well
      [
        new THREE.Vector3(0, 0, -2),
        new THREE.Vector3(2.2, 0, -4.5),
        new THREE.Vector3(4.8, 0, -7.5)
      ],
      // Water Well to Bowyer Workshop
      [
        new THREE.Vector3(5.0, 0, -8.0),
        new THREE.Vector3(9.5, 0, -8.0),
        new THREE.Vector3(15.8, 0, -8.5)
      ],
      // Southern main road into the outpost
      [
        new THREE.Vector3(0, 0, -2),
        new THREE.Vector3(0, 0, 5.0),
        new THREE.Vector3(-0.5, 0, 13.0),
        new THREE.Vector3(0, 0, 22.0)
      ]
    ];

    const pathWidth = 2.0;

    for (const waypoints of trails) {
      for (let i = 0; i < waypoints.length - 1; i++) {
        const p1 = waypoints[i];
        const p2 = waypoints[i + 1];
        const dir = new THREE.Vector3().subVectors(p2, p1);
        const len = dir.length();
        dir.normalize();

        const segments = Math.max(3, Math.ceil(len / 1.2));
        const segGeo = new THREE.PlaneGeometry(pathWidth, len, 2, segments);
        segGeo.rotateX(-Math.PI / 2);

        const posAttr = segGeo.attributes.position;
        const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);

        for (let v = 0; v < posAttr.count; v++) {
          const vx = posAttr.getX(v);
          const vz = posAttr.getZ(v);

          const angle = Math.atan2(dir.x, dir.z);
          const cosA = Math.cos(angle);
          const sinA = Math.sin(angle);

          const wx = midPoint.x + (vx * cosA + vz * sinA);
          const wz = midPoint.z + (-vx * sinA + vz * cosA);
          const wy = terrain.getHeightAt(wx, wz) + 0.035;

          posAttr.setY(v, wy - terrain.getHeightAt(midPoint.x, midPoint.z));
        }
        segGeo.computeVertexNormals();

        const pathSegment = new THREE.Mesh(segGeo, pathMat);
        const groundY = terrain.getHeightAt(midPoint.x, midPoint.z);
        pathSegment.position.set(midPoint.x, groundY, midPoint.z);
        pathSegment.rotation.y = Math.atan2(dir.x, dir.z);
        pathSegment.receiveShadow = true;
        pathsGroup.add(pathSegment);
      }
    }

    return pathsGroup;
  }
}

