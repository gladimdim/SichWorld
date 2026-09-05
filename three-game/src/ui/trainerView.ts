import { CharacterStats, RpgSystem, MasteryTier } from '../core/rpgSystem.js';

export interface TeachableSkill {
  id: 'strength' | 'agility' | 'saber' | 'bow';
  name: string;
  category: 'attribute' | 'weapon';
  description: string;
  pointsCost: number;
  goldCost: number;
  pointIncrement: number;
}

export interface TrainerConfig {
  npcId: string;
  title: string;
  quote: string;
  skills: TeachableSkill[];
}

export const TRAINER_CONFIGS: Record<string, TrainerConfig> = {
  honta: {
    npcId: 'honta',
    title: 'Honta — Master Bowyer',
    quote: '"Drawing a recurve bow demands not just arm strength, but keen eyesight and steppe discipline."',
    skills: [
      {
        id: 'bow',
        name: 'Bow Mastery',
        category: 'weapon',
        description: 'Increases critical hit chance with bows, projectile speed, and ranged precision.',
        pointsCost: 5,
        goldCost: 40,
        pointIncrement: 5
      },
      {
        id: 'agility',
        name: 'Agility',
        category: 'attribute',
        description: 'Improves dodge responsiveness, ranged draw speed, and critical evasion.',
        pointsCost: 5,
        goldCost: 35,
        pointIncrement: 5
      }
    ]
  },
  naum_lysenko: {
    npcId: 'naum_lysenko',
    title: 'Naum Lysenko — Kurinnyi Ataman',
    quote: '"In the Wild Fields, a hesitant saber cut means a Tatar lance in your ribs. Strike true!"',
    skills: [
      {
        id: 'saber',
        name: 'Saber Mastery',
        category: 'weapon',
        description: 'Increases melee damage, critical hit chance, and unlocks faster Cossack attack combos.',
        pointsCost: 5,
        goldCost: 45,
        pointIncrement: 5
      },
      {
        id: 'strength',
        name: 'Strength',
        category: 'attribute',
        description: 'Increases raw physical strike damage and grants +10 Maximum Health per training.',
        pointsCost: 5,
        goldCost: 40,
        pointIncrement: 5
      }
    ]
  }
};

export class TrainerView {
  private container: HTMLElement;
  private currentTrainer: TrainerConfig | null = null;
  private stats: CharacterStats | null = null;
  private onTrainedCallback?: (skillName: string, newTier?: MasteryTier) => void;
  private onCloseCallback?: () => void;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'trainer-container';
    this.container.style.display = 'none';
    document.body.appendChild(this.container);

    window.addEventListener('keydown', (e) => {
      if (this.isOpen() && e.key === 'Escape') {
        this.close();
      }
    });
  }

  public open(
    npcId: string,
    stats: CharacterStats,
    onTrained?: (skillName: string, newTier?: MasteryTier) => void,
    onClose?: () => void
  ): void {
    const config = TRAINER_CONFIGS[npcId] || {
      npcId,
      title: `${npcId} — Veteran Master`,
      quote: '"Train hard, die old."',
      skills: TRAINER_CONFIGS['naum_lysenko'].skills
    };

    this.currentTrainer = config;
    this.stats = stats;
    this.onTrainedCallback = onTrained;
    this.onCloseCallback = onClose;

    this.container.style.display = 'block';
    this.render();
  }

  public close(): void {
    this.container.style.display = 'none';
    this.currentTrainer = null;
    if (this.onCloseCallback) {
      this.onCloseCallback();
      this.onCloseCallback = undefined;
    }
  }

  public isOpen(): boolean {
    return this.container.style.display !== 'none';
  }

  private render(): void {
    if (!this.currentTrainer || !this.stats) return;

    const { title, quote, skills } = this.currentTrainer;
    const stats = this.stats;

    let html = `
      <div class="trainer-box">
        <div class="trainer-header">
          <div>
            <h2 class="trainer-title">${title}</h2>
            <div class="trainer-quote">${quote}</div>
          </div>
          <button class="trainer-close-btn" id="trainer-close">&times;</button>
        </div>

        <div class="trainer-res-bar">
          <div class="res-item">
            <span class="res-label">Level:</span>
            <span class="res-val">${stats.level}</span>
          </div>
          <div class="res-item ${stats.trainingPoints > 0 ? 'highlight-tp' : ''}">
            <span class="res-label">Learning Points (LP):</span>
            <span class="res-val">${stats.trainingPoints}</span>
          </div>
          <div class="res-item">
            <span class="res-label">Cossack Gold:</span>
            <span class="res-val">${stats.gold} 🪙</span>
          </div>
        </div>

        <div class="trainer-skills-list">
    `;

    skills.forEach((skill) => {
      let currentVal = 0;
      let tierHtml = '';
      let isWeapon = skill.category === 'weapon';

      if (skill.id === 'saber' || skill.id === 'bow') {
        currentVal = stats.weaponSkills[skill.id];
        const tier = RpgSystem.getMasteryTier(currentVal);
        tierHtml = `<span class="tier-badge tier-${tier.toLowerCase()}">${tier} (${currentVal}%)</span>`;
      } else {
        currentVal = stats[skill.id];
        tierHtml = `<span class="tier-badge">${currentVal} pts</span>`;
      }

      const canAffordLP = stats.trainingPoints >= skill.pointsCost;
      const canAffordGold = stats.gold >= skill.goldCost;
      const canTrain = canAffordLP && canAffordGold && currentVal < 100;

      let btnLabel = `Train (+${skill.pointIncrement})`;
      if (currentVal >= 100) {
        btnLabel = 'Maxed Out';
      } else if (!canAffordLP) {
        btnLabel = `Need ${skill.pointsCost} LP`;
      } else if (!canAffordGold) {
        btnLabel = `Need ${skill.goldCost} Gold`;
      }

      html += `
        <div class="trainer-skill-card ${canTrain ? 'can-train' : 'cannot-train'}">
          <div class="skill-info">
            <div class="skill-name-row">
              <span class="skill-name">${skill.name}</span>
              ${tierHtml}
            </div>
            <div class="skill-desc">${skill.description}</div>
            <div class="skill-cost-row">
              <span>Cost: <strong>${skill.pointsCost} LP</strong> + <strong>${skill.goldCost} Gold</strong></span>
              ${isWeapon ? `<span>Combo Tiers: 30% Fighter, 60% Master, 90% Expert</span>` : ''}
            </div>
          </div>
          <div class="skill-action">
            <button class="train-btn" data-skill="${skill.id}" ${canTrain ? '' : 'disabled'}>
              ${btnLabel}
            </button>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    this.container.innerHTML = html;

    // Hook close button
    document.getElementById('trainer-close')?.addEventListener('click', () => this.close());

    // Hook train buttons
    const buttons = this.container.querySelectorAll('.train-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const skillId = btn.getAttribute('data-skill') as 'strength' | 'agility' | 'saber' | 'bow';
        this.handleTrain(skillId);
      });
    });
  }

  private handleTrain(skillId: 'strength' | 'agility' | 'saber' | 'bow'): void {
    if (!this.currentTrainer || !this.stats) return;

    const skillDef = this.currentTrainer.skills.find((s) => s.id === skillId);
    if (!skillDef) return;

    const oldTier = (skillId === 'saber' || skillId === 'bow')
      ? RpgSystem.getMasteryTier(this.stats.weaponSkills[skillId])
      : undefined;

    const success = RpgSystem.trainSkill(
      this.stats,
      skillId,
      skillDef.pointsCost,
      skillDef.goldCost
    );

    if (success) {
      const newTier = (skillId === 'saber' || skillId === 'bow')
        ? RpgSystem.getMasteryTier(this.stats.weaponSkills[skillId])
        : undefined;

      this.render();

      if (this.onTrainedCallback) {
        this.onTrainedCallback(skillDef.name, newTier !== oldTier ? newTier : undefined);
      }
    }
  }
}
