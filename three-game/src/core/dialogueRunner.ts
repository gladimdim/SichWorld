import { CondEval } from './condEval.js';
import { EventBus } from './eventBus.js';
import { QuestManager } from './questManager.js';
import { DialogueChoice, DialogueNode, DialogueTree } from './types.js';

export interface DialogueResult {
  node: DialogueNode | null;
  choices: DialogueChoice[];
  isExit: boolean;
  specialAction?: string; // e.g. "TRADE", "TRAIN"
}

export class DialogueRunner {
  private trees: Map<string, DialogueTree> = new Map();
  private questManager: QuestManager;
  private bus: EventBus;
  private visitedNodes: Set<string> = new Set();
  private usedChoices: Set<string> = new Set();

  constructor(questManager: QuestManager, bus: EventBus) {
    this.questManager = questManager;
    this.bus = bus;
  }

  public registerTree(tree: DialogueTree): void {
    this.trees.set(tree.npc, tree);
  }

  public registerTrees(trees: DialogueTree[]): void {
    for (const t of trees) {
      this.registerTree(t);
    }
  }

  /**
   * Gothic greeting: Evaluates list of greetings in order, returning the first
   * whose conditions are met.
   */
  public startConversation(npc: string): DialogueResult | null {
    const tree = this.trees.get(npc);
    if (!tree) return null;

    const ctx = this.questManager.getContext();

    // 1. Find matching greeting
    let activeGreeting: DialogueNode | null = null;
    for (const g of tree.greetings) {
      if (CondEval.evaluateAll(g.conditions, ctx)) {
        activeGreeting = g;
        break;
      }
    }

    if (!activeGreeting) {
      // Fallback greeting if no conditional matched
      activeGreeting = {
        id: `${npc}.default_greeting`,
        npc,
        text: 'Greetings, Cossack.',
        choices: [{ text: 'Goodbye.', goto: 'EXIT' }]
      };
    }

    return this.processNode(activeGreeting, tree);
  }

  public selectChoice(npc: string, currentNodeId: string, choiceIndex: number): DialogueResult {
    const tree = this.trees.get(npc);
    if (!tree) {
      return { node: null, choices: [], isExit: true };
    }

    const currentNode = tree.nodes[currentNodeId] || tree.greetings.find((g) => g.id === currentNodeId);
    if (!currentNode) {
      return { node: null, choices: [], isExit: true };
    }

    const validChoices = this.filterChoices(currentNode.choices);
    const choice = validChoices[choiceIndex];
    if (!choice) {
      return { node: null, choices: [], isExit: true };
    }

    // Mark choice as used if once is set
    const choiceKey = `${currentNode.id}__choice_${choiceIndex}__${choice.text}`;
    if (choice.once) {
      this.usedChoices.add(choiceKey);
    }

    // Apply choice effects
    if (choice.effects) {
      this.questManager.applyEffects(choice.effects);
    }

    // Emit dialogue event to bus (for quest transitions)
    const eventName = choice.id ? `dialog:${choice.id}` : `dialog:${currentNode.id}.${choiceIndex}`;
    this.bus.emit(eventName, { npc, choice });

    if (choice.goto === 'EXIT' || !choice.goto) {
      return { node: null, choices: [], isExit: true };
    }

    if (choice.goto === 'TRADE' || choice.goto === 'TRAIN') {
      return { node: null, choices: [], isExit: false, specialAction: choice.goto };
    }

    const nextNode = tree.nodes[choice.goto];
    if (!nextNode) {
      return { node: null, choices: [], isExit: true };
    }

    return this.processNode(nextNode, tree);
  }

  private processNode(node: DialogueNode, tree: DialogueTree): DialogueResult {
    this.visitedNodes.add(node.id);

    // Apply node enter effects
    if (node.effects) {
      this.questManager.applyEffects(node.effects);
    }

    const validChoices = this.filterChoices(node.choices);

    return {
      node,
      choices: validChoices,
      isExit: false
    };
  }

  private filterChoices(choices: DialogueChoice[]): DialogueChoice[] {
    const ctx = this.questManager.getContext();
    return choices.filter((c, idx) => {
      const choiceKey = `${c.text}_${idx}`;
      if (c.once && this.usedChoices.has(choiceKey)) {
        return false;
      }
      return CondEval.evaluateAll(c.conditions, ctx);
    });
  }

  public isNodeVisited(nodeId: string): boolean {
    return this.visitedNodes.has(nodeId);
  }
}
