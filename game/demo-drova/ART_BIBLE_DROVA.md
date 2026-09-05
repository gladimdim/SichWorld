# Art Bible — DROVA-style slice (v0.1, dummy assets)

> Reference: **DROVA – Forsaken Kin** (Just2D): top-down oblique pixel art, gritty low-saturation
> palette, dense bleak forests, oppressive twilight, Gothic faction-fantasy mood — transplanted from
> Celtic myth to the 17th-century Cossack steppe (`Loca Deserta`).
> Living assets: `game/demo-drova/assets/` · generator: `tools/generate_assets.py` · play: `index.html`.

## 1. Style pillars
1. **Bleak, not bright.** Desaturated olive/mud/teal world; a single warm accent per scene
   (red zhupan, campfire, lit window). Nothing neon, no pure colors.
2. **Dense ground.** Every grass tile carries noise + dry tufts; empty flat tiles are forbidden.
3. **Dark outline + ground shadow.** All objects: 1px near-black outline `(24,26,20)`,
   soft black blob shadow at base. This alone sells the DROVA look.
4. **Top-light, bottom-shade.** Light from top-left: highlight blobs top-left, deep shade
   bottom-right on canopies, rocks, roofs.
5. **Dithered transitions.** Shore foam, shade gradients and thatch use scattered-pixel dither,
   never smooth gradients.

## 2. Palette (locked — agents must quantize to these)
| Use | Colors |
|---|---|
| Steppe grass | `#4A5230` `#5A6140` `#3A4028` `#424A2C`, tuft `#686E48` / `#343A24` |
| Dirt road | `#6F6250`, dark `#574C3C`, light `#7D725E`, stones `#7D7466` |
| Water | `#2E4448`, dark `#24383C`, glint `#5A7A82`, foam `#8AA5A0`, wet bank `#6B6250` |
| Wood / plank | `#4A3828` / `#5A4632`, dark `#2E2418`, rail `#423224` |
| Leaf (oak) | `#343E26`, dark `#262E1C`, light `#58603C` |
| Pine | `#2C3828`, dark `#1E281C`, light `#465438` |
| Rock | `#6A6864`, dark `#4C4A46`, light `#8C8A84` |
| Hut | wall `#8A7A5C`, weave `#685A42`, thatch `#A08C5A`/`#806E46`, glow `#D8A848` |
| Hero | coat `#8A3A32`, skin `#CAA884`, trousers `#34323A`, steel `#969694`, brass `#B4965A` |
| Fire | `#DC7832` `#F0C864` `#C85028` |
| Outline / shadow | `#181A14`, shadow black @ ~35% |

## 3. Specs (HD pass: 48px native = 3× detail)
- **Tiles 48×48 native**, integer scale only (demo: 1×). `NEAREST`, no antialiasing, ever.
- **Camera:** top-down oblique (DROVA-like), y-sorted objects, anchor = bottom-center.
- **Trees 96×96** (trunk collides 1 tile, canopy overhangs), **hut 144×120** (3×2 footprint),
  **hero 48×72** (down/up/side + 2 walk frames; mirror side for left).
- **Water:** 4-frame shimmer; foam only where water meets land (edge autotile + corners).
- **Light:** one warm radial glow per fire (code-side, flicker `sin` mix), global cool grade
  `rgba(20,26,40,.10)` + vignette. No per-sprite filters in the hot loop.
- **No semi-transparent pixels inside sprites.** All shading is opaque or ordered-Bayer dither
  (`spray()` in the generator) — alpha is reserved for fully-transparent cutouts only.
  (Lesson learned: soft-alpha shading flattens to black in several compositors.)

## 4. Rules for art agents (when replacing dummies with real AI art)
1. Keep tile size, anchor, outline and palette-lock; post-pass: reject out-of-palette pixels.
2. Fixed seed + this sheet as style reference in every prompt; per-faction accent only
   (Ingulsk hunter-green, Kodak fisher-blue, Samara smith-orange).
3. Generate tilesets as seamless grids, test in Tiled + in-game before merge (Perf Warden gate).
4. Final game camera is **2:1 isometric** (see `GAME_FEASIBILITY.md` §5) — this top-down slice
   validates palette/mood; iso variants of oak/pine/hut/hero are the next art task.
5. Log model + license per asset in `assets/ATTRIBUTION.md`.

## 5. Demo contents
Playable slice: 56×40 map, winding river + bridge, dirt roads, NW pines, SE oak woods,
riverside hut with paddock + campfire, rocks/bushes, WASD/arrows hero with collision,
camera follow, fireflies/embers, arrival toast at the hut door (mini WorldDirector taste).
Regenerate everything: `uvx --with pillow python tools/generate_assets.py`.
