# 02 — Rendering Architecture

PixiJS v8, isometric 2.5D, locked camera. Diablo/Fallout framing, not free-rotating.

## Projection

Use **2:1 dimetric** — the classic "isometric" of Diablo 2, Fallout Tactics, Age of Empires 2. Tiles are diamonds twice as wide as tall.

**Tile size: 128 × 64 px**, authored at 2× (256 × 128) so the game holds up on high-DPI displays and allows a modest zoom range without visible softness.

Why 2:1 rather than true 30° isometric: the maths is exact in integers, so tiles align perfectly with no sub-pixel seams, and every AI-generated tile can be validated against a fixed diamond mask. True isometric introduces irrational ratios and seams that are miserable to chase across thousands of generated assets.

```ts
const TW = 128, TH = 64

const worldToScreen = (x: number, y: number, z = 0) => ({
  sx: (x - y) * (TW / 2),
  sy: (x + y) * (TH / 2) - z * (TH / 2),
})

// Inverse, for mouse picking
const screenToWorld = (sx: number, sy: number) => ({
  x: (sx / (TW / 2) + sy / (TH / 2)) / 2,
  y: (sy / (TH / 2) - sx / (TW / 2)) / 2,
})
```

One tile ≈ 1.5 m of fiction. A 900 × 900-tile region is therefore ~1.35 km across — a solid ten-minute walk end to end, right in Gothic territory.

## Depth sorting

The classic isometric pain. Painter's algorithm sorted by `x + y` works for single-tile objects and breaks for everything interesting — the kurin house, Khoma's butcher shed, Zhydov's mill on the hill.

Approach:

- **Terrain** goes in one non-sorted layer, drawn back to front by row. It never needs sorting against itself.
- **Entities and props** go in a sorted layer, keyed on `(x + y) * 1000 + z`. Pixi's `sortableChildren` handles this, but set `sortDirty` manually rather than letting it re-sort every frame — only actually-moving entities need re-sorting, which is a couple of dozen out of hundreds.
- **Multi-tile buildings** get decomposed at build time into per-tile-column slices, each sorted independently. This is the only reliable fix. A 3×2 house becomes six sortable slices. The AI pipeline must therefore generate buildings on a known tile footprint — worth deciding early because it constrains prompts (see [[05 AI Art Pipeline]]).
- **Tall thin things** (the lighthouse, the Stone Circle idol, trees) get an explicit `sortOffset` authored per prop, because their visual anchor is not their logical footprint.

**Walking behind walls:** when the player's screen-space bounding box overlaps a building drawn in front of them, fade that building's slices to ~40% alpha over 150 ms. Cheap, and it is the convention players already know from this genre.

## Streaming

Regions are chunked at **32 × 32 tiles**. A 900 × 900 region is ~790 chunks.

- Keep a 5 × 5 chunk window resident around the camera, plus a one-chunk prefetch ring.
- Chunks carry terrain indices, prop placements, collision bits and navmesh data — a few kB each, not images.
- **Textures are per-region atlases, not per-chunk.** Loading an atlas mid-walk causes a hitch; loading one per region at the transition does not. This is another argument for regional architecture over one continuous world.

## Texture budget

Be realistic about a browser tab on mid-range hardware:

| Bucket | Budget |
|---|---|
| Terrain atlas (one biome set) | 2 × 4096² RGBA ≈ 128 MB |
| Props and buildings | 2 × 4096² ≈ 128 MB |
| Characters resident in region | 3 × 4096² ≈ 192 MB |
| UI, portraits, effects | 1 × 4096² ≈ 64 MB |
| **Total resident** | **~512 MB VRAM** |

That is the ceiling you should design to. Above it, low-end integrated GPUs start evicting and you get stutter. Compressed textures (Basis Universal / KTX2) cut this by 4–6× and are worth adopting before you need them, not after.

Evict aggressively on region transition — that transition exists partly to give you a clean moment to swap atlases.

## Sprite counts and what breaks first

PixiJS v8 batches well. A few thousand sprites at 60 fps is comfortable. In practice the ordering of failure is:

1. **Texture memory**, long before draw calls. Mitigation: atlas discipline, region eviction, compressed textures.
2. **Per-frame JS allocations** causing GC pauses during streaming. Mitigation: object-pool everything that churns — particles, damage numbers, path nodes.
3. **Depth sort cost** if you naively re-sort a large container every frame. Mitigation: dirty-flag it.
4. **Pathfinding and NPC ticks on the main thread.** Mitigation below.
5. Draw calls, eventually, if props are not atlased together.

## Day and night

Several quests need it and it is not optional: the [[Shapeshifter]] "appears only at night"; the fern flower in [[The Secretary's Sick Son]] grows only at night; the vagrant tearing Pylyp's nets appears in the evening ([[Torn Nets]]); Konoval's horses are taken at night ([[Stolen Saber]]).

Implementation, in ascending cost:

- **Global tint + ambient colour ramp** keyed to the clock. Nearly free, and gets you 70% of the effect.
- **Additive light sprites** for torches, Honta's fire, Ostap's fire, the lighthouse. A soft radial sprite in an additive-blended container above the world. Cheap, looks good, and the lighthouse becoming visible when you finish [[Ivan Svitilo's Lighthouse]] is a genuinely lovely payoff.
- **Full 2D light-map shader** with per-pixel attenuation. Only if the above proves insufficient. It will not, for this game.

Do **not** attempt normal-mapped dynamic lighting on AI-generated sprites. Generating consistent normal maps across thousands of AI assets is a research project, not a feature.

## Interiors

Gothic lets you walk into buildings. Two options:

- **Cutaway roof** — same scene, hide the roof slice when the player is inside the footprint. Best for small structures: kurin houses, Ostap's hut, Khoma's shed, the beekeeper's place. No transition, keeps the world continuous.
- **Separate small scene** — for anything with real interior content: the tavern, the church, the mine, the caves, the Quartermaster's warehouse. Load as a tiny standalone map.

The mine in [[Blacksmith's Coal]] and the caves in [[Find the Settlers]] and [[Drive the Djinn from the Cave]] are substantial spaces — those are scenes, not cutaways.

## Camera

- Locked angle, no rotation.
- Follow the player with a dead-zone box and critically-damped smoothing.
- Zoom clamped to a narrow band (roughly 0.75× – 1.25×). Wide zoom-out ruins silhouette readability and tempts you into generating detail nobody sees.
- Clamp to region bounds so you never show the void.

## Mouse picking

Screen-space hit testing in isometric is error-prone if done with rectangles. Use:

1. `screenToWorld` to get the candidate tile.
2. Check the 3 × 3 tile neighbourhood for entities (an entity's sprite can overhang its tile).
3. Sort candidates by depth, test against per-sprite **alpha masks** (a 1-bit downsampled mask baked at build time), take the topmost hit.

Bake those masks in the asset pipeline. Without them, clicking a Cossack standing near a tree is a coin flip.

## Pathfinding

A* on the tile grid, with:

- The grid stored as a flat `Uint8Array` per chunk.
- **All pathfinding in a Web Worker.** Requests are batched per tick and results streamed back. This keeps wolf packs and NPC schedules off the render thread.
- Hierarchical pathing between chunks for long routes (NPC daily schedules crossing the palanka) — chunk-level graph first, tile-level A* only within the current chunk.
- Local avoidance for the 2–5 wolves of a pack so they do not stack into one tile.

## The map

[[Rare Animals]] calls for "a text and visual map". Render it from the same region data at build time — a downsampled terrain image plus discovered markers, with fog for unvisited chunks. Same source data, no separate authoring.
