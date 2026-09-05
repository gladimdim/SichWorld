export type GameEventCallback = (payload: any) => void;

export class EventBus {
  private listeners: Map<string, Set<GameEventCallback>> = new Map();

  public on(event: string, callback: GameEventCallback): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);

    return () => {
      this.off(event, callback);
    };
  }

  public off(event: string, callback: GameEventCallback): void {
    const set = this.listeners.get(event);
    if (set) {
      set.delete(callback);
      if (set.size === 0) {
        this.listeners.delete(event);
      }
    }
  }

  public emit(event: string, payload?: any): void {
    const set = this.listeners.get(event);
    if (set) {
      for (const cb of Array.from(set)) {
        cb(payload);
      }
    }

    // Wildcard support: e.g. "kill:*" or "*"
    const colonIdx = event.indexOf(':');
    if (colonIdx !== -1) {
      const wildcard = event.substring(0, colonIdx + 1) + '*';
      const wildSet = this.listeners.get(wildcard);
      if (wildSet) {
        for (const cb of Array.from(wildSet)) {
          cb(payload);
        }
      }
    }

    const globalSet = this.listeners.get('*');
    if (globalSet) {
      for (const cb of Array.from(globalSet)) {
        cb({ event, payload });
      }
    }
  }
}
