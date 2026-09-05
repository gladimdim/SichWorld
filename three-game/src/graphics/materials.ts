import * as THREE from 'three';

export class MaterialFactory {
  private static cache: Map<string, THREE.Material> = new Map();
  private static texCache: Map<string, THREE.Texture> = new Map();

  private static createCanvas(width: number, height: number): HTMLCanvasElement | null {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  private static createFallbackTexture(key: string): THREE.Texture {
    if (this.texCache.has(key)) return this.texCache.get(key)!;
    const data = new Uint8Array([128, 128, 128, 255]);
    const tex = new THREE.DataTexture(data, 1, 1, THREE.RGBAFormat);
    tex.needsUpdate = true;
    this.texCache.set(key, tex);
    return tex;
  }

  /**
   * High-detail procedural weathered timber log texture with bark and rings
   */
  public static createWoodLogTexture(): THREE.Texture {
    if (this.texCache.has('wood_log')) return this.texCache.get('wood_log')!;

    const size = 256;
    const canvas = this.createCanvas(size, size);
    if (!canvas) return this.createFallbackTexture('wood_log');
    const ctx = canvas.getContext('2d')!;

    // Base deep timber brown
    ctx.fillStyle = '#4a331f';
    ctx.fillRect(0, 0, size, size);

    // Grain striations
    for (let y = 0; y < size; y++) {
      const v = Math.sin(y * 0.15) * 0.5 + Math.sin(y * 0.05) * 0.5;
      const shade = Math.floor(45 + v * 25 + (Math.random() - 0.5) * 15);
      ctx.fillStyle = `rgb(${shade + 18}, ${shade}, ${Math.max(10, shade - 15)})`;
      ctx.fillRect(0, y, size, 1);
    }

    // Bark grooves and knots
    ctx.strokeStyle = '#2b1c0e';
    ctx.lineWidth = 2;
    for (let i = 0; i < 18; i++) {
      const startX = Math.random() * size;
      const startY = Math.random() * size;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.bezierCurveTo(
        startX + (Math.random() - 0.5) * 40,
        startY + 30,
        startX + (Math.random() - 0.5) * 40,
        startY + 60,
        startX + (Math.random() - 0.5) * 30,
        startY + 90
      );
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    this.texCache.set('wood_log', tex);
    return tex;
  }

  /**
   * Detailed thatch roof texture with overlapping reed layers
   */
  public static createThatchTexture(): THREE.Texture {
    if (this.texCache.has('thatch')) return this.texCache.get('thatch')!;

    const size = 256;
    const canvas = this.createCanvas(size, size);
    if (!canvas) return this.createFallbackTexture('thatch');
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#806830';
    ctx.fillRect(0, 0, size, size);

    // Layered reed stems
    for (let x = 0; x < size; x += 3) {
      for (let y = 0; y < size; y += 12) {
        const length = 10 + Math.random() * 8;
        const tone = 90 + Math.random() * 45;
        ctx.fillStyle = `rgb(${tone + 30}, ${tone + 10}, ${tone - 25})`;
        ctx.fillRect(x + (Math.random() - 0.5) * 2, y, 2, length);
      }
    }

    // Shadow band ridges every 32px
    for (let y = 0; y < size; y += 32) {
      const grad = ctx.createLinearGradient(0, y, 0, y + 10);
      grad.addColorStop(0, 'rgba(30, 20, 10, 0.6)');
      grad.addColorStop(1, 'rgba(30, 20, 10, 0.0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, y, size, 10);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    this.texCache.set('thatch', tex);
    return tex;
  }

  /**
   * Rich Cossack fabric texture with embroidered trim patterns
   */
  public static createFabricTexture(baseColorHex: string, goldBraid: boolean = false): THREE.Texture {
    const key = `fabric_${baseColorHex}_${goldBraid}`;
    if (this.texCache.has(key)) return this.texCache.get(key)!;

    const size = 128;
    const canvas = this.createCanvas(size, size);
    if (!canvas) return this.createFallbackTexture(key);
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = baseColorHex;
    ctx.fillRect(0, 0, size, size);

    // Subtle fabric weave texture
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    for (let x = 0; x < size; x += 2) {
      ctx.fillRect(x, 0, 1, size);
    }
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    for (let y = 0; y < size; y += 2) {
      ctx.fillRect(0, y, size, 1);
    }

    if (goldBraid) {
      // Gold braided embroidery trim along edges
      ctx.fillStyle = '#d4af37';
      ctx.fillRect(0, 0, size, 8);
      ctx.fillRect(0, size - 8, size, 8);
      ctx.fillStyle = '#9e7d1b';
      for (let x = 4; x < size; x += 12) {
        ctx.beginPath();
        ctx.arc(x, 4, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, size - 4, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    this.texCache.set(key, tex);
    return tex;
  }

  /**
   * Realistic steppe ground texture with patches of grass, moss and dry soil
   */
  public static createSteppeGroundTexture(): THREE.Texture {
    if (this.texCache.has('steppe_ground')) return this.texCache.get('steppe_ground')!;

    const size = 512;
    const canvas = this.createCanvas(size, size);
    if (!canvas) return this.createFallbackTexture('steppe_ground');
    const ctx = canvas.getContext('2d')!;

    // Base earthy steppe olive-tan
    ctx.fillStyle = '#65693c';
    ctx.fillRect(0, 0, size, size);

    // Noise layers for grass tufts and soil patches
    const earthTones = ['#51542e', '#757a46', '#878c52', '#4b3d2c', '#5e4e37', '#7a6649'];
    for (let i = 0; i < 15000; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = Math.random() * 5 + 1;
      ctx.fillStyle = earthTones[Math.floor(Math.random() * earthTones.length)];
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(16, 16);
    this.texCache.set('steppe_ground', tex);
    return tex;
  }

  /**
   * Stone cliff face texture for ravines and boulders
   */
  public static createRockTexture(): THREE.Texture {
    if (this.texCache.has('rock')) return this.texCache.get('rock')!;

    const size = 256;
    const canvas = this.createCanvas(size, size);
    if (!canvas) return this.createFallbackTexture('rock');
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#524f4b';
    ctx.fillRect(0, 0, size, size);

    // Rock fissures and strata
    for (let i = 0; i < 4000; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const shade = Math.floor(55 + Math.random() * 40);
      ctx.fillStyle = `rgb(${shade}, ${shade - 2}, ${shade - 5})`;
      ctx.fillRect(x, y, Math.random() * 6 + 1, Math.random() * 3 + 1);
    }

    const tex = new THREE.CanvasTexture(canvas);
    this.texCache.set('rock', tex);
    return tex;
  }

  /**
   * Authentic whitewashed lime-and-clay Ukrainian mazanka wall plaster
   */
  public static createMazankaWallTexture(): THREE.Texture {
    if (this.texCache.has('mazanka_wall')) return this.texCache.get('mazanka_wall')!;

    const size = 512;
    const canvas = this.createCanvas(size, size);
    if (!canvas) return this.createFallbackTexture('mazanka_wall');
    const ctx = canvas.getContext('2d')!;

    // Base warm lime-whitewashed plaster (білена хата)
    ctx.fillStyle = '#f5f0e6';
    ctx.fillRect(0, 0, size, size);

    // Subtle hand-smoothed clay trowel undulations
    for (let i = 0; i < 40; i++) {
      const cx = Math.random() * size;
      const cy = Math.random() * size;
      const r = 40 + Math.random() * 80;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      const alpha = 0.04 + Math.random() * 0.04;
      const isDark = Math.random() < 0.5;
      grad.addColorStop(0, isDark ? `rgba(200, 185, 165, ${alpha})` : `rgba(255, 255, 250, ${alpha * 1.5})`);
      grad.addColorStop(1, 'rgba(245, 240, 230, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Organic straw flecks & fine sand grains mixed into clay
    for (let i = 0; i < 600; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      ctx.fillStyle = Math.random() < 0.7 ? '#d8c7a6' : '#bfab87';
      const w = 1 + Math.random() * 3;
      const h = 1 + Math.random() * 1.5;
      ctx.fillRect(x, y, w, h);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    this.texCache.set('mazanka_wall', tex);
    return tex;
  }

  /**
   * Traditional Ukrainian Pryzba (підведена призьба) clay wash
   */
  public static createPryzbaTexture(): THREE.Texture {
    if (this.texCache.has('pryzba')) return this.texCache.get('pryzba')!;

    const size = 256;
    const canvas = this.createCanvas(size, size);
    if (!canvas) return this.createFallbackTexture('pryzba');
    const ctx = canvas.getContext('2d')!;

    // Rich terracotta ochre clay
    ctx.fillStyle = '#8c4627';
    ctx.fillRect(0, 0, size, size);

    // Horizontal clay brush strokes
    for (let y = 0; y < size; y += 4) {
      const tone = 120 + (Math.random() - 0.5) * 30;
      ctx.fillStyle = `rgb(${tone + 25}, ${tone - 50}, ${tone - 80})`;
      ctx.fillRect(0, y, size, 2);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    this.texCache.set('pryzba', tex);
    return tex;
  }

  /**
   * Traditional Ukrainian embroidered Rushnyk (вишитий рушник)
   */
  public static createRushnykTexture(): THREE.Texture {
    if (this.texCache.has('rushnyk')) return this.texCache.get('rushnyk')!;

    const width = 128;
    const height = 512;
    const canvas = this.createCanvas(width, height);
    if (!canvas) return this.createFallbackTexture('rushnyk');
    const ctx = canvas.getContext('2d')!;

    // White homespun linen
    ctx.fillStyle = '#f7f4ed';
    ctx.fillRect(0, 0, width, height);

    // Red and black geometric cross-stitch borders
    const drawCrossStitchBorder = (yOffset: number) => {
      ctx.fillStyle = '#b31b1b'; // Red
      for (let x = 8; x < width - 8; x += 12) {
        ctx.fillRect(x, yOffset, 8, 8);
        ctx.fillRect(x + 4, yOffset + 4, 8, 8);
      }
      ctx.fillStyle = '#1c1b18'; // Black
      for (let x = 8; x < width - 8; x += 12) {
        ctx.fillRect(x + 4, yOffset - 4, 4, 4);
        ctx.fillRect(x, yOffset + 8, 4, 4);
      }
    };

    drawCrossStitchBorder(40);
    drawCrossStitchBorder(70);
    drawCrossStitchBorder(height - 80);
    drawCrossStitchBorder(height - 50);

    // Fringes at both ends
    ctx.fillStyle = '#dfd8c7';
    for (let x = 4; x < width - 4; x += 3) {
      ctx.fillRect(x, 0, 1.5, 16);
      ctx.fillRect(x, height - 16, 1.5, 16);
    }

    const tex = new THREE.CanvasTexture(canvas);
    this.texCache.set('rushnyk', tex);
    return tex;
  }

  // --- Material Getters with PBR Settings ---

  public static getWoodMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_wood';
    if (!this.cache.has(key)) {
      const tex = this.createWoodLogTexture();
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          map: tex,
          roughness: 0.75,
          metalness: 0.05
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getThatchMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_thatch';
    if (!this.cache.has(key)) {
      const tex = this.createThatchTexture();
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          map: tex,
          roughness: 0.9,
          metalness: 0.02
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getSteelMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_steel';
    if (!this.cache.has(key)) {
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          color: 0xe8eff5,
          metalness: 0.96,
          roughness: 0.18
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getGoldMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_gold';
    if (!this.cache.has(key)) {
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          metalness: 0.9,
          roughness: 0.25
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getLeatherMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_leather';
    if (!this.cache.has(key)) {
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          color: 0x2e1e13,
          roughness: 0.55,
          metalness: 0.1
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getWaterMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_water';
    if (!this.cache.has(key)) {
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          color: 0x2b5757,
          roughness: 0.15,
          metalness: 0.25,
          transparent: true,
          opacity: 0.85
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getRockMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_rock';
    if (!this.cache.has(key)) {
      const tex = this.createRockTexture();
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          map: tex,
          roughness: 0.9,
          metalness: 0.05,
          flatShading: true
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getMazankaWallMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_mazanka_wall';
    if (!this.cache.has(key)) {
      const tex = this.createMazankaWallTexture();
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          map: tex,
          roughness: 0.88,
          metalness: 0.02,
          color: 0xfaf5ec
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getPryzbaMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_pryzba';
    if (!this.cache.has(key)) {
      const tex = this.createPryzbaTexture();
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          map: tex,
          roughness: 0.9,
          metalness: 0.03
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getRushnykMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_rushnyk';
    if (!this.cache.has(key)) {
      const tex = this.createRushnykTexture();
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          map: tex,
          roughness: 0.85,
          metalness: 0.0,
          side: THREE.DoubleSide
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getMazankaTrimMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_mazanka_trim';
    if (!this.cache.has(key)) {
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          color: 0x24547d, // Traditional Ukrainian cornflower blue window trim (синій колір лиштви)
          roughness: 0.65,
          metalness: 0.08
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getPechMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_pech';
    if (!this.cache.has(key)) {
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          color: 0xf7f3eb, // White clay whitewash for pech
          roughness: 0.85,
          metalness: 0.02
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  /**
   * Compacted dirt footpath texture with gravel and dry soil variations
   */
  public static createPathTexture(): THREE.Texture {
    if (this.texCache.has('path_dirt')) return this.texCache.get('path_dirt')!;

    const size = 512;
    const canvas = this.createCanvas(size, size);
    if (!canvas) return this.createFallbackTexture('path_dirt');
    const ctx = canvas.getContext('2d')!;

    // Base trampled dry steppe earth
    ctx.fillStyle = '#6e5a3c';
    ctx.fillRect(0, 0, size, size);

    // Soil tone variations & organic cart tracks
    for (let i = 0; i < 7000; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const tones = ['#5c4a30', '#7a6544', '#85704d', '#4d3d27', '#635338'];
      ctx.fillStyle = tones[Math.floor(Math.random() * tones.length)];
      ctx.fillRect(x, y, 2 + Math.random() * 4, 2 + Math.random() * 4);
    }

    // River pebbles and gravel embedded in the path
    for (let i = 0; i < 900; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = 1 + Math.random() * 3;
      const pColor = Math.random() < 0.5 ? '#8f8778' : '#a39b8c';
      ctx.fillStyle = pColor;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(3, 3);
    this.texCache.set('path_dirt', tex);
    return tex;
  }

  /**
   * Dark sunflower seed center disk texture
   */
  public static createSunflowerDiskTexture(): THREE.Texture {
    if (this.texCache.has('sunflower_disk')) return this.texCache.get('sunflower_disk')!;

    const size = 128;
    const canvas = this.createCanvas(size, size);
    if (!canvas) return this.createFallbackTexture('sunflower_disk');
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#2c190a';
    ctx.fillRect(0, 0, size, size);

    // Golden seed speckles and spiral pattern
    ctx.fillStyle = '#694119';
    for (let i = 0; i < 400; i++) {
      const r = Math.sqrt(Math.random()) * (size / 2 - 4);
      const theta = Math.random() * Math.PI * 2;
      const x = size / 2 + Math.cos(theta) * r;
      const y = size / 2 + Math.sin(theta) * r;
      ctx.fillRect(x, y, 2, 2);
    }

    const tex = new THREE.CanvasTexture(canvas);
    this.texCache.set('sunflower_disk', tex);
    return tex;
  }

  public static getPathMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_path';
    if (!this.cache.has(key)) {
      const tex = this.createPathTexture();
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          map: tex,
          roughness: 0.92,
          metalness: 0.02
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getSunflowerDiskMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_sunflower_disk';
    if (!this.cache.has(key)) {
      const tex = this.createSunflowerDiskTexture();
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          map: tex,
          roughness: 0.9,
          metalness: 0.05
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getSunflowerPetalMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_sunflower_petal';
    if (!this.cache.has(key)) {
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          color: 0xf7b30c, // Radiant Ukrainian sunflower yellow
          roughness: 0.45,
          metalness: 0.05,
          side: THREE.DoubleSide
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getSunflowerLeafMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_sunflower_leaf';
    if (!this.cache.has(key)) {
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          color: 0x3d6928, // Deep plant green
          roughness: 0.75,
          metalness: 0.02,
          side: THREE.DoubleSide
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getMallowFlowerMaterial(colorHex: number = 0xd93868): THREE.MeshStandardMaterial {
    const key = `mat_mallow_${colorHex}`;
    if (!this.cache.has(key)) {
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          color: colorHex,
          roughness: 0.5,
          side: THREE.DoubleSide
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getGlechykMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_glechyk';
    if (!this.cache.has(key)) {
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          color: 0x9b4623, // Ukrainian terracotta glazed pottery
          roughness: 0.38,
          metalness: 0.1
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getWillowMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_willow';
    if (!this.cache.has(key)) {
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          color: 0x6e5033, // Wicker willow twigs (лоза)
          roughness: 0.85,
          metalness: 0.05
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getHayMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_hay';
    if (!this.cache.has(key)) {
      const tex = this.createThatchTexture();
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          map: tex,
          color: 0xd9b359, // Golden cured steppe hay
          roughness: 0.95,
          metalness: 0.01
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }

  public static getWellStoneMaterial(): THREE.MeshStandardMaterial {
    const key = 'mat_well_stone';
    if (!this.cache.has(key)) {
      const tex = this.createRockTexture();
      this.cache.set(
        key,
        new THREE.MeshStandardMaterial({
          map: tex,
          color: 0x8a847c,
          roughness: 0.88,
          metalness: 0.05
        })
      );
    }
    return this.cache.get(key) as THREE.MeshStandardMaterial;
  }
}
