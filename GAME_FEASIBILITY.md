# SichWorld Web RPG — Feasibility Analysis
### Isometric 2.5D pixel-art open-world RPG in the browser (PixiJS or similar) + fully AI-generated art / music / world, Gothic-inspired quest system

> Date: 2026-09-04 · Source of truth: Obsidian vault in `content/` (`Sich_en/` ~182 files, `Січ/` ~185 files) · Target: real playable web game, not a demo.

---

## 0. TL;DR verdict

**Yes, feasible — but not as "one giant seamless GTA-scale map on day one".**

Build it as a **zoned open world** (exactly like Gothic 1/2 did): connected hand-authored zones (Sich Outer/Inner Circle, Ingulsk / Kodak / Samara palankas, North River, Central Tavern / steppe wilderness, Kaffa tutorial, Ochakiv finale) with streaming between zones. That model:

- maps 1:1 to what the vault already describes,
- runs at 60fps in a browser with PixiJS,
- lets a fleet of AI agents generate content zone-by-zone with a consistent style,
- lets you ship a playable Gothic-like vertical slice in months, then grow to "huge".

Recommended stack: **`PixiJS v8 + TypeScript + Tiled + custom lightweight RPG framework`** (ECS-lite, quest state machine, A* pathfinding, dialogue/journal UI). Phaser 3 is a valid faster alternative for the first slice (see §4). Godot-web and full 3D are explicitly **not** recommended for this vision.

Biggest risks are **not rendering** — they are **scope, art consistency, and quest scripting volume**. All three are manageable with the phased plan in §9.

> Note: `package.json` already depends on `pixi.js ^8.15.0` (used by Quartz for the graph view), so PixiJS adds zero new license/toolchain risk to this repo.

---

## 1. What the vault actually asks us to build

Derived from reading `content/Sich_en` + spot-checks of `content/Січ` (Ukrainian original).

### 1.1 World / setting

- **Time/place:** ~1674, "Loca Deserta" — southern Ukraine steppe. Center: **Sich** (Zaporozhian Cossacks). See `content/Sich_en/Lore/Loca Deserta Sich Universe.md`.
- **Factions (6 with real politics):** Sich, Ottoman Empire, Crimean Khanate, Hetmanate, Polish-Lithuanian Commonwealth, Muscovite Tsardom. Permanent-war / raid / trade relations are specified — i.e. a faction-reputation system is *required*, not optional.
- **Playable geography (already named in vault):**

| Zone | Vault location | Role in game |
|---|---|---|
| Kaffa prison | `Quests/Chapter 0/` | Tutorial: prison break during Sulima's raid on Kaffa, time-limited moral choice (`Free the Slaves.md`) |
| Sich — Outer Circle | `Geography/Sich/Outer Circle/` | Hub: quartermaster, pilots, baker's daughter, bride/betrothal quests |
| Sich — Inner Council | `Geography/Sich/Inner Council/` | Late-game: Ataman Sulima / Sirko audience, raid planning |
| Ingulsk palanka | `Factions/Ingulsk/` | Joinable faction: ~8 joining quests + ~14 palanka quests |
| Kodak palanka | `Factions/Kodak/` | Joinable faction: 7 joining quests + treasure/healing chains |
| Samara palanka | `Factions/Samara/` | Joinable faction: 6 joining quests + miners/gunpowder chains |
| North River + Stone Circle + Lighthouse | `Geography/North River/` | Wilderness / mystery zone (`Return of the Lighthouse.md`) |
| Central Area Tavern | `Geography/Central Area/Tavern.md` | Social hub, brawl quest |
| Ochakiv (finale) | `Quests/Main Quest.md` | Siege: caves → wall breach → citadel duel |

- **Bestiary:** mundane steppe fauna (wolves, saiga, rabbits, `White Fang.md`) + Slavic fantasy (`Monsters/Magic/`: Chorty, Upyr, Vodianyi, Mavky, Lishyi, Zmiy, Harpy, Shapeshifter, Levokryl, Gaddia). So the game needs **two AI/spawner families**: wildlife ecology + fantasy encounters.
- **Arsenal:** sabers, bows, muskets + unique weapons (`Sviatoslav's Saber.md`), consumables (potions, poisoned arrows, vision potion).

### 1.2 RPG system (small, Gothic-like — good news)

From `RPG Elements/Character Development.md` + `Weapon Skills System.md`:

- Attributes: **Strength** (melee/musket gate + damage), **Agility** (bow gate + bow/musket damage), **Intelligence** (alchemy + readable books), **Health** (HP pool).
- XP → Level → **+10 training points per level**, spent **only at trainers** (classic Gothic gate — forces player to find/pay NPCs).
- Weapon skill 0–100% in tiers: Beginner (0–29) / Fighter (30–59) / Master (60–89) / Expert (90–100) → combo length + attack speed + crit chance (= skill%).
- Damage: crit `(weapon_damage + skill) − armor`, normal `(weapon_damage + skill)/2 − armor`, floor 2–3 HP.

This is *trivially implementable* in JS/TS. No complex stats, no classes — scope-friendly.

### 1.3 Quest system (the Gothic heart — the real scope driver)

Main line (`Quests/Main Quest.md`, `Chapter 0` … `Chapter 3`):

1. **Ch.0 Kaffa** — linear tutorial with combat + timed rescue choice.
2. **Ch.1 Entering the Sich** — must join **one** palanka via its joining chain (`📃Ingulsk Introduction.md`, `Joining Kodak.md`, `Samara Introduction.md`, …).
3. **Ch.2 Higher Circle** — audits (`Kodak Audit.md`, `Samara Audit.md`, `True Audit.md`), ataman audience with the ring.
4. **Ch.3 Gathering** — parallel fetch/craft quests (horses, boats, provisions, powder, cannons, people).
5. **Finale** — Ochakiv stealth/sabotage → siege → boss duel → cutscene.

Side content: ~40+ fully written quests in the three palankas alone (Ingulsk has 8 joining + 14 camp quests), plus lighthouse, charakternyk (mage), otherworld/island, misc (`Blind Cossack.md`), global hunting (`Rare Animals.md`).

The vault's signature quest — **`❔ First Hunt.md`** — is the quality bar and proves Gothic influence:

- quest giver hints you should *ask around*;
- 4 NPCs each change the hunt (poison arrows slow the saiga, vision potion reveals it, Taras gives an exact map marker **only if** you did `Wolf Attack` before, Hryts the apprentice flushes bonus rabbits);
- 3+ hunt resolutions (one-shot kill / chase / long search + wolf ambush);
- NPC reacts differently on return depending on what you did.

Implication: quests are **stateful dialogue + reputation + inventory + world-flag graphs**, not "kill 10 rats". The engine must support: preconditions, staged objectives, alternative solutions, NPC memory/trust, map markers, timed events, companions. Totally doable on web (see §6) — but every quest needs structured data + testing. **Content volume, not engine power, is the bottleneck.**

**Rough content inventory (EN vault, Sept 2026):**

- ~60–80 quest documents (main + joining + camp + global + otherworld), most with 2–5 stages and 2–4 outcomes.
- ~40–50 named NPCs with dialogue (Ingulsk 14 + merchants, Kodak 7, Samara 8, Sich Outer 10+, river/Sich council extras).
- ~10 zones + interiors (tavern, lighthouse, caves, citadel).
- ~15+ monster types across 2 families.

That is roughly the scale of **Gothic 1 Chapter 1–2**, i.e. a 10–20h RPG. Achievable — in phases.

---

## 2. Target experience restated (so tech choices trace to it)

- **Camera:** fixed-angle **isometric 2.5D** (2:1 diamond, e.g. 64×32 ground tiles), panning + zoom, y-sorted characters/props, roof-fade for interiors. No free 3D orbit.
- **Look:** crisp **pixel art** (characters ~32–64px tall, tiles 32/64px), limited steppe palette, day/night tint + torch/lantern lights.
- **Feel:** Gothic pacing — slow, faction-gated, trainer-gated, journal-driven, NPC routines (sleep/work/patrol), crime/reputation reactions.
- **Platform:** modern desktop browsers first (Chrome/Edge/Firefox/Safari), 60fps at 1080p; playable on mid Android/iOS second; no install, URL-shareable; offline/PWA eventually.
- **All art/audio/world AI-generated:** tiles, sprites, portraits, VFX, music stems, SFX, map layouts — with human/agent review gates.

---

## 3. Hard web constraints (what the browser gives and takes)

| Topic | Reality in 2026 | Consequence for us |
|---|---|---|
| Rendering | WebGL2 everywhere, WebGPU emerging (PixiJS v8 supports both). Sustained 2D sprite throughput is *huge* (10k+ batched sprites) if atlased + culled. | Iso pixel RPG is **not GPU-bound** if we batch + cull. Per-sprite filters/shadows are what kill perf — budget them. |
| Memory | Tab budget ~1–4GB desktop, ~0.5–1GB mobile Safari. Texture upload/GC pauses are the real enemy. | Stream zones; cap loaded atlases (~100–200MB); 2048px atlases; dispose on zone switch. |
| Download | Users tolerate ~10–30MB initial, ~100–300MB cached total for a "real game". | Code-split per zone; lazy-load music/atlases; PWA + IndexedDB cache. No 40MB WASM blob. |
| Audio | Web Audio is fine (positional, stems, crossfade). Autoplay requires a user gesture. | Start menu → "click to enter" unlocks audio; use Howler/Tone abstractions. |
| Input | Keyboard+mouse first; touch second; gamepad via Gamepad API. | Iso click-to-move + WASD both; big touch targets for dialogue/journal. |
| Save | `localStorage` (small) + IndexedDB (large, async). | Serializable world-state + slots + autosave; cloud saves later (backend). |
| Multiplayer | WebSocket/WebRTC possible but doubles scope. | **Single-player first.** Co-op/MP explicitly out of MVP. |

Bottom line: the browser is a first-class 2D RPG platform *today*. The failures of web RPGs are almost always scope/content-pipeline failures, not "browser too slow".

---

## 4. Engine/library comparison (PixiJS vs. the field)

### 4.1 PixiJS v8 (recommended default)

- **What it is:** high-performance 2D *rendering* engine (not a full game engine). WebGL2/WebGPU, sprite batching, containers, filters, assets manager, accessibility.
- **Strengths for us:** fastest 2D renderer on web; full control over iso projection, y-sort, lighting, day/night; tiny core (~400KB) → fast load; huge ecosystem (`@pixi/cull`, `pixi-spine` if needed, pub/sub, devtools); already in this repo's `package.json`; TypeScript-first.
- **Weaknesses:** no built-in tilemap editor, physics, pathfinding, ECS, dialogue, save system — we build or import each (all solved problems, see §5–§7).
- **Verdict:** best fit for "custom iso 2.5D pixel Gothic-like with full art control". Choose if we want maximum visual ownership and are willing to own a thin game framework (~2–4k LOC).

### 4.2 Phaser 3.80+ (fastest path to a playable slice)

- **What it is:** full *game framework*: scenes, cameras, arcade/matter physics, tilemaps (Tiled JSON), tweens, particles, input, audio, scale manager.
- **Strengths:** quickest to vertical slice (tilemap + player + NPC + dialogue in days); great docs/examples; fine for iso via plugins or staggered maps.
- **Weaknesses:** renderer older/slower than Pixi v8 for heavy custom iso + lighting; iso support is community-level, not first-class; opinionated scene model can fight a big RPG architecture later.
- **Verdict:** pick Phaser **only if** the priority is "playable quest demo in 4–6 weeks with a tiny team". Migration to Pixi later is a rewrite — so decide upfront. For the stated "huge RPG" goal, Pixi wins long-term.

### 4.3 Godot 4 web export (not recommended for this vision)

- Strengths: real engine (2.5D, animation, nav, dialogue add-ons), great for desktop builds.
- Blockers for web: 20–40MB WASM + slow cold start, weaker mobile Safari perf, longer iteration loop for web UI (journal/dialogue/inventory are DOM-easier), pixel-iso still custom. Good for a Steam port *later*, bad as the web-first foundation.

### 4.4 Three.js orthographic / stacked-sprite "2.5D" (not recommended)

- Tempting for height/depth, but we lose pixel crispness, double asset cost (need depth/normals), and gain nothing the design requires. Gothic's 3D climbing/jumping is out of scope for iso anyway.

### 4.5 Other 2D web frameworks (MelonJS, Excalibur, Kaplay, Babylon 2D)

- Fine engines, smaller hiring/community pools than Pixi/Phaser. No decisive advantage for an iso RPG.

**Recommendation: PixiJS v8 + TypeScript.** Keep Phaser as a prototyping fallback: if the team stalls on framework code, spike the Kaffa tutorial in Phaser in 2 weeks to validate quest/dialogue fun, then port lessons back. Do not ship two engines.

**Proposed core versions (Sept 2026):** `pixi.js ^8.15`, `typescript ^5.9`, `vite ^6`, `howler ^2.2` (or `tone ^15` for adaptive music), `pathfinding` (custom A*/JPS on grid), `zustand` or `signia` for UI state, `preact` (already in repo) or `react` for journal/dialogue/inventory DOM overlay.

---

## 5. Isometric 2.5D + pixel art on PixiJS — how it actually works

### 5.1 Projection & sorting (solved, just must be disciplined)

- Diamond tiles 2:1 (e.g. 64×32 ground, 64×96+ walls/trees with height offsets). World→screen: `sx = (x−y)·tw/2`, `sy = (x+y)·th/2 − z`.
- **Y-sort:** `zIndex = x + y` (+ height bias for tall sprites); `sortableChildren = true` per layer. One container per layer: `ground / fringe-low / actors / fringe-high / roof / weather / lighting`.
- **Occlusion:** roof/treetop alpha-fade when player is behind; fringe tiles drawn above actors only where needed (split tilesets into ground vs. above-actor variants at authoring time).
- **Pixel crispness:** `TextureStyle`/`scaleMode = NEAREST`, `roundPixels = true`, camera snaps to device-pixel grid, integer zoom steps (1×/2×/3×), antialias off for world layer (on for UI text only).

### 5.2 Map authoring that AI agents can actually produce

- Author in **Tiled** (`.tmj/.tmx`) with a fixed tileset contract (e.g. 64×32 ground, 32px grid logic). Export JSON → custom loader builds Pixi containers + collision grid + spawn markers + trigger rects.
- AI agents generate **tileset PNGs + Tiled maps**, never raw Pixi scene code. Humans/agents review in Tiled + in-game debug view (grid, collision, zones, markers overlay — build this early).
- Zone size guidance: 128×128–256×256 logic tiles per zone (≈ Gothic camp scale). The "open world" is the *graph of zones* with seamless-ish gates (fade-through portals on zone edges, not loading screens where avoidable).

### 5.3 Performance budget that keeps 60fps

- **Draw calls:** <150–250 (batch ground into few large meshes/chunks; use `pixi.js/advanced-blend` sparingly).
- **Culling:** viewport + margin culling every camera move (`@pixi/cull` or hand-rolled spatial hash); off-screen NPC AI ticks at reduced rate (LOD: full / simple / frozen by distance — Gothic NPCs already work this way).
- **Atlases:** per-zone atlases ≤2048px, `NEAREST`, shared character atlas across zones; pool projectiles/particles/damage numbers.
- **Lights:** 1 fullscreen day/night tint + ≤8–12 point lights (torches) via a lightmap canvas composited over world; avoid per-sprite dynamic filters in the hot loop.
- **Target numbers:** ≤500 visible sprites, ≤2k active tiles/chunks, ≤100 pathfinding agents (only ~10–20 fully simulated near player). Everything else is data.

This is well within Pixi v8 on a 5-year-old laptop. Mobile needs lower light counts + smaller view distance — a settings toggle.

---

## 6. Quest/dialogue/journal system — vault Markdown → playable data

This is the core IP. Design it as **data, not code**: writers (human or AI agents) edit quest/dialogue files; the engine interprets them.

### 6.1 Pipeline: Obsidian Markdown → validated JSON

The vault already uses `[[wikilinks]]`, headers, and stage lists — keep writing that way, add a thin frontmatter contract:

```md
---
quest_id: ingulsk_first_hunt
type: joining_quest
faction: ingulsk
giver: naum_lysenko
stages: [start, info, hunt, return]
preconditions: [{ quest: sick_livestock, state: done }]
---
```

Build step (`node scripts/build-quests.mjs`): parse Markdown → `quests/*.json` + `dialogue/*.json` → JSON-schema validation → missing-link/orphan-NPC/dead-end report in CI. The game loads only JSON. This preserves the Obsidian writing UX while making quests testable.

### 6.2 Runtime model (Gothic-compatible, minimal)

```ts
type QuestState = 'available'|'active'|'done'|'failed'|'obsolete';
interface QuestStage { id: string; objective: string;
  onEnter?: Effect[]; onExit?: Effect[]; }
interface QuestDef { id: string; stages: QuestStage[];
  transitions: { from: string; event: string; to: string;
    conditions?: Cond[]; effects?: Effect[] }[]; }
type Cond =
  | { t:'quest'; id:string; state:QuestState }
  | { t:'flag'; k:string; v:string|number|boolean }
  | { t:'item'; id:string; n:number }
  | { t:'rep'; faction:string; min:number }
  | { t:'skill'; k:string; min:number };
type Effect =
  | { t:'give'; id:string; n:number } | { t:'take'; id:string; n:number }
  | { t:'flag'; k:string; v:string|number|boolean }
  | { t:'rep'; faction:string; d:number }
  | { t:'xp'; n:number } | { t:'marker'; id:string }
  | { t:'spawn'; id:string; at:string } | { t:'routine'; npc:string; r:string };
```

Dialogue = per-NPC tree with `conditions` on lines/choices + `effects` on selection (covers First Hunt's "Taras only helps if Wolf Attack done", Honta's arrows, shop/trade/train branches, crime bribes).

Journal (Gothic hallmark) = auto-log of stage entries + map markers + faction page. Save = `{ questStates, flags, inv, rep, npcRoutines, time, pos }` → IndexedDB slots + quicksave.

### 6.3 Example: First Hunt as data (proof the model covers the vault)

`info` stage sets flags `met_honta / met_pechyborshch / met_taras / took_hryts` + items (poison arrows, vision potion) via dialogue effects; `hunt` stage has three entry variants conditioned on those flags (marker vs. search-area vs. blind search + wolf ambush spawns); `return` branch conditions produce Naum's three reaction texts + bonus knife. No code change per quest — only data. **If a quest can't be expressed in this schema, extend the schema, not the engine.**

### 6.4 Testing quests (mandatory for AI-authored content)

- Schema + link validation in CI.
- Headless quest simulator: fire events, assert reachable `done`, no dead ends, rewards granted. AI agents must green-light this before art pass.
- In-game debug console: `quest set / stage jump / tp / give / flag` — speeds iteration 10×.

---

## 7. AI-agent content pipeline (art, music, maps — with consistency)

"Everything generated by AI agents" is feasible **iff** there is an art bible + automated gates. Raw foundation-model output without constraints will drift (five different saber styles, clashing palettes).

### 7.1 Roles (run as agent swarm with review gates)

| Agent | Input contract | Output | Gate |
|---|---|---|---|
| Art Director | palette + tile dims + reference sheets | `ART_BIBLE.md` (palette hex, tile sizes, 4-dir/8-dir sprite spec, portrait spec, roof/height rules) | human approve once |
| Tileset Smith | art bible + zone brief | seamless 64×32 tiles + wall/fringe variants, indexed palette PNG | palette check + seamlessness test + in-Tiled eyeball |
| Sprite Wrangler | character sheet spec | idle/walk/attack/hit/death, 4-dir min (8-dir for hero), hitboxes | frame-count + pivot + atlas-pack check |
| Portrait/Dialogue Painter | NPC list from vault | 128–256px portraits, same lighting/line spec | likeness-vs-sprite review |
| Map Mason | zone brief + tileset IDs | Tiled `.tmj` + collision + spawns + triggers | loader validation + playthrough bot |
| Quest Scripter | vault quest MD | quest/dialogue JSON per §6 | schema + simulator green |
| Lore Keeper | EN↔UA vault | strings/i18n keys, no logic change | link + term-base check |
| Music Bard | mood tags per zone (`steppe_day`, `tavern_night`, `siege`) | loopable OGG stems (base/drums/mLead) + stingers | loudness + loop-click test |
| SFX Foley | action list | saber/bow/musket/hit/UI/footstep sets | peak/RMS + naming check |
| Perf Warden | budgets from §5.3 | per-zone report (atlases, draws, lights) | CI fail if over budget |
| QA Revenant | quest JSON + build | scripted playthroughs, screenshot diffs | zero dead-end quests to merge |

### 7.2 Practical generation guidance (2026 tooling)

- **Pixel tiles/sprites:** diffusion (SDXL/Pony + pixel-art LoRA) at 4–8× then downscale + palette-quantize + manual/agent cleanup pass; **or** dedicated pixel generators. Always post-process: de-band, enforce palette, pad to tile grid, generate normal/roughness only if lighting demands it (usually skip).
- **Consistency tricks that actually work:** fixed seed + style reference sheet in every prompt; palette-locked post pass (reject pixels outside palette); per-faction accent colors (Ingulsk green/hunter, Kodak blue/fisher, Samara blacksmith orange); same canvas/padding spec for all humanoids so animation retargeting holds.
- **Music:** generative stems (Suno/Udio-style) or procedural (Tone.js layers) — either way deliver **loops + intensity layers** (explore/combat/siege) + stingers (quest done, level up, discovered). AI music is the *lowest-risk* AI asset class — approve fast.
- **Legal/hygiene:** log model + license per asset in `assets/ATTRIBUTION.md`; keep a "clean-room" alternative for any asset with unclear provenance; UA/EN folk motifs reviewed for cultural accuracy (Cossack attire, Orthodox/Catholic/Islamic/Steppe symbols — the vault's politics demand care).

### 7.3 Asset volume sanity check (why phases matter)

Full-game estimate: ~10 zones × (1–2 ground tilesets ~200–400 tiles + ~100 props + ~10–20 buildings) + ~50 NPC sprite sets + ~15 monster sets + ~100 weapons/icons + portraits + VFX + ~30–60 music stems + ~200 SFX. At AI speed that's generatable — but **curation/integration** is ~70% of the work. Hence: one zone's full pipeline first (Ingulsk), then parallelize.

---

## 8. Architecture proposal (concrete enough to start coding)

```
game/                      # new top-level app (Vite+TS), Quartz vault stays in content/
  src/
    engine/                # iso projection, camera, loader (Tiled), cull, lights, pool
    rpg/                   # stats, xp/levels, trainers, damage formula (vault §1.2)
    quests/                # state machine, dialogue runner, journal, save/load
    ai/                    # FSM/BT, routines (sleep/work/patrol), A*/JPS, perception
    audio/                 # Howler/Tone wrapper, adaptive layers, occlusion
    ui/                    # Preact overlay: dialogue, journal, inventory, map, HUD
  assets/ + maps/          # generated; per-zone atlases + .tmj + quest JSON
  scripts/build-quests.mjs # vault MD → JSON + validation (see §6.1)
  tests/quests/*.sim.mjs   # headless quest sims
```

- Keep the **game out of `content/`** (that's the published garden). The vault remains the design CMS; `scripts/` syncs/copies validated JSON into `game/`.
- i18n from day one: quest/dialogue strings keyed, EN + UA (vault is bilingual — honor that, it's a differentiator).
- Deterministic fixed-timestep sim (30/60Hz) + interpolated render; seeded RNG per zone for spawns/loot (reproducible QA).

**NPC AI (Gothic routines, scoped):** FSM (`idle/work/sleep/patrol/flee/combat`) + daily schedule table per NPC + A* on the collision grid with corner-cutting disabled for iso correctness + separation steering. Full boids/crowds unnecessary. Crime/reaction = perception event → faction rep effect → routine override (flee/call guards/attack). Start with ~15 fully-routined NPCs in the slice; the rest static-with-dialogue until their zone's pass.

**Combat (iso adaptation of vault formula):** melee arc + bow projectile + musket hitscan-with-spread + reload; crit = skill%; combos gate attack speed/chain per tier table. Lock-on-less click-to-attack + WASD kite. No jumping/climbing (iso scope cut vs. Gothic 3D — say so openly).

---

## 9. Phased roadmap (each phase shippable & testable)

| Phase | Goal | Exit criteria |
|---|---|---|
| **P0 — Spike (2–3 wks)** | Iso renderer + 1 tiny map + hero walk/collide + day tint | 60fps, y-sort correct, Tiled→Pixi loader works |
| **P1 — Vertical slice (6–10 wks)** | Kaffa tutorial (Ch.0): dialogue, 1 duel, timed rescue, escape + Ingulsk approach + **First Hunt** end-to-end (dialogue→hunt→return→journal→save) | 1 playable 30–60min slice; quest sim green; perf budget met |
| **P2 — Palanka Alpha (2–3 mo)** | Full Ingulsk joining chain (8 quests) + camp quests + trainers/trade + wildlife AI + night routines | 3–5h gameplay; reputation gates; UA+EN strings |
| **P3 — Open-world Beta (3–5 mo)** | Kodak + Samara + Sich Outer + North River + zone streaming + faction rep + music layers | 10–15h; zoned "open world" traversable; PWA + saves |
| **P4 — Full Gothic (6+ mo)** | Ch.2–3 + Inner Council + Ochakiv siege + charakternyk/otherworld + bestiary + polish/balance | 20h+; finale playable; Steam-wrapper (Electron/Tauri) optional |

Staffing shape: 1 engine + 1 gameplay/quest + 1 tech-art/pipeline human (or orchestrated agent equivalents) can carry P0–P1; content phases scale with agent parallelism + one reviewer.

---

## 10. Risks & mitigations

| Risk | Likelihood / Impact | Mitigation |
|---|---|---|
| Quest-flag spaghetti / dead ends (Gothic classic) | High / High | §6 schema + simulator + debug console; every quest needs a "stuck recovery" (giver re-hint, alternative solution) |
| AI art style drift across 100s of assets | High / High | Art bible + palette lock + per-zone review; reject drifted assets automatically |
| "Huge open world" perf on low-end/mobile | Med / High | Zoned streaming + culling + light budgets + quality tiers; measure from P0 |
| Iso depth/occlusion bugs (behind-wall confusion) | Med / Med | Roof-fade + outline-behind-wall + debug depth view; design maps iso-first (no Gothic-3D verticality) |
| Audio autoplay + loop clicks + mix mush | Med / Med | Gesture-unlock, loop-validated stems, ducking (dialogue > combat > ambience) |
| UA/EN + historical sensitivity (factions, religions, khanate/empire depictions) | Med / High | Lore Keeper review; consultant pass on portrayals; keep vault politics but avoid caricature |
| Repo confusion (Quartz site vs. game) | Low / Med | Game lives in `game/`, vault stays CMS in `content/`; CI builds both independently |
| AI music/SFX licensing ambiguity | Low / Med | Per-asset attribution log; prefer licensed/clean generators for shipped audio |

---

## 11. What to decide / do next

1. **Lock the slice:** Kaffa tutorial + First Hunt (this doc assumes it — confirm or swap with another joining quest).
2. **Approve stack:** PixiJS v8 + TS + Vite + Tiled + Howler (Phaser spike only if P0 stalls).
3. **Write `ART_BIBLE.md`** (1 page: palette, tile/sprite dims, portrait spec) before any asset generation.
4. **Scaffold `game/`** + Tiled loader + quest JSON schema + one quest sim test.
5. **Spin up agent roles** from §7 with per-zone briefs starting at Ingulsk.

---

## 12. Effort & cost feel (honest, not a quote)

- **P0–P1 (slice):** 2–4 person-months equivalent (human or well-orchestrated agents + reviewer). PixiJS framework cost dominates; quest #2+ gets 3–5× cheaper once schema/loader/journal exist.
- **Full vault (P2–P4):** 12–24 person-months equivalent, dominated by content curation + quest testing, not engine. AI generation compresses *draft* time ~5–10× but review/integration stays human-paced.
- **Infra:** static hosting + CDN (the Quartz site already proves this pattern); no game servers needed for single-player. Budget for asset storage + music generation seats, not for backend.

---

## Appendix A — Key vault references used

- `content/Sich_en/Lore/Loca Deserta Sich Universe.md` — factions/politics.
- `content/Sich_en/RPG Elements/Character Development.md`, `Weapon Skills System.md` — stats/damage (quoted in §1.2).
- `content/Sich_en/Quests/Main Quest.md` — 5-act structure + Ochakiv finale.
- `content/Sich_en/Factions/Ingulsk/Joining Quests/📃Ingulsk Introduction.md`, `❔ First Hunt.md` — joining-gate + multi-solution template.
- `content/Sich_en/Quests/Chapter 0/Chapter_0_Scenario.md`, `Free the Slaves.md` — tutorial design.
- `content/Sich_en/Geography/`, `Factions/{Ingulsk,Kodak,Samara}/`, `Monsters/`, `Weapons/` — zone/faction/bestiary inventory counts.

## Appendix B — Why not "just make it 3D like Gothic"?

Gothic 1/2's soul isn't polygons — it's **faction gating, trainer gating, NPC routines, hand-placed encounters, and quests with memory**. All of that survives (even shines) in iso 2.5D pixel art, at ~10× lower asset/engineering cost than 3D and with instant web load times. The honest cuts vs. Gothic 3D: no jumping/climbing puzzles, no free camera, simpler ballistics. Everything players *remember* (being nobody → earning trust → choosing a camp → raiding with companions) ports directly.

---

*Result: feasible. Start zoned, start with Ingulsk + Kaffa, let AI agents fill the pipeline zone by zone, keep PixiJS rendering + data-driven quests as the two load-bearing walls.*
