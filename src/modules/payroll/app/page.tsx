import { getPayrolls } from "../services/getPayrolls";
import { PayrollFilter } from "../components/PayrollFilter";

export default async function PayrollPage() {
  const payrolls = await getPayrolls();

  return (
    <div>
      <h1>Payroll</h1>
      <PayrollFilter />
      <ul>
        {payrolls.map((p) => (
          <li key={p.id}>{p.displayAmount}</li>
        ))}
      </ul>
    </div>
  );
}
