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
      router.push("/payroll");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/30">
      <div className="w-105 bg-white rounded-lg p-10 shadow-2xl flex flex-col items-center gap-6">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="font-bold text-xl">IB Group</div>
          <div className="text-2xl font-semibold">車両管理システム</div>
        </div>
        <div className="w-full">
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-sm font-medium">ログインID</label>
              <div className="text-red-500 text-xs">*必須</div>
            </div>
            <input
              className="border border-gray-300 px-5 py-2 rounded-sm w-full text-sm focus-visible:outline-0"
              placeholder="入力"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-sm font-medium">パスワード</label>
              <div className="text-red-500 text-xs">*必須</div>
            </div>
            <input
              className="border border-gray-300 px-5 py-2 rounded-sm w-full text-sm focus-visible:outline-0"
              placeholder="入力"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex items-center gap-3">
          <input type="checkbox" className="" />
          <div className="text-sm">ログインしたままにする</div>
        </div>
        <div className="w-full">
          <button
            onClick={onSubmit}
            className="px-5 py-3 w-full bg-teal-500 rounded-sm text-white font-semibold cursor-pointer"
          >
            ログイン
          </button>
        </div>
      </div>
    </div>
  );
}
