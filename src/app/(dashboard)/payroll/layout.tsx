import { PayrollLayout } from "@/modules/payroll";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PayrollLayout>{children}</PayrollLayout>;
}
