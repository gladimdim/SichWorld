# 06 — Vault to Game Data Pipeline

The vault stays the source of truth for design. The game reads compiled data. This document is how those two stay in sync without making the vault unpleasant to write in.

## The central decision: do not parse the prose

It is tempting to write a parser that reads `## Resolution Options` and infers branches. Resist it.

The prose in this vault is *good* precisely because it is not structured. [[❔ Hunters' Dispute]] expresses its logic through italic dialogue and a markdown reward table. [[Stolen Saber]] is a flowing paragraph in which the attribute gates appear mid-sentence. Any parser sophisticated enough to read that reliably would be more work than the game, and it would break every time someone wrote naturally.

Instead: **add a fenced block containing the machine-readable part, sitting below the prose.**

````markdown
# ❔ Unlucky

#quest #independent_quests

## Quest Giver
[[🧑Hryts Dovbnia]]

... all the existing prose, untouched ...

```sich
id: ingulsk/unlucky
type: quest
giver: npc/hryts
stages:
  offered:
    transitions:
      - to: done_deceived
        via: dlg:hryts/give_fur
        when: { has: item/wolf_pelt }
      - to: teaching
        via: dlg:hryts/teach
      - to: done_betrayed
        via: dlg:honta/report_hryts
  done_taught:
    terminal: true
    onEnter:
      - set: npc.hryts.competence
        value: skilled
  done_deceived:
    terminal: true
    onEnter:
      - set: npc.hryts.competence
        value: fraud
  done_betrayed:
    terminal: true
    onEnter:
      - set: npc.hryts.competence
        value: gone
      - set: npc.hryts.present
        value: false
```
````

Why this works:

- **Obsidian renders it as an unobtrusive code block.** The note still reads as a design note.
- **Quartz keeps publishing normally.** No change to the existing site.
- **The compiler reads only fenced `sich` blocks** and ignores everything else, so prose can be edited freely without breaking the build.
- **Prose and block sit side by side**, so the intent and the implementation are reviewed together.

The block is YAML, not JSON — less punctuation noise when hand-editing in Obsidian.

## Guarding against drift

Prose and block will diverge. The validator should warn (not fail) when:

- A note has a `## Resolution Options` or `## Opening Conditions` section but no `sich` block.
- The number of `### Option N` headings differs from the number of transitions or resolutions in the block.
- A note has a `## Connections to Other Quests` section naming quests that the block's predicates never reference.

That last check is genuinely useful here, because several notes — [[❔Curse]], [[❔Cook's Secret]], [[❔ Hunters' Dispute]] — already maintain an explicit connections section. Those sections are effectively hand-written assertions about the graph, and the compiler can check them.

## Stable IDs

**Never derive IDs from filenames.** This vault's filenames include emoji, double spaces, trailing dots and apostrophes:

```
🧑 💵 🏹Yatsko Lysytsia..md      ← trailing dot before the extension
❔  Deer Antlers.md              ← two spaces after the emoji
🧑Naum Lysenko. Ingulsk Kurinnyi.md
Кожум'яка                        ← apostrophe
```

Any of these will break a naive slug, and renaming a note would silently orphan every reference to it in save files.

Put an explicit ID in frontmatter, generate it once for the existing 182 notes, and never change it:

```yaml
---
id: ingulsk/quest/unlucky
type: quest
---
```

## Wikilink resolution

The compiler needs to handle every link style actually present in the vault:

| Style | Example | Count |
|---|---|---|
| Bare | `[[❔Curse]]` | most |
| Aliased | `[[🧑Hryts Dovbnia\|Hryts]]` | common |
| Path-qualified | `[[Sich/Factions/Kodak/Kodak Palanka]]` | a few |
| Relative traversal | `[[../../../Січ/Січ]]` | 3 — and all 3 are broken |
| Escaped pipe inside a table | `[[🧑 💵 🏹Yatsko Lysytsia.\\\|Yatsko]]` | 1 — broken |

Resolution order: exact path → unique basename → error. Ambiguous basenames must be a build error, not a silent pick — this vault has two `NPC.md`, several `Quests.md`, and both `Kodak Palanka.md` and `Ingul Palanka.md` appearing under two different folders.

Use `remark` with a wikilink plugin rather than regex. Regex will break on the emoji and on the escaped pipes.

## Localisation from the parallel vaults

`Sich_en/` and `Січ/` are near-mirrors — 182 and 183 notes. Match them by the frontmatter `id`, not by path or name, since the folder names are themselves translated (`Quests/` ↔ `Квести/`, `Factions/` ↔ `Фракції/`).

The compiler emits one table:

```json
{ "q.unlucky.hryts.askForFur": { "en": "Listen, friend, help me out...",
                                 "uk": "Слухай, друже, виручи..." } }
```

Missing UA keys become build warnings with a report, so translation debt is visible rather than discovered at ship time.

Note that the Ukrainian side is currently *behind* — it has no Technical section and appears to lag on several of the newer Ingulsk quests. That is fine; the pipeline should make the gap measurable.

## Build outputs

```
game/data/
  quests.json        compiled quest graphs
  dialogue.json      topic pools
  npcs.json          placement, schedules, shops, trainers
  items.json
  mobs.json
  regions/<id>.json  terrain, props, spawn rules, navmesh
  loc.json           EN + UA
  graph.json         the full fact dependency graph, for tooling
```

All content-hashed for cache-busting.

## Incremental builds and hot reload

- Watch the vault; recompile only changed notes.
- Push changed data into the running game over a dev websocket.
- Quest data can hot-swap safely if the world state is untouched — which is exactly why world state is a flat fact store separate from quest definitions ([[01 World State and Quest Engine]]). Edit a quest, see it live, keep your save.

This turns the vault into a live editor and is the single biggest quality-of-life win available on this project.

## Graph visualiser

Emit `graph.json` and render it as an interactive page — quests as nodes, facts as edges. Colour by chapter, highlight blocked paths and unreachable states.

Given the repo already publishes with Quartz, this can sit as a page on the same site, right next to the design notes it describes.

## Migrating the existing 182 notes

Order matters. Do not attempt this all at once.

**Auto-derivable now**, no human pass:
- IDs from paths (generated once, then frozen).
- Note type from folder and tag (`#quest`, `#join_quest`, `#npc`, `#trader`, `#chapter`, `#boss`, `#animal`).
- The link graph.
- NPC roles from the [[LD Utils]] emoji glossary — 🧑 named, 💵 trader, 🧠 trainer, 🏹 hunter, 🐶 monster, 💪 powerful, 🏫 major spot.
- Faction and region from folder position.

**Needs a human pass**, in this priority order:

1. **The Ingulsk Shapeshifter chain** — [[❔Wolf Attack]], [[❔Unlucky]], [[❔Swamp Healer]], [[❔Curse]]. Four notes. This is the vertical slice and it exercises nearly every mechanism in the engine.
2. **The rest of Ingulsk** — it is the most completely written palanka and the natural first region.
3. **Chapter 0 and 1** — the prologue and palanka joining.
4. **Chapter 2** — the audit chain, which is the first real cross-region content.
5. Kodak and Samara joining quests.
6. Sich Outer Circle.
7. Everything else.

**Needs design work before it can be encoded at all** — see [[08 Design Issues Found]]. Chapter 3 in particular is mostly headings: [[Gathering Provisions]] literally says *"(To be written for each palanka — what needs to be done.)"*, and [[Main Quest]] carries two `// TODO` markers over the preparation quests and the Ataman audience gate.

## Keep Quartz working

The repo currently builds the vault into a website. Nothing in this pipeline breaks that — fenced code blocks and frontmatter are both already handled by Quartz. Run the game-data compiler as a separate script, not as a Quartz plugin, so the two never entangle.
