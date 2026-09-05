# 04 — Combat and Progression

## The damage formula has a serious problem

[[Weapon Skills System]] currently specifies:

```
crit chance   = weapon_skill (as a percentage)
critical hit  = (weapon_damage + weapon_skill) - armor
normal hit    = (weapon_damage + weapon_skill) / 2 - armor
"Standard damage in any case is 2-3 hp."
```

Four things break here. Worked numbers, assuming a decent saber at `weapon_damage = 10`.

**1. Skill overwhelms the weapon by an order of magnitude.**

| Skill | Crit damage before armor |
|---|---|
| 0 | 10 + 0 = **10** |
| 50 | 10 + 50 = **60** |
| 100 | 10 + 100 = **110** |

The weapon contributes 10. The skill contributes up to 100. A rusty knife at Expert beats [[Sviatoslav's Saber]] at Beginner by a wide margin.

This quietly destroys the reward economy the quests are built on. Sokyrko's "nice saber" from [[Find the Settlers]], the weapon of your choice from [[Tymko Koval]], the rare saber from [[Blind Cossack]], armour made from the Shapeshifter hide, [[Sviatoslav's Saber]] itself at the end of the whole charakternyk chain — all of them become cosmetic the moment skill outpaces them, which happens almost immediately.

**2. Crit chance equal to skill makes the two formulas collapse into one.**

At Expert (90–100 skill) you crit 90–100% of the time, so the normal-hit branch effectively disappears. At Beginner you almost never crit. So the *effective* damage curve is not one formula but a smooth slide from `(d+s)/2 − a` to `(d+s) − a` — an extra 2× multiplier stacked on top of the already-10× additive skill bonus.

Combine that with the tier table's faster strikes and 4–5 hit combos, and total DPS from skill 0 to 100 swings by something like **60–80×**. Gothic's novice-to-master swing is large, but it is nowhere near that. At that scale, mid-game content becomes trivially skippable and the Shapeshifter's carefully-designed poison gate stops mattering the moment you hit Master.

**3. "Standard damage is 2-3 hp" contradicts both formulas.**

For a normal hit at skill 30 with a 10-damage saber to land in the 2–3 range: `(10 + 30)/2 − armor = 2` requires `armor = 18`. For that to hold at skill 90, armour must be 48.

So armour has to grow in lockstep with player skill — which means every enemy's armour must be re-authored per player level. That is the bullet-sponge treadmill, and it directly contradicts the Gothic feel this design is chasing, where a wolf stays exactly as dangerous as a wolf and the change happens in *you*.

**4. Subtractive armour with these magnitudes creates a silent immunity cliff.**

If `armor ≥ weapon_damage + weapon_skill`, damage is zero or negative and there is no specified floor. A low-skill player hitting a well-armoured enemy does literally nothing, with no feedback explaining why.

Arguably that is intentional Gothic gating — some things you simply cannot hurt yet. But it needs to be an explicit, communicated rule, not an accident of arithmetic.

## Proposed replacement

Make skill a **multiplier on the weapon**, not an addend beside it.

```ts
const skillMult = 0.5 + skill / 100          // 0.5× at 0, 1.5× at 100
const base      = weaponDamage * skillMult
const critMult  = 1.5
const critChance = Math.min(0.5, skill / 200) // 0% at 0, 50% at 100

const raw    = base * (isCrit ? critMult : 1) * comboMult
const damage = Math.max(1, Math.round(raw - armor))
```

What this gives:

- **Weapons matter forever.** `weaponDamage` is the base being scaled, so a better saber is better at every skill level. Sviatoslav's Saber stays a prize.
- **Skill swing is ~3× per hit** (0.5× → 1.5×), not 10×. The rest of the power fantasy is carried by the tier table's speed and combo length, which is where it belongs and where the player actually *feels* it.
- **Crit stays exciting** by capping at 50% rather than becoming the default.
- **Armour is in the same units as weapon damage** — single digits to low teens — so subtractive armour behaves sensibly and the `max(1, …)` floor prevents silent immunity while still making heavily-armoured targets a slog you will want a better weapon for.
- **"2–3 hp standard damage"** works if health pools are small and human-scale: hero starts around 40 HP, a wolf has 15, an Upyr has 90, the [[Shapeshifter]] around 150. Fights are short and lethal, exactly as Gothic fights are.

Combo multipliers, mapping the existing tier table:

| Tier | Skill | Hits in chain | comboMult per hit |
|---|---|---|---|
| Beginner | 0–29 | 1 | 1.0 |
| Fighter | 30–59 | 2–3 | 1.0 / 1.1 / 1.25 |
| Master | 60–89 | 4–5 | 1.0 / 1.1 / 1.25 / 1.4 / 1.6 |
| Expert | 90–100 | 5 + faster recovery | as Master, with shorter windows |

The escalating multiplier is what makes landing a full chain feel earned.

## Making isometric combat feel like Gothic

The camera change means Gothic's directional blocking and swing physicality are gone (see [[00 Feasibility Verdict]]). What must be preserved:

**Commitment.** An attack animation, once started, cannot be cancelled. This single rule is most of what separates deliberate Gothic combat from Diablo click-storm. You commit, and if you mistimed it you eat the counter.

**Input buffering with a window.** Press attack during the last ~200 ms of the current swing to chain. Miss the window and the chain drops. This is what makes the Fighter/Master/Expert tiers *feel* different rather than just doing more damage — at Beginner there is no chain to time.

**Readable telegraphs.** Every enemy attack has a windup long enough to react to from a fixed overhead angle. Longer than a third-person game would need. Wolves crouch before lunging; the Shapeshifter rears.

**Weakness early is real.** A wolf pack of 4–5 in [[❔Wolf Attack]] should be genuinely threatening at the level you first get it. The design already assumes this — Taras pays you because it is dangerous work.

**Some things you cannot kill yet.** [[White Fang]] is explicitly Chapter 3. [[Levokryl]] is explicitly highest-level. [[Zmiy]] lives "far away in the wilderness". Let players find these and run. That is the Gothic lesson and this design already understands it.

**Preparation beats reflexes.** This is the best thing in the combat design as written, and it should be leaned into hard:

- [[❔Curse]] — without Ostap's aconite-and-mavka-bile coating, the Shapeshifter is *"nearly impossible to kill"*.
- [[❔ First Hunt]] — Honta's poisoned arrows slow the saiga; Pechyborshch's sharp-vision potion reveals it; Taras's marker removes the search entirely. Three different kinds of preparation, each obtained by talking to a different person.
- [[❔  Deer Antlers]] — you can bring Honta along, or take a potion from Pechyborshch beforehand.

That is a combat system where the fight is decided before it starts. It is very Gothic and it is already written.

## Enemy AI

Small behaviour set, driven by data:

- **Pack** ([[Wolf]], [[Gaddia]], [[Mavky]]) — shared aggro, flanking, one member circles while others engage. Mavky *"attack in groups"* and Gaddia are *"weak one-on-one but attack in swarms"* — same behaviour, different numbers.
- **Retinue** ([[Harpy]] around [[Levokryl]], [[Lishyi]] around [[Upyr]], [[Mavky]] around [[Vodianyi]], wolves around the Shapeshifter) — a leader plus escorts that spawn and leash together. This is a first-class concept in the vault and should be a first-class concept in the data.
- **Ambusher** ([[Upyr]] in caves) — idle until proximity, then fast and hard.
- **Territorial** ([[Vodianyi]], [[Zmiy]]) — never leaves its area, punishes anyone who enters.
- **Boss** (Shapeshifter, White Fang, Levokryl, Zmiy) — scripted phases, explicit vulnerability windows.

Aggro, leash radius and flee threshold all live in tuning data, not code.

## Companions

The vault uses companions more interestingly than most games do, because their *competence* is a story outcome rather than a stat:

- [[🧑Hryts Dovbnia]] — fights / misses and flees / absent, per [[❔Unlucky]].
- [[Ivanenko]] — helps at [[Kill the Glutton]] only if you healed him.
- [[💵🧑Honta]] — hired for extra pay.
- [[🧑 💵 🏹Yatsko Lysytsia.]] — partner for [[❔Specific Fur]].
- [[Ostap. Kodak Kurinnyi]] — escort in [[Passage to the Sich]].
- 3–4 chosen companions for the Ochakiv raid.

Keep companion AI deliberately simple: follow at a distance, engage what the player engages, use one signature ability, retreat below a health threshold. `panics_and_flees` is just a very low flee threshold — which means Hryts's cowardice is *one number*, not a special case.

## Non-combat resolution

Already present and worth protecting:

- [[❔ Hunters' Dispute]] — provoke a fistfight between Khoma and Opanas instead of investigating, and Naum thinks less of you for it.
- [[❔Fight in the Tavern]] — bribe the two Cossacks or duel one of them.
- [[Find Yakym Pohrebnyi's Horse]] — fight Vodianyi Kurylo, or listen and talk it through.
- [[Stolen Saber]] — four routes, none of which require violence.

Non-lethal duels (fistfights) need their own damage track and a knockdown-not-death outcome. Build that in early; retrofitting it is awkward.

## Progression tuning

From [[Character Development]]: 10 training points per level, spent at trainers, never regenerating. This is Gothic's exact model and it is good — it forces specialisation and it makes trainers into destinations.

Two consequences to design around:

- **Trainers are geography.** All archery masters up to Expert are in Ingulsk; the best saber masters in Kodak; the best musket masters in Samara. Committing to a weapon means committing to travelling. That is excellent and it reinforces the regional world structure from [[00 Feasibility Verdict]].
- **Points are irreversible, so information must be available.** Show clearly what each tier unlocks *before* the player spends. Gothic did not always do this and it was its most common source of regret.

Level curve: aim for roughly 20–25 levels across the whole game, giving 200–250 training points. Enough to max one weapon (100) plus meaningful attributes, not enough to max everything. The design's attribute gates — Strength 30 and Intelligence 30 in [[Stolen Saber]] — sit sensibly in that budget.
