"use client";

import { useState } from "react";
import { loginService } from "../services/login.service";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    try {
      await loginService(email, password);
      router.push("/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onSubmit}>Login</button>
    </div>
  );
}
