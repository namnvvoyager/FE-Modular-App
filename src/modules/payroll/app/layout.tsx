import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { useAuthStore } from "@/core/auth/auth.store";

export default function PayrollLayout({ children }: { children: ReactNode }) {
  const user = useAuthStore.getState().user;

  if (!user?.permissions.includes("PAYROLL_VIEW")) {
    redirect("/403");
  }

  return children;
}
