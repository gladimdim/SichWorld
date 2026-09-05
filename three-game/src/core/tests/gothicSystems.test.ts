import test from 'node:test';
import assert from 'node:assert';
import { RpgSystem, CharacterStats } from '../rpgSystem.js';
import { ITEM_DATABASE } from '../items.js';

test('Gothic Trainer Progression: Saber & Strength', () => {
  const stats: CharacterStats = {
    level: 1,
    xp: 0,
    trainingPoints: 10,
    strength: 10,
    agility: 10,
    intelligence: 10,
    maxHp: 50,
    currentHp: 50,
    weaponSkills: {
      saber: 25,
      bow: 15,
      musket: 5
    },
    gold: 150
  };

  // Initially Beginner (<30%)
  assert.strictEqual(RpgSystem.getMasteryTier(stats.weaponSkills.saber), 'Beginner');

  // Train saber +5 (cost 5 LP, 45 Gold)
  const trained1 = RpgSystem.trainSkill(stats, 'saber', 5, 45);
  assert.strictEqual(trained1, true);
  assert.strictEqual(stats.weaponSkills.saber, 30);
  assert.strictEqual(stats.trainingPoints, 5);
  assert.strictEqual(stats.gold, 105);

  // Now reached Fighter rank (>=30%)
  assert.strictEqual(RpgSystem.getMasteryTier(stats.weaponSkills.saber), 'Fighter');
  assert.strictEqual(RpgSystem.getAttackComboLength('Fighter'), 3);

  // Train strength +5 (cost 5 LP, 40 Gold)
  const trained2 = RpgSystem.trainSkill(stats, 'strength', 5, 40);
  assert.strictEqual(trained2, true);
  assert.strictEqual(stats.strength, 15);
  assert.strictEqual(stats.maxHp, 60); // Strength grants +10 max HP
  assert.strictEqual(stats.trainingPoints, 0);
  assert.strictEqual(stats.gold, 65);

  // Cannot train without LP
  const failedNoLp = RpgSystem.trainSkill(stats, 'saber', 5, 45);
  assert.strictEqual(failedNoLp, false);
});

test('Gothic Economy & Item Integrity: Consumables & Quest Protection', () => {
  const salo = ITEM_DATABASE['salo'];
  assert.ok(salo);
  assert.strictEqual(salo.healHp, 25);
  assert.strictEqual(salo.category, 'consumable');

  const ring = ITEM_DATABASE['paturnakh_ring'];
  assert.ok(ring);
  assert.strictEqual(ring.category, 'quest');
  assert.strictEqual(ring.stackable, false);

  // Test consumable healing logic
  const stats: CharacterStats = {
    level: 1,
    xp: 0,
    trainingPoints: 0,
    strength: 10,
    agility: 10,
    intelligence: 10,
    maxHp: 60,
    currentHp: 20,
    weaponSkills: { saber: 20, bow: 10, musket: 0 },
    gold: 20
  };

  // Eat salo (+25 HP)
  stats.currentHp = Math.min(stats.maxHp, stats.currentHp + salo.healHp!);
  assert.strictEqual(stats.currentHp, 45);

  // Eat second salo (+25 HP capped at maxHp 60)
  stats.currentHp = Math.min(stats.maxHp, stats.currentHp + salo.healHp!);
  assert.strictEqual(stats.currentHp, 60);
});

test('XP Curve & Gothic Level Up (+10 TP, Full Heal)', () => {
  const stats: CharacterStats = {
    level: 1,
    xp: 0,
    trainingPoints: 0,
    strength: 10,
    agility: 10,
    intelligence: 10,
    maxHp: 50,
    currentHp: 15,
    weaponSkills: { saber: 20, bow: 10, musket: 0 },
    gold: 0
  };

  const neededXp = RpgSystem.getXpForNextLevel(1); // 500 XP
  assert.strictEqual(neededXp, 500);

  const res = RpgSystem.addXp(stats, 520);
  assert.strictEqual(res.leveledUp, true);
  assert.strictEqual(res.newLevel, 2);
  assert.strictEqual(stats.level, 2);
  assert.strictEqual(stats.trainingPoints, 10);
  assert.strictEqual(stats.maxHp, 62);
  assert.strictEqual(stats.currentHp, 62); // Full heal on level up!
});
