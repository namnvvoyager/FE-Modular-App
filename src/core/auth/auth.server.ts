import { cookies } from "next/headers";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) return null;

  return {
    id: "1",
    email: "user@example.com",
    permissions: ["PAYROLL_VIEW"],
  };
}
