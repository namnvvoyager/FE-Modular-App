"use client";

import { eventBus } from "@/core/event-bus/eventBus";
import { EVENTS } from "@/core/event-bus/events";
import { loginApi } from "./auth.api";

export const login = async (email: string, password: string) => {
  const { token, user } = await loginApi(email, password);

  // set cookie cho middleware
  document.cookie = `access_token=${token}; path=/`;
  eventBus.emit(EVENTS.USER_LOGGED_IN, {
    userId: user.id,
    email: user.email,
  });

  return user;
};
