import { CharacterStats } from '../core/rpgSystem.js';
import { ITEM_DATABASE, ItemDef } from '../core/items.js';

export interface MerchantStockItem {
  itemId: string;
  count: number;
  customPrice?: number;
}

export interface MerchantConfig {
  npcId: string;
  title: string;
  greeting: string;
  stock: MerchantStockItem[];
}

export const MERCHANT_CONFIGS: Record<string, MerchantConfig> = {
  honta: {
    npcId: 'honta',
    title: 'Honta — Master Bowyer',
    greeting: '"Every shaft is balanced by hand. Quality steel and oiled ash don\'t come cheap, Cossack."',
    stock: [
      { itemId: 'hunting_bow', count: 1, customPrice: 120 },
      { itemId: 'arrow', count: 60, customPrice: 2 },
      { itemId: 'poison_arrow', count: 10, customPrice: 16 },
      { itemId: 'salo', count: 3, customPrice: 9 }
    ]
  },
  pechyborshch: {
    npcId: 'pechyborshch',
    title: 'Pechyborshch — Field Cook & Herbalist',
    greeting: '"A hungry Cossack is half a warrior! Taste my cured salo and pepper horilka, good as new!"',
    stock: [
      { itemId: 'salo', count: 12, customPrice: 8 },
      { itemId: 'dried_meat', count: 15, customPrice: 5 },
      { itemId: 'steppe_bread', count: 20, customPrice: 4 },
      { itemId: 'horilka', count: 6, customPrice: 15 },
      { itemId: 'bog_root', count: 4, customPrice: 22 }
    ]
  },
  taras_chub: {
    npcId: 'taras_chub',
    title: 'Taras Chub — Shepherd',
    greeting: '"I don\'t have fancy weapons, but if you have wolf pelts or dried meat, I\'ll give you fair coin."',
    stock: [
      { itemId: 'dried_meat', count: 8, customPrice: 5 },
      { itemId: 'steppe_bread', count: 6, customPrice: 4 }
    ]
  }
};

export class TradeView {
  private container: HTMLElement;
  private currentMerchant: MerchantConfig | null = null;
  private stats: CharacterStats | null = null;
  private playerInventory: Record<string, number> = {};
  private onTradeCallback?: (msg: string) => void;
  private onCloseCallback?: () => void;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'trade-container';
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
    playerInventory: Record<string, number>,
    onTrade?: (msg: string) => void,
    onClose?: () => void
  ): void {
    const config = MERCHANT_CONFIGS[npcId] || {
      npcId,
      title: `${npcId} — Trader`,
      greeting: '"Let us see what you have."',
      stock: MERCHANT_CONFIGS['honta'].stock
    };

    this.currentMerchant = config;
    this.stats = stats;
    this.playerInventory = playerInventory;
    this.onTradeCallback = onTrade;
    this.onCloseCallback = onClose;

    this.container.style.display = 'block';
    this.render();
  }

  public close(): void {
    this.container.style.display = 'none';
    this.currentMerchant = null;
    if (this.onCloseCallback) {
      this.onCloseCallback();
      this.onCloseCallback = undefined;
    }
  }

  public isOpen(): boolean {
    return this.container.style.display !== 'none';
  }

  private render(): void {
    if (!this.currentMerchant || !this.stats) return;

    const { title, greeting, stock } = this.currentMerchant;
    const stats = this.stats;

    let html = `
      <div class="trade-box">
        <div class="trade-header">
          <div>
            <h2 class="trade-title">${title}</h2>
            <div class="trade-quote">${greeting}</div>
          </div>
          <button class="trade-close-btn" id="trade-close">&times;</button>
        </div>

        <div class="trade-res-bar">
          <div class="res-item">
            <span class="res-label">Your Purse:</span>
            <span class="res-val">${stats.gold} 🪙</span>
          </div>
          <div class="res-hint">[ESC] or Close to leave barter</div>
        </div>

        <div class="trade-columns">
          <!-- MERCHANT WARES -->
          <div class="trade-col">
            <h3 class="trade-col-title">Merchant Wares</h3>
            <div class="trade-item-list">
    `;

    const availableStock = stock.filter((s) => s.count > 0);
    if (availableStock.length === 0) {
      html += `<div class="trade-empty">Merchant has sold out of goods.</div>`;
    } else {
      availableStock.forEach((s) => {
        const item = ITEM_DATABASE[s.itemId] || {
          id: s.itemId,
          name: s.itemId,
          description: '',
          value: 10,
          category: 'quest'
        };
        const price = s.customPrice ?? item.value;
        const canAfford = stats.gold >= price;

        html += `
          <div class="trade-card ${canAfford ? '' : 'cannot-afford'}">
            <div class="trade-card-left">
              <div class="trade-item-name">${item.name} <span class="item-qty">x${s.count}</span></div>
              <div class="trade-item-desc">${item.description}</div>
              <div class="trade-item-price">Price: <strong>${price} 🪙</strong></div>
            </div>
            <button class="buy-btn" data-item="${s.itemId}" ${canAfford ? '' : 'disabled'}>
              Buy (1)
            </button>
          </div>
        `;
      });
    }

    html += `
            </div>
          </div>

          <!-- PLAYER WARES -->
          <div class="trade-col">
            <h3 class="trade-col-title">Your Inventory</h3>
            <div class="trade-item-list">
    `;

    const playerItems = Object.entries(this.playerInventory).filter(([_, count]) => count > 0);
    if (playerItems.length === 0) {
      html += `<div class="trade-empty">Your pockets are empty.</div>`;
    } else {
      playerItems.forEach(([itemId, count]) => {
        const item = ITEM_DATABASE[itemId] || {
          id: itemId,
          name: itemId,
          description: '',
          value: 5,
          category: 'quest'
        };
        const sellPrice = Math.max(1, Math.floor(item.value * 0.65));
        const isQuestItem = item.category === 'quest';

        html += `
          <div class="trade-card">
            <div class="trade-card-left">
              <div class="trade-item-name">${item.name} <span class="item-qty">x${count}</span></div>
              <div class="trade-item-desc">${item.description}</div>
              <div class="trade-item-price">${isQuestItem ? 'Quest Item (Cannot sell)' : `Sell Value: <strong>${sellPrice} 🪙</strong>`}</div>
            </div>
            <button class="sell-btn" data-item="${itemId}" ${isQuestItem ? 'disabled' : ''}>
              Sell (1)
            </button>
          </div>
        `;
      });
    }

    html += `
            </div>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;

    // Attach listeners
    document.getElementById('trade-close')?.addEventListener('click', () => this.close());

    const buyButtons = this.container.querySelectorAll('.buy-btn');
    buyButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-item')!;
        this.handleBuy(itemId);
      });
    });

    const sellButtons = this.container.querySelectorAll('.sell-btn');
    sellButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-item')!;
        this.handleSell(itemId);
      });
    });
  }

  private handleBuy(itemId: string): void {
    if (!this.currentMerchant || !this.stats) return;

    const stockItem = this.currentMerchant.stock.find((s) => s.itemId === itemId && s.count > 0);
    if (!stockItem) return;

    const itemDef = ITEM_DATABASE[itemId];
    const price = stockItem.customPrice ?? itemDef.value;

    if (this.stats.gold < price) return;

    this.stats.gold -= price;
    stockItem.count -= 1;
    this.playerInventory[itemId] = (this.playerInventory[itemId] || 0) + 1;

    this.render();

    if (this.onTradeCallback) {
      this.onTradeCallback(`Purchased ${itemDef?.name ?? itemId} for ${price} gold.`);
    }
  }

  private handleSell(itemId: string): void {
    if (!this.currentMerchant || !this.stats) return;

    const currentCount = this.playerInventory[itemId] || 0;
    if (currentCount <= 0) return;

    const itemDef = ITEM_DATABASE[itemId];
    if (itemDef?.category === 'quest') return; // Cannot sell quest forensics

    const sellPrice = Math.max(1, Math.floor((itemDef?.value ?? 10) * 0.65));

    this.stats.gold += sellPrice;
    this.playerInventory[itemId] = currentCount - 1;
    if (this.playerInventory[itemId] <= 0) {
      delete this.playerInventory[itemId];
    }

    // Add back to merchant stock if already exists, else push
    const stockItem = this.currentMerchant.stock.find((s) => s.itemId === itemId);
    if (stockItem) {
      stockItem.count += 1;
    } else {
      this.currentMerchant.stock.push({ itemId, count: 1, customPrice: itemDef?.value ?? 10 });
    }

    this.render();

    if (this.onTradeCallback) {
      this.onTradeCallback(`Sold ${itemDef?.name ?? itemId} for ${sellPrice} gold.`);
    }
  }
}
