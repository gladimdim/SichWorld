import { DialogueRunner, DialogueResult } from '../core/dialogueRunner.js';

export class DialogueView {
  private container: HTMLElement;
  private runner: DialogueRunner;
  private currentNpc: string | null = null;
  private currentResult: DialogueResult | null = null;
  private onCloseCallback?: () => void;
  private onSpecialActionCallback?: (action: string, npcId: string) => void;

  constructor(runner: DialogueRunner) {
    this.runner = runner;
    this.container = document.createElement('div');
    this.container.id = 'dialogue-container';
    this.container.style.display = 'none';
    document.body.appendChild(this.container);

    window.addEventListener('keydown', (e) => {
      if (this.currentResult && !this.currentResult.isExit) {
        const num = parseInt(e.key);
        if (!isNaN(num) && num >= 1 && num <= this.currentResult.choices.length) {
          this.selectChoice(num - 1);
        } else if (e.key === 'Escape') {
          this.close();
        }
      }
    });
  }

  public onSpecialAction(cb: (action: string, npcId: string) => void): void {
    this.onSpecialActionCallback = cb;
  }

  public open(npcId: string, onClose?: () => void): void {
    this.currentNpc = npcId;
    this.onCloseCallback = onClose;
    const result = this.runner.startConversation(npcId);
    if (!result || result.isExit) {
      this.close();
      return;
    }
    this.renderNode(result);
  }

  public selectChoice(index: number): void {
    if (!this.currentNpc || !this.currentResult || !this.currentResult.node) return;

    const npc = this.currentNpc;
    const nextResult = this.runner.selectChoice(
      this.currentNpc,
      this.currentResult.node.id,
      index
    );

    if (nextResult.specialAction) {
      this.close();
      if (this.onSpecialActionCallback) {
        this.onSpecialActionCallback(nextResult.specialAction, npc);
      }
    } else if (nextResult.isExit || !nextResult.node) {
      this.close();
    } else {
      this.renderNode(nextResult);
    }
  }

  private renderNode(result: DialogueResult): void {
    this.currentResult = result;
    this.container.style.display = 'block';

    const npcDisplayName = this.formatNpcName(this.currentNpc ?? 'Cossack');

    let html = `
      <div class="dlg-box">
        <div class="dlg-header">
          <span class="dlg-npc-name">${npcDisplayName}</span>
          <span class="dlg-hint">[1-${result.choices.length}] / Click / [ESC]</span>
        </div>
        <div class="dlg-speech">${result.node?.text ?? ''}</div>
        <div class="dlg-choices">
    `;

    result.choices.forEach((choice, idx) => {
      html += `
        <div class="dlg-choice-item" data-idx="${idx}">
          <span class="choice-num">${idx + 1}.</span>
          <span class="choice-text">${choice.text}</span>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    this.container.innerHTML = html;

    // Attach click listeners to choice items
    const items = this.container.querySelectorAll('.dlg-choice-item');
    items.forEach((el) => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-idx') || '0');
        this.selectChoice(idx);
      });
    });
  }

  public close(): void {
    this.container.style.display = 'none';
    this.currentNpc = null;
    this.currentResult = null;
    if (this.onCloseCallback) {
      this.onCloseCallback();
      this.onCloseCallback = undefined;
    }
  }

  public isOpen(): boolean {
    return this.container.style.display !== 'none';
  }

  private formatNpcName(id: string): string {
    switch (id) {
      case 'taras_chub': return 'Taras Chub (Shepherd)';
      case 'naum_lysenko': return 'Naum Lysenko (Kurinnyi)';
      case 'honta': return 'Honta (Bowyer Master)';
      case 'pechyborshch': return 'Pechyborshch (Healer)';
      case 'ostap': return 'Ostap Vernydub (Hermit)';
      case 'hryts_dovbnia': return 'Hryts Dovbnia (Apprentice)';
      default: return id;
    }
  }
}
