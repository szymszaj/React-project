"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { api } from "@/lib/api";

const RouteMap = dynamic(() => import("@/components/RouteMap"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full place-items-center text-slate-400">
      Loading map…
    </div>
  ),
});

interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  lat: number;
  lng: number;
}
interface Delivery {
  id: string;
  reference: string;
  recipient: string;
  status: string;
  stopOrder: number | null;
  routeId: string | null;
  address: Address;
}
interface Route {
  id: string;
  name: string;
  date: string;
  startLat: number | null;
  startLng: number | null;
  totalDistance: number | null;
  totalDuration: number | null;
  optimizedAt: string | null;
  deliveries: Delivery[];
}

export default function RoutesPage() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [newName, setNewName] = useState(
    "Trasa " + new Date().toLocaleDateString("pl-PL"),
  );

  async function refresh() {
    const [r, d] = await Promise.all([
      api.get<Route[]>("/routes"),
      api.get<Delivery[]>("/deliveries"),
    ]);
    setRoutes(r);
    setDeliveries(d);
    if (!selectedId && r[0]) setSelectedId(r[0].id);
  }

  useEffect(() => {
    refresh().catch((e) =>
      setError(e instanceof Error ? e.message : String(e)),
    );
  }, []);

  const selected = routes.find((r) => r.id === selectedId) ?? null;

  async function createRoute() {
    setBusy(true);
    setError(null);
    try {
      const r = await api.post<Route>("/routes", {
        name: newName,
        date: new Date().toISOString(),
        startLat: 52.2297,
        startLng: 21.0122,
      });
      setSelectedId(r.id);
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  }

  async function assignDelivery(deliveryId: string) {
    if (!selectedId) return;
    setBusy(true);
    try {
      await api.post(`/routes/${selectedId}/assign`, {
        deliveryIds: [deliveryId],
      });
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  }

  async function optimize(metric: "haversine" | "osrm") {
    if (!selectedId) return;
    setBusy(true);
    try {
      await api.post(`/routes/${selectedId}/optimize`, { metric });
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  }

  const unassigned = deliveries.filter((d) => !d.routeId);

  return (
    <div className="grid h-screen grid-cols-[420px_1fr]">
      <aside className="overflow-y-auto border-r border-slate-200 bg-white">
        <header className="border-b border-slate-200 p-4">
          <h1 className="text-xl font-bold">Trasy</h1>
          <p className="text-xs text-slate-500">
            {routes.length} tras • {deliveries.length} dostaw
          </p>
        </header>

        <section className="border-b border-slate-200 p-4">
          <label className="mb-1 block text-xs font-medium text-slate-600">
            Nowa trasa
          </label>
          <div className="flex gap-2">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="flex-1 rounded border border-slate-300 px-2 py-1.5 text-sm"
            />
            <button
              onClick={createRoute}
              disabled={busy}
              className="rounded bg-brand px-3 py-1.5 text-sm text-white hover:bg-brand-dark disabled:opacity-50"
            >
              + Utwórz
            </button>
          </div>
        </section>

        <ul className="divide-y divide-slate-100">
          {routes.map((r) => (
            <li
              key={r.id}
              onClick={() => setSelectedId(r.id)}
              className={
                "cursor-pointer p-4 hover:bg-slate-50 " +
                (r.id === selectedId ? "bg-sky-50" : "")
              }
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{r.name}</span>
                <span className="text-xs text-slate-500">
                  {r.deliveries.length} st.
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {new Date(r.date).toLocaleDateString("pl-PL")}
                {r.totalDistance != null &&
                  ` • ${(r.totalDistance / 1000).toFixed(1)} km`}
                {r.totalDuration != null &&
                  r.totalDuration > 0 &&
                  ` • ${Math.round(r.totalDuration / 60)} min`}
              </p>
            </li>
          ))}
        </ul>

        {selected && (
          <section className="border-t border-slate-200 p-4">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-600">
              {selected.name}
            </h2>
            <div className="mb-3 flex gap-2">
              <button
                onClick={() => optimize("haversine")}
                disabled={busy || selected.deliveries.length === 0}
                className="flex-1 rounded bg-slate-800 px-3 py-1.5 text-xs text-white hover:bg-slate-700 disabled:opacity-50"
                title="Szybka optymalizacja po linii prostej"
              >
                Optymalizuj (haversine)
              </button>
              <button
                onClick={() => optimize("osrm")}
                disabled={busy || selected.deliveries.length === 0}
                className="flex-1 rounded bg-emerald-600 px-3 py-1.5 text-xs text-white hover:bg-emerald-700 disabled:opacity-50"
                title="Realne odległości drogowe (OSRM)"
              >
                Optymalizuj (OSRM)
              </button>
            </div>
            <h3 className="mt-2 text-xs font-semibold uppercase text-slate-500">
              Przystanki ({selected.deliveries.length})
            </h3>
            <ol className="mt-1 space-y-1 text-sm">
              {selected.deliveries
                .sort((a, b) => (a.stopOrder ?? 999) - (b.stopOrder ?? 999))
                .map((d, i) => (
                  <li
                    key={d.id}
                    className="flex gap-2 rounded bg-slate-50 px-2 py-1"
                  >
                    <span className="font-mono text-xs text-slate-500">
                      {(d.stopOrder ?? i) + 1}.
                    </span>
                    <span className="flex-1 truncate">
                      {d.recipient} — {d.address.street}
                    </span>
                  </li>
                ))}
            </ol>
          </section>
        )}

        {selected && unassigned.length > 0 && (
          <section className="border-t border-slate-200 p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase text-slate-500">
              Do przypisania ({unassigned.length})
            </h3>
            <ul className="space-y-1 text-sm">
              {unassigned.map((d) => (
                <li
                  key={d.id}
                  className="flex items-center justify-between gap-2 rounded border border-slate-200 px-2 py-1"
                >
                  <span className="flex-1 truncate">
                    {d.reference} • {d.recipient}
                  </span>
                  <button
                    onClick={() => assignDelivery(d.id)}
                    disabled={busy}
                    className="rounded bg-brand px-2 py-0.5 text-xs text-white hover:bg-brand-dark disabled:opacity-50"
                  >
                    Dodaj
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {error && (
          <p className="border-t border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </p>
        )}
      </aside>

      <section className="relative">
        <RouteMap route={selected} />
      </section>
    </div>
  );
}
