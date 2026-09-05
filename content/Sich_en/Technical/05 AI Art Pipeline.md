# 05 — AI Art Pipeline

**This is the highest-risk part of the project.** Not the engine, not the quest system — the art.

The plan is to generate everything with AI: terrain, props, buildings, characters, animations, monsters, portraits, UI, item icons, the world map. That is achievable, but only if the pipeline is built around the two things image models are genuinely bad at.

## The two hard problems

**1. Angle consistency.** A locked isometric camera means every asset must be rendered from *exactly* the same viewing angle. Image models drift. Ask for "isometric Cossack hut" a hundred times and you get a hundred slightly different camera elevations. In a tiled world those mismatches are glaring — roofs that do not agree on where the horizon is.

**2. Frame-to-frame coherence in animation.** This is the real wall. Generating eight directions × eight animations × six frames per character means the model must keep the same character identical across ~380 images while changing only the pose. Per-frame generation produces boiling detail, drifting proportions, shifting shoulder patches. It looks broken in motion even when every single frame looks good in isolation.

Sizing the problem for this game: ~40 named NPCs, ~10 generic human types, ~15 monsters. At 380 frames each that is roughly **25,000 animation frames**. Per-frame image generation is not viable at that volume, at that consistency requirement, at any budget.

## The approach that works

**Grey-box 3D → render from the locked angle → AI stylise the render.**

1. Build crude 3D proxies in Blender. Genuinely crude — a capsule with a saber, a box with a roof. No texturing, no detail.
2. Rig humanoids to a single shared skeleton. One animation set (idle, walk, run, attack ×3, hit, die) retargets to every human character.
3. Render every frame from the **exact** 2:1 dimetric camera, outputting colour, depth and a segmentation mask.
4. Run the render sequence through an image model conditioned on depth/normals, with a fixed style reference.
5. Composite against the alpha from the segmentation mask.

Why this is the answer: **the geometry, not the model, determines the pose and the angle.** Consistency stops being something you beg the model for and becomes something the pipeline guarantees. The model's only job is to make one consistent-looking frame prettier, and it does that job well.

This is how most shipped "AI art" games actually work, whatever their marketing says.

Ranked alternatives, for the cases where grey-boxing is overkill:

| Approach | Use for | Do not use for |
|---|---|---|
| Grey-box → render → stylise | All animated characters and monsters | — |
| Image-to-3D → auto-rig → render | One-off props, buildings, static set dressing | Anything needing precise silhouette control |
| Direct per-frame generation | Terrain tiles, portraits, item icons, UI | **Any character animation** |

## Terrain

Terrain is the easy part and where AI generation genuinely shines.

Six biome sets, from the vault's own geography: **steppe, swamp, relict forest, river/estuary, mountain/mine, palanka interior** (packed earth, boardwalk, thatch).

Roughly 40 tiles per biome — base variants, transitions, edges, decals. ~240 terrain tiles total. Generate as seamless sets and validate tileability in the build.

## Buildings must be generated on a known footprint

Because of the depth-sorting decomposition in [[02 Rendering Architecture]], every building needs a declared tile footprint (2×2, 3×2, and so on) before generation, and must be sliced per tile column afterward. Decide the footprint vocabulary early — perhaps eight standard footprints — and generate to it. Retrofitting arbitrary building sizes into a slice-based sorter is painful.

## Keeping the Cossack identity

The single biggest failure mode for AI art in a folklore setting is that everything drifts toward generic western fantasy. Ask for "Cossack warrior" and you will frequently get a Viking, or a Witcher, or a Mongol.

Counter-measures, in order of effectiveness:

1. **Build a reference corpus first.** Historical images of the Zaporozhian Sich: oseledets (the scalp-lock), the drooping moustache, sharovary (wide trousers), the svytka and zhupan coats, kurin architecture with thatch and wattle, the Scythian stone babas of the [[Stone Circle]], steppe and swamp flora. Feed these as style references, not as words in a prompt.
2. **Lock a palette.** Steppe ochre, swamp green-grey, linen white, dried-blood red, tarnished brass. Quantize every generated asset to this palette as a post-process. This one automated step does more for visual coherence than any amount of prompt engineering.
3. **Silhouette rules as hard constraints.** The oseledets and moustache should be readable in a black-shape silhouette at game zoom. If they are not, the character does not read as Cossack no matter how good the texture is.
4. **Ban a word list.** Filter generated concepts that drift — horned helmets, plate armour, generic hoods.

The vault's own NPC notes are excellent prompt material. [[🧑Hryts Dovbnia]] is described down to *"old svytka, worn belt, oversized boots, old bow with the bowstring tied with a knot, big brown eyes with the expression of a dog that wants to be petted."* [[🧑Ostap Vernydub]] has *"white beard down to his waist, uncombed and with knots, a necklace of animal bones and teeth, a staff of black willow."* That is already a character brief. The notes that have this level of description should be generated first — they will come out best and will anchor the style for everything else.

## Reuse strategy

The full cast is unaffordable if every character is bespoke. Use the Diablo/Fallout approach:

- **~6 body proxies**: Cossack man, old man, woman, dzhura (youth), Tatar/Turk, monster-humanoid.
- Each named NPC = one proxy + palette swap + prop swap (Khoma's apron and big knife, Taras's whip, Ostap's staff and bone necklace, Honta's bow).
- **Unique portrait per named NPC** — this is where character actually lands, and portraits are cheap.

That reduces ~50 humans to 6 rigs and ~50 portraits. Monsters get more individual attention because they are fewer and more distinctive: [[Chorty]] (pig snout, hooves, tail), [[Harpy]], [[Mavky]], [[Upyr]], [[Vodianyi]], [[Levokryl]] (lion with eagle wings), [[Zmiy]] (three heads, fire), [[Shapeshifter]], [[Wolf]], [[White Fang]], [[Gaddia]], [[Lishyi]].

## Build system

Treat assets as build outputs, not as checked-in binaries.

```
art/
  style/                 palette.json, reference images, style prompts
  proxies/               .blend grey-box models + shared rig
  anim/                  shared animation clips
  recipes/               one .json per asset: proxy, palette, props, prompts, seed
  cache/                 content-hash-keyed generated output (gitignored)
  out/                   packed atlases + manifests (gitignored)
```

Each recipe hashes to a key over `{proxy, rig, clip, palette, prompt, seed, model version}`. Regeneration is incremental — change one NPC's palette and only that NPC rebuilds. Without this you will regenerate everything constantly and burn enormous amounts of time and money.

Commit the **recipes**, not the images. Recipes are small, diffable and reviewable. Images are large and opaque.

## QA gates — automated, in the build

Every one of these is cheap to implement and catches problems that are expensive to find by eye across thousands of assets:

1. **Silhouette readability** — downscale to game size, threshold to black, check the shape is distinguishable from the other silhouettes in its category.
2. **Angle drift** — overlay the reference dimetric grid; flag horizon deviation beyond a tolerance. Catches the failure mode that ruins tiled worlds.
3. **Tileability** — tile the asset 3×3, run edge-difference detection, flag seams.
4. **Palette conformance** — percentage of pixels outside the locked palette after quantization.
5. **Alpha cleanliness** — no stray semi-transparent halo pixels, which is the most common artefact from background removal.
6. **Animation coherence** — per-frame pixel delta across an animation; a spike means the model drifted on that frame. Flag for regeneration or manual fix.
7. **Footprint conformance** — building sprites match their declared tile footprint.

## Provenance

Keep a per-asset record: model and version, prompt, seed, reference images used, date, licence terms in force at generation time. This costs almost nothing to write and can matter a great deal later — for storefront requirements, for platform policies, and for your own ability to reproduce or defend an asset. Store it beside the recipe.

## Honest expectations

- Terrain, props, buildings, icons, UI, portraits: **AI will do this well.** Expect light touch-up.
- Monsters: **AI will do this well**, especially the folkloric ones, which are visually distinctive.
- Animated humanoid characters: **AI alone will not do this.** The grey-box pipeline will, but that pipeline is real work — Blender modelling, rigging, and an animation set. Budget for it as actual production, not as prompting.
- Expect a **human touch-up pass on roughly 10–20%** of generated assets. Plan for it rather than being surprised by it.

The single most valuable thing to do first is prove this pipeline on one character. See [[07 Tech Stack and Roadmap]].
