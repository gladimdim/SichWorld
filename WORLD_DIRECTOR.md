# SichWorld WorldDirector — Feature Spec
### The subsystem that turns quest/dialogue effects into a living map

> Date: 2026-09-04 · Companion to `QUEST_FRAMEWORK.md` (§4) and `GAME_FEASIBILITY.md` (§5, §8).
> Scope: everything the **WorldDirector** owns, the effects it handles, the data it loads, and the order to build it.

---

## 0. What the WorldDirector is (and isn't)

- **Is:** the single owner of *mutable world presentation & population*: which zone is loaded, what spawns where, which markers/gates/routines/shops are active, what time/weather/lighting applies. It **subscribes** to `Effect`s from `QuestManager` / `DialogueRunner` and to ambient/time events, then drives the engine + Pixi scene.
- **Isn't:** quest logic (QuestManager), dialogue trees (DialogueRunner), damage/XP math (`rpg/`), or rendering primitives (`engine/`). It *calls* those systems; it doesn't reimplement them.

**Event flow (recap):**

```
Gameplay event (kill / talk / enter / time / item)
  → EventBus → QuestManager / DialogueRunner (Cond check → Effects)
    → WorldDirector.apply(effects) → spawner / markers / gates / routines / shops / clock / audio
      → Journal/HUD update → autosave (debounced)
```

Rule: **no system besides the Director mutates map population directly.** Quests request (`{t:'spawn',…}`); the Director decides *how* (cap, LOD, persistence). This keeps "dialogue choice changes the map" automatic and testable.

---

## 1. Feature map (12 directors in one)

| # | Module | Owns | Vault-driven examples |
|---|---|---|---|
| 1 | Zone & Portal Director | zone graph, load/unload, edge portals, streaming budgets | Kaffa→steppe→Ingulsk→Sich; tavern interior vs. exterior; caves→Ochakiv wall→citadel |
| 2 | Spawn Director | spawn tables, scripted + ambient spawns, caps, respawn, persistence | pasture wolves (First Hunt/Wolf Attack), ravine mobs, bee-mobs apiary, mavka packs, Shapeshifter + 2 wolves (night) |
| 3 | Marker & Objective Director | `!`/`?`, exact pins vs. search areas, night-only markers | Taras exact saiga/Shapeshifter pin vs. Honta's "ravines with water" search zone |
| 4 | Gate & Collision Director | doors, blockades, portals, chapter locks, trap triggers | tavern backroom, lighthouse door, cave breach → wall assault path opens |
| 5 | Routine & AI Director | NPC schedules (sleep/work/patrol), follow/flee/hostile/trader modes, LOD ticks | Hryts follower/coward/absent; Ostap hostile after steal; pilots at docks by day |
| 6 | Economy Director | shop inventories, prices, discounts, buy lists, trader unlocks | Ostap rare potions; Yatsko discount after Dispute-truth; Bosper armor from hide |
| 7 | Trainer Director | who trains what, skill caps, training-point costs | Honta bow intro (Strange Sounds); weapon masters per tier |
| 8 | Clock, Sky & Weather Director | game time, day/night tint, torches, rain/fog, night-only content | Shapeshifter night hunt; wolves bolder at night; tavern warm light |
| 9 | Chapter Director | per-chapter world deltas (spawns, routines, prices, locked zones) | Ch.0 Kaffa → Ch.1 palankas → Ch.2 audits → Ch.3 gathering → siege |
| 10 | Ambient Life Director | wildlife ecology (saiga herds, rabbits, wolves), birds, sfx beds | old male saiga separate from herd; rabbits flushed by Hryts; apiary bees |
| 11 | Crime & Reaction Director | perception (steal/attack), rep hits, guard call, forgiveness paths | stealing root → Ostap hostile + Pechyborshch "he'll find out"; tavern brawl heat |
| 12 | Music/Stinger Director | adaptive layers (explore/combat/siege), quest stingers, occlusion | quest-done sting; Shapeshifter hunt drone; tavern band vs. steppe wind |

Each module below lists: **inputs (Effects/events), data, behavior, save surface, debug surface.**

---

## 2. Zone & Portal Director

**Inputs:** `{t:'gate', id, open}`, zone-enter/exit events, chapter changes.
**Data (`ZoneDef`):**

```ts
interface ZoneDef {
  id: string; map: string;            // Tiled .tmj: "ingulsk_panlanka.tmj"
  size: [number, number];             // logic tiles, e.g. [192, 192]
  portals: { id: string; to: string; at: [number, number]; conds?: Cond[] }[];
  budgets: { atlases: string[]; maxLights: number; aiFull: number };
  music: { explore: string; combat: string; night?: string };
}
```

**Behavior:**
- Loads current zone + preloads neighbors (portal-adjacent chunks only). Unloads to atlas budget (§5.3 in feasibility doc: ≤2048px atlases, ~100–200MB live).
- Portals are **conditional**: `conds` (quest stage / chapter / rep / gate flag) decide pass vs. blocked-with-hint ("The kurinnyi won't let you into the council yet."). Blocked portal shows the *failing* condition via debugger string (shared with quest "why locked?").
- Zone switch = fade-through edge walk (no loading screen where avoidable) + autosave + music crossfade.
- Interiors (tavern, lighthouse, huts, caves, citadel) are sub-zones with roof/occlusion rules + own light rigs.

**Save:** `{ zone, pos, visited: Record<zone,bool> }`. **Debug:** zone list + teleport + portal overlay.

---

## 3. Spawn Director

**Inputs:** `{t:'spawn', table, at}`, `{t:'despawn', tag}`, kill/clear events, clock/chapter events.
**Data:**

```ts
interface SpawnEntry { kind: string; n: [min, max]; level?: [min, max]; tag?: string;
  conds?: Cond[]; nightOnly?: boolean; once?: boolean; }
interface SpawnTable { id: string; entries: SpawnEntry[]; cap: number;
  respawnMinutes?: number; persistentCorpses?: boolean; }
```

**Behavior:**
- **Scripted spawns** (quest-driven, `once`, tagged for despawn): pasture wolf pack, apiary bees, mavka pack, Shapeshifter trio, cave guards, duel opponents. Tagged so quest completion can `despawn` leftovers (`tag: "shapedanger"`).
- **Ambient spawns** (clock/ecology-driven): saiga herds + solitary old males at dawn near water ravines; rabbits in grass; wolf packs at night; birds/critters (decor, no AI cost).
- **Rules:** global + per-table caps; never spawn in view (off-screen + min distance, except scripted ambushes flagged as such); difficulty nudge by chapter (numbers, not stat inflation — Gothic fairness); seeded RNG per zone for reproducible QA.
- **Cleanup:** quest-tagged corpses/loot persist until looted or zone-unload + N minutes; ambient corpses fade fast (perf + readability).

**Save:** `{ tables: {id: {cleared: bool, respawnAt: time}}, taggedAlive: [...] }` (minimal — full entity serialization only for quest-tagged actors near player).
**Debug:** spawn table browser + force-spawn + cap readout + "why didn't X spawn?" (failing cond).

---

## 4. Marker & Objective Director

**Inputs:** `{t:'marker', id, op: 'add'|'remove', at, label}`, quest stage changes.
**Data:**

```ts
type MarkerKind = 'giver' | 'turnin' | 'exact' | 'search' | 'danger' | 'custom';
interface Marker { id: string; kind: MarkerKind; at: string | [number, number];
  radius?: number; label: string; nightOnly?: boolean; quest?: string; }
```

**Behavior:**
- Two pin classes the vault demands: **exact** (Taras: "watering hole when moon over ravine") vs. **search area** (Honta: "ravines with water" → radius circle, no false precision). HUD + journal map share the same list.
- Giver `!` (available) / `?` (turn-in ready) derived from QuestManager states — zero manual markup.
- Night-only markers (Shapeshifter) render dimmed by day with hint text.
- Marker spam guard: max ~5 active quest markers; oldest camp-quest pins collapse into journal until tracked (player picks tracked quest — Gothic journal discipline).

**Save:** tracked quest id + custom pins. **Debug:** marker list + teleport-to-marker.

---

## 5. Gate & Collision Director

**Inputs:** `{t:'gate', id, open}`, chapter/quest events, trigger volumes.
**Data:** named gates in Tiled (`gate:<id>` object layer) → collision rect + visual (door/portcullis/fence/rubble) + hint.

**Behavior:**
- Binary open/closed + optional **key conds** (quest stage, item, rep, time). Closed gates explain themselves ("Locked — lighthouse keeper's key" / "Council in session until audit done").
- One-way siege semantics for finale: cave breach `gate:ochakiv_wall.open=true` flips assault path + guard spawns + music to siege layer.
- Trap/trigger volumes (`enter:<id>` events → quest events): ambushes, barks (Hryts running up), tutorial prompts in Kaffa.

**Save:** `{ gates: Record<id, bool> }`. **Debug:** gate overlay + force toggle.

---

## 6. Routine & AI Director

**Inputs:** `{t:'routine', npc, routine}`, clock events, crime events, combat events.
**Data:**

```ts
type RoutineId = 'sleep'|'work'|'patrol'|'idle'|'sit_fire'|'trade'|'train'|'follow'|'flee'|'hostile'|'dead';
interface ScheduleBlock { routine: RoutineId; at: string; from: number; to: number } // minutes
interface NpcDirectives { id: string; home: string; schedule: ScheduleBlock[];
  combat: 'coward'|'melee'|'ranged'|'boss'; overrides?: Record<string, RoutineId> }
```

**Behavior:**
- **Daily schedules** (Gothic signature): pilots at docks by day / tavern by night; merchants behind stalls by day; Ostap at hut; Khoma at butcher block; Opanas at fire. Clock ticks swap routines; Director moves NPCs along paths (A* on collision grid, no corner-cutting for iso).
- **Quest overrides** (highest priority, until released): `follow` (Hryts to hunt / apiary), `hostile` (Ostap after steal; duel pair), `flee`/`cower` (Hryts-deceived mid-fight), `trade`/`train` stations.
- **Companion variants from vault, as routines:** Hryts `follower_ranged` (taught) vs. `follower_coward` (deceived: flees at 50% enemy HP) vs. absent (betrayed — spawn suppressed by cond). No special-case code — just three routine ids + spawn conds.
- **LOD AI:** full FSM ≤1 screen; reduced (move-only, no perception) ≤2 screens; frozen beyond (schedule jumps on re-entry by clock delta — "he went to sleep while you were away").

**Save:** `{ npc: {routine, at, scheduleIdx, overrideUntil} }` for quest-relevant NPCs; rest derived from clock on load.
**Debug:** NPC list + routine force + schedule scrub (drag time → watch camp reshuffle).

---

## 7. Economy & Trainer Directors

**Inputs:** `{t:'shop', npc, op, ...}`, `{t:'trainer', npc, skill, unlock}`, trade events.
**Behavior (Economy):**
- Per-NPC stock + gold + buy lists (Kozhem'yaka buys hides/furs; Bosper crafts armor from Shapeshifter hide; Pechyborshch potions; Yatsko bows + post-truth discount `pct: 15`).
- Price modifiers: chapter + faction rep + active `discount` flags. Stock refreshes on clock (daily) and chapter.
- Stolen-tag items (root!) flagged — fences react, victims refuse trade (Crime director link).
**Behavior (Trainer):**
- Registry: who trains which skill to what cap at what training-point cost (vault: 10 pts/level spent at trainers; Honta gives free bow intro in Strange Sounds = `trainer` unlock + one free lesson flag).
- Training UI is a dialogue branch (conditions: points, gold, rep, chapter) — no separate screen in MVP.

**Save:** shop stocks/gold/discounts, trainer unlocks + lessons taken. **Debug:** vendor inspector + gold/points grant.

---

## 8. Clock, Sky, Weather & Lighting Director

**Inputs:** time advance, zone/music events, quest effects (`cutscene`, torches).
**Behavior:**
- Game clock (minutes; 1 real sec ≈ 1 game min default, configurable; sleep/wait fast-forwards with schedule catch-up + ambush roll at night — Gothic campfire rhythm).
- Day/night tint LUT + torch/lantern point lights (≤8–12 per view, lightmap composite — perf budget from feasibility §5.3) + window glow + night-only content gates (Shapeshifter, mavky aggression, wolf boldness).
- Weather: wind (steppe grass + audio), rain/fog (visibility + ranged spread modifier), heat haze (decor). Weather is cosmetic-first; only fog/night touch mechanics in MVP.
- Gothic "moon over ravine" moments are clock + marker + music cues composed by data, not cutscenes.

**Save:** `timeMinutes`. **Debug:** time scrubber + phase presets (dawn/noon/dusk/midnight).

---

## 9. Chapter Director

**Inputs:** chapter-advance quest events (Kaffa escape → Ch.1; audits → Ch.2; gathering → siege).
**Behavior:** applies a **chapter delta packet** (authored per zone): new/removed spawns, NPC relocations (council convenes), price shifts, gate flips, music beds, journal chapter header. Chapters never silently obsolete active camp quests without a journal line + grace (vault fairness).

**Data:** `chapters/<n>.json` = list of Effects + zone patches. Reuses the same DSL — chapters are just big named effects.

---

## 10. Ambient Life & Audio Directors (feel layer)

- **Ambient Life:** decor agents (birds, butterflies, river fish flashes, grass sway, smoke columns) — zero AI cost, pooled sprites; ecology agents (saiga/rabbits/wolves per §3) with graze/flee/pack behaviors; bark system (one-liners with cooldowns + `once` memory).
- **Music/Stingers:** zone beds (explore/combat/night/siege layers) crossfaded by threat + clock; stingers on quest events (`quest complete`, `level up`, `discovered`, `Shapeshifter reveal`); tavern vs. steppe vs. swamp beds; dialogue-ducking. All AI-generated stems validated for loop-click + loudness (per feasibility §7).

---

## 11. Crime & Reaction Director

**Inputs:** steal/attack/trespass/kill events + dialogue aggression choices.
**Behavior (MVP-simple, Gothic-flavored):**
- Witness check (perception radius + line-of-sight on grid) → `crime` event → effects: victim routine → hostile/flee; guards called (spawn/redirect); faction/personal rep hit; shop/trainer lockout flags.
- Vault-mapped: stealing root → `ostap_trust −5`, routine hostile, `Curse` locked, Pechyborshch relieved-but-worried bark; tavern brawl → heat flag decaying with time/gold fine; duel in Dispute → Naum respect hit.
- Forgiveness/redemption hooks (fines, quests) as data — recommend shipping canon blocks first, redemption quests post-slice (per QUEST_FRAMEWORK.md §12).

---

## 12. Persistence contract (what saves, exactly)

```ts
interface DirectorSave {
  v: 1; zone: string; pos: [number, number]; timeMinutes: number; chapter: number;
  gates: Record<string, boolean>;
  spawns: Record<string, { cleared: boolean; respawnAt?: number }>;
  markers: { tracked: string | null; custom: Marker[] };
  npc: Record<string, { routine: RoutineId; at: string; overrideUntil?: number }>;
  shops: Record<string, { gold: number; stock: Record<string, number>; discounts: string[] }>;
  trainers: Record<string, string[]>;   // npc → unlocked skills
  heat: Record<string, number>;         // crime heat per faction/zone
}
```

Combined with QuestManager + inventory save = full game state. Versioned migrators per bump.

---

## 13. Authoring contract (what AI agents / writers produce)

- **Tiled maps:** `ground / collision / gates(gate:<id>) / triggers(enter:<id>) / spawns(spawn:<table>@<point>) / markers(marker:<id>) / npc_home(npc:<id>)` layers. Loader validates names against `content/REGISTRY.md`.
- **Tables:** `assets/spawns/*.json`, `assets/zones/*.json`, `assets/schedules/<npc>.json`, `assets/shops/*.json`, `assets/chapters/*.json` — all generated or hand-tuned, all schema-validated in CI.
- **Registry (single source):** every `npc / quest / item / place / spawn table / marker / gate / routine / music bed` id lives in `content/REGISTRY.md`; unknown ids fail the build. Quest Scripter + Map Mason agents share it.
- **Perf gates:** per-zone report (atlases, draw calls, lights, AI-full count) — over-budget zones fail CI (Perf Warden agent).

---

## 14. Runtime internals (thin by design)

```ts
class WorldDirector {
  constructor(deps: { engine, spawner, markers, gates, routines, shops,
                       trainers, clock, chapters, ambient, crime, music, save }) {}
  apply(fx: Effect[], ctx: Ctx): void;   // switch on fx.t → module handler; logs to flag history
  onEvent(e: GameEvent): void;           // clock ticks, zone enter, kill, crime sightings
  tick(dt: number): void;                // LOD AI, respawn timers, schedule checks (cheap; 4–10 Hz for far)
  serialize(): DirectorSave; load(s: DirectorSave): void;
}
```

- Deterministic: same event log → same world (seeded RNG; fixed-timestep sim 30Hz + interpolated render).
- All `apply()` calls append to flag/marker/spawn history → "why is the Shapeshifter here?" traceable in debugger.

---

## 15. Build order (director-side, mirrors quest phases Q0–Q4)

| Step | Build | Proves with vault content |
|---|---|---|
| D0 | Zones+portals+gates+markers+clock+save skeleton | walk Ingulsk, day/night tint, teleport debug |
| D1 | Scripted spawns + tagged despawn + search/exact markers | pasture wolves; saiga search zone vs. Taras pin |
| D2 | Routines+follow/flee/hostile + crime hits | Hryts follow; Ostap hostile after steal; tavern brawl heat |
| D3 | Shops/trainers + chapter deltas + ambient ecology | Yatsko discount; Honta training; Ch.1→2 camp reshuffle |
| D4 | Weather/lighting polish + music layers + perf gates | night hunt mood; siege bed; 60fps budget green |

---

## 16. Open decisions

1. **Respawn policy:** quest-tagged once-only (recommended) vs. timed respawn for grind? Recommend: ambient respawns, quest mobs don't (Gothic scarcity).
2. **Corpse/loot persistence:** persist quest-tagged until looted (recommended) vs. global timer? Timer for ambient.
3. **Fast travel:** none in slice (walk + pilots/boats as diegetic ferries later — fits vault pilots + island quests).

---

*Bottom line: the Director is the quest system's hands on the map. Quests say **what should be true** (Effects); the Director makes it **visibly, audibly, dangerously true** — spawns, pins, locks, schedules, prices, darkness, and music.*
