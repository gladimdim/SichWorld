import { CharacterStats } from '../core/rpgSystem.js';
import { ITEM_DATABASE, ItemDef, ItemCategory } from '../core/items.js';

export class InventoryView {
  private container: HTMLElement;
  private inventory: Record<string, number> = {};
  private stats: CharacterStats | null = null;
  private selectedCategory: ItemCategory | 'all' = 'all';
  private onConsumeCallback?: (item: ItemDef) => void;
  private onCloseCallback?: () => void;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'inventory-container';
    this.container.style.display = 'none';
    document.body.appendChild(this.container);

    window.addEventListener('keydown', (e) => {
      if ((e.key.toLowerCase() === 'i' || e.code === 'KeyI' || e.key === 'ш' || e.key === 'Tab') && !this.isTypingInInput(e)) {
        e.preventDefault();
        this.toggle();
      } else if (this.isOpen() && e.key === 'Escape') {
        this.close();
      }
    });
  }

  private isTypingInInput(e: KeyboardEvent): boolean {
    const target = e.target as HTMLElement | null;
    return !!(target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA'));
  }

  public setContext(inventory: Record<string, number>, stats: CharacterStats): void {
    this.inventory = inventory;
    this.stats = stats;
  }

  public toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  public open(onConsume?: (item: ItemDef) => void, onClose?: () => void): void {
    if (onConsume) this.onConsumeCallback = onConsume;
    if (onClose) this.onCloseCallback = onClose;

    this.container.style.display = 'block';
    this.render();
  }

  public close(): void {
    this.container.style.display = 'none';
    if (this.onCloseCallback) {
      this.onCloseCallback();
    }
  }

  public isOpen(): boolean {
    return this.container.style.display !== 'none';
  }

  private render(): void {
    if (!this.stats) return;

    const stats = this.stats;
    const items = Object.entries(this.inventory).filter(([_, count]) => count > 0);

    const filtered = items.filter(([id]) => {
      if (this.selectedCategory === 'all') return true;
      const def = ITEM_DATABASE[id];
      return def && def.category === this.selectedCategory;
    });

    let html = `
      <div class="inv-box">
        <div class="inv-header">
          <div class="inv-title-group">
            <h2 class="inv-title">Cossack Knapsack</h2>
            <div class="inv-gold-badge">${stats.gold} 🪙 Gold</div>
          </div>
          <button class="inv-close-btn" id="inv-close">&times;</button>
        </div>

        <div class="inv-category-tabs">
          <button class="inv-tab ${this.selectedCategory === 'all' ? 'active' : ''}" data-cat="all">All (${items.length})</button>
          <button class="inv-tab ${this.selectedCategory === 'weapon' ? 'active' : ''}" data-cat="weapon">Weapons</button>
          <button class="inv-tab ${this.selectedCategory === 'ammo' ? 'active' : ''}" data-cat="ammo">Ammunition</button>
          <button class="inv-tab ${this.selectedCategory === 'consumable' ? 'active' : ''}" data-cat="consumable">Provisions</button>
          <button class="inv-tab ${this.selectedCategory === 'trophy' ? 'active' : ''}" data-cat="trophy">Trophies</button>
          <button class="inv-tab ${this.selectedCategory === 'quest' ? 'active' : ''}" data-cat="quest">Quest Lore</button>
        </div>

        <div class="inv-content-grid">
    `;

    if (filtered.length === 0) {
      html += `
        <div class="inv-empty-state">
          No items in this pocket. Loot fallen beasts or barter with merchants in the outpost.
        </div>
      `;
    } else {
      filtered.forEach(([id, count]) => {
        const def = ITEM_DATABASE[id] || {
          id,
          name: id,
          category: 'quest',
          description: 'A mysterious steppe item.',
          value: 10,
          stackable: true
        };

        const isConsumable = def.category === 'consumable' && !!def.healHp;
        const canHeal = isConsumable && stats.currentHp < stats.maxHp;

        html += `
          <div class="inv-card cat-${def.category}">
            <div class="inv-card-top">
              <span class="inv-item-name">${def.name}</span>
              <span class="inv-badge-qty">x${count}</span>
            </div>
            <div class="inv-item-desc">${def.description}</div>
            <div class="inv-card-bottom">
              <span class="inv-item-val">${def.value} 🪙</span>
              ${
                isConsumable
                  ? `<button class="inv-use-btn" data-id="${id}" ${canHeal ? '' : 'disabled'}>
                      ${canHeal ? `Consume (+${def.healHp} HP)` : 'Full Health'}
                    </button>`
                  : ''
              }
            </div>
          </div>
        `;
      });
    }

    html += `
        </div>

        <div class="inv-footer">
          <div class="inv-hp-status">Health: <strong>${stats.currentHp} / ${stats.maxHp} HP</strong></div>
          <div class="inv-hint">Press <strong>[I]</strong> or <strong>[ESC]</strong> to close</div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;

    // Attach click events
    document.getElementById('inv-close')?.addEventListener('click', () => this.close());

    const tabs = this.container.querySelectorAll('.inv-tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        this.selectedCategory = tab.getAttribute('data-cat') as any;
        this.render();
      });
    });

    const useBtns = this.container.querySelectorAll('.inv-use-btn');
    useBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id')!;
        this.handleUse(id);
      });
    });
  }

  private handleUse(itemId: string): void {
    if (!this.stats) return;

    const count = this.inventory[itemId] || 0;
    if (count <= 0) return;

    const def = ITEM_DATABASE[itemId];
    if (!def || !def.healHp) return;

    // Apply healing
    this.stats.currentHp = Math.min(this.stats.maxHp, this.stats.currentHp + def.healHp);
    this.inventory[itemId] = count - 1;
    if (this.inventory[itemId] <= 0) {
      delete this.inventory[itemId];
    }

    this.render();

    if (this.onConsumeCallback) {
      this.onConsumeCallback(def);
    }
  }
}
