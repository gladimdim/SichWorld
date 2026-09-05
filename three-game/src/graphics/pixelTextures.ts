import * as THREE from 'three';

export class PixelTextureGenerator {
  /**
   * Generates a 32x32 pixel steppe grass / soil texture
   */
  public static createSteppeGrassTexture(): THREE.CanvasTexture {
    const size = 32;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    // Base steppe dry yellowish green
    ctx.fillStyle = '#6e7a46';
    ctx.fillRect(0, 0, size, size);

    // Dappled highlights and shadows
    const colors = ['#5b6638', '#7b894e', '#889856', '#525a33', '#949c63'];
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        if (Math.random() < 0.35) {
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  /**
   * Generates a dirt / ravine path texture
   */
  public static createDirtTexture(): THREE.CanvasTexture {
    const size = 32;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#5c4838';
    ctx.fillRect(0, 0, size, size);

    const shades = ['#4d3c2e', '#66513e', '#735c47', '#423326'];
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        if (Math.random() < 0.4) {
          ctx.fillStyle = shades[Math.floor(Math.random() * shades.length)];
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  /**
   * Generates a wooden palisade / timber plank texture
   */
  public static createWoodPlankTexture(): THREE.CanvasTexture {
    const size = 32;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#543b23';
    ctx.fillRect(0, 0, size, size);

    // Vertical plank lines
    for (let x = 0; x < size; x += 8) {
      ctx.fillStyle = '#362414';
      ctx.fillRect(x, 0, 1, size);
    }

    // Wood grain noise
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = Math.random() < 0.5 ? '#63472c' : '#452f1b';
      const px = Math.floor(Math.random() * size);
      const py = Math.floor(Math.random() * size);
      ctx.fillRect(px, py, 1, Math.floor(Math.random() * 4) + 1);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    return texture;
  }

  /**
   * Generates a thatched roof texture (straw / dry reeds)
   */
  public static createThatchTexture(): THREE.CanvasTexture {
    const size = 32;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#8f773b';
    ctx.fillRect(0, 0, size, size);

    // Horizontal ridge lines
    for (let y = 0; y < size; y += 6) {
      ctx.fillStyle = '#5e4d24';
      ctx.fillRect(0, y, size, 1);
    }

    // Straw streaks
    for (let i = 0; i < 80; i++) {
      ctx.fillStyle = Math.random() < 0.5 ? '#a88d48' : '#735f2c';
      const px = Math.floor(Math.random() * size);
      const py = Math.floor(Math.random() * size);
      ctx.fillRect(px, py, Math.floor(Math.random() * 3) + 1, 1);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  /**
   * Generates a 2.5D Cossack pixel sprite (Front / 3/4 view)
   */
  public static createCossackSprite(role: 'player' | 'naum' | 'taras' | 'honta' | 'hryts'): THREE.CanvasTexture {
    const w = 24;
    const h = 36;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(0, 0, w, h);

    // Role-specific colors
    const coatColor = role === 'naum' ? '#8a1f1f' : role === 'taras' ? '#4d3826' : role === 'honta' ? '#2e4729' : role === 'hryts' ? '#5a6275' : '#1c3d5a';
    const sashColor = '#c72e2e';
    const trouserColor = '#942222'; // classic red sharovary

    // Head / Face
    ctx.fillStyle = '#ffd1a4';
    ctx.fillRect(8, 6, 8, 8);

    // Oseledets / Hair & Cossack Cap
    ctx.fillStyle = '#221811';
    ctx.fillRect(7, 4, 10, 3);
    ctx.fillRect(16, 4, 3, 7); // Oseledets lock hanging

    // Eyes
    ctx.fillStyle = '#111111';
    ctx.fillRect(9, 9, 2, 2);
    ctx.fillRect(13, 9, 2, 2);

    // Cossack Mustache
    ctx.fillStyle = '#3a2717';
    ctx.fillRect(8, 12, 8, 2);
    ctx.fillRect(7, 13, 2, 3); // drooping ends
    ctx.fillRect(15, 13, 2, 3);

    // Torso / Caftan (Zhupan)
    ctx.fillStyle = coatColor;
    ctx.fillRect(6, 14, 12, 10);

    // White shirt collar
    ctx.fillStyle = '#e6e6e6';
    ctx.fillRect(10, 14, 4, 3);

    // Silk Sash (Poias)
    ctx.fillStyle = sashColor;
    ctx.fillRect(6, 22, 12, 3);
    ctx.fillRect(14, 25, 3, 5); // sash hanging end

    // Wide Trousers (Sharovary)
    ctx.fillStyle = trouserColor;
    ctx.fillRect(5, 25, 6, 6);
    ctx.fillRect(13, 25, 6, 6);

    // Leather Boots (Choboty)
    ctx.fillStyle = '#2b1b11';
    ctx.fillRect(5, 31, 5, 5);
    ctx.fillRect(14, 31, 5, 5);

    // Saber scabbard at hip
    ctx.fillStyle = '#c49a45';
    ctx.fillRect(4, 20, 2, 10);

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    return texture;
  }

  /**
   * Generates a 2.5D Steppe Wolf sprite
   */
  public static createWolfSprite(): THREE.CanvasTexture {
    const w = 32;
    const h = 24;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(0, 0, w, h);

    // Wolf body (grey/brown fur)
    ctx.fillStyle = '#5a544c';
    ctx.fillRect(8, 8, 16, 8);
    ctx.fillStyle = '#736b62';
    ctx.fillRect(10, 6, 12, 3); // back fur

    // Head & Snout
    ctx.fillStyle = '#4a443e';
    ctx.fillRect(2, 6, 8, 7);
    ctx.fillRect(0, 9, 4, 4); // muzzle

    // Ears
    ctx.fillStyle = '#36302a';
    ctx.fillRect(6, 3, 3, 4);

    // Glowing eyes
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(3, 7, 2, 2);

    // Legs
    ctx.fillStyle = '#3d3832';
    ctx.fillRect(8, 16, 3, 7);
    ctx.fillRect(13, 16, 3, 7);
    ctx.fillRect(18, 16, 3, 7);
    ctx.fillRect(21, 16, 3, 7);

    // Bushy Tail
    ctx.fillStyle = '#5a544c';
    ctx.fillRect(24, 9, 6, 4);
    ctx.fillRect(28, 12, 3, 4);

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    return texture;
  }

  /**
   * Generates a 2.5D Horned Saiga Antelope sprite
   */
  public static createSaigaSprite(): THREE.CanvasTexture {
    const w = 32;
    const h = 28;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(0, 0, w, h);

    // Sandy body
    ctx.fillStyle = '#b89467';
    ctx.fillRect(8, 10, 15, 8);

    // White belly
    ctx.fillStyle = '#d9cbba';
    ctx.fillRect(10, 16, 12, 2);

    // Distinctive bulbous snout
    ctx.fillStyle = '#a68255';
    ctx.fillRect(2, 8, 7, 6);
    ctx.fillRect(0, 10, 4, 5); // hump nose

    // Big Horns
    ctx.fillStyle = '#e6dcbf';
    ctx.fillRect(6, 1, 3, 8);
    ctx.fillRect(7, 0, 2, 3);
    ctx.fillStyle = '#9c8a67';
    ctx.fillRect(6, 3, 3, 1);
    ctx.fillRect(6, 6, 3, 1);

    // Eye
    ctx.fillStyle = '#1c150c';
    ctx.fillRect(4, 9, 2, 2);

    // Slender Legs
    ctx.fillStyle = '#8a6e4b';
    ctx.fillRect(9, 18, 2, 9);
    ctx.fillRect(12, 18, 2, 9);
    ctx.fillRect(18, 18, 2, 9);
    ctx.fillRect(21, 18, 2, 9);

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    return texture;
  }

  /**
   * Generates the terrifying Shapeshifter (Vovkulaka) sprite
   */
  public static createShapeshifterSprite(): THREE.CanvasTexture {
    const w = 40;
    const h = 36;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(0, 0, w, h);

    // Dark monstrous hulking body
    ctx.fillStyle = '#241e1b';
    ctx.fillRect(10, 10, 20, 14);

    // Spiky mane
    ctx.fillStyle = '#38302b';
    ctx.fillRect(8, 6, 16, 6);
    ctx.fillRect(14, 4, 8, 3);

    // Head with open fanged maw
    ctx.fillStyle = '#1c1714';
    ctx.fillRect(2, 8, 10, 10);
    ctx.fillRect(0, 12, 5, 7);

    // Glowing Crimson Eyes
    ctx.fillStyle = '#e62222';
    ctx.fillRect(4, 10, 3, 3);

    // White Fangs
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(1, 15, 2, 2);
    ctx.fillRect(3, 17, 2, 2);

    // Muscular Claws / Limbs
    ctx.fillStyle = '#1c1714';
    ctx.fillRect(8, 22, 5, 12);
    ctx.fillRect(15, 22, 5, 12);
    ctx.fillRect(22, 22, 5, 12);
    ctx.fillRect(28, 22, 5, 12);

    // Sharp claws
    ctx.fillStyle = '#635349';
    ctx.fillRect(6, 32, 4, 3);
    ctx.fillRect(20, 32, 4, 3);

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    return texture;
  }
}
