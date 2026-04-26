"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { api } from "@/lib/api";

const DeliveriesMap = dynamic(() => import("@/components/DeliveriesMap"), {
  ssr: false,
  loading: () => <div className="grid h-full place-items-center text-slate-400">Loading map…</div>,
});

interface Delivery {
  id: string;
  reference: string;
  recipient: string;
  status: string;
  priority: number;
  address: { id: string; label: string; lat: number; lng: number; street: string; city: string };
}

export default function DashboardPage() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<Delivery[]>("/deliveries")
      .then(setDeliveries)
      .catch((e) => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="grid h-screen grid-cols-[380px_1fr]">
      <aside className="overflow-y-auto border-r border-slate-200 bg-white">
        <header className="border-b border-slate-200 p-4">
          <h1 className="text-xl font-bold">Dostawy</h1>
          <p className="text-xs text-slate-500">{deliveries.length} pozycji</p>
        </header>
        {loading && <p className="p-4 text-slate-500">Ładowanie…</p>}
        {error && <p className="p-4 text-red-600">{error}</p>}
        <ul className="divide-y divide-slate-100">
          {deliveries.map((d) => (
            <li key={d.id} className="p-4 hover:bg-slate-50">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">{d.reference}</span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs">{d.status}</span>
              </div>
              <p className="mt-1 font-medium">{d.recipient}</p>
              <p className="text-sm text-slate-600">
                {d.address.street}, {d.address.city}
              </p>
            </li>
          ))}
        </ul>
      </aside>
      <section className="relative">
        <DeliveriesMap deliveries={deliveries} />
      </section>
    </div>
  );
}
