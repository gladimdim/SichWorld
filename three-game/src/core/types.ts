export type QuestState = 'locked' | 'available' | 'active' | 'done' | 'failed' | 'obsolete';

export type Resolution = string;

export interface WorldState {
  flags: Record<string, string | number | boolean>;
  knowledge: Record<string, boolean>;
  rep: Record<string, number>;
  timeMinutes: number;
  chapter: number;
  inventory: Record<string, number>;
}

export type Cond =
  | { t: 'quest'; id: string; state: QuestState | QuestState[] }
  | { t: 'stage'; quest: string; stage: string }
  | { t: 'flag'; k: string; v?: string | number | boolean; op?: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' }
  | { t: 'knows'; k: string }
  | { t: 'rep'; k: string; min?: number; max?: number }
  | { t: 'item'; id: string; n?: number }
  | { t: 'time'; after?: number; before?: number }
  | { t: 'chapter'; min?: number; max?: number }
  | { t: 'all'; conds: Cond[] }
  | { t: 'any'; conds: Cond[] }
  | { t: 'not'; cond: Cond };

export type Effect =
  | { t: 'flag'; k: string; v: string | number | boolean }
  | { t: 'knows'; k: string }
  | { t: 'rep'; k: string; d: number }
  | { t: 'repSet'; k: string; v: number }
  | { t: 'xp'; n: number }
  | { t: 'give'; id: string; n?: number }
  | { t: 'take'; id: string; n?: number }
  | { t: 'quest'; id: string; op: 'start' | 'advance' | 'complete' | 'fail' | 'obsolete'; stage?: string; resolution?: string }
  | { t: 'spawn'; table: string; at: string; tag?: string }
  | { t: 'despawn'; tag: string }
  | { t: 'marker'; id: string; op: 'add' | 'remove'; at?: string; label?: string }
  | { t: 'gate'; id: string; open: boolean }
  | { t: 'routine'; npc: string; routine: string }
  | { t: 'shop'; npc: string; op: 'unlock' | 'addItem' | 'discount'; item?: string; pct?: number }
  | { t: 'trainer'; npc: string; skill: string; unlock: boolean }
  | { t: 'journal'; entry: string }
  | { t: 'cutscene'; id: string };

export interface QuestStage {
  objective: string;
  onEnter?: Effect[];
  onExit?: Effect[];
}

export interface Transition {
  from: string;
  event: string; // e.g. "talk:ostap", "kill:wolf_pack", "dialog:choice_x", "item:give"
  to: string;
  conditions?: Cond[];
  effects?: Effect[];
  resolution?: Resolution;
}

export interface QuestDef {
  id: string;
  title: string;
  type: 'main' | 'joining' | 'camp' | 'global' | 'misc';
  faction?: string;
  giver?: string;
  availableWhen?: Cond[];
  stages: Record<string, QuestStage>;
  initial: string;
  transitions: Transition[];
  mutuallyExclusive?: string[];
}

export interface QuestInstance {
  id: string;
  state: QuestState;
  stage: string;
  resolution?: Resolution;
  journal: string[];
}

export interface DialogueChoice {
  id?: string;
  text: string;
  conditions?: Cond[];
  effects?: Effect[];
  goto?: string; // target node id or special action e.g. "EXIT", "TRADE", "TRAIN"
  once?: boolean;
}

export interface DialogueNode {
  id: string;
  npc: string;
  text: string;
  conditions?: Cond[];
  effects?: Effect[];
  choices: DialogueChoice[];
  once?: boolean;
}

export interface DialogueTree {
  npc: string;
  greetings: DialogueNode[];
  nodes: Record<string, DialogueNode>;
}

export interface ItemDef {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'potion' | 'misc' | 'quest';
  description: string;
  value: number;
  reqStr?: number;
  reqAgi?: number;
  reqInt?: number;
  damage?: number;
  armor?: number;
  effects?: Effect[];
}
