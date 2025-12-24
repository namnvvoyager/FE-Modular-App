"use client";

import { ReactNode, useEffect } from "react";
import { useAuthStore } from "@/core/auth/auth.store";

export function AuthProvider({ children }: { children: ReactNode }) {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    // future: hydrate user from /me API
  }, [setUser]);

  return children;
}
