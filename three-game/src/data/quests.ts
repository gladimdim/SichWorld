import { QuestDef } from '../core/types.js';

export const QUEST_WOLF_ATTACK: QuestDef = {
  id: 'wolf_attack',
  title: 'Wolf Attack',
  type: 'camp',
  faction: 'ingulsk',
  giver: 'taras_chub',
  stages: {
    start: {
      objective: 'Talk to Taras Chub near the sheep pen'
    },
    pasture: {
      objective: 'Kill the wolf pack harassing the pasture',
      onEnter: [{ t: 'spawn', table: 'wolves_pasture', at: 'pasture', tag: 'pasture_wolves' }]
    },
    report: {
      objective: 'Report back to Taras Chub about the pack and their strange wounds'
    }
  },
  initial: 'start',
  transitions: [
    {
      from: 'start',
      event: 'talk:taras_chub',
      to: 'pasture'
    },
    {
      from: 'pasture',
      event: 'kill:wolves_pasture',
      to: 'report',
      effects: [{ t: 'flag', k: 'pasture_wolves_dead', v: true }]
    },
    {
      from: 'report',
      event: 'dialog:wolf_attack.report_wounds',
      to: 'done',
      effects: [
        { t: 'knows', k: 'knows_howling' },
        { t: 'rep', k: 'taras_trust', d: 1 },
        { t: 'give', id: 'wolf_hide', n: 3 },
        { t: 'xp', n: 50 }
      ],
      resolution: 'reported_wounds'
    },
    {
      from: 'report',
      event: 'dialog:wolf_attack.report_plain',
      to: 'done',
      effects: [
        { t: 'give', id: 'wolf_hide', n: 1 },
        { t: 'xp', n: 30 }
      ],
      resolution: 'plain'
    }
  ]
};

export const QUEST_SWAMP_HEALER: QuestDef = {
  id: 'swamp_healer',
  title: 'Swamp Healer',
  type: 'camp',
  faction: 'ingulsk',
  giver: 'pechyborshch',
  stages: {
    start: {
      objective: 'Speak with herbalist Pechyborshch about the sick Cossacks'
    },
    swamp: {
      objective: "Get the black-willow root from Ostap Vernydub's hut in the swamp"
    },
    wax: {
      objective: 'Bring beeswax from the wild apiary in the forest for Ostap'
    }
  },
  initial: 'start',
  transitions: [
    {
      from: 'start',
      event: 'talk:pechyborshch',
      to: 'swamp'
    },
    {
      from: 'swamp',
      event: 'dialog:ostap.ask_wax',
      to: 'wax'
    },
    {
      from: 'wax',
      event: 'give:beeswax>ostap',
      to: 'done',
      effects: [
        { t: 'give', id: 'blackwillow_root', n: 1 },
        { t: 'rep', k: 'ostap_trust', d: 1 },
        { t: 'xp', n: 60 }
      ],
      resolution: 'befriended'
    },
    {
      from: 'swamp',
      event: 'dialog:ostap.howling_confidence',
      to: 'done',
      conditions: [{ t: 'knows', k: 'knows_howling' }],
      effects: [
        { t: 'give', id: 'blackwillow_root', n: 1 },
        { t: 'rep', k: 'ostap_trust', d: 2 },
        { t: 'shop', npc: 'ostap', op: 'unlock' },
        { t: 'xp', n: 80 }
      ],
      resolution: 'befriended'
    },
    {
      from: 'swamp',
      event: 'steal:blackwillow_root',
      to: 'done',
      effects: [
        { t: 'give', id: 'blackwillow_root', n: 1 },
        { t: 'rep', k: 'ostap_trust', d: -5 },
        { t: 'routine', npc: 'ostap', routine: 'hostile' }
      ],
      resolution: 'stole'
    }
  ]
};

export const QUEST_CURSE: QuestDef = {
  id: 'curse',
  title: 'Curse',
  type: 'camp',
  faction: 'ingulsk',
  giver: 'ostap',
  availableWhen: [
    { t: 'quest', id: 'swamp_healer', state: 'done' },
    { t: 'flag', k: 'swamp_healer.resolution', v: 'befriended' },
    { t: 'knows', k: 'knows_howling' }
  ],
  stages: {
    start: {
      objective: 'Speak with Ostap about the ancient horror awakening in the steppe'
    },
    bile: {
      objective: 'Slay a swamp mavka and bring its bile to Ostap'
    },
    poison: {
      objective: 'Let Ostap brew aconite poison and coat your blade'
    },
    hunt: {
      objective: 'Slay the Shapeshifter (Vovkulaka) in the night steppe',
      onEnter: [
        { t: 'give', id: 'coated_blade', n: 1 },
        { t: 'spawn', table: 'shapeshifter_night', at: 'watering_hole', tag: 'shapedanger' },
        { t: 'marker', id: 'shapeshifter_lair', op: 'add', at: 'watering_hole', label: 'Shapeshifter Lair' }
      ]
    }
  },
  initial: 'start',
  transitions: [
    {
      from: 'start',
      event: 'talk:ostap',
      to: 'bile'
    },
    {
      from: 'bile',
      event: 'give:mavka_bile>ostap',
      to: 'poison'
    },
    {
      from: 'poison',
      event: 'dialog:ostap.take_coated_blade',
      to: 'hunt'
    },
    {
      from: 'hunt',
      event: 'kill:shapeshifter',
      to: 'done',
      effects: [
        { t: 'despawn', tag: 'shapedanger' },
        { t: 'marker', id: 'shapeshifter_lair', op: 'remove' },
        { t: 'give', id: 'shapeshifter_hide', n: 1 },
        { t: 'rep', k: 'ingulsk', d: 5 },
        { t: 'routine', npc: 'hryts_dovbnia', routine: 'hunter' },
        { t: 'xp', n: 150 }
      ],
      resolution: 'slain'
    }
  ]
};

export const QUEST_UNLUCKY: QuestDef = {
  id: 'unlucky',
  title: 'Unlucky',
  type: 'camp',
  faction: 'ingulsk',
  giver: 'hryts_dovbnia',
  stages: {
    start: {
      objective: "Decide how to help Hryts pass Honta's hunting trial"
    }
  },
  initial: 'start',
  transitions: [
    {
      from: 'start',
      event: 'dialog:unlucky.give_fur',
      to: 'done',
      conditions: [{ t: 'item', id: 'wolf_hide', n: 1 }],
      effects: [
        { t: 'take', id: 'wolf_hide', n: 1 },
        { t: 'rep', k: 'hryts_trust', d: 1 },
        { t: 'flag', k: 'hryts_combat_ai', v: 'coward' },
        { t: 'xp', n: 40 }
      ],
      resolution: 'deceived'
    },
    {
      from: 'start',
      event: 'dialog:unlucky.teach_honestly',
      to: 'done',
      effects: [
        { t: 'rep', k: 'hryts_trust', d: 2 },
        { t: 'flag', k: 'hryts_combat_ai', v: 'archer' },
        { t: 'routine', npc: 'hryts_dovbnia', routine: 'follower_ranged' },
        { t: 'xp', n: 70 }
      ],
      resolution: 'taught'
    },
    {
      from: 'start',
      event: 'dialog:unlucky.snitch_honta',
      to: 'done',
      effects: [
        { t: 'rep', k: 'honta_trust', d: 1 },
        { t: 'rep', k: 'hryts_trust', d: -5 },
        { t: 'give', id: 'arrow_pack', n: 2 },
        { t: 'flag', k: 'hryts_combat_ai', v: 'absent' },
        { t: 'routine', npc: 'hryts_dovbnia', routine: 'exiled' },
        { t: 'xp', n: 50 }
      ],
      resolution: 'betrayed'
    }
  ]
};

export const QUEST_FIRST_HUNT: QuestDef = {
  id: 'first_hunt',
  title: 'First Hunt',
  type: 'joining',
  faction: 'ingulsk',
  giver: 'naum_lysenko',
  stages: {
    start: {
      objective: 'Talk to Kurinnyi Naum Lysenko about proving your hunting prowess'
    },
    investigate: {
      objective: 'Ask around the camp (Honta, Pechyborshch, Taras, Hryts) before hunting the old saiga'
    },
    hunt: {
      objective: 'Track down and slay the horned old saiga in the eastern steppe ravines'
    },
    report: {
      objective: 'Deliver the saiga carcass back to Naum Lysenko'
    }
  },
  initial: 'start',
  transitions: [
    {
      from: 'start',
      event: 'talk:naum_lysenko',
      to: 'investigate'
    },
    {
      from: 'investigate',
      event: 'dialog:first_hunt.go_hunt',
      to: 'hunt',
      effects: [
        { t: 'spawn', table: 'old_saiga_steppe', at: 'eastern_ravine', tag: 'saiga_target' }
      ]
    },
    {
      from: 'hunt',
      event: 'kill:old_saiga',
      to: 'report',
      effects: [
        { t: 'give', id: 'saiga_carcass', n: 1 },
        { t: 'give', id: 'saiga_horns', n: 1 }
      ]
    },
    {
      from: 'report',
      event: 'dialog:first_hunt.turn_in_perfect',
      to: 'done',
      conditions: [{ t: 'flag', k: 'first_hunt_perfect', v: true }],
      effects: [
        { t: 'take', id: 'saiga_carcass', n: 1 },
        { t: 'rep', k: 'ingulsk', d: 5 },
        { t: 'rep', k: 'naum_trust', d: 3 },
        { t: 'give', id: 'hunting_knife', n: 1 },
        { t: 'xp', n: 120 }
      ],
      resolution: 'perfect'
    },
    {
      from: 'report',
      event: 'dialog:first_hunt.turn_in_normal',
      to: 'done',
      effects: [
        { t: 'take', id: 'saiga_carcass', n: 1 },
        { t: 'rep', k: 'ingulsk', d: 3 },
        { t: 'rep', k: 'naum_trust', d: 1 },
        { t: 'xp', n: 80 }
      ],
      resolution: 'normal'
    }
  ]
};

export const QUEST_HUNTERS_DISPUTE: QuestDef = {
  id: 'hunters_dispute',
  title: "Hunters' Dispute",
  type: 'joining',
  faction: 'ingulsk',
  giver: 'naum_lysenko',
  stages: {
    start: {
      objective: "Resolve the dispute between Khoma Riznyk and Opanas Kryvyi over the deer"
    },
    investigate: {
      objective: "Interrogate Khoma, Opanas, and look for clues or witnesses"
    }
  },
  initial: 'start',
  transitions: [
    {
      from: 'start',
      event: 'talk:naum_lysenko',
      to: 'investigate'
    },
    {
      from: 'investigate',
      event: 'dialog:dispute.split_equally',
      to: 'done',
      effects: [
        { t: 'rep', k: 'ingulsk', d: 1 },
        { t: 'xp', n: 50 }
      ],
      resolution: 'split'
    },
    {
      from: 'investigate',
      event: 'dialog:dispute.side_khoma',
      to: 'done',
      effects: [
        { t: 'rep', k: 'khoma_trust', d: 2 },
        { t: 'rep', k: 'opanas_trust', d: -2 },
        { t: 'give', id: 'cured_leather', n: 1 },
        { t: 'xp', n: 70 }
      ],
      resolution: 'khoma'
    },
    {
      from: 'investigate',
      event: 'dialog:dispute.side_opanas',
      to: 'done',
      effects: [
        { t: 'rep', k: 'opanas_trust', d: 2 },
        { t: 'rep', k: 'khoma_trust', d: -2 },
        { t: 'give', id: 'arrow_pack', n: 3 },
        { t: 'xp', n: 70 }
      ],
      resolution: 'opanas'
    },
    {
      from: 'investigate',
      event: 'dialog:dispute.reveal_truth',
      to: 'done',
      conditions: [
        { t: 'knows', k: 'knows_yatsko_fletching' },
        { t: 'item', id: 'old_arrow', n: 1 }
      ],
      effects: [
        { t: 'rep', k: 'ingulsk', d: 4 },
        { t: 'rep', k: 'naum_trust', d: 2 },
        { t: 'rep', k: 'yatsko_trust', d: 3 },
        { t: 'shop', npc: 'yatsko', op: 'discount', pct: 15 },
        { t: 'xp', n: 120 }
      ],
      resolution: 'truth'
    },
    {
      from: 'investigate',
      event: 'dialog:dispute.provoke_duel',
      to: 'done',
      effects: [
        { t: 'rep', k: 'naum_trust', d: -2 },
        { t: 'give', id: 'deer_meat', n: 5 },
        { t: 'xp', n: 40 }
      ],
      resolution: 'duel'
    }
  ]
};

export const ALL_INITIAL_QUESTS: QuestDef[] = [
  QUEST_WOLF_ATTACK,
  QUEST_SWAMP_HEALER,
  QUEST_CURSE,
  QUEST_UNLUCKY,
  QUEST_FIRST_HUNT,
  QUEST_HUNTERS_DISPUTE
];
