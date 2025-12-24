import { getPayrollList } from "../api/payroll.api";
import { Payroll } from "../type/payroll";

export const getPayrolls = async () => {
  const payrolls: Payroll[] = await getPayrollList();

  return payrolls.map((p) => ({
    ...p,
    displayAmount: `${p.amount.toLocaleString()} ¥`,
  }));
};
