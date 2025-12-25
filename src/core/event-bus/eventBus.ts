/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

type EventHandler<T = any> = (payload: T) => void;

class EventBus {
  private events = new Map<string, EventHandler[]>();

  emit<T>(event: string, payload: T) {
    this.events.get(event)?.forEach((handler) => handler(payload));
  }

  on<T>(event: string, handler: EventHandler<T>) {
    const handlers = this.events.get(event) || [];
    this.events.set(event, [...handlers, handler]);
  }

  off<T>(event: string, handler: EventHandler<T>) {
    const handlers = this.events.get(event) || [];
    this.events.set(
      event,
      handlers.filter((h) => h !== handler)
    );
  }
}

export const eventBus = new EventBus();
