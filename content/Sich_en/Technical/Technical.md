# Technical Design

Implementation plan for turning this vault into a playable game: a browser-based, isometric 2.5D RPG with a locked camera, Gothic-style quest reactivity, and AI-generated art.

These notes are written against the vault as it stands (182 English notes, 669 wikilinks, 7 broken links). Every example uses real quests, real NPCs and real locations from the design — nothing invented.

## Documents

- [[00 Feasibility Verdict]] — is an open world doable, and what shape should it take
- [[01 World State and Quest Engine]] — how cross-references and world influence actually work
- [[02 Rendering Architecture]] — PixiJS, isometric projection, streaming, day/night
- [[03 Dialogue System]] — Diablo presentation, Gothic structure
- [[04 Combat and Progression]] — combat feel, and a fix for the damage formula
- [[05 AI Art Pipeline]] — how to generate thousands of coherent isometric assets
- [[06 Vault to Game Data Pipeline]] — Obsidian stays the source of truth
- [[07 Tech Stack and Roadmap]] — what to build, in what order
- [[08 Design Issues Found]] — contradictions and gaps found while reading the vault

## The short version

**Open world: yes, with one important qualification.** Not one continuous landmass — six seamless regions with diegetic travel between them. See [[00 Feasibility Verdict]] for why that is both cheaper *and* truer to the design.

**The quest system is the interesting part.** The cross-referencing already written into the vault — Hryts Dovbnia's three-way arc, [[❔Curse]] being permanently blocked if you stole Ostap's root, Taras's trust turning a blind night search into a map marker — reduces to fifteen recurring patterns, and all fifteen collapse to a single primitive. See [[01 World State and Quest Engine]].

**The biggest risk is not the engine. It is animated character art.** Terrain and props are comfortable; eight-directional animated Cossacks are not. See [[05 AI Art Pipeline]].

**PixiJS is the right call.** See [[07 Tech Stack and Roadmap]].
