"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/core/auth/auth.store";
import { User } from "@/core/auth/auth.types";

export function AuthHydrator({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    setUser(user);
  }, [user, setUser]);

  return <>{children}</>;
}
