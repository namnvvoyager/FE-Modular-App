"use client";

import { eventBus } from "@/core/event-bus/eventBus";
import { EVENTS } from "@/core/event-bus/events";
import { preloadPayrollData } from "../services/preloadPayrollData";

eventBus.on(EVENTS.USER_LOGGED_IN, async (payload: unknown) => {
  const { userId, email } = payload as { userId: string; email: string };
  await preloadPayrollData(userId, email);
});
