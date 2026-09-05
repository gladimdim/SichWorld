import { Cond, QuestInstance, WorldState } from './types.js';

export interface EvalContext {
  world: WorldState;
  quests: Record<string, QuestInstance>;
}

export class CondEval {
  public static evaluate(cond: Cond, ctx: EvalContext): boolean {
    switch (cond.t) {
      case 'quest': {
        const q = ctx.quests[cond.id];
        const state = q ? q.state : 'locked';
        if (Array.isArray(cond.state)) {
          return cond.state.includes(state);
        }
        return state === cond.state;
      }

      case 'stage': {
        const q = ctx.quests[cond.quest];
        return !!q && q.state === 'active' && q.stage === cond.stage;
      }

      case 'flag': {
        const val = ctx.world.flags[cond.k];
        if (cond.v === undefined) {
          return !!val;
        }
        const op = cond.op ?? 'eq';
        switch (op) {
          case 'eq':
            return val === cond.v;
          case 'ne':
            return val !== cond.v;
          case 'gt':
            return (val as number) > (cond.v as number);
          case 'gte':
            return (val as number) >= (cond.v as number);
          case 'lt':
            return (val as number) < (cond.v as number);
          case 'lte':
            return (val as number) <= (cond.v as number);
          default:
            return false;
        }
      }

      case 'knows': {
        return !!ctx.world.knowledge[cond.k];
      }

      case 'rep': {
        const current = ctx.world.rep[cond.k] ?? 0;
        if (cond.min !== undefined && current < cond.min) return false;
        if (cond.max !== undefined && current > cond.max) return false;
        return true;
      }

      case 'item': {
        const qty = ctx.world.inventory[cond.id] ?? 0;
        const required = cond.n ?? 1;
        return qty >= required;
      }

      case 'time': {
        const current = ctx.world.timeMinutes % 1440; // 24h cycle
        if (cond.after !== undefined && current < cond.after) return false;
        if (cond.before !== undefined && current > cond.before) return false;
        return true;
      }

      case 'chapter': {
        if (cond.min !== undefined && ctx.world.chapter < cond.min) return false;
        if (cond.max !== undefined && ctx.world.chapter > cond.max) return false;
        return true;
      }

      case 'all': {
        return cond.conds.every((c) => CondEval.evaluate(c, ctx));
      }

      case 'any': {
        return cond.conds.some((c) => CondEval.evaluate(c, ctx));
      }

      case 'not': {
        return !CondEval.evaluate(cond.cond, ctx);
      }

      default:
        return false;
    }
  }

  public static evaluateAll(conds: Cond[] | undefined, ctx: EvalContext): boolean {
    if (!conds || conds.length === 0) return true;
    return conds.every((c) => CondEval.evaluate(c, ctx));
  }

  /**
   * Diagnostic helper: returns a human-readable explanation of why a condition failed.
   */
  public static explainFailure(cond: Cond, ctx: EvalContext): string | null {
    if (CondEval.evaluate(cond, ctx)) return null;

    switch (cond.t) {
      case 'quest': {
        const current = ctx.quests[cond.id]?.state ?? 'locked';
        return `Quest '${cond.id}' is '${current}', expected '${JSON.stringify(cond.state)}'`;
      }
      case 'stage': {
        const current = ctx.quests[cond.quest]?.stage ?? 'none';
        return `Quest '${cond.quest}' stage is '${current}', expected '${cond.stage}'`;
      }
      case 'flag': {
        const current = ctx.world.flags[cond.k];
        return `Flag '${cond.k}' is '${current}', expected ${cond.op ?? 'eq'} '${cond.v}'`;
      }
      case 'knows': {
        return `Player does not possess knowledge '${cond.k}'`;
      }
      case 'rep': {
        const current = ctx.world.rep[cond.k] ?? 0;
        return `Reputation '${cond.k}' is ${current}, required range [${cond.min ?? '-inf'}, ${cond.max ?? '+inf'}]`;
      }
      case 'item': {
        const current = ctx.world.inventory[cond.id] ?? 0;
        return `Missing item '${cond.id}': have ${current}, require ${cond.n ?? 1}`;
      }
      case 'all': {
        const failed = cond.conds.map((c) => CondEval.explainFailure(c, ctx)).filter(Boolean);
        return `ALL condition failed: (${failed.join(' AND ')})`;
      }
      case 'any': {
        return `ANY condition failed: none of the sub-conditions matched`;
      }
      case 'not': {
        return `NOT condition failed: sub-condition was true`;
      }
      default:
        return `Condition of type '${(cond as any).t}' failed`;
    }
  }
}
