import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-5xl font-bold tracking-tight">RouteRadar</h1>
      <p className="mt-4 text-lg text-slate-600">
        Planowanie tras dostaw, optymalizacja kolejności i live tracking dla
        kierowców i klientów.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/login"
          className="rounded-lg bg-brand px-5 py-2.5 text-white hover:bg-brand-dark"
        >
          Zaloguj się
        </Link>
        <Link
          href="/dashboard"
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 hover:bg-slate-100"
        >
          Demo dashboardu
        </Link>
        <Link
          href="/routes"
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 hover:bg-slate-100"
        >
          Trasy
        </Link>
      </div>
      <p className="mt-12 text-sm text-slate-500">
        Dane testowe: <code>dispatcher@routeradar.dev / password123</code>
      </p>
    </main>
  );
}
