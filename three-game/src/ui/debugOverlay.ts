import { QuestManager } from '../core/questManager.js';
import { PlayerController } from '../world/playerController.js';
import { WorldDirector } from '../world/worldDirector.js';

export class DebugOverlay {
  private container: HTMLElement;
  private qm: QuestManager;
  private player: PlayerController;
  private director: WorldDirector;
  private isVisible: boolean = false;

  constructor(qm: QuestManager, player: PlayerController, director: WorldDirector) {
    this.qm = qm;
    this.player = player;
    this.director = director;

    this.container = document.createElement('div');
    this.container.id = 'debug-container';
    this.container.style.display = 'none';
    document.body.appendChild(this.container);

    window.addEventListener('keydown', (e) => {
      if (e.key === '`' || e.key === '~') {
        this.toggle();
      }
    });
  }

  public toggle(): void {
    this.isVisible = !this.isVisible;
    this.container.style.display = this.isVisible ? 'block' : 'none';
    if (this.isVisible) {
      this.render();
    }
  }

  public render(): void {
    const ws = this.qm.getWorldState();
    const quests = this.qm.getAllQuests();

    let html = `
      <div class="debug-box">
        <div class="debug-header">
          <h3>🛠 Quest & World Debugger</h3>
          <button id="debug-close-btn">✕</button>
        </div>

        <div class="debug-body">
          <div class="debug-col">
            <h4>⏰ Time of Day (${Math.floor(ws.timeMinutes)} min)</h4>
            <div class="debug-btn-row">
              <button class="d-btn" id="db-time-dawn">Dawn (06:00)</button>
              <button class="d-btn" id="db-time-noon">Noon (12:00)</button>
              <button class="d-btn" id="db-time-dusk">Dusk (18:00)</button>
              <button class="d-btn" id="db-time-night">Midnight (00:00)</button>
              <button class="d-btn" id="db-time-plus">+1 Hour</button>
            </div>

            <h4>📍 Quick Teleport</h4>
            <div class="debug-btn-row">
              <button class="d-btn" id="db-tp-camp">Camp Center</button>
              <button class="d-btn" id="db-tp-sheep">Taras / Sheep Pen</button>
              <button class="d-btn" id="db-tp-pasture">Pasture (Wolves)</button>
              <button class="d-btn" id="db-tp-ravine">Eastern Ravine (Saiga)</button>
              <button class="d-btn" id="db-tp-hole">Watering Hole (Boss)</button>
            </div>

            <h4>⚡ Fast Spawns & Cheats</h4>
            <div class="debug-btn-row">
              <button class="d-btn" id="db-spawn-wolves">Spawn Wolves</button>
              <button class="d-btn" id="db-spawn-saiga">Spawn Saiga</button>
              <button class="d-btn" id="db-spawn-boss">Spawn Shapeshifter</button>
              <button class="d-btn" id="db-give-gold">+100 Gold & 10 TP</button>
              <button class="d-btn" id="db-heal">Full Heal</button>
            </div>
          </div>

          <div class="debug-col">
            <h4>📜 Live Quests</h4>
            <div class="debug-quest-list">
    `;

    for (const q of quests) {
      const color = q.state === 'active' ? '#55ff55' : q.state === 'done' ? '#ffff55' : q.state === 'available' ? '#55ffff' : '#888888';
      html += `
        <div class="debug-q-item">
          <span style="color: ${color};">[${q.state.toUpperCase()}]</span> <strong>${q.id}</strong>: stage <em>${q.stage}</em>
          ${q.resolution ? `(res: <strong>${q.resolution}</strong>)` : ''}
        </div>
      `;
    }

    html += `
            </div>

            <h4>🚩 World Flags & Knowledge</h4>
            <pre class="debug-json">${JSON.stringify({ flags: ws.flags, knowledge: ws.knowledge, rep: ws.rep, inv: ws.inventory }, null, 2)}</pre>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;

    // Attach button listeners
    document.getElementById('debug-close-btn')?.addEventListener('click', () => this.toggle());

    document.getElementById('db-time-dawn')?.addEventListener('click', () => { ws.timeMinutes = 360; this.render(); });
    document.getElementById('db-time-noon')?.addEventListener('click', () => { ws.timeMinutes = 720; this.render(); });
    document.getElementById('db-time-dusk')?.addEventListener('click', () => { ws.timeMinutes = 1080; this.render(); });
    document.getElementById('db-time-night')?.addEventListener('click', () => { ws.timeMinutes = 0; this.render(); });
    document.getElementById('db-time-plus')?.addEventListener('click', () => { ws.timeMinutes = (ws.timeMinutes + 60) % 1440; this.render(); });

    document.getElementById('db-tp-camp')?.addEventListener('click', () => this.teleport(0, 0));
    document.getElementById('db-tp-sheep')?.addEventListener('click', () => this.teleport(-15, 8));
    document.getElementById('db-tp-pasture')?.addEventListener('click', () => this.teleport(-18, 14));
    document.getElementById('db-tp-ravine')?.addEventListener('click', () => this.teleport(42, 8));
    document.getElementById('db-tp-hole')?.addEventListener('click', () => this.teleport(38, -18));

    document.getElementById('db-spawn-wolves')?.addEventListener('click', () => {
      this.director.handleEffect({ t: 'spawn', table: 'wolves_pasture', at: 'pasture' });
      this.render();
    });
    document.getElementById('db-spawn-saiga')?.addEventListener('click', () => {
      this.director.handleEffect({ t: 'spawn', table: 'old_saiga_steppe', at: 'eastern_ravine' });
      this.render();
    });
    document.getElementById('db-spawn-boss')?.addEventListener('click', () => {
      this.director.handleEffect({ t: 'spawn', table: 'shapeshifter_night', at: 'watering_hole' });
      this.render();
    });
    document.getElementById('db-give-gold')?.addEventListener('click', () => {
      this.player.stats.gold += 100;
      this.player.stats.trainingPoints += 10;
      this.render();
    });
    document.getElementById('db-heal')?.addEventListener('click', () => {
      this.player.stats.currentHp = this.player.stats.maxHp;
      this.render();
    });
  }

  private teleport(x: number, z: number): void {
    const pos = this.player.character.group.position;
    pos.x = x;
    pos.z = z;
    pos.y = this.player.terrain.getHeightAt(x, z);
    this.render();
  }
}
