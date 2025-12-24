import { login as coreLogin } from "@/core/auth/auth.service";
import { useAuthStore } from "@/core/auth/auth.store";

export const loginService = async (email: string, password: string) => {
  const user = await coreLogin(email, password);
  useAuthStore.getState().setUser(user);
};
