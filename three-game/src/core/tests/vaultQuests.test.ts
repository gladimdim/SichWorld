import test from 'node:test';
import assert from 'node:assert';
import { VAULT_QUESTS, getVaultQuest } from '../../data/vaultQuests.js';

test('Obsidian Vault Quests Integrity', () => {
  const questKeys = Object.keys(VAULT_QUESTS);
  assert.ok(questKeys.length >= 50, `Expected at least 50 vault quests, found ${questKeys.length}`);

  // Verify Wolf Attack
  const wolfQuest = getVaultQuest('wolf_attack');
  assert.ok(wolfQuest, 'wolf_attack must be compiled');
  assert.strictEqual(wolfQuest.giver, 'taras_chub');
  assert.ok(wolfQuest.connections.includes('curse') || wolfQuest.connections.includes('swamp_healer'));

  // Verify Curse (Boss Quest)
  const curseQuest = getVaultQuest('curse');
  assert.ok(curseQuest, 'curse must be compiled');
  assert.strictEqual(curseQuest.giver, 'ostap_vernydub');

  // Verify Hunters Dispute
  const disputeQuest = getVaultQuest('hunters_dispute');
  assert.ok(disputeQuest, 'hunters_dispute must be compiled');
  assert.ok(disputeQuest.description.length > 20);

  // Verify First Hunt
  const huntQuest = getVaultQuest('first_hunt');
  assert.ok(huntQuest, 'first_hunt must be compiled');
  assert.ok(huntQuest.giver.includes('naum'));
});
