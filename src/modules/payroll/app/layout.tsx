import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { getCurrentUser } from "@/core/auth/auth.server";

export default async function PayrollLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user?.permissions.includes("PAYROLL_VIEW")) {
    redirect("/403");
  }

  return (
    <div>
      <div className="bg-teal-500 px-5">
        <div className="flex items-center gap-3 p-4">
          <div className="text-white font-medium">給与機能</div>
        </div>
      </div>
      {children}
    </div>
  );
}
