import { mockLogin } from "./auth.mock";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === "true";

export const loginApi = async (email: string, password: string) => {
  if (USE_MOCK) {
    return mockLogin(email, password);
  }

  // backend-ready
  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("LOGIN_FAILED");

  return res.json();
};
