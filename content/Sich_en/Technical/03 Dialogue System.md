# 03 — Dialogue System

## An honest correction up front

The brief says "dialogs from Diablo". That is right about **presentation** and wrong about **structure** — and the vault proves it.

Diablo 1/2 dialogue is: click an NPC, they speak a canned line, maybe pick one of two or three gossip topics, no state, no consequence.

What is actually written in this vault:

- [[❔ Hunters' Dispute]] — a four-outcome investigation where Option 3 requires having talked to Hryts _and_ obtained the old arrow _and_ shown it to Honta.
- [[True Audit]] — _"if you found out the truth from the innkeeper, a reply option about accuracy will appear. Otherwise you will speak at random."_
- [[Stolen Saber]] — one reply unlocked by Strength 30, a different one by Intelligence 30, a third by information from Konoval, plus a plain 1000-hryvnia buyout.
- [[❔Swamp Healer]] — an entire third resolution that only exists if you did [[❔Wolf Attack]].
- [[Torn Nets]] — three endings differing only in whether you pocket 100 gold, hand it over, or add 100 of your own, with XP scaling 1× / 2× / 4×.

That is Gothic and Fallout dialogue. So:

> **Diablo's presentation. Fallout's structure.**

Portrait and name, NPC line, a short numbered list of replies, all in a panel _over_ the world rather than a fullscreen mode. The NPC keeps standing where they are; the world keeps running behind. That is the Diablo feel. Underneath it, a real conditional system.

## Topic pool, not dialogue tree

This is the most important structural decision in this document.

A tree makes conditional content painful. [[❔Swamp Healer]]'s Option 3 would have to be duplicated at every node from which it is reachable. Little Cook's extra line in [[❔Cook's Secret]] — _"At least someone in this palanka is normal, not like that priest's family..."_ — depends on [[Devil's Popaddya]] having already soured her on the priests, and would need grafting into several branches.

A **pool** expresses each of these once. Every NPC owns a bag of topics. Each topic carries a `when` predicate. When you open a conversation, the UI shows whichever topics currently qualify.

```ts
type Topic = {
  id: TopicId
  npc: NpcId
  label: LocKey // what appears in the reply list
  when?: Pred // reuses the quest engine's predicate language exactly
  once?: boolean // remove after use
  priority?: number // ordering; greeting-level topics sort first
  lines: Line[] // what is said
  effects?: Effect[] // reuses the quest engine's effect language exactly
  then?: TopicId | "close" // optional chaining for genuine back-and-forth
}

type Line = {
  speaker: NpcId | "player"
  text: LocKey
  when?: Pred // a line can be conditional inside a topic
}
```

The predicate and effect types are **imported unchanged from [[01 World State and Quest Engine]]**. Dialogue is not a separate system — it is a second front-end onto the same world state. That is what makes the fifteen cross-reference patterns work without special cases.

## Two real conversations, encoded

### [[❔Swamp Healer]] — Ostap at the black willow

```ts
topics: [
  {
    id: "ostap/root_ask",
    label: "q.swamp.opt.ask",
    lines: [{ speaker: "npc/ostap_vernydub", text: "q.swamp.ostap.whatsInItForMe" }],
    then: "ostap/root_wax_task",
  },

  {
    id: "ostap/root_steal_confront",
    when: { op: "fact", id: "quest.swamp_healer.tookRoot", cmp: "=", value: true },
    label: "q.swamp.opt.admit",
    effects: [{ do: "set", id: "npc.ostap.disposition", value: "hostile" }],
  },

  // Only exists because Wolf Attack happened. Written once, here.
  {
    id: "ostap/root_howling",
    when: { op: "fact", id: "player.knows.strange_howling", cmp: "=", value: true },
    label: "q.swamp.opt.howling",
    priority: 10,
    lines: [
      { speaker: "player", text: "q.swamp.player.howlingIsStrange" },
      { speaker: "npc/ostap_vernydub", text: "q.swamp.ostap.sitDownTellMe" },
    ],
    effects: [
      { do: "give", item: "item/black_willow_root" },
      { do: "set", id: "npc.ostap.disposition", value: "friendly" },
      { do: "xp", amount: 200 },
    ],
  },
]
```

### [[Stolen Saber]] — attribute gates and third-party leverage

```ts
topics: [
  {
    id: "prokip/saber_buy",
    label: "q.saber.opt.buy",
    when: { op: "has", item: "item/hryvnia", count: 1000 },
    effects: [
      { do: "take", item: "item/hryvnia", count: 1000 },
      { do: "give", item: "item/charakternyk_saber" },
    ],
  },

  {
    id: "prokip/saber_threaten",
    label: "q.saber.opt.threaten",
    when: { op: "attr", attr: "strength", min: 30 },
    lines: [{ speaker: "player", text: "q.saber.player.notEveryoneGetsHome" }],
    effects: [{ do: "give", item: "item/charakternyk_saber" }],
  },

  {
    id: "prokip/saber_outwit",
    label: "q.saber.opt.cursedBlade",
    when: { op: "attr", attr: "intelligence", min: 30 },
    lines: [
      { speaker: "player", text: "q.saber.player.itWillDefileTheChurch" },
      { speaker: "npc/pip_prokip", text: "q.saber.prokip.pleaseTakeIt" },
    ],
    effects: [{ do: "give", item: "item/charakternyk_saber" }],
  },

  // Requires having heard Konoval's grievance about the drowned horse
  {
    id: "prokip/saber_konoval",
    label: "q.saber.opt.konovalThreat",
    when: { op: "fact", id: "player.knows.konoval_horse_drowned", cmp: "=", value: true },
    effects: [
      { do: "give", item: "item/charakternyk_saber" },
      { do: "give", item: "item/hryvnia", count: 100 },
    ],
  },
]
```

Four routes to the same object, gated on strength, intelligence, money, and information respectively. That is Gothic-shaped design and the pool expresses it flatly.

## Presentation

- **Portrait panel** bottom-left: NPC portrait, name, faction/role glyph (the vault already has a glyph vocabulary in [[LD Utils]] — 🧑 named, 💵 trader, 🧠 trainer, 🏹 hunter, 🐶 monster).
- **NPC line** in a translucent band across the lower third. World still visible and running.
- **Replies** as a numbered list, keyboard-selectable (1–9) and clickable.
- **Visual marking of gated replies.** When a reply is available _because of something you did_, mark it — a subtle icon or colour. Players cannot appreciate reactivity they cannot perceive. This is the single cheapest way to make the quest engine's work visible, and it is what makes people say a game "remembers what you did".
- **Barks** — short floating lines above NPCs, no panel, no interruption. Hryts calling out when he sees you with a bow, Khoma grumbling at his cutting table.
- **History log** — scrollable, per conversation, for anyone who skipped too fast.

## Portrait budget

One portrait per named NPC. Counting the vault: ~40 named NPCs across the palankas, Sich, North River and the Otherworld, plus perhaps 10 generic types (Cossack, dzhura, merchant, Tatar, Turk, fisherman). Call it **50 portraits**.

That is a small, high-impact art job and the best possible use of AI generation — single still images, no animation coherence problem, enormous effect on how characterful the game feels. Do these early; they will also serve as the style anchor for the sprite pipeline.

## Fonts and localisation

- The font must carry **full Ukrainian Cyrillic** — including ґ, є, і, ї, and the apostrophe. Many otherwise-good game fonts omit ґ and ї. Test with `Кожум'яка`, `Ґонта`, `Їжак` before committing.
- All player-visible text is a `LocKey`, never a literal.
- The EN/UA vault pair becomes one localisation table keyed by note ID. See [[06 Vault to Game Data Pipeline]].
- Reserve ~40% width overflow for Ukrainian relative to English in UI layout.

## Voice

Skip it, at least initially. Full VO for a dialogue-heavy RPG in two languages is a larger budget than the rest of the game combined. Consider instead:

- **Non-verbal vocal stings** — a grunt, a laugh, a sigh, played per NPC per emotional beat. A dozen clips per voice archetype, five archetypes. Cheap, and it carries a surprising amount of the presence that full VO would.
- Revisit synthesized VO only once the game is otherwise done, and only if the Ukrainian synthesis quality is genuinely good — a bad Ukrainian accent would do more harm than silence.
