// app/providers/AuthProvider.tsx
import { getCurrentUser } from "@/core/auth/auth.server";
import { AuthHydrator } from "./AuthHydrator";

export default async function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return <AuthHydrator user={user}>{children}</AuthHydrator>;
}
