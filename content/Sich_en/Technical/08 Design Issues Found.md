# 08 — Design Issues Found

Found while reading all 182 English notes. Ordered by how much they would hurt if they reached implementation. Most are ten-minute fixes now and expensive fixes later.

The vault is in good shape overall — 7 broken links out of 669, and 9 of the 11 notes with no incoming links are just Waypoint index pages. These are the exceptions.

---

## 1. The Higher Council ban has a fragile recovery path

[[Merchants from Lithuania]] ends with _"you are no longer allowed into the Higher Council of Sich, because the contraband quest begins."_ [[Misunderstanding]] gives two ways back in:

- **Pysarenko vouches** — but only if you resolved [[The Secretary's Sick Son]] generously. Sell him the potion for 1000 hryvnias and _"he will not vouch for you."_
- **The Quartermaster's [[Gifts for the Bride]]** — which depends on Ales Lytvyniv helping you.

So one of the two routes is self-blockable, and the other rests on a single NPC. If a player extorts Pysarenko and then anything goes wrong with the Ales route, Chapter 2's main line is unreachable and the game is over without saying so.

Compounding this, [[The Secretary's Sick Son]] also says _"In any case, he will grant permission to enter the Higher Circle of Sich"_ — which reads as contradicting the vouching condition. They are about two different moments (initial permission, then post-contraband vouching), but as written they are easy to conflate.

**Fix:** add an explicitly always-available third route back in — a fine paid to the Judge, time served, an errand for the Osavul. Then make it a validator rule (see [[01 World State and Quest Engine]]) that the main line stays reachable from every state.

---

## 2. Sulima and Ivan Sirko are the same character under two names

[[Chapter_0_Scenario]] says the ring belongs to **Sulima**, that Sulima is the Koshovy, and that the attack on Kaffa is _"Sulima's attack."_

Every later note — [[Tools for Miners]], [[Return of the Lighthouse]], [[Gathering the Army]], [[Samara Audit]] — says **[[Ivan Sirko. Ataman.]]**.

Historically Sirko is correct for 1674 as set in [[Loca Deserta Sich Universe]]; Sulima was Hetman in the 1630s.

**Fix:** pick Sirko, update Chapter 0. This matters because the ring is the main quest's central token and the player is told _only he will recognize it._

---

## 3. [[True Audit]] promises three sub-quests and provides two

The note says _"visit all 3 palankas"_ and _"The quest adds three sub-quests"_, then lists only [[Kodak Audit]] and [[Samara Audit]]. There is no Ingulsk Audit note anywhere in the vault.

**Fix:** write it. It is also the natural place to give the Ingulsk-joined player their home-turf advantage, mirroring issue 4.

---

## 4. The audits assume you joined the palanka you are auditing

[[Kodak Audit]] gives honest reports only if you did [[Blacksmith's Coal]] (Kovalenko's full work list) and [[Torn Nets]] (Pylyp's accurate figures). Both are Kodak **joining** quests. A player who joined Ingulsk or Samara has no reason to have done either.

This is potentially _excellent_ design — your faction choice has real teeth in Chapter 2, and a Kodak Cossack breezes through the Kodak audit while an outsider has to work. But it needs to be deliberate, and the outsider needs a harder-but-possible path, otherwise it reads as a bug.

**Fix:** write the outsider route explicitly for each audit — pay Zhydov more, do a favour first, or accept a worse report and less reward.

---

## 5. [[❔  Deer Antlers]] is about a bear

The title says deer antlers. [[Rare Animals]] lists _"White deer [[❔  Deer Antlers]]"_. The note body says Naum asks for **bear fur**, that **the bear** lives in a cave in a ravine — and then _"Near the deer are the remains of two apprentice Cossacks."_

Two different animals are tangled in one quest.

**Fix:** decide whether this is the white deer trophy quest or the bear quest, and split if it is both. Note that [[❔ First Hunt]] is already the saiga hunt, so there are three separate large-animal hunts in Ingulsk that need distinguishing.

---

## 6. The lighthouse exists as two different quests

[[Ivan Svitilo's Lighthouse]] and [[Return of the Lighthouse]] describe the same event — Ivan fled, marks on the door, tracks, Tatars, a note from a Polish nobleman — with **different reward logic**:

- [[Ivan Svitilo's Lighthouse]]: telling the full truth gives less XP and no money; downplaying it gives more XP and 100 hryvnias.
- [[Return of the Lighthouse]]: reporting to the Ataman gives a lot of XP and a guard for Ivan, after which Ivan gives you gear.

Both are referenced elsewhere — [[Merchants from Lithuania]] links the first, [[North River]] indexes the second.

Also, [[Ivan Svitilo]] contains a literally empty wikilink: `Issues quest [[]]`.

**Fix:** merge into one note, keep both reward branches (they are compatible — the lie/truth choice with Ivan, and the separate choice of whether to report to Sirko), and fix the empty link.

---

## 7. Broken links

Seven, all quick:

| Link                                   | In                                                             | Likely intent                                                          |
| -------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `[[Main Quest Line]]`                  | [[Main Quest]]                                                 | `[[Joining Kodak]]`                                                    |
| `[[Main Quest Branch]]`                | [[Kodak Palanka]]                                              | `[[Joining Kodak]]`                                                    |
| `[[Samara Joining]]`                   | [[Samara]]                                                     | `[[Samara Introduction]]` — the folder has no folder-note              |
| `[[Higher Council]]`                   | Outer Circle `NPC.md`                                          | `[[Higher Council of Sich]]`                                           |
| `[[../../../Січ/Січ]]` ×2              | [[Chapter 2 Scenario]], [[Entering the Higher Circle of Sich]] | `[[Sich]]` — these cross from the English vault into the Ukrainian one |
| `[[🧑 💵 🏹Yatsko Lysytsia.\|Yatsko]]` | [[❔ Hunters' Dispute]] reward table                           | escaped pipe inside a markdown table breaks the link                   |

The two Cyrillic traversals are worth fixing carefully — they mean the English vault currently depends on the Ukrainian one, which will confuse both the compiler and any reader of the published site.

---

## 8. Duplicated and forked folders

- `Quests/Factions/Kodak/Joining Kodak/Joining Kodak.md` is an empty Waypoint stub duplicating the real `Factions/Kodak/Joining Kodak/Joining Kodak.md`. It also causes an ambiguous basename.
- Samara's joining quests are split across `Factions/Samara/Quests/` and `Factions/Samara/Samara Joining/`. [[Joining the Samara Palanka]] lists four quests; [[Samara Introduction]] lists five (it adds [[Collecting Wood]]).
- Ingulsk's [[📃Ingulsk Introduction]] lists six joining quests, but the `Joining Quests/` folder holds seven — [[❔Fight in the Tavern]] is reached through [[❔ Finding a Doctor]] rather than issued directly. That one is probably intentional, but it should be stated.

**Fix:** one folder per concept, and let the index note be generated rather than hand-maintained.

---

## 9. The damage formula does not work

Covered in detail with worked numbers in [[04 Combat and Progression]]. In short: `weapon_skill` (0–100) is _added_ to `weapon_damage` (~10), so skill outweighs the weapon roughly tenfold and every weapon reward in the game becomes cosmetic. The stated _"standard damage is 2-3 hp"_ is also incompatible with both formulas unless enemy armour scales with player skill, which is the bullet-sponge treadmill this design is otherwise carefully avoiding.

A replacement that keeps weapons meaningful is proposed in that note.

---

## 10. Two Ostaps

[[Ostap. Kodak Kurinnyi]] is the Kodak kurinnyi who escorts the hero in [[Passage to the Sich]]. [[🧑Ostap Vernydub]] is the Ingulsk swamp charakternyk.

Players will conflate them, especially since both appear early. Also, [[Chapter 1 Scenario]] has Ostap say he _"is a kurinnyi in one of the palankas"_ and offer to escort you — which reads oddly if the player then chooses Ingulsk or Samara.

**Fix:** rename one, and give Ostap a line acknowledging the player's choice if they join a different palanka.

---

## 11. Chapter 3 is not yet designed

[[Gathering Provisions]] says outright: _"(To be written for each palanka — what needs to be done.)"_ [[Main Quest]] carries two `// TODO` markers — one over _"complete two quests of your choice"_ for the Ataman audience, one over the five preparation quests (horses, boats, provisions, powder, cannons). [[Chapter 3]] is a Waypoint block with nothing in it but a link to three sparse notes.

This is fine — it is clearly known work-in-progress — but it means Chapter 3 cannot be scheduled or estimated yet, and it is why the roadmap in [[07 Tech Stack and Roadmap]] puts it at Milestone 5.

---

## 12. Smaller notes

- [[Free the Slaves Ending]] is a stub containing only a link back to [[Free the Slaves]], despite Chapter 1 depending on which prisoner you saved.
- [[Weapons]], [[Kodak Quests]], [[Miscellaneous]], `Islam`, `Shaitanism`, [[Ivan Sirko. Ataman.]] and North River's `NPC.md` are all "(Content to be added)". [[Ivan Sirko. Ataman.]] being empty is notable — he is the goal of the entire main quest.
- [[Gifts for the Bride]] is for the Quartermaster's daughter, while [[Ustyna's Betrothal]] is a different wedding entirely. Two brides in the same district; worth a distinguishing detail.
- [[Churchmen]] and [[Witchcraft]] describe a whole faction-allegiance system with unique weapon sets (Sword of Volodymyr, Bulava of Troyan, and so on) that nothing else in the vault references. Either it is a planned system that needs hooking into the quest graph, or it is a parked idea — worth marking which.
- The Ukrainian vault is slightly behind the English one and is missing the more recently written Ingulsk quests. Not a problem, but see [[06 Vault to Game Data Pipeline]] for making that gap measurable rather than invisible.

---

## What is genuinely strong

Worth saying, since this note is a list of faults:

The Ingulsk Shapeshifter chain — [[❔Wolf Attack]] → [[❔Unlucky]] → [[❔Swamp Healer]] → [[❔Curse]] — is properly good. Four quests, three of which have permanent consequences, converging on a boss fight whose difficulty, companion, and even findability depend on choices made hours earlier. [[❔Curse]] even documents its own dependency graph. That chain is the reason this project is worth building, and it is why [[07 Tech Stack and Roadmap]] makes it the vertical slice.

[[❔ Hunters' Dispute]] is the other standout: a four-outcome investigation where the best ending requires assembling testimony and physical evidence from three separate NPCs, and where the _worst_ option is available at any time to an impatient player.

[[Torn Nets]] deserves a mention too — three endings that differ only in your own honesty, with XP scaling 1× / 2× / 4× and the most generous option costing you money. That is a small, sharp piece of design.
