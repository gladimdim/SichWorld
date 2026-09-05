import { QuestManager } from '../core/questManager.js';

export class JournalView {
  private container: HTMLElement;
  private qm: QuestManager;
  private isVisible: boolean = false;

  constructor(qm: QuestManager) {
    this.qm = qm;
    this.container = document.createElement('div');
    this.container.id = 'journal-container';
    this.container.style.display = 'none';
    document.body.appendChild(this.container);

    window.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'j') {
        this.toggle();
      } else if (e.key === 'Escape' && this.isVisible) {
        this.close();
      }
    });
  }

  public toggle(): void {
    if (this.isVisible) {
      this.close();
    } else {
      this.open();
    }
  }

  public open(): void {
    this.isVisible = true;
    this.container.style.display = 'block';
    this.render();
  }

  public close(): void {
    this.isVisible = false;
    this.container.style.display = 'none';
  }

  public isOpen(): boolean {
    return this.isVisible;
  }

  public render(): void {
    const all = this.qm.getAllQuests();
    const ws = this.qm.getWorldState();

    const active = all.filter((q) => q.state === 'active');
    const available = all.filter((q) => q.state === 'available');
    const done = all.filter((q) => q.state === 'done');

    let html = `
      <div class="journal-box">
        <div class="journal-header">
          <h2>📜 Cossack Journal</h2>
          <button class="journal-close-btn" id="journal-close-x">✕</button>
        </div>

        <div class="journal-content">
          <div class="journal-section">
            <h3 class="section-title">⚔ Active Quests (${active.length})</h3>
    `;

    if (active.length === 0) {
      html += `<p class="empty-hint">No active assignments. Explore the camp or talk to Kurinnyi Naum.</p>`;
    } else {
      for (const q of active) {
        const def = this.qm.getQuestDef(q.id);
        const stageDef = def?.stages[q.stage];
        html += `
          <div class="journal-quest-card active-card">
            <div class="quest-card-header">
              <span class="quest-title">${def?.title ?? q.id}</span>
              <span class="quest-tag">${def?.type ?? 'camp'}</span>
            </div>
            <div class="quest-objective">➔ ${stageDef?.objective ?? q.stage}</div>
          </div>
        `;
      }
    }

    html += `
          </div>

          <div class="journal-section">
            <h3 class="section-title">✔ Completed Quests (${done.length})</h3>
    `;

    if (done.length === 0) {
      html += `<p class="empty-hint">None completed yet.</p>`;
    } else {
      for (const q of done) {
        const def = this.qm.getQuestDef(q.id);
        html += `
          <div class="journal-quest-card done-card">
            <div class="quest-card-header">
              <span class="quest-title">${def?.title ?? q.id}</span>
              <span class="quest-resolution">Outcome: <strong>${q.resolution ?? 'completed'}</strong></span>
            </div>
          </div>
        `;
      }
    }

    html += `
          </div>

          <div class="journal-section">
            <h3 class="section-title">💡 Uncovered Steppe Knowledge</h3>
            <ul class="knowledge-list">
    `;

    const facts = Object.keys(ws.knowledge).filter((k) => ws.knowledge[k]);
    if (facts.length === 0) {
      html += `<li class="empty-hint">No mysterious facts uncovered yet.</li>`;
    } else {
      for (const f of facts) {
        let label = f;
        if (f === 'knows_howling') label = 'Strange Howling: Deep claw wounds on pasture wolves point to a beast bigger than a wolf.';
        if (f === 'knows_yatsko_fletching') label = "Yatsko's Fletching: Honta confirmed the old arrow belongs to Yatsko Lysytsia.";
        html += `<li class="knowledge-item">${label}</li>`;
      }
    }

    html += `
            </ul>
          </div>

          <div class="journal-section">
            <h3 class="section-title">🏛 Reputation</h3>
            <div class="rep-grid">
    `;

    const reps = Object.keys(ws.rep);
    if (reps.length === 0) {
      html += `<span class="empty-hint">Neutral with all factions and hunters.</span>`;
    } else {
      for (const r of reps) {
        html += `<div class="rep-pill"><span class="rep-key">${r}:</span> <span class="rep-val">${ws.rep[r]}</span></div>`;
      }
    }

    html += `
            </div>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
    const closeBtn = document.getElementById('journal-close-x');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
  }
}
