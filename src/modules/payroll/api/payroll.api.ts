import { fetcher } from "@/core/api/fetcher";
import { mockPayrolls } from "./payroll.mock";
import { Payroll } from "../type/payroll";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === "true";

export const getPayrollList = async (): Promise<Payroll[]> => {
  if (USE_MOCK) {
    // Giả lập latency
    await new Promise((res) => setTimeout(res, 300));
    return mockPayrolls;
  }

  return fetcher.get("/payrolls");
};
