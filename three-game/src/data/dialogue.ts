import { DialogueTree } from '../core/types.js';

export const DIALOGUE_TARAS_CHUB: DialogueTree = {
  npc: 'taras_chub',
  greetings: [
    {
      id: 'taras.greet_curse_done',
      npc: 'taras_chub',
      text: 'Quiet nights in the steppe at last. You did well, Cossack. The spirits of the fallen rest easy.',
      conditions: [{ t: 'quest', id: 'curse', state: 'done' }],
      choices: [
        { text: 'Any other beasts prowling?', goto: 'taras.beasts' },
        { text: 'Farewell, Taras.', goto: 'EXIT' }
      ]
    },
    {
      id: 'taras.greet_trusted',
      npc: 'taras_chub',
      text: 'Good to see you again. What brings you to the sheep pen?',
      conditions: [{ t: 'rep', k: 'taras_trust', min: 1 }],
      choices: [
        {
          text: 'About the saiga for Kurinnyi Naum...',
          conditions: [{ t: 'stage', quest: 'first_hunt', stage: 'investigate' }],
          goto: 'taras.saiga_hint',
          once: true
        },
        {
          text: 'Where does the Shapeshifter lurk at night?',
          conditions: [{ t: 'stage', quest: 'curse', stage: 'hunt' }],
          goto: 'taras.curse_hint',
          once: true
        },
        { text: 'Just passing by.', goto: 'EXIT' }
      ]
    },
    {
      id: 'taras.greet_default',
      npc: 'taras_chub',
      text: 'Watch your step around the pens. Wolves have been smelling blood.',
      choices: [
        {
          text: 'Wolves? Tell me what happened.',
          conditions: [{ t: 'quest', id: 'wolf_attack', state: ['locked', 'available'] }],
          goto: 'taras.wolf_quest_start',
          once: true
        },
        {
          text: 'I killed the pasture wolves. And their backs bore unnatural claw wounds.',
          conditions: [
            { t: 'stage', quest: 'wolf_attack', stage: 'report' },
            { t: 'flag', k: 'pasture_wolves_dead', v: true }
          ],
          goto: 'taras.report_wounds',
          once: true
        },
        {
          text: 'I killed the pasture wolves.',
          conditions: [
            { t: 'stage', quest: 'wolf_attack', stage: 'report' },
            { t: 'flag', k: 'pasture_wolves_dead', v: true }
          ],
          goto: 'taras.report_plain',
          once: true
        },
        { text: 'Do you want to buy some pelts or trade provisions?', goto: 'TRADE' },
        { text: 'Goodbye.', goto: 'EXIT' }
      ]
    }
  ],
  nodes: {
    'taras.wolf_quest_start': {
      id: 'taras.wolf_quest_start',
      npc: 'taras_chub',
      text: 'Third sheep mauled this week! Usually they fear fire, but something is driving them out from the deep ravines. Kill the pack by the pasture, and I will pay you.',
      effects: [{ t: 'quest', id: 'wolf_attack', op: 'start' }],
      choices: [
        { text: 'Consider it done.', goto: 'EXIT' },
        { text: 'What kind of wolves are they?', goto: 'taras.wolf_details' }
      ]
    },
    'taras.wolf_details': {
      id: 'taras.wolf_details',
      npc: 'taras_chub',
      text: 'Frenzied. Hungry. Their howls echo from the steppe before sundown.',
      choices: [{ text: 'I am on my way.', goto: 'EXIT' }]
    },
    'taras.report_wounds': {
      id: 'taras.report_wounds',
      npc: 'taras_chub',
      text: 'Something bigger than a wolf... God have mercy. I heard unearthly howling at the dead of night, not like any wolf born of earth. Do not go searching for whatever did that.',
      choices: [
        {
          id: 'wolf_attack.report_wounds',
          text: 'Here are the pelts. Keep your guard up, Taras.',
          goto: 'EXIT'
        }
      ]
    },
    'taras.report_plain': {
      id: 'taras.report_plain',
      npc: 'taras_chub',
      text: 'Good. Take your pay and pelts. Less trouble for my flock.',
      choices: [
        {
          id: 'wolf_attack.report_plain',
          text: 'Thanks for the coin.',
          goto: 'EXIT'
        }
      ]
    },
    'taras.saiga_hint': {
      id: 'taras.saiga_hint',
      npc: 'taras_chub',
      text: 'Since you saved my sheep, I will tell you: near the dry ravine to the east, just past the boundary stones. I spotted an old horned male drinking at first light. Go straight there.',
      effects: [
        { t: 'flag', k: 'taras_gave_saiga_marker', v: true },
        { t: 'marker', id: 'saiga_exact_spot', op: 'add', at: 'eastern_ravine', label: 'Saiga Grazing Spot' }
      ],
      choices: [{ text: 'That saves me hours of wandering. Thank you, Taras.', goto: 'EXIT' }]
    },
    'taras.curse_hint': {
      id: 'taras.curse_hint',
      npc: 'taras_chub',
      text: 'The Shapeshifter comes to the water ravine when the crescent moon sits right above the cliff. Wait for him downwind with coated steel, or you will not see dawn.',
      effects: [
        { t: 'flag', k: 'knows_shapeshifter_location', v: true },
        { t: 'marker', id: 'shapeshifter_lair', op: 'add', at: 'watering_hole', label: 'Watering Hole Ambush' }
      ],
      choices: [{ text: 'I will be ready.', goto: 'EXIT' }]
    },
    'taras.beasts': {
      id: 'taras.beasts',
      npc: 'taras_chub',
      text: 'Only standard steppe wolves now. Nothing our muskets cannot handle.',
      choices: [{ text: 'Good to hear.', goto: 'EXIT' }]
    }
  }
};

export const DIALOGUE_HONTA: DialogueTree = {
  npc: 'honta',
  greetings: [
    {
      id: 'honta.default',
      npc: 'honta',
      text: 'Watch where you step, Cossack. Good yew and seasoned sinew take years to cure.',
      choices: [
        {
          text: 'Naum sent me to hunt an old saiga. Any advice on taking it down?',
          conditions: [{ t: 'stage', quest: 'first_hunt', stage: 'investigate' }],
          goto: 'honta.saiga_advice',
          once: true
        },
        {
          text: 'Look at this old arrow extracted from the disputed deer.',
          conditions: [
            { t: 'stage', quest: 'hunters_dispute', stage: 'investigate' },
            { t: 'item', id: 'old_arrow', n: 1 }
          ],
          goto: 'honta.inspect_arrow',
          once: true
        },
        {
          text: 'Hryts wanted me to lie and give him a wolf pelt to pass your trial.',
          conditions: [{ t: 'stage', quest: 'unlucky', stage: 'start' }],
          goto: 'honta.unlucky_snitch',
          once: true
        },
        { text: 'I want to practice my archery.', goto: 'TRAIN' },
        { text: 'Show me your bows and arrows.', goto: 'TRADE' },
        { text: 'Farewell.', goto: 'EXIT' }
      ]
    }
  ],
  nodes: {
    'honta.saiga_advice': {
      id: 'honta.saiga_advice',
      npc: 'honta',
      text: 'A saiga? An old male keeps apart from the herd, grazing at dawn by ravines. Approach downwind, or he smells you a verst away. Take these 3 viper-poison arrows—he will drop before he can bolt.',
      effects: [
        { t: 'give', id: 'poison_arrow', n: 3 },
        { t: 'flag', k: 'honta_gave_poison_arrows', v: true }
      ],
      choices: [{ text: 'Much appreciated, Honta.', goto: 'EXIT' }]
    },
    'honta.inspect_arrow': {
      id: 'honta.inspect_arrow',
      npc: 'honta',
      text: 'Hah! Look at the split goose feather and three copper wire wraps. Only Yatsko Lysytsia fletches shafts like that. He struck this beast first, days ago!',
      effects: [
        { t: 'knows', k: 'knows_yatsko_fletching' },
        { t: 'journal', entry: "Honta identified the old arrow: it belongs to Yatsko Lysytsia." }
      ],
      choices: [{ text: 'So neither Khoma nor Opanas killed it fairly. Good to know.', goto: 'EXIT' }]
    },
    'honta.unlucky_snitch': {
      id: 'honta.unlucky_snitch',
      npc: 'honta',
      text: 'That little scoundrel! A cheat has no place among Ingulsk hunters. I will have him cleaning the grease pits! Thank you for your honesty, brother.',
      choices: [
        {
          id: 'unlucky.snitch_honta',
          text: 'Honor matters more than easy praise.',
          goto: 'EXIT'
        }
      ]
    }
  }
};

export const DIALOGUE_NAUM_LYSENKO: DialogueTree = {
  npc: 'naum_lysenko',
  greetings: [
    {
      id: 'naum.greet_done_hunting',
      npc: 'naum_lysenko',
      text: 'Welcome, brother hunter. The palanka recognizes your eye and blade.',
      conditions: [{ t: 'quest', id: 'first_hunt', state: 'done' }],
      choices: [
        {
          text: 'What about Khoma and Opanas arguing over the deer?',
          conditions: [{ t: 'quest', id: 'hunters_dispute', state: ['locked', 'available'] }],
          goto: 'naum.start_dispute',
          once: true
        },
        { text: 'Glory to the Host.', goto: 'EXIT' }
      ]
    },
    {
      id: 'naum.greet_default',
      npc: 'naum_lysenko',
      text: 'I am Naum Lysenko, Kurinnyi of Ingulsk. If you seek to join our palanka, words mean nothing. Prove you can hunt and track in the Wild Fields.',
      choices: [
        {
          text: 'What must I do to prove myself?',
          conditions: [{ t: 'quest', id: 'first_hunt', state: ['locked', 'available'] }],
          goto: 'naum.start_first_hunt',
          once: true
        },
        {
          text: 'I have returned with the horned saiga carcass.',
          conditions: [
            { t: 'stage', quest: 'first_hunt', stage: 'report' },
            { t: 'item', id: 'saiga_carcass', n: 1 }
          ],
          goto: 'naum.turn_in_hunt',
          once: true
        },
        { text: 'Teach me the art of the saber and how to strengthen my strikes.', goto: 'TRAIN' },
        { text: 'I will return later.', goto: 'EXIT' }
      ]
    }
  ],
  nodes: {
    'naum.start_first_hunt': {
      id: 'naum.start_first_hunt',
      npc: 'naum_lysenko',
      text: 'Bring me an old male saiga with large horns. Not an easy prey. Ask around the camp first—experienced lads can teach you a thing or two before you waste arrows in the grass.',
      effects: [{ t: 'quest', id: 'first_hunt', op: 'start' }],
      choices: [{ text: 'I will consult the hunters and head out.', goto: 'EXIT' }]
    },
    'naum.turn_in_hunt': {
      id: 'naum.turn_in_hunt',
      npc: 'naum_lysenko',
      text: 'Magnificent horns! Clean shot right through the shoulder. You listened to the old hunters and did not rush like a greenhorn. Here—take this steel hunting knife.',
      choices: [
        {
          id: 'first_hunt.turn_in_perfect',
          text: 'A hunter is only as good as his preparation.',
          conditions: [{ t: 'flag', k: 'first_hunt_perfect', v: true }],
          goto: 'EXIT'
        },
        {
          id: 'first_hunt.turn_in_normal',
          text: 'Here is the beast, Kurinnyi.',
          goto: 'EXIT'
        }
      ]
    },
    'naum.start_dispute': {
      id: 'naum.start_dispute',
      npc: 'naum_lysenko',
      text: 'Those two hotheads Khoma and Opanas are screeching by the kurin over a dead buck! Go settle it before they draw daggers.',
      effects: [{ t: 'quest', id: 'hunters_dispute', op: 'start' }],
      choices: [{ text: 'I will look into it.', goto: 'EXIT' }]
    }
  }
};

export const ALL_INITIAL_DIALOGUES: DialogueTree[] = [
  DIALOGUE_TARAS_CHUB,
  DIALOGUE_HONTA,
  DIALOGUE_NAUM_LYSENKO
];
