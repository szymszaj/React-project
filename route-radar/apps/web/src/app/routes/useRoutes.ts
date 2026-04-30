"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { Delivery, OptimizeMetric, Route } from "./types";

export function useRoutes() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function withBusy<T>(fn: () => Promise<T>): Promise<T | undefined> {
    setBusy(true);
    setError(null);
    try {
      return await fn();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  }

  async function createRoute(name: string) {
    const r = await withBusy(() =>
      api.post<Route>("/routes", {
        name,
        date: new Date().toISOString(),
        startLat: 52.2297,
        startLng: 21.0122,
      }),
    );
    if (r) {
      setSelectedId(r.id);
      await refresh();
    }
  }

  async function assignDelivery(deliveryId: string) {
    if (!selectedId) return;
    await withBusy(async () => {
      await api.post(`/routes/${selectedId}/assign`, {
        deliveryIds: [deliveryId],
      });
      await refresh();
    });
  }

  async function optimize(metric: OptimizeMetric) {
    if (!selectedId) return;
    await withBusy(async () => {
      await api.post(`/routes/${selectedId}/optimize`, { metric });
      await refresh();
    });
  }

  const selected = routes.find((r) => r.id === selectedId) ?? null;
  const unassigned = deliveries.filter((d) => !d.routeId);

  return {
    routes,
    deliveries,
    selected,
    selectedId,
    setSelectedId,
    unassigned,
    error,
    busy,
    createRoute,
    assignDelivery,
    optimize,
  };
}
