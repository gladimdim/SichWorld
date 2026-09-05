import { CharacterStats } from '../core/rpgSystem.js';
import { WorldState } from '../core/types.js';

export class HudView {
  private container: HTMLElement;
  private promptEl: HTMLElement;
  private toastEl: HTMLElement;
  private timeEl: HTMLElement;
  private statsEl: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'hud-container';
    document.body.appendChild(this.container);

    this.container.innerHTML = `
      <div class="hud-top-bar">
        <div class="hud-character-card" id="hud-stats">
          <!-- Populated dynamically -->
        </div>

        <div class="hud-time-card">
          <span class="hud-time-icon">⏳</span>
          <span class="hud-time-val" id="hud-time">08:00</span>
          <span class="hud-chapter-badge">Ch. 1</span>
        </div>
      </div>

      <div class="hud-toast" id="hud-toast" style="display: none;"></div>

      <div class="hud-prompt" id="hud-prompt" style="display: none;"></div>

      <div class="hud-bottom-actions">
        <button class="hud-btn" id="hud-btn-inv">🎒 Bag [I]</button>
        <button class="hud-btn" id="hud-btn-journal">📜 Journal [J]</button>
        <button class="hud-btn" id="hud-btn-debug">🛠 Debug [~]</button>
      </div>
    `;

    this.promptEl = document.getElementById('hud-prompt')!;
    this.toastEl = document.getElementById('hud-toast')!;
    this.timeEl = document.getElementById('hud-time')!;
    this.statsEl = document.getElementById('hud-stats')!;
  }

  public updateStats(stats: CharacterStats): void {
    const hpPct = Math.max(0, Math.min(100, (stats.currentHp / stats.maxHp) * 100));

    this.statsEl.innerHTML = `
      <div class="hud-name">Cossack (Lvl ${stats.level})</div>
      <div class="hud-hp-bar">
        <div class="hud-hp-fill" style="width: ${hpPct}%;"></div>
        <span class="hud-hp-text">${stats.currentHp}/${stats.maxHp} HP</span>
      </div>
      <div class="hud-sub-stats">
        <span>⚔ Saber: ${stats.weaponSkills.saber}%</span>
        <span>🪙 Gold: ${stats.gold}</span>
        ${stats.trainingPoints > 0 ? `<span class="hud-tp-alert">⭐ ${stats.trainingPoints} TP</span>` : ''}
      </div>
    `;
  }

  public updateTime(ws: WorldState): void {
    const totalMinutes = Math.floor(ws.timeMinutes % 1440);
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    const timeStr = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    this.timeEl.innerText = timeStr;
  }

  public showPrompt(text: string): void {
    this.promptEl.style.display = 'block';
    this.promptEl.innerHTML = text;
  }

  public hidePrompt(): void {
    this.promptEl.style.display = 'none';
  }

  public showToast(message: string, duration: number = 3500): void {
    this.toastEl.style.display = 'block';
    this.toastEl.innerText = message;
    setTimeout(() => {
      this.toastEl.style.display = 'none';
    }, duration);
  }

  public onInventoryClick(cb: () => void): void {
    document.getElementById('hud-btn-inv')?.addEventListener('click', cb);
  }

  public onJournalClick(cb: () => void): void {
    document.getElementById('hud-btn-journal')?.addEventListener('click', cb);
  }

  public onDebugClick(cb: () => void): void {
    document.getElementById('hud-btn-debug')?.addEventListener('click', cb);
  }
}
