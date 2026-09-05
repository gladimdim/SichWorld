export type ItemCategory = 'weapon' | 'ammo' | 'consumable' | 'trophy' | 'quest';

export interface ItemDef {
  id: string;
  name: string;
  category: ItemCategory;
  description: string;
  value: number; // base gold value
  stackable: boolean;
  damage?: number;
  armor?: number;
  healHp?: number;
}

export const ITEM_DATABASE: Record<string, ItemDef> = {
  // --- WEAPONS & AMMO ---
  cossack_saber: {
    id: 'cossack_saber',
    name: 'Damascus Cossack Saber',
    category: 'weapon',
    description: 'Folded steel blade with a blood groove. Well-balanced for fast sweeping cuts.',
    value: 120,
    stackable: false,
    damage: 28
  },
  hunting_bow: {
    id: 'hunting_bow',
    name: 'Steppe Composite Bow',
    category: 'weapon',
    description: 'Laminated horn and seasoned ash bow crafted by master Honta.',
    value: 150,
    stackable: false,
    damage: 32
  },
  arrow: {
    id: 'arrow',
    name: 'Steppe Hunting Arrow',
    category: 'ammo',
    description: 'Forged iron bodkin arrow fletched with goose feathers.',
    value: 2,
    stackable: true
  },
  poison_arrow: {
    id: 'poison_arrow',
    name: 'Viper-Poison Arrow',
    category: 'ammo',
    description: 'Tipped with steppe adder venom. Drops beasts before they can flee.',
    value: 15,
    stackable: true,
    damage: 55
  },
  old_arrow: {
    id: 'old_arrow',
    name: "Yatsko's Marked Arrow",
    category: 'quest',
    description: 'Bearing split goose feathers and copper wire wraps. Crucial forensic evidence.',
    value: 10,
    stackable: false
  },

  // --- CONSUMABLES & PROVISIONS ---
  salo: {
    id: 'salo',
    name: 'Salted Cossack Salo',
    category: 'consumable',
    description: 'Cured pork fatback heavily rubbed with garlic and steppe herbs. Restores 25 HP.',
    value: 8,
    stackable: true,
    healHp: 25
  },
  dried_meat: {
    id: 'dried_meat',
    name: 'Dried Saiga Biltong',
    category: 'consumable',
    description: 'Chewy, sun-dried strips of seasoned steppe game. Restores 15 HP.',
    value: 5,
    stackable: true,
    healHp: 15
  },
  steppe_bread: {
    id: 'steppe_bread',
    name: 'Hearth Rye Bread',
    category: 'consumable',
    description: 'Dense rye loaf baked on embers. Restores 12 HP.',
    value: 4,
    stackable: true,
    healHp: 12
  },
  bog_root: {
    id: 'bog_root',
    name: 'Swamp Bog Root',
    category: 'consumable',
    description: 'Pungent fibrous root harvested from the Great Meadow. Restores 40 HP.',
    value: 20,
    stackable: true,
    healHp: 40
  },
  horilka: {
    id: 'horilka',
    name: 'Pepper Horilka Flask',
    category: 'consumable',
    description: 'Strong spirit infused with red steppe peppers. Bolsters the spirit and restores 20 HP.',
    value: 14,
    stackable: true,
    healHp: 20
  },

  // --- TROPHIES & HARVESTS ---
  wolf_pelt: {
    id: 'wolf_pelt',
    name: 'Steppe Wolf Pelt',
    category: 'trophy',
    description: 'Thick grey fur taken from a pasture wolf. Valuable to tanners and kurinnyis.',
    value: 22,
    stackable: true
  },
  wolf_fang: {
    id: 'wolf_fang',
    name: 'Wolf Fang',
    category: 'trophy',
    description: 'Sharp canine tooth. Used in charms or sold to merchants.',
    value: 8,
    stackable: true
  },
  raw_meat: {
    id: 'raw_meat',
    name: 'Raw Beast Meat',
    category: 'trophy',
    description: 'Fresh game meat. Can be cooked at campfires or sold.',
    value: 4,
    stackable: true
  },
  saiga_horns: {
    id: 'saiga_horns',
    name: 'Curved Saiga Horns',
    category: 'trophy',
    description: 'Translucent amber-colored horns of an elder male saiga.',
    value: 45,
    stackable: true
  },
  saiga_carcass: {
    id: 'saiga_carcass',
    name: 'Old Saiga Trophy Carcass',
    category: 'quest',
    description: 'The slain trophy saiga required by Kurinnyi Naum to prove your hunting prowess.',
    value: 60,
    stackable: false
  },

  // --- QUEST & FORENSIC ARTIFACTS ---
  paturnakh_ring: {
    id: 'paturnakh_ring',
    name: "Paturnakh's Signet Ring",
    category: 'quest',
    description: 'Silver ring bearing the private seal of the Koshovyi Ataman. Proves the Turkish invasion plot.',
    value: 250,
    stackable: false
  },
  bog_amulet: {
    id: 'bog_amulet',
    name: 'Bog Shaman Amulet',
    category: 'quest',
    description: 'Carved river stone etched with Cossack occult runes against shapeshifters.',
    value: 80,
    stackable: false
  }
};
