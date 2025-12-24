import { User } from "./auth.types";

export const mockLogin = async (
  email: string,
  password: string
): Promise<{ token: string; user: User }> => {
  await new Promise((r) => setTimeout(r, 500));

  if (email !== "admin@test.com" || password !== "123456") {
    throw new Error("INVALID_CREDENTIALS");
  }

  return {
    token: "mock-access-token",
    user: {
      id: "1",
      email,
      permissions: ["PAYROLL_VIEW"],
    },
  };
};
