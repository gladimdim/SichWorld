import test from 'node:test';
import assert from 'node:assert';
import { QuestManager } from '../questManager.js';
import { DialogueRunner } from '../dialogueRunner.js';
import { EventBus } from '../eventBus.js';
import { RpgSystem, CharacterStats } from '../rpgSystem.js';
import {
  QUEST_WOLF_ATTACK,
  QUEST_SWAMP_HEALER,
  QUEST_CURSE,
  QUEST_UNLUCKY,
  QUEST_FIRST_HUNT,
  QUEST_HUNTERS_DISPUTE
} from '../../data/quests.js';
import {
  DIALOGUE_TARAS_CHUB,
  DIALOGUE_HONTA,
  DIALOGUE_NAUM_LYSENKO
} from '../../data/dialogue.js';

test('Gothic RPG Formula Verification', () => {
  const stats: CharacterStats = {
    level: 1,
    xp: 0,
    trainingPoints: 0,
    strength: 10,
    agility: 10,
    intelligence: 10,
    maxHp: 40,
    currentHp: 40,
    weaponSkills: { saber: 15, bow: 10, musket: 5 },
    gold: 100
  };

  // Level up grants +10 training points and heals/increases max HP
  const { leveledUp, newLevel } = RpgSystem.addXp(stats, 600);
  assert.strictEqual(leveledUp, true);
  assert.strictEqual(newLevel, 2);
  assert.strictEqual(stats.trainingPoints, 10);
  assert.strictEqual(stats.maxHp, 52);

  // Train saber skill at trainer
  const trained = RpgSystem.trainSkill(stats, 'saber', 5, 50);
  assert.strictEqual(trained, true);
  assert.strictEqual(stats.weaponSkills.saber, 20);
  assert.strictEqual(stats.trainingPoints, 5);
  assert.strictEqual(stats.gold, 50);

  // Gothic damage formula:
  // Crit: (weapon + skill) - armor = (30 + 20) - 10 = 40
  // Normal: (weapon + skill) / 2 - armor = 50 / 2 - 10 = 15
  const critHit = RpgSystem.calculateDamage(stats.weaponSkills.saber, 30, 10, () => 0.05); // roll 5 < 20%
  assert.strictEqual(critHit.isCrit, true);
  assert.strictEqual(critHit.damage, 40);

  const normalHit = RpgSystem.calculateDamage(stats.weaponSkills.saber, 30, 10, () => 0.50); // roll 50 >= 20%
  assert.strictEqual(normalHit.isCrit, false);
  assert.strictEqual(normalHit.damage, 15);
});

test('Master Chain: Wolf Attack -> Knowledge Unlock -> Swamp Healer -> Curse', () => {
  const bus = new EventBus();
  const qm = new QuestManager({}, bus);
  qm.registerQuests([QUEST_WOLF_ATTACK, QUEST_SWAMP_HEALER, QUEST_CURSE, QUEST_UNLUCKY]);

  const dlg = new DialogueRunner(qm, bus);
  dlg.registerTrees([DIALOGUE_TARAS_CHUB, DIALOGUE_HONTA, DIALOGUE_NAUM_LYSENKO]);

  // Initial state: Wolf Attack is available, Curse is strictly locked
  assert.strictEqual(qm.getQuest('wolf_attack')?.state, 'available');
  assert.strictEqual(qm.getQuest('curse')?.state, 'locked');

  // 1. Talk to Taras Chub to accept Wolf Attack
  const talk1 = dlg.startConversation('taras_chub')!;
  assert.ok(talk1.node?.text.includes('Watch your step'));
  // Choose "Wolves? Tell me what happened"
  const choice1 = dlg.selectChoice('taras_chub', talk1.node!.id, 0);
  assert.strictEqual(qm.getQuest('wolf_attack')?.state, 'active');
  assert.strictEqual(qm.getQuest('wolf_attack')?.stage, 'start');

  // Trigger talk event to advance to pasture
  bus.emit('talk:taras_chub');
  assert.strictEqual(qm.getQuest('wolf_attack')?.stage, 'pasture');

  // Slay wolves at pasture
  bus.emit('kill:wolves_pasture');
  assert.strictEqual(qm.getQuest('wolf_attack')?.stage, 'report');
  assert.strictEqual(qm.getWorldState().flags['pasture_wolves_dead'], true);

  // Return to Taras to report wounds
  const talk2 = dlg.startConversation('taras_chub')!;
  const reportWoundChoice = talk2.choices.find((c) => c.text.includes('unnatural claw wounds'))!;
  assert.ok(reportWoundChoice);
  const choiceIdx = talk2.choices.indexOf(reportWoundChoice);
  const choice2 = dlg.selectChoice('taras_chub', talk2.node!.id, choiceIdx);
  // Choose the reported wounds finish choice
  dlg.selectChoice('taras_chub', choice2.node!.id, 0);

  assert.strictEqual(qm.getQuest('wolf_attack')?.state, 'done');
  assert.strictEqual(qm.getQuest('wolf_attack')?.resolution, 'reported_wounds');
  assert.strictEqual(qm.getWorldState().knowledge['knows_howling'], true);
  assert.strictEqual(qm.getWorldState().rep['taras_trust'], 1);
  assert.strictEqual(qm.getWorldState().inventory['wolf_hide'], 3);

  // 2. Swamp Healer: Thanks to knows_howling, Ostap gives root without the beeswax chore!
  qm.startQuest('swamp_healer');
  bus.emit('talk:pechyborshch');
  assert.strictEqual(qm.getQuest('swamp_healer')?.stage, 'swamp');

  // Dialogue choice using howling knowledge
  bus.emit('dialog:ostap.howling_confidence');
  assert.strictEqual(qm.getQuest('swamp_healer')?.state, 'done');
  assert.strictEqual(qm.getQuest('swamp_healer')?.resolution, 'befriended');
  assert.strictEqual(qm.getWorldState().inventory['blackwillow_root'], 1);

  // 3. Curse should now automatically unlock because:
  // swamp_healer is done with resolution 'befriended' AND knows_howling is true!
  qm.recheckAvailability();
  assert.strictEqual(qm.getQuest('curse')?.state, 'available');

  // Start Curse
  qm.startQuest('curse');
  bus.emit('talk:ostap');
  assert.strictEqual(qm.getQuest('curse')?.stage, 'bile');

  // Bring mavka bile
  bus.emit('give:mavka_bile>ostap');
  assert.strictEqual(qm.getQuest('curse')?.stage, 'poison');

  // Coat blade -> spawns shapeshifter
  let spawnedShapeshifter = false;
  qm.onEffect((e) => {
    if (e.t === 'spawn' && e.table === 'shapeshifter_night') {
      spawnedShapeshifter = true;
    }
  });

  bus.emit('dialog:ostap.take_coated_blade');
  assert.strictEqual(qm.getQuest('curse')?.stage, 'hunt');
  assert.strictEqual(spawnedShapeshifter, true);
  assert.strictEqual(qm.getWorldState().inventory['coated_blade'], 1);

  // Slay the Shapeshifter
  bus.emit('kill:shapeshifter');
  assert.strictEqual(qm.getQuest('curse')?.state, 'done');
  assert.strictEqual(qm.getQuest('curse')?.resolution, 'slain');
  assert.strictEqual(qm.getWorldState().inventory['shapeshifter_hide'], 1);
  assert.strictEqual(qm.getWorldState().rep['ingulsk'], 5);
});

test('Stealing Root in Swamp Healer Permanently Blocks Curse', () => {
  const bus = new EventBus();
  const qm = new QuestManager({}, bus);
  qm.registerQuests([QUEST_WOLF_ATTACK, QUEST_SWAMP_HEALER, QUEST_CURSE]);

  // Player steals the black willow root
  qm.startQuest('swamp_healer');
  bus.emit('talk:pechyborshch');
  bus.emit('steal:blackwillow_root');

  assert.strictEqual(qm.getQuest('swamp_healer')?.state, 'done');
  assert.strictEqual(qm.getQuest('swamp_healer')?.resolution, 'stole');
  assert.strictEqual(qm.getWorldState().rep['ostap_trust'], -5);

  // Even if player later gains knows_howling, Curse remains LOCKED!
  qm.getWorldState().knowledge['knows_howling'] = true;
  qm.recheckAvailability();

  assert.strictEqual(qm.getQuest('curse')?.state, 'locked');
});

test("Hunters' Dispute: Truth Ending via Honta's Arrow Forensic Investigation", () => {
  const bus = new EventBus();
  const qm = new QuestManager({}, bus);
  qm.registerQuests([QUEST_HUNTERS_DISPUTE]);

  const dlg = new DialogueRunner(qm, bus);
  dlg.registerTrees([DIALOGUE_HONTA, DIALOGUE_NAUM_LYSENKO]);

  qm.startQuest('hunters_dispute');
  bus.emit('talk:naum_lysenko');
  assert.strictEqual(qm.getQuest('hunters_dispute')?.stage, 'investigate');

  // Player finds old arrow in deer carcass
  qm.getWorldState().inventory['old_arrow'] = 1;

  // Player talks to Honta and shows the old arrow
  const hontaTalk = dlg.startConversation('honta')!;
  // Choice: "Look at this old arrow extracted from the disputed deer"
  const inspectChoice = hontaTalk.choices.find((c) => c.text.includes('Look at this old arrow'));
  assert.ok(inspectChoice);

  const idx = hontaTalk.choices.indexOf(inspectChoice!);
  dlg.selectChoice('honta', hontaTalk.node!.id, idx);

  // Knowledge of Yatsko's fletching unlocked!
  assert.strictEqual(qm.getWorldState().knowledge['knows_yatsko_fletching'], true);

  // Now the truth resolution choice becomes valid
  bus.emit('dialog:dispute.reveal_truth');
  assert.strictEqual(qm.getQuest('hunters_dispute')?.state, 'done');
  assert.strictEqual(qm.getQuest('hunters_dispute')?.resolution, 'truth');
  assert.strictEqual(qm.getWorldState().rep['yatsko_trust'], 3);
  assert.strictEqual(qm.getWorldState().rep['ingulsk'], 4);
});
