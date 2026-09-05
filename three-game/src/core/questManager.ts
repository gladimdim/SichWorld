import { CondEval, EvalContext } from './condEval.js';
import { EventBus } from './eventBus.js';
import { Effect, QuestDef, QuestInstance, QuestState, WorldState } from './types.js';

export class QuestManager {
  private defs: Map<string, QuestDef> = new Map();
  private instances: Map<string, QuestInstance> = new Map();
  private world: WorldState;
  private bus: EventBus;
  private effectListeners: Set<(effect: Effect) => void> = new Set();
  private journalListeners: Set<(entry: string) => void> = new Set();
  private questChangeListeners: Set<(instance: QuestInstance) => void> = new Set();

  constructor(initialWorld?: Partial<WorldState>, bus?: EventBus) {
    this.bus = bus ?? new EventBus();
    this.world = {
      flags: {},
      knowledge: {},
      rep: {},
      timeMinutes: 480, // 08:00 morning
      chapter: 1,
      inventory: {},
      ...initialWorld
    };

    // Auto-listen to event bus
    this.bus.on('*', ({ event, payload }: { event: string; payload: any }) => {
      this.handleEvent(event, payload);
    });
  }

  public registerQuest(def: QuestDef): void {
    this.defs.set(def.id, def);
    if (!this.instances.has(def.id)) {
      this.instances.set(def.id, {
        id: def.id,
        state: 'locked',
        stage: def.initial,
        journal: []
      });
    }
    this.recheckAvailability();
  }

  public registerQuests(defs: QuestDef[]): void {
    for (const d of defs) {
      this.registerQuest(d);
    }
  }

  public getWorldState(): WorldState {
    return this.world;
  }

  public getContext(): EvalContext {
    const quests: Record<string, QuestInstance> = {};
    for (const [id, inst] of this.instances) {
      quests[id] = inst;
    }
    return {
      world: this.world,
      quests
    };
  }

  public getQuest(id: string): QuestInstance | undefined {
    return this.instances.get(id);
  }

  public getQuestDef(id: string): QuestDef | undefined {
    return this.defs.get(id);
  }

  public getAllQuests(): QuestInstance[] {
    return Array.from(this.instances.values());
  }

  public onEffect(cb: (effect: Effect) => void): () => void {
    this.effectListeners.add(cb);
    return () => this.effectListeners.delete(cb);
  }

  public onJournal(cb: (entry: string) => void): () => void {
    this.journalListeners.add(cb);
    return () => this.journalListeners.delete(cb);
  }

  public onQuestChange(cb: (instance: QuestInstance) => void): () => void {
    this.questChangeListeners.add(cb);
    return () => this.questChangeListeners.delete(cb);
  }

  public recheckAvailability(): void {
    const ctx = this.getContext();
    for (const [id, def] of this.defs) {
      const inst = this.instances.get(id)!;
      if (inst.state === 'locked') {
        const canUnlock = CondEval.evaluateAll(def.availableWhen, ctx);
        if (canUnlock) {
          inst.state = 'available';
          this.notifyQuestChange(inst);
        }
      }
    }
  }

  public startQuest(id: string): boolean {
    const def = this.defs.get(id);
    const inst = this.instances.get(id);
    if (!def || !inst) return false;

    if (inst.state !== 'available' && inst.state !== 'locked') return false;

    inst.state = 'active';
    inst.stage = def.initial;

    const initialStageDef = def.stages[def.initial];
    if (initialStageDef) {
      if (initialStageDef.objective) {
        inst.journal.push(initialStageDef.objective);
        this.notifyJournal(`[${def.title}] ${initialStageDef.objective}`);
      }
      if (initialStageDef.onEnter) {
        this.applyEffects(initialStageDef.onEnter);
      }
    }

    this.notifyQuestChange(inst);
    this.recheckAvailability();
    return true;
  }

  public handleEvent(event: string, _payload?: any): boolean {
    let matchedAny = false;
    const ctx = this.getContext();

    for (const [id, inst] of Array.from(this.instances.entries())) {
      if (inst.state !== 'active') continue;
      const def = this.defs.get(id);
      if (!def) continue;

      for (const tr of def.transitions) {
        if (tr.from === inst.stage && tr.event === event) {
          const pass = CondEval.evaluateAll(tr.conditions, ctx);
          if (pass) {
            matchedAny = true;
            this.executeTransition(def, inst, tr);
            break;
          }
        }
      }
    }

    return matchedAny;
  }

  private executeTransition(def: QuestDef, inst: QuestInstance, tr: any): void {
    const oldStage = inst.stage;
    const oldStageDef = def.stages[oldStage];
    if (oldStageDef?.onExit) {
      this.applyEffects(oldStageDef.onExit);
    }

    if (tr.effects) {
      this.applyEffects(tr.effects);
    }

    if (tr.to === 'done') {
      inst.state = 'done';
      if (tr.resolution) {
        inst.resolution = tr.resolution;
        this.world.flags[`${def.id}.resolution`] = tr.resolution;
      }
      this.notifyJournal(`Quest Completed: ${def.title}`);
    } else if (tr.to === 'failed') {
      inst.state = 'failed';
      this.notifyJournal(`Quest Failed: ${def.title}`);
    } else {
      inst.stage = tr.to;
      const newStageDef = def.stages[tr.to];
      if (newStageDef) {
        if (newStageDef.objective) {
          inst.journal.push(newStageDef.objective);
          this.notifyJournal(`[${def.title}] ${newStageDef.objective}`);
        }
        if (newStageDef.onEnter) {
          this.applyEffects(newStageDef.onEnter);
        }
      }
    }

    this.notifyQuestChange(inst);
    this.recheckAvailability();
  }

  public applyEffects(effects: Effect[]): void {
    for (const e of effects) {
      this.applyEffect(e);
    }
  }

  public applyEffect(effect: Effect): void {
    switch (effect.t) {
      case 'flag':
        this.world.flags[effect.k] = effect.v;
        break;

      case 'knows':
        this.world.knowledge[effect.k] = true;
        break;

      case 'rep':
        this.world.rep[effect.k] = (this.world.rep[effect.k] ?? 0) + effect.d;
        break;

      case 'repSet':
        this.world.rep[effect.k] = effect.v;
        break;

      case 'give':
        this.world.inventory[effect.id] = (this.world.inventory[effect.id] ?? 0) + (effect.n ?? 1);
        break;

      case 'take':
        {
          const current = this.world.inventory[effect.id] ?? 0;
          this.world.inventory[effect.id] = Math.max(0, current - (effect.n ?? 1));
        }
        break;

      case 'quest':
        if (effect.op === 'start') {
          this.startQuest(effect.id);
        } else if (effect.op === 'advance' && effect.stage) {
          const inst = this.instances.get(effect.id);
          const def = this.defs.get(effect.id);
          if (inst && def) {
            inst.stage = effect.stage;
            this.notifyQuestChange(inst);
          }
        } else if (effect.op === 'complete') {
          const inst = this.instances.get(effect.id);
          if (inst) {
            inst.state = 'done';
            if (effect.resolution) {
              inst.resolution = effect.resolution;
              this.world.flags[`${effect.id}.resolution`] = effect.resolution;
            }
            this.notifyQuestChange(inst);
          }
        } else if (effect.op === 'fail') {
          const inst = this.instances.get(effect.id);
          if (inst) {
            inst.state = 'failed';
            this.notifyQuestChange(inst);
          }
        }
        break;

      case 'journal':
        this.notifyJournal(effect.entry);
        break;

      default:
        // World / map mutations (spawn, despawn, marker, gate, routine, shop, trainer, cutscene)
        // are delegated directly to subscribers (e.g. WorldDirector).
        break;
    }

    for (const listener of Array.from(this.effectListeners)) {
      listener(effect);
    }
  }

  private notifyJournal(entry: string): void {
    for (const listener of Array.from(this.journalListeners)) {
      listener(entry);
    }
  }

  private notifyQuestChange(inst: QuestInstance): void {
    for (const listener of Array.from(this.questChangeListeners)) {
      listener(inst);
    }
  }
}
