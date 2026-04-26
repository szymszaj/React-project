import type { FastifyPluginAsync } from "fastify";
import { GeocodeQuery } from "@route-radar/types";

// Free geocoding via OpenStreetMap Nominatim.
// Respect their usage policy: 1 req/sec, custom UA, no heavy traffic.
// In production: cache results, switch to Mapbox/Google.

interface NominatimResult {
  display_name: string;
  lat: string;
  lon: string;
  address?: {
    road?: string;
    house_number?: string;
    city?: string;
    town?: string;
    village?: string;
    postcode?: string;
  };
}

export const geocodeRoutes: FastifyPluginAsync = async (app) => {
  app.get("/", { preHandler: app.requireAuth }, async (req, reply) => {
    const parsed = GeocodeQuery.safeParse(req.query);
    if (!parsed.success) {
      return reply.code(400).send({ error: "invalid_query" });
    }

    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("q", parsed.data.q);
    url.searchParams.set("format", "json");
    url.searchParams.set("addressdetails", "1");
    url.searchParams.set("limit", "5");

    const res = await fetch(url, {
      headers: { "User-Agent": "RouteRadar-dev/0.1 (dev@example.com)" },
    });
    if (!res.ok) {
      return reply.code(502).send({ error: "geocoder_unavailable" });
    }
    const data = (await res.json()) as NominatimResult[];

    return data.map((r) => ({
      label: r.display_name,
      lat: parseFloat(r.lat),
      lng: parseFloat(r.lon),
      street: [r.address?.road, r.address?.house_number].filter(Boolean).join(" "),
      city: r.address?.city ?? r.address?.town ?? r.address?.village ?? "",
      postalCode: r.address?.postcode ?? "",
    }));
  });
};
