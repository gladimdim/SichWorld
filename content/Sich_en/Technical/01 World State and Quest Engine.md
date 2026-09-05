# 01 — World State and Quest Engine

This is the heart of the project. The vault's quest design is genuinely reactive — not "collect 10 wolf pelts" reactive, but _Hryts flees the battle three quests later because you let him cheat_ reactive. That needs a real engine, and it needs one that does not turn into a swamp of special cases.

## First: what kinds of cross-reference does this design actually use?

Before designing anything, I catalogued every cross-reference in the vault. They fall into fifteen recurring patterns.

| #   | Pattern                                         | Real example                                                                                                                                                                              |
| --- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Quest unlocks quest                             | Befriending Ostap in [[❔Swamp Healer]] opens [[❔Curse]]                                                                                                                                 |
| 2   | Quest **blocks** quest permanently              | Stealing Ostap's root blocks [[❔Curse]] forever — the [[Shapeshifter]] just stays on the map as a live threat                                                                            |
| 3   | Prior quest adds a dialogue option              | [[❔Wolf Attack]] unlocks Option 3 in [[❔Swamp Healer]]; buying Zhydov's information adds the accuracy reply in [[True Audit]]                                                           |
| 4   | Prior quest changes _information quality_       | Taras's trust gives the exact Shapeshifter location instead of a blind night search; also the exact saiga marker in [[❔ First Hunt]]                                                     |
| 5   | Prior quest changes a price                     | [[❔Attack on a Merchant]] makes Kozhem'yaka give the rope free instead of gouging you ([[❔Check the Traps]]); the pot for 0 vs 50 hryvnias ([[❔Cook's Secret]])                        |
| 6   | Prior quest changes companion behaviour         | [[🧑Hryts Dovbnia]] fights well / misses and flees / never shows up, decided in [[❔Unlucky]]                                                                                             |
| 7   | Prior quest decides whether an NPC still exists | Betray Hryts and he leaves the palanka forever; leave [[Ivanenko]] unhealed and he is dead, so he cannot help at [[Kill the Glutton]]                                                     |
| 8   | Choice converts an NPC into a service           | Ostap becomes a rare-potion trader; Ivanenko becomes a saber trainer; [[Tymko Koval]] becomes a ranged trainer after [[Kill the Slavers]]; Tykhon Medovyk becomes a weekly honey merchant |
| 9   | Choice grants a _recurring_ world effect        | Little Cook's daily borscht and recipes; [[Tomash Maslo]] handing you a rare item at the start of every chapter if you never turned him in                                                |
| 10  | Attribute-gated dialogue                        | [[Stolen Saber]] — Strength 30 to threaten the priest, Intelligence 30 to outwit him                                                                                                      |
| 11  | Item-as-evidence gating                         | The old arrow in [[❔ Hunters' Dispute]] must be obtained from the carcass, then shown to Honta, before Option 3 exists                                                                   |
| 12  | Reputation with a named NPC                     | Naum's respect, scaled by _how well_ you resolved things, feeding palanka entry                                                                                                           |
| 13  | Faction-level consequence                       | [[Merchants from Lithuania]] gets you banned from the Higher Council; recovery needs Pysarenko vouching or the Quartermaster's [[Gifts for the Bride]]                                    |
| 14  | Information transfer between quests             | Telling Sirko about the lighthouse note; telling Knyaz about the Popaddya curse for bonus XP; lying to Ivan Svitilo _pays better_ than the truth                                          |
| 15  | Time-of-day and calendar gating                 | Fern flower only at night; Shapeshifter only at night; "two days later" Ivanenko thanks you; the feast is tomorrow; honey merchant weekly; _"only until spring remains"_                  |

**All fifteen reduce to one primitive.** A named fact about the world, predicates that read facts, and effects that write facts. Nothing on this list needs bespoke code. That is the whole design.

## The core

```ts
type FactValue = boolean | number | string

/** The entire mutable world. This IS the save file. */
type WorldState = {
  facts: Record<FactId, FactValue> // flat, named, no nesting
  clock: { day: number; minute: number } // minute 0..1439
}
```

Flat and named is deliberate. Nested state (`quests.curse.stages[2].done`) makes migration painful and predicates verbose. Flat facts make the whole save a `Record<string, primitive>`, which means renaming a fact is a one-line migration table and diffing two saves is trivial.

Naming convention, enforced by the linter:

```
quest.<id>.stage          enum   — "unstarted" | "offered" | ... | "done_x"
npc.<id>.trust            number — 0..100
npc.<id>.present          bool
npc.<id>.<custom>         anything specific to that NPC
player.knows.<topic>      bool   — information the hero has learned
world.<id>                anything global
```

### Predicates

Pure, serializable, no side effects. This last part matters more than it sounds — predicates get evaluated constantly and speculatively (every time a dialogue panel opens, every shop, every availability check). A predicate that mutates anything, including a random seed, destroys determinism.

```ts
type Pred =
  | { op: "fact"; id: FactId; cmp: "=" | "!=" | "<" | "<=" | ">" | ">="; value: FactValue }
  | { op: "attr"; attr: "strength" | "agility" | "intelligence"; min: number }
  | { op: "skill"; weapon: WeaponClass; min: number }
  | { op: "has"; item: ItemId; count?: number }
  | { op: "timeOfDay"; phase: "dawn" | "day" | "dusk" | "night" }
  | { op: "and" | "or"; of: Pred[] }
  | { op: "not"; of: Pred }
```

There is deliberately **no random predicate**. Randomness belongs in effects, never in a condition.

### Effects

```ts
type Effect =
  | { do: "set"; id: FactId; value: FactValue }
  | { do: "add"; id: FactId; by: number; clamp?: [number, number] }
  | { do: "give" | "take"; item: ItemId; count?: number }
  | { do: "xp"; amount: number }
  | { do: "stage"; quest: QuestId; to: string }
  | { do: "journal"; quest: QuestId; text: LocKey }
```

That is the entire vocabulary. Everything in the vault is expressible in it.

## Encoding real quests

### [[❔Unlucky]] — the three-way branch that echoes for the rest of the game

```ts
export const unlucky: Quest = {
  id: "ingulsk/unlucky",
  giver: "npc/hryts",
  stages: {
    offered: {
      journal: "q.unlucky.j.offered",
      transitions: [
        {
          to: "done_deceived",
          via: "dlg:hryts/give_fur",
          when: { op: "has", item: "item/wolf_pelt" },
        },
        { to: "teaching", via: "dlg:hryts/teach" },
        { to: "done_betrayed", via: "dlg:honta/report_hryts" },
      ],
    },
    teaching: {
      journal: "q.unlucky.j.teaching",
      objectives: [
        {
          id: "hryts_kills_wolf",
          when: { op: "fact", id: "quest.unlucky.hrytsKilledWolf", cmp: "=", value: true },
        },
      ],
      transitions: [
        {
          to: "done_taught",
          when: { op: "fact", id: "quest.unlucky.hrytsKilledWolf", cmp: "=", value: true },
        },
      ],
    },
    done_taught: {
      terminal: true,
      onEnter: [
        { do: "set", id: "npc.hryts.competence", value: "skilled" },
        { do: "xp", amount: 150 },
      ],
    },
    done_deceived: {
      terminal: true,
      onEnter: [
        { do: "set", id: "npc.hryts.competence", value: "fraud" },
        { do: "take", item: "item/wolf_pelt" },
        { do: "xp", amount: 80 },
      ],
    },
    done_betrayed: {
      terminal: true,
      onEnter: [
        { do: "set", id: "npc.hryts.competence", value: "gone" },
        { do: "set", id: "npc.hryts.present", value: false }, // he leaves the palanka forever
        { do: "give", item: "item/arrows", count: 20 },
        { do: "set", id: "npc.honta.freeTraining", value: true },
      ],
    },
  },
}
```

One fact — `npc.hryts.competence` — carries his entire arc. Note that **no other quest needs to know how it got its value.**

### [[❔Curse]] — reading three earlier quests without knowing about any of them

```ts
export const curse: Quest = {
  id: "ingulsk/curse",
  giver: "npc/ostap_vernydub",

  // "If you stole the root or didn't do Wolf Attack — quest unavailable,
  //  the Shapeshifter simply remains a danger on the map."
  available: {
    op: "and",
    of: [
      { op: "fact", id: "npc.ostap.disposition", cmp: "=", value: "friendly" },
      { op: "fact", id: "player.knows.strange_howling", cmp: "=", value: true },
    ],
  },

  stages: {
    bile: {
      journal: "q.curse.j.bile",
      objectives: [{ id: "bring_bile", when: { op: "has", item: "item/mavka_bile" } }],
      // Hryts shows up on his own, or doesn't — decided entirely by Unlucky
      companions: [
        {
          npc: "npc/hryts",
          behaviour: "fights",
          when: { op: "fact", id: "npc.hryts.competence", cmp: "=", value: "skilled" },
        },
        {
          npc: "npc/hryts",
          behaviour: "panics_and_flees",
          when: { op: "fact", id: "npc.hryts.competence", cmp: "=", value: "fraud" },
        },
        // 'gone' matches nothing — he simply is not there
      ],
      transitions: [{ to: "poison", via: "dlg:ostap/hand_over_bile" }],
    },
    poison: {
      onEnter: [{ do: "give", item: "item/shapeshifter_poison" }],
      transitions: [{ to: "hunt" }],
    },
    hunt: {
      journal: "q.curse.j.hunt",
      // Taras's trust is the difference between a marker and a blind night search
      mapMarkers: [
        {
          at: "ingulsk/watering_hole",
          when: { op: "fact", id: "npc.taras.trust", cmp: ">=", value: 50 },
        },
      ],
      spawns: [
        {
          actor: "mob/shapeshifter",
          at: "ingulsk/watering_hole",
          when: { op: "timeOfDay", phase: "night" },
          escort: ["mob/wolf", "mob/wolf"],
        },
      ],
      transitions: [
        { to: "done", when: { op: "fact", id: "world.shapeshifterDead", cmp: "=", value: true } },
      ],
    },
    done: {
      terminal: true,
      onEnter: [
        { do: "give", item: "item/shapeshifter_hide" },
        { do: "set", id: "npc.ostap.isTrader", value: true }, // permanent rare-potion trader
        { do: "add", id: "npc.naum.respect", by: 30, clamp: [0, 100] },
        { do: "set", id: "npc.taras.smiled", value: true },
      ],
    },
  },
}
```

Read that against the diagram [[❔Curse]] already draws in its own note. It maps one to one.

### [[❔Swamp Healer]] — where `npc.ostap.disposition` gets written

```ts
resolutions: [
  { id: "ask", effects: [{ do: "set", id: "npc.ostap.disposition", value: "friendly" }] },
  { id: "steal", effects: [{ do: "set", id: "npc.ostap.disposition", value: "hostile" }] },
  {
    id: "howling",
    when: { op: "fact", id: "player.knows.strange_howling", cmp: "=", value: true },
    effects: [
      { do: "set", id: "npc.ostap.disposition", value: "friendly" },
      { do: "xp", amount: 200 },
    ],
  },
]
```

`❔Wolf Attack` writes `player.knows.strange_howling` and `npc.taras.trust`. It does not know that `Swamp Healer` or `Curse` exist. That is the point — **quests write facts, quests read facts, and no quest ever imports another quest.** The graph exists only in the data.

### Prices — [[❔Check the Traps]] and [[❔Cook's Secret]]

Shop entries carry predicates like everything else:

```ts
{ npc: 'npc/kozhemyaka', offers: [
  { item: 'item/leather_rope', price: 0,
    when: { op: 'fact', id: 'quest.attack_on_merchant.stage', cmp: '=', value: 'done' } },
  { item: 'item/leather_rope', price: 60 },   // first match wins
  { item: 'item/clay_makhitra', price: 0,
    when: { op: 'fact', id: 'quest.attack_on_merchant.stage', cmp: '=', value: 'done' } },
  { item: 'item/clay_makhitra', price: 50 },
]}
```

### Recurring effects — Little Cook's borscht, Tomash Maslo's tribute

```ts
{ id: 'little_cook_daily_borscht',
  when:  { op: 'fact', id: 'npc.little_cook.feedsHero', cmp: '=', value: true },
  every: 'day', at: 'npc/little_cook',
  effects: [{ do: 'give', item: 'item/borscht' }] }

{ id: 'maslo_tribute',
  when:  { op: 'fact', id: 'npc.tomash.turnedIn', cmp: '=', value: false },
  every: 'chapter',
  effects: [{ do: 'give', item: 'item/rare_trinket' }] }
```

## Reactivity: keep it boring

The temptation is to build a reactive dependency graph — index which rules read which facts, invalidate on write. **Do not.** At this content scale it is pure complexity with no payoff, and dependency indices are a rich source of subtle bugs (a rule that reads inventory or time of day never gets invalidated by a fact write, so it silently goes stale).

Two tiers instead:

**Pull, on demand.** Dialogue topic lists, shop inventories and prices, quest availability, journal contents. Evaluate the predicates at the moment the panel opens. Always correct, impossible to desync. Cost: a few hundred predicate evaluations, each a handful of map lookups — microseconds.

**Push, on a slow tick.** NPC presence, spawns, map markers, schedule overrides. Re-evaluate on region load and on a 4 Hz world tick. Nothing in this design changes faster than a person can notice.

Rough budget: 200 quests × ~20 rules × ~5 predicate nodes = 20,000 node evaluations per full sweep. At 4 Hz that is negligible next to rendering.

## Save and load

The save is `WorldState` plus player transform, inventory, attributes and skills. Because facts are flat:

```ts
const MIGRATIONS: Record<number, (s: SaveFile) => SaveFile> = {
  3: (s) => rename(s, "npc.hryts.taught", "npc.hryts.competence"),
}
```

Enum _values_ also change during development (`confronted` → `standoff`), so migrations need value maps too, not just key renames. Write that in from the start; retrofitting it is miserable.

Store in IndexedDB. A save is small — a few thousand facts is tens of kilobytes.

## The validator is where the real value is

Everything above is unremarkable. The build-time validator is what makes a heavily cross-referenced design survivable, because it catches the class of bug that playtesting finds six months late.

Run on every build, fail CI:

1. **Every fact read is written by something.** A typo in a fact name is otherwise _completely silent_ — the predicate just reads `undefined` and returns false, and a quest quietly never becomes available. This single check is worth the whole validator.
2. **Every fact written is read by something.** Catches dead design — effort spent on a consequence nothing observes.
3. **Reachability.** Is there any path where `Curse` becomes available? (Yes: Wolf Attack done, root not stolen.) Is every terminal stage of every quest reachable?
4. **Soft-lock detection.** Walk the graph looking for states where the main quest can no longer progress. **This check already finds a real problem in the current design** — see [[08 Design Issues Found]], issue 1.
5. **Every quest has a giver, and that giver can be present when the quest is offered.** Catches quests gated behind an NPC you already drove away.
6. **Localisation completeness.** Every `LocKey` resolves in both EN and UA.

## Debug console

Non-negotiable for a game like this. Ship it behind a key combination in dev builds:

- `fact <id>` — read a fact
- `set <id> <value>` — write one
- `why <questId>` — print the availability predicate with each leaf annotated true/false. This is the single most useful debugging tool you will build.
- `goto <regionId> <x> <y>`
- `time <hh:mm>` / `day +1` — for the night-only and multi-day content
- `graph <questId>` — dump the reachable stage graph from here

## Why not a scripting language

An obvious alternative is to let quests be Lua or JS functions. Rejected because:

- Predicates must be _inspectable_ for the validator and for `why`. A function body is opaque; a data AST is not.
- Predicates must be pure for determinism. A script can be made pure by convention only, and conventions rot.
- The vault's fifteen patterns need no control flow beyond and/or/not. Adding a language buys expressiveness the design does not use and costs every tool that would otherwise be trivial.

Where genuine one-off logic is needed (the Chapter 0 timed shackle choice, the Ochakiv assault), use a small set of named, hand-written _scripted scenes_ that the data can invoke by ID. Keep them rare and keep them out of the reactive path.
