/* eslint-disable @typescript-eslint/no-explicit-any */
type Handler<T = any> = (payload: T) => void;

class EventBus {
  private events = new Map<string, Handler[]>();

  on(event: string, handler: Handler) {
    const handlers = this.events.get(event) || [];
    this.events.set(event, [...handlers, handler]);
  }

  emit(event: string, payload: any) {
    this.events.get(event)?.forEach((h) => h(payload));
  }
}

export const eventBus = new EventBus();
