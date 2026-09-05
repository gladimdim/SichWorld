export interface CharacterStats {
  level: number;
  xp: number;
  trainingPoints: number;
  strength: number;
  agility: number;
  intelligence: number;
  maxHp: number;
  currentHp: number;
  weaponSkills: {
    saber: number; // 0-100
    bow: number;   // 0-100
    musket: number;// 0-100
  };
  gold: number;
}

export type MasteryTier = 'Beginner' | 'Fighter' | 'Master' | 'Expert';

export class RpgSystem {
  public static getXpForNextLevel(currentLevel: number): number {
    // Gothic style progressive XP curve: level 1 -> 500, level 2 -> 1500, etc.
    return (currentLevel * (currentLevel + 1) * 250);
  }

  public static addXp(stats: CharacterStats, xpGained: number): { leveledUp: boolean; newLevel: number } {
    stats.xp += xpGained;
    let leveledUp = false;

    while (stats.xp >= this.getXpForNextLevel(stats.level)) {
      stats.level += 1;
      stats.trainingPoints += 10;
      stats.maxHp += 12;
      stats.currentHp = stats.maxHp; // Full heal on level up
      leveledUp = true;
    }

    return { leveledUp, newLevel: stats.level };
  }

  public static getMasteryTier(skillPercent: number): MasteryTier {
    if (skillPercent >= 90) return 'Expert';
    if (skillPercent >= 60) return 'Master';
    if (skillPercent >= 30) return 'Fighter';
    return 'Beginner';
  }

  public static getAttackComboLength(tier: MasteryTier): number {
    switch (tier) {
      case 'Expert': return 5;
      case 'Master': return 4;
      case 'Fighter': return 3;
      case 'Beginner': return 1;
    }
  }

  /**
   * Gothic combat formula:
   * Crit: (weapon_damage + weapon_skill) - armor
   * Normal: (weapon_damage + weapon_skill) / 2 - armor
   * Crit chance: weapon_skill %
   * Minimum damage floor: 2-3 HP
   */
  public static calculateDamage(
    attackerSkill: number,
    weaponDamage: number,
    targetArmor: number,
    rng: () => number = Math.random
  ): { damage: number; isCrit: boolean } {
    const roll = rng() * 100;
    const isCrit = roll < attackerSkill;

    let rawDamage: number;
    if (isCrit) {
      rawDamage = (weaponDamage + attackerSkill) - targetArmor;
    } else {
      rawDamage = Math.floor((weaponDamage + attackerSkill) / 2) - targetArmor;
    }

    // Minimum floor 2 or 3 hp
    const floor = rng() < 0.5 ? 2 : 3;
    const damage = Math.max(floor, rawDamage);

    return { damage, isCrit };
  }

  public static trainSkill(
    stats: CharacterStats,
    skill: 'strength' | 'agility' | 'intelligence' | 'saber' | 'bow' | 'musket',
    points: number = 5,
    goldCost: number = 50
  ): boolean {
    if (stats.trainingPoints < points || stats.gold < goldCost) {
      return false;
    }

    stats.trainingPoints -= points;
    stats.gold -= goldCost;

    if (skill === 'saber' || skill === 'bow' || skill === 'musket') {
      stats.weaponSkills[skill] = Math.min(100, stats.weaponSkills[skill] + points);
    } else {
      stats[skill] += points;
      if (skill === 'strength') {
        stats.maxHp += points * 2;
      }
    }

    return true;
  }
}
