"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("dispatcher@routeradar.dev");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.post<{ token: string }>("/auth/login", { email, password });
      localStorage.setItem("rr_token", res.token);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-sm px-6 py-20">
      <h1 className="text-3xl font-bold">Logowanie</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Hasło"
          required
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-brand px-4 py-2 text-white hover:bg-brand-dark disabled:opacity-50"
        >
          {loading ? "..." : "Zaloguj"}
        </button>
      </form>
    </main>
  );
}
