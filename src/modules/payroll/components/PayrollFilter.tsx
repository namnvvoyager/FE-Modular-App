"use client";

import { useState } from "react";
import "../events/onUserLogin";

export function PayrollFilter() {
  const [year, setYear] = useState(2025);

  return (
    <select value={year} onChange={(e) => setYear(+e.target.value)}>
      <option value={2024}>2024</option>
      <option value={2025}>2025</option>
    </select>
  );
}
