# SichWorld Quest Framework — Design Plan
### Data-driven Gothic-style quests: dialogue choices → world flags → map changes → other quests

> Date: 2026-09-04 · Companion to `GAME_FEASIBILITY.md` (§6).
> Grounded in vault chains: `Wolf Attack` → `Swamp Healer` → `Curse`, `First Hunt`, `Hunters' Dispute`, `Finding a Doctor → Fight in the Tavern`, `Unlucky → Hryts arc`.

---

## 0. What "complex connections" in this vault actually means

Reading the Ingulsk quests surfaces 7 recurring connection types. The framework must support all 7 as **first-class data** (not `if` spaghetti in code):

| # | Connection type | Vault example |
|---|---|---|
| 1 | **Hard gate** (quest B requires quest A in a state) | `Curse` requires `Swamp Healer: done_befriended` AND `Wolf Attack: done` (knows howling). Stealing the root **blocks** `Curse` permanently. |
| 2 | **Knowledge unlock** (a fact learned in A opens a dialogue option in B) | `Wolf Attack` wounds/howling → extra option with Ostap in `Swamp Healer` (free root + `Curse` hook). |
| 3 | **Trust / relationship gate** (NPC disposition as precondition) | Taras trusts you after `Wolf Attack` → exact saiga marker in `First Hunt`, exact Shapeshifter location in `Curse`. Hryts only talks in `Hunters' Dispute` if trusted via `Unlucky` or `First Hunt`. |
| 4 | **Multi-resolution with divergent rewards** | `Hunters' Dispute`: split / take sides / reveal truth (needs Hryts + Honta + arrow item) / duel — different rep, gifts, Yatsko discount in `Specific Fur`. |
| 5 | **Item-as-key + expert identification** | Old arrow item → Honta identifies Yatsko's fletching → truth ending. Poison arrows / vision potion change hunt mechanics. |
| 6 | **Map/world mutation** | Kill wolves → pasture safe; brew poison → Shapeshifter killable; free root → Ostap becomes potion trader; Shapeshifter dead → night steppe safe + Hryts accepted as hunter. |
| 7 | **Companion-behavior variant** (past choice changes an NPC's combat AI) | `Unlucky` outcome → Hryts in `Curse`: helps (taught honestly) / misses+flee (deceived) / absent (betrayed). |

Design rule: **if a designer can't express one of these 7 in JSON without touching engine code, the schema is incomplete.**

---

## 1. Design principles

1. **Data, not code.** Writers (human or AI agents) edit Obsidian Markdown; a build step emits validated JSON; the engine only interprets it.
2. **One global truth: `WorldState`.** Quests, dialogue, AI routines, shops, map — everybody reads/writes the same flags / knowledge / reputation / inventory / time. No hidden per-quest variables.
3. **Conditions & Effects are a closed, versioned DSL.** Small set (~15 ops), composable, testable, save-safe. Extend the DSL, never branch engine code per quest.
4. **Quests are staged state machines with explicit transitions.** Every stage has an objective (journal text), and every transition is `event + conditions → effects + next stage`. Dead ends are CI failures.
5. **Dialogue is the main "API".** 80% of Gothic gameplay is talking. Dialogue nodes carry the same conditions/effects as quests, plus once-only / greeting-variant logic.
6. **Map effects are effects.** Spawns, markers, gates, routine swaps, trader unlocks are just `Effect`s the world systems subscribe to — so "dialogue choice changes the map" is automatic.
7. **Everything is simulatable & saveable.** Headless runner can play any quest graph without rendering; save file is `WorldState + quest states + dialogue memory`.

---

## 2. Core data model (TypeScript sketch — source of truth for schema)

```ts
// ---------- World state (the single blackboard) ----------
interface WorldState {
  flags: Record<string, string | number | boolean>; // e.g. { honta_met: true, dispute_resolution: "truth" }
  knowledge: Record<string, boolean>;               // facts: { knows_howling: true, knows_yatsko_fletching: true }
  rep: Record<string, number>;                      // factions + personal trust: { ingulsk: 12, taras_trust: 1, hryts_trust: 2 }
  timeMinutes: number; chapter: number;             // Gothic chapters gate content
  // inventory / party / pos live in sibling stores but are condition-readable
}

// ---------- Conditions & Effects (closed DSL, v1) ----------
type Cond =
  | { t: 'quest';  id: string; state: QuestState | QuestState[] }  // hard gates
  | { t: 'stage';  quest: string; stage: string }                  // fine gates
  | { t: 'flag';   k: string; v?: string|number|boolean; op?: 'eq'|'ne'|'gt'|'gte'|'lt'|'lte' }
  | { t: 'knows';  k: string }                                     // knowledge unlock
  | { t: 'rep';    k: string; min?: number; max?: number }         // trust / faction
  | { t: 'item';   id: string; n?: number }                        // item-as-key
  | { t: 'skill';  k: string; min: number }
  | { t: 'time';   after?: number; before?: number }               // night-only Shapeshifter etc.
  | { t: 'chapter'; min?: number; max?: number }
  | { t: 'all'|'any'|'not'; conds?: Cond[]; cond?: Cond };         // combinators

type Effect =
  | { t: 'flag';  k: string; v: string|number|boolean }
  | { t: 'knows'; k: string }
  | { t: 'rep';   k: string; d: number } | { t: 'repSet'; k: string; v: number }
  | { t: 'xp';    n: number }
  | { t: 'give';  id: string; n?: number } | { t: 'take'; id: string; n?: number }
  | { t: 'quest'; id: string; op: 'start'|'advance'|'complete'|'fail'|'obsolete'; stage?: string }
  // --- map / world mutations (subscribed by world systems) ---
  | { t: 'spawn';   table: string; at: string }        // e.g. { table: "wolves_pasture", at: "pasture" }
  | { t: 'despawn'; tag: string }
  | { t: 'marker';  id: string; op: 'add'|'remove'; at?: string; label?: string }
  | { t: 'gate';    id: string; open: boolean }        // doors, zone portals, blocked paths
  | { t: 'routine'; npc: string; routine: string }     // sleep/work/patrol/follow/hostile/trader
  | { t: 'shop';    npc: string; op: 'unlock'|'addItem'|'discount'; item?: string; pct?: number }
  | { t: 'trainer'; npc: string; skill: string; unlock: boolean }
  | { t: 'journal'; entry: string }                    // explicit log line (auto-log otherwise)
  | { t: 'cutscene'; id: string } | { t: 'sfx'; id: string };

// ---------- Quests ----------
type QuestState = 'locked' | 'available' | 'active' | 'done' | 'failed' | 'obsolete';
type Resolution = string; // e.g. "truth" | "split" | "khoma" | "opanas" | "duel" | "befriended" | "stole"

interface Objective { text: string; marker?: string; count?: { have: string; need: number } }
interface Transition {
  from: string; event: string; to: string;            // event: "talk:ostap" | "kill:wolf" | "dialog:choice_x" | "enter:pasture" ...
  conditions?: Cond[]; effects?: Effect[];
  resolution?: Resolution;                            // recorded on quest completion/finish-branch
}
interface QuestDef {
  id: string; title: string; type: 'main' | 'joining' | 'camp' | 'global' | 'misc';
  faction?: string; giver?: string;                   // npc id
  availableWhen?: Cond[];                             // visibility/gating (chapter, prior quests, rep)
  stages: Record<string, { objective: string; onEnter?: Effect[]; onExit?: Effect[] }>;
  initial: string;
  transitions: Transition[];
  rewards?: Effect[];                                 // applied per resolution via transition effects
  mutuallyExclusive?: string[]; obsoleteWhen?: Cond[];
}

// ---------- Dialogue ----------
interface DialogueChoice { text: string; conditions?: Cond[]; effects?: Effect[]; goto: string; once?: boolean }
interface DialogueNode {
  id: string; npc: string; text: string;
  conditions?: Cond[];              // node visible only if true (trust/knowledge/chapter variants)
  effects?: Effect[];               // on show (e.g. knows_howling when Taras tells you)
  choices: DialogueChoice[];
  once?: boolean;                   // fire-once lines (Gothic "already asked" memory)
}
interface DialogueDoc { npc: string; greetings: DialogueNode[]; topics: Record<string, DialogueNode[]>; }
```

**Why this shape:** every vault connection in §0 maps to one `Cond`/`Effect`. Combinators (`all/any/not`) cover "requires A done AND (B done OR rep ≥ N)". `Resolution` strings preserve *how* a quest ended (truth vs. duel) so later quests can branch on it — e.g. `Curse` checks `swamp_healer.resolution == "befriended"`, `Specific Fur` checks `dispute.resolution == "truth"`.

---

## 3. Authoring pipeline: Obsidian Markdown stays the CMS

Writers never hand-write JSON. They keep writing vault-style Markdown with a small frontmatter + convention upgrade:

```md
---
quest_id: wolf_attack
type: camp
faction: ingulsk
giver: taras_chub
stages: [start, pasture, report]
available_when: [{ t: chapter, min: 1 }]
---

# ❔ Wolf Attack
...
## Stage: pasture
- objective: Kill the wolf pack near the pasture (4–5)
- onEnter: [{ t: spawn, table: wolves_pasture, at: pasture }]
## Stage: report
- objective: Report to Taras (tell him about the wounds!)
...
## Transitions
- from: pasture → event: kill:wolf_pack → to: report
- from: report → event: dialog:wolf_attack.report_wounds → to: done
  conditions: []
  effects: [{ t: knows, k: knows_howling }, { t: rep, k: taras_trust, d: 1 },
            { t: xp, n: 50 }, { t: journal, entry: wolf_attack.wounds_noted }]
  resolution: reported_wounds
```

Build step `scripts/build-quests.mjs`:

1. Parse `content/Sich_en/**/*.md` (+ `Січ/` for UA strings) → AST (frontmatter + `[[wikilinks]]` + stage/transition blocks).
2. Resolve `[[links]]` → `npc:` / `quest:` / `item:` / `place:` IDs via a registry (`content/REGISTRY.md` — one canonical id per entity; CI fails on unknown links).
3. Emit `game/assets/quests/*.json`, `game/assets/dialogue/<npc>.json`, `game/assets/strings/en|uk.json`.
4. Validate (JSON schema + graph checks, §7) and print a **quest-graph report**: orphans, unreachable stages, missing givers, blocking cycles.

Bilingual: EN quest logic files are authoritative for structure; UA files contribute `strings/uk` overrides keyed by `quest_id.stage` / `node_id`. Logic never forks by language (Lore Keeper agent owns the term base: kurinnyi, palanka, charakternyk…).

---

## 4. Runtime architecture (PixiJS game, `game/src/`)

```
EventBus (typed: kill:* / talk:* / dialog:* / enter:* / item:* / time:* / rep:*)
   │
   ├─ QuestManager ── owns QuestDef[] + per-quest { state, stage, resolution }
   │     │  evaluates availableWhen on: questEvent / flagEvent / chapterEvent
   │     └─ applies transition effects → emits world effects
   │
   ├─ DialogueRunner ─ per-NPC tree walk; filters choices by Cond; applies node/choice Effects;
   │                    records once-memory; greeting = first passing greetings-node (Gothic style)
   │
   ├─ WorldDirector ── subscribes to map Effects: spawn/despawn, marker add/remove,
   │                    gate open/close, routine/shop/trainer swaps, chapter changes
   │                    (this is literally "dialogue choice changes the map")
   │
   ├─ Journal / HUD ── subscribes to quest transitions + markers; toasts + log + map pins
   │
   └─ SaveStore ── serializes { quests, world: WorldState, dlgMemory, inv, party, pos, time, chapter }
                    → IndexedDB slots + quicksave; versioned + migratable
```

**Tick order per event:** `Gameplay event → EventBus → QuestManager.check(event) → apply Effects → WorldDirector.apply(map effects) → Journal/HUD update → autosave (debounced)`. Single-threaded, deterministic, replayable: same event sequence → same state (seeded RNG for loot/spawns).

Key classes (thin, ~1.5–2.5k LOC total):

- `WorldFlags` — get/set with change events + history (for debug "why did Curse unlock?" tracing).
- `CondEval.evaluate(cond, ctx)` — pure function of (world, quests, inv, party, time, chapter). No side effects → unit-testable.
- `QuestManager` — `handle(event)`, `canStart(id)`, `transition(id, event)`, `stateOf(id)`, `resolutionOf(id)`.
- `DialogueRunner` — `greeting(npcId)`, `choose(nodeId, choiceIdx)`, "topic unlocked" derivation from quest stages + knowledge.
- `WorldDirector` — effect handlers per world subsystem (spawner, markers, gates, routines, shops).
- `QuestDebugger` overlay — state inspector + `set/advance/give/teleport` console (see §7).

---

## 5. Worked example: the vault's hardest chain, as data

Chain: `wolf_attack` → (`knows_howling` + `taras_trust`) → `swamp_healer` (3 resolutions) → `curse` (gated) with `unlucky` shaping Hryts + map mutations throughout.

**Quest defs (abridged, real IDs):**

```jsonc
// wolf_attack — the "router" quest: produces knowledge + trust consumed elsewhere
{ "id": "wolf_attack", "type": "camp", "giver": "taras_chub",
  "stages": { "start":   { "objective": "Talk to Taras by the pen" },
              "pasture": { "objective": "Kill the wolf pack (4–5)", "onEnter": [
                            { "t": "spawn", "table": "wolves_pasture", "at": "pasture" }] },
              "report":  { "objective": "Report to Taras — mention the wounds" } },
  "initial": "start",
  "transitions": [
    { "from": "start", "event": "talk:taras_chub", "to": "pasture" },
    { "from": "pasture", "event": "kill:wolf_pack", "to": "report",
      "effects": [{ "t": "flag", "k": "pasture_wolves_dead", "v": true }] },
    { "from": "report", "event": "dialog:wolf_attack.report_wounds", "to": "done",
      "effects": [ { "t": "knows", "k": "knows_howling" },
                   { "t": "rep", "k": "taras_trust", "d": 1 },
                   { "t": "xp", "n": 50 } ],
      "resolution": "reported_wounds" },
    { "from": "report", "event": "dialog:wolf_attack.report_plain", "to": "done",
      "effects": [{ "t": "xp", "n": 30 }], "resolution": "plain" } ] }
```

```jsonc
// swamp_healer — knowledge-gated best option + blocking steal path
{ "id": "swamp_healer", "type": "camp", "giver": "pechyborshch",
  "stages": { "swamp": { "objective": "Get black-willow root (Ostap's hut)" },
              "wax":   { "objective": "Bring beeswax from the forest apiary" } },
  "initial": "swamp",
  "transitions": [
    { "from": "swamp", "event": "dialog:ostap.ask_wax", "to": "wax" },
    { "from": "wax", "event": "give:beeswax>ostap", "to": "done",
      "effects": [{ "t": "rep", "k": "ostap_trust", "d": 1 }, { "t": "xp", "n": 60 }],
      "resolution": "befriended" },
    { "from": "swamp", "event": "dialog:ostap.howling_confidence", "to": "done",
      "conditions": [{ "t": "knows", "k": "knows_howling" }],   // ← Wolf Attack unlock
      "effects": [{ "t": "rep", "k": "ostap_trust", "d": 2 }, { "t": "xp", "n": 80 },
                  { "t": "shop", "npc": "ostap", "op": "unlock" }],
      "resolution": "befriended" },
    { "from": "swamp", "event": "steal:blackwillow_root", "to": "done",
      "effects": [{ "t": "rep", "k": "ostap_trust", "d": -5 },
                  { "t": "routine", "npc": "ostap", "routine": "hostile" }],
      "resolution": "stole" } ] }
```

```jsonc
// curse — double hard gate + trust-shaped hunt + map mutation rewards
{ "id": "curse", "type": "camp", "giver": "ostap",
  "availableWhen": [
    { "t": "quest", "id": "swamp_healer", "state": "done" },
    { "t": "flag", "k": "swamp_healer.resolution", "v": "befriended" },  // steal path blocks
    { "t": "knows", "k": "knows_howling" } ],
  "stages": { "bile":   { "objective": "Kill a mavka, bring bile to Ostap" },
              "poison": { "objective": "Let Ostap coat your blade" },
              "hunt":   { "objective": "Slay the Shapeshifter at night" } },
  "initial": "bile",
  "transitions": [
    { "from": "bile", "event": "give:mavka_bile>ostap", "to": "poison" },
    { "from": "poison", "event": "dialog:ostap.take_coated_blade", "to": "hunt",
      "effects": [{ "t": "give", "id": "coated_blade_buff", "n": 1 },
                  { "t": "spawn", "table": "shapeshifter_night", "at": "steppe_watering_hole" },
                  { "t": "marker", "id": "shapeshifter_lair", "op": "add",
                    "at": "steppe_watering_hole", "label": "Watering hole" }] },
    // Taras trust → exact marker variant is a Dialogue cond (below), hunt itself:
    { "from": "hunt", "event": "kill:shapeshifter", "to": "done",
      "effects": [ { "t": "despawn", "tag": "shapedanger" },
                   { "t": "marker", "id": "shapeshifter_lair", "op": "remove" },
                   { "t": "rep", "k": "ingulsk", "d": 5 },
                   { "t": "routine", "npc": "hryts_dovbnia", "routine": "hunter" },
                   { "t": "xp", "n": 150 } ],
      "resolution": "slain" } ] }
```

**Dialogue gating (same DSL, no special cases):**

```jsonc
// Taras: exact Shapeshifter location ONLY if trusted (Wolf Attack done right)
{ "npc": "taras_chub", "id": "taras.shapeshifter_hint",
  "text": "He comes to the watering hole when the moon is over the ravine. Wait for him there.",
  "conditions": [{ "t": "rep", "k": "taras_trust", "min": 1 }],
  "effects": [{ "t": "marker", "id": "shapeshifter_lair", "op": "add", "at": "steppe_watering_hole" }],
  "choices": [{ "text": "Thanks.", "goto": "taras.bye" }] }

// Hryts in Curse: three AI variants from Unlucky's resolution (companion behavior = routine effect)
 // unlucky.resolution == "taught"   → routine hryts: follower_ranged (helps)
// unlucky.resolution == "deceived" → routine hryts: follower_coward (flees mid-fight)
// unlucky.resolution == "betrayed" → no spawn at all (choice node hidden by cond)
```

`Hunters' Dispute` truth ending is the same pattern: choice `dispute.accuse_yatsko` has `conditions: [knows Yatsko fletching (via Honta), has old_arrow examined, Hryts testimony heard]` and `effects: [flag dispute_resolution=truth, rep boosts, shop discount for Yatsko → consumed later by Specific Fur]`.

---

## 6. Dialogue system details (Gothic behaviors to copy deliberately)

- **Greeting variants:** ordered list per NPC; first node whose `conditions` pass is the greeting (e.g. Taras smiles only after `Curse` done; Naum greets differently per chapter/joining progress). No "default hello" after Ch.1.
- **Topic unlocking:** topics appear from quest stages + knowledge + items (show arrow → Honta topic). Topics disappear after `once` use or when obsolete (replaced by newer stage topic).
- **Trade / Train / Heal as dialogue branches:** shop/trainer nodes with `conditions` (gold, rep, chapter) and `effects` — trainers spend the vault's training points; stealing/attacking from dialogue routes through the crime subsystem (rep hit + routine change).
- **Barks vs. dialogue:** one-liners (Hryts running up in First Hunt) are proximity-triggered `talk:` events with cooldowns, not full trees.
- **Aggression path:** `Hunters' Dispute` duel option = choice with `effects: [routine duel, rep ingulsk −N]` — the framework treats combat as just another effect target.

---

## 7. Validation, simulation, debugging (required — AI-authored quests need it)

**CI checks (fail the build):** unknown `[[link]]` IDs; quest with unreachable stage / no path to `done|failed`; `availableWhen` referencing nonexistent quest/flag; duplicate `quest_id`; effect referencing unknown `spawn table` / `marker` / `npc`; mutually-exclusive quests both startable; resolution strings consumed nowhere (warn) / consumed but never produced (fail).

**Headless quest simulator** (`tests/quests/*.sim.mjs`, no renderer): script event sequences per quest + cross-quest chains (the §5 chain is test #1), assert: reachable `done`, rewards granted, blocked paths stay blocked (steal → Curse stays `locked`), markers/spawns emitted. AI Quest Scripter must green-light sims before art pass.

**In-game debugger (build from P1):** overlay showing active quests/stages/flags/knowledge/rep; console commands `quest start|advance|complete`, `flag set`, `knows add`, `rep add`, `teleport`, `time set`; "why locked?" explainer that prints the failing condition for any quest/dialogue choice (invaluable for writers).

---

## 8. UI/UX: Journal, markers, feedback (the Gothic feel)

- **Journal (auto-written):** new quest / stage advance / resolution entries with chapter + timestamp; faction page (rep values + joining progress); knowledge page ("Howling in the steppe — Taras mentioned wounds…"); failed/obsolete section (steal consequences visible, not silent).
- **Map markers:** quest-giver `!` / `?`, exact vs. vague search areas (Taras marker vs. Honta's "ravines with water" search zone — two marker kinds), night-only markers.
- **Feedback discipline:** every choice that closes a door says so in-world ("Ostap will remember this." / "Hryts looks away.") + journal line — Gothic fairness: consequences are telegraphed, never random.

---

## 9. Save/load & migration

- Save = `{ v: 1, chapter, time, world: WorldState, quests: {id: {state, stage, resolution}}, dlgMemory: {nodeId: count}, inv, party, pos, zone }`. Versioned; migrator functions per version bump (quests added mid-playthrough default to `locked→available` re-evaluation on load).
- Autosave on every quest transition + zone change (debounced 1s) + 3 manual slots + quicksave (F5). "Stuck recovery": giver re-hint topics + `obsolete` cleanup when chapters advance.

---

## 10. Implementation phases (quest-side slice of GAME_FEASIBILITY.md §9)

| Phase | Deliverable | Done when |
|---|---|---|
| **Q0 — DSL + 1 chain (1–2 wks)** | `Cond`/`Effect` eval + `QuestManager` + registry + builder for 3 quests | `wolf_attack → swamp_healer → curse` sim green, headless |
| **Q1 — Dialogue + journal (2–3 wks)** | `DialogueRunner`, greeting variants, journal UI, markers | First Hunt playable: ask around → hunt variants → Naum reactions |
| **Q2 — Map director + save (2 wks)** | spawn/marker/gate/routine/shop handlers + IndexedDB saves | steal path blocks Curse; Shapeshifter night hunt; save/load roundtrip |
| **Q3 — Dispute + Unlucky (2–3 wks)** | combinators, resolutions, companion variants, debugger "why locked?" | Hunters' Dispute all 4 endings sim-tested; Hryts 3 variants |
| **Q4 — Fleet scale-up** | CI graph report, UA strings, quest dashboard | all Ingulsk joining + camp quests green; writers onboarded on MD contract |

Total quest-framework code: ~2–4k LOC TS + tests. Content cost dominates after Q2 — which is exactly the point (writers unblocked).

---

## 11. File layout (to create under `game/`)

```
game/
  scripts/build-quests.mjs        # MD → JSON + validation + graph report
  assets/quests/*.json            # generated (never hand-edited)
  assets/dialogue/<npc>.json      # generated
  assets/strings/en.json, uk.json # generated
  src/quests/{types.ts, condEval.ts, questManager.ts, dialogueRunner.ts,
              worldDirector.ts, journal.ts, save.ts}
  tests/quests/{condEval.test.ts, wolf-curse-chain.sim.mjs, dispute-endings.sim.mjs}
content/REGISTRY.md               # canonical ids: npcs, quests, items, places, spawn tables
```

## 12. Open decisions for you

1. **Slice lock:** Q0–Q1 on the Wolf→Healer→Curse + First Hunt chains (recommended — covers all 7 connection types) — confirm?
2. **Steal = permanent block** (vault canon) vs. **redemption path** (pay off Ostap later)? Recommend canon first, redemption as post-slice quest.
3. **Trust granularity:** single `npc_trust` number (recommended) vs. per-quest booleans? Number scales; booleans are clearer for writers. Recommend number with named thresholds in registry.

---

*Bottom line: model everything as Conditions on a shared WorldState and Effects that world systems subscribe to. Then "dialogue choice changes the map and other quests" isn't a special feature — it's the only way anything happens.*
