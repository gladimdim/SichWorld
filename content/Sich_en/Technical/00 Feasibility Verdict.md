# 00 — Feasibility Verdict

## The question

Is an open world doable for this design, in a browser, with PixiJS, with AI-generated art, at isometric 2.5D with a locked camera?

## The answer

**Yes — as six seamless regions with diegetic travel between them, not as one continuous landmass.**

This is not a compromise forced by the browser. It is the honest reading of what the vault already describes, and it is what Gothic itself does at chapter boundaries.

## Counting what actually exists

I went through every note and listed the places the design names. Not "a forest" as scenery — places with something in them.

**Ingulsk region** — the palanka itself (Naum's kurin, Khoma's butcher shed with its cutting table and drying hides, Honta's fire, Taras's livestock pen, the church, Little Cook's kitchen, Pechyborshch's cottage, the gate); the steppe with its ravines and gullies; the pasture where the wolves come; the dry ravine to the east where the old saiga grazes; the relict forest at the centre with the wild apiary; the swamp to the north with Ostap Vernydub's hut and the black willow; the bear cave in a ravine; Yatsko Lysytsia's remote hunting camp with its three traps; White Fang's cave; Tykhon Medovyk's place past the second ravine where the old willow grows; the bridge where Kozhem'yaka's wagon was robbed; the watering hole where the Shapeshifter comes when the moon is over the ravine; the chort lair in the swampy forest where the fern flower grows at night; the shaitan caves.

That is **sixteen distinct authored places in one region.**

**Kodak region** — palanka with Kovalenko's forge; the mine through the small forest; the river shore where the fishermen unload; the reeds on the far bank; Pylyp's nets; Zhydov's mill-tavern on the hill; the ford with the Glutton's nest; the north road and the Upyr cave; the well in the dark forest patch; the Kamianka–Borysfen confluence; the island in the lake.

**Samara region** — palanka with the powder cellars and Vyaka's sawmill; the mountains to the west; the miners' camp; the deep mine and its new cave; the oak forests; the ravine with the old camp and its scattered planks; the bandits' camp; the slavers' cave.

**Sich** — Outer Circle (marketplace, the Quartermaster's warehouse, the apothecary, the square, the dock, the kurin houses) and Inner Circle.

**North River** — the lighthouse, the grove where the Tatars hide, the Stone Circle on the hill with its Scythian idol.

**Otherworld island** — reed shore, dark forest, swamp, cemetery, fort ruins. Self-contained.

**Kaffa** (prologue) and **Ochakiv** (finale) — linear set-pieces, not open space.

Total: **roughly 60–70 authored points of interest across seven macro-areas.**

## Why that number settles the architecture

Gothic 1's playable terrain is on the order of 1 km². Its density is the whole trick — you cannot walk thirty seconds without finding something, which is why a small world feels enormous. Sixty POIs at Gothic-1 density needs roughly 1–1.5 km² of world.

At 64×32 px diamond tiles with one tile ≈ 1.5 m, 1 km² is around 440,000 tiles. That is a large number but it is _data_, not art — a chunked tilemap handles it without complaint. The engine is not the constraint.

The constraint is that the fiction places these regions far apart. [[Samara Palanka]] is "beyond the Samara River, which separates it from Kodak and Ingulsk", with mountains further west. [[Kodak Palanka]] stretches along the Borysfen. [[Ingul Palanka]] sits between the Samara and the Inhul. Honouring that geography in one continuous walk means authoring maybe 8–15 km² — six to ten times more terrain than you have content to fill.

That empty connective tissue is precisely what makes an open world feel dead. And with AI art it is a trap: terrain is _cheap to generate_ and _expensive to make not look repetitive_. Ten square kilometres of procedurally-scattered steppe grass is the fastest way to make a hand-authored game feel like an asset flip.

## The design already wants travel to cost something

[[❔Cook's Secret]] has Little Cook say the only person who makes a clay makhitra is a potter in Kodak — _"But she can't go there."_ The whole three-option structure of that step (borrow from Kozhem'yaka, buy it, or get Bosper's cracked one repaired by Pechyborshch) exists because going to Kodak is a real journey. If Kodak is a twenty-second walk, the quest collapses.

Same with [[Merchants from Lithuania]]: the pilots will not navigate the rapids without the lighthouse lit, which sends you to [[Ivan Svitilo's Lighthouse]] in a different region. That is a _good_ long-distance dependency. It only reads as one if distance is real.

And [[Passage to the Sich]] is literally an escorted journey — Ostap walks you there because the road is dangerous.

## The recommended shape

**Six seamless regions.** Within a region you walk anywhere, no loading screen, monsters gate routes the way they do in Gothic.

| Region      | Contents                                              | Rough size      |
| ----------- | ----------------------------------------------------- | --------------- |
| Ingulsk     | palanka, steppe, ravines, relict forest, north swamp  | 900 × 900 tiles |
| Kodak       | palanka, river shore, ridges, mine, tavern hill, ford | 800 × 800       |
| Samara      | palanka, sawmill, western mountains, mine, oak forest | 800 × 800       |
| Sich        | Outer Circle, Inner Circle, dock, market              | 400 × 400       |
| North River | lighthouse, grove, Stone Circle                       | 400 × 400       |
| Otherworld  | shore, forest, swamp, cemetery, ruins                 | 300 × 300       |

Plus **Kaffa** and **Ochakiv** as linear scripted levels, and interiors as small separate scenes.

**Between regions: diegetic transitions.** A road, a river crossing, a boat, a chumak wagon. Show a short travel card, not a progress bar. This is lore-correct — pilots run boats through the rapids, Ostap escorts you, the messenger travels on to the Sultanate.

Gothic does exactly this and nobody calls it a closed world.

## What the locked isometric camera costs you

Being honest about what does not survive the camera change from Gothic's over-the-shoulder third person:

**Survives, and improves:**

- Monster-gated exploration. Better in isometric, in fact — you _see_ the wolf pack before it sees you, which makes the decision to retreat a real decision rather than a surprise.
- NPC daily schedules. Fully intact.
- Being a nobody who gets stronger. Intact.
- Trainers as the only route to power. Intact.
- Faction exclusivity — pick one palanka, lose the others' content. Intact.
- Dialogue-driven quests with attribute gates. Intact.

**Does not survive:**

- Directional melee with blocking, and the physicality of a swing landing. You cannot read a parry window from a fixed overhead angle the way you can over a shoulder.
- Verticality. Gothic's world is a mountain valley you look _up_ at. Isometric handles slopes poorly and awe-from-below not at all. Samara's western mountains will read as a textured wall, not a mountain range.
- The specific Gothic thing where you turn a corner and a scavenger is suddenly in your face.

**Must be added to compensate:**

- Silhouette discipline — every creature identifiable as a black shape at target zoom.
- Long, readable telegraphs on enemy attacks, since you lose the animation nuance the closer camera provided.
- Audio doing the work the camera cannot: directional growls, footsteps behind you, the Shapeshifter's howl before you see it.

## Verdict

Doable. The engine is not the risk, the world size is not the risk, and the quest reactivity — the part that looks hardest — is the part this design is best prepared for.

The risk is art volume, and specifically animated characters. See [[05 AI Art Pipeline]].
