# 07 — Tech Stack and Roadmap

## Stack

| Layer | Choice | Why |
|---|---|---|
| Renderer | **PixiJS v8** | WebGPU with WebGL fallback, excellent batching, it is a *renderer* not an engine so you are not fighting someone else's scene graph |
| Language | **TypeScript**, strict | The quest data is heavily typed; this is where most bugs get caught for free |
| Build | **Vite** | Fast HMR, which matters enormously for the hot-reload loop in [[06 Vault to Game Data Pipeline]] |
| Entities | **Hand-rolled ECS-lite** | A few hundred entities on screen. A full ECS library is overhead you will not recover |
| UI | **Plain DOM overlay** on top of the canvas | Dialogue, inventory, journal, map. DOM gives free text layout, accessibility and Ukrainian font handling. Do not build a text engine in Pixi |
| State | Small event-emitter store | The world-state store from [[01 World State and Quest Engine]] *is* the game state; UI subscribes to it |
| Saves | **IndexedDB** | Saves are tens of kB; localStorage would work but IndexedDB avoids quota surprises |
| Audio | **Howler.js** or raw WebAudio | Positional audio matters more than usual here — see [[00 Feasibility Verdict]] |
| Workers | Pathfinding, chunk decode | Keeps the main thread on rendering |
| Hosting | Static CDN | No server needed. The whole game is static files |

### Why PixiJS and not the alternatives

- **Phaser** — more batteries included, but its tilemap and arcade physics assume axis-aligned grids. You would fight it on isometric constantly.
- **Three.js with an orthographic camera** — genuinely tempting: real depth sorting, real lights, no Y-sort problems. Rejected because it pushes you into 3D asset production, which contradicts the AI-2D-art plan. Revisit only if the grey-box pipeline in [[05 AI Art Pipeline]] goes so well that you have models anyway.
- **Godot web export** — large WASM payload, slow first load, unreliable on mobile Safari. Bad fit for a browser-first game.
- **Bevy / Rust WASM** — excellent runtime, but the iteration loop is slow and the ecosystem for 2D isometric is thin. Wrong tool for a small team iterating on content.

The PixiJS instinct is correct.

## Performance budgets

Set these now and measure against them continuously:

| Budget | Target |
|---|---|
| Frame time | 16.6 ms (60 fps) on a mid-range laptop with integrated graphics |
| Resident VRAM | ≤ 512 MB (see [[02 Rendering Architecture]]) |
| Initial download to first playable | ≤ 15 MB |
| Per-region streamed download | ≤ 30 MB |
| Save file | ≤ 500 kB |
| Cold load to main menu | ≤ 5 s on a 20 Mbit connection |

## Build order — risk first

Three unknowns can kill this project. Everything else is work, not risk. Build in the order that retires them.

**Risk 1 — can AI produce a coherent animated Cossack that reads at game zoom?**
Biggest risk, cheapest to test. Test it first.

**Risk 2 — does the quest engine express the vault's real cross-references without special cases?**

**Risk 3 — does isometric locked-camera combat feel Gothic rather than Diablo?**

### Spike 0 — one character, one week

Before writing any game code. Grey-box one Cossack in Blender, rig, animate walk and attack, render 8 directions from the locked camera, stylise the frames, assemble a sprite sheet, view it at game zoom.

**Pass criterion:** it reads as a Cossack, the angle is stable across all 8 directions, and the walk cycle does not boil.

If this fails, the entire art plan needs rethinking and you have spent one week finding out. Do not skip this.

### Milestone 1 — the Hryts Dovbnia vertical slice

The single best slice in the vault, because it exercises almost everything:

- [[❔Wolf Attack]] — combat against a pack, loot, and a piece of information (`player.knows.strange_howling`)
- [[❔Unlucky]] — a three-way choice with no combat at all
- [[❔Swamp Healer]] — steal / ask / inform, with a permanent hostility outcome
- [[❔Curse]] — a boss gated on a consumable, at night, with a companion whose competence was decided two quests ago

Content: the Ingulsk palanka, the steppe, the pasture, the north swamp, Ostap's hut, the watering hole. NPCs: Naum, Honta, Taras, Hryts, Ostap, Pechyborshch. Mobs: wolves, mavky, the Shapeshifter.

**Pass criteria:**
- All three Hryts endings play through and visibly change [[❔Curse]].
- Stealing Ostap's root genuinely blocks [[❔Curse]], and the Shapeshifter remains alive and dangerous on the map.
- Taras's trust changes whether you get a map marker.
- The validator catches a deliberately introduced fact typo.
- 60 fps with the palanka populated.

This is a real, playable, ~40-minute game. If it works, everything else is content.

### Milestone 2 — full Ingulsk region and the joining chain

All of [[📃Ingulsk Introduction]] and [[📃Ingulsk Quests]], plus the Chapter 0 prologue in Kaffa and Chapter 1's arrival. Adds trainers, shops, the day/night cycle, NPC schedules, save/load, and the journal.

**Pass criterion:** a player can start at Kaffa and become an Ingulsk Cossack.

### Milestone 3 — Sich and Chapter 2

The Outer Circle, the audit chain ([[True Audit]], [[Kodak Audit]], [[Samara Audit]]), the Lithuanian merchant sequence with its faction-level ban and recovery, and region transitions. This is the first content that proves the multi-region architecture.

Requires resolving issues 1, 3 and 7 in [[08 Design Issues Found]] first.

### Milestone 4 — Kodak and Samara

Both joining chains, both regions, both trainer sets. Bulk content production against a proven pipeline.

### Milestone 5 — Chapter 3 and Ochakiv

Needs substantial new design work — Chapter 3 is currently mostly headings.

### Milestone 6 — the Otherworld, side content, polish

[[Otherworld Quest]] is a self-contained gem and a natural late addition. Plus [[Rare Animals]], the charakternyk chain and [[Sviatoslav's Saber]], [[Blind Cossack]], the lighthouse.

## On timing

I am not going to give you a calendar estimate, because it depends entirely on how much time per week goes into this and how much of the art pipeline you automate versus hand-fix. What I will say is that the *ordering* above is more important than the pace: each milestone is independently playable, and each one retires risk before adding volume.

The most common way projects like this die is building the world first and discovering at month nine that the animation pipeline does not hold up. Spike 0 exists specifically to prevent that.

## What to do first, concretely

1. **Spike 0.** One character, one week. Nothing else matters until this passes.
2. **Fix the eight design issues** in [[08 Design Issues Found]] — most are ten-minute edits to the vault, and issue 1 is a genuine soft-lock.
3. **Encode the four Shapeshifter-chain notes** with `sich` blocks per [[06 Vault to Game Data Pipeline]]. Doing this by hand, before building the compiler, will teach you what the schema actually needs to be.
4. Then start Milestone 1.
