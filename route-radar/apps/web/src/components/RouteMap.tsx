"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })
  ._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const stopIcon = (n: number) =>
  L.divIcon({
    className: "rr-stop-icon",
    html: `<div style="
      background:#0ea5e9;color:white;font-weight:700;font-size:12px;
      width:28px;height:28px;border-radius:50%;display:grid;place-items:center;
      box-shadow:0 1px 4px rgba(0,0,0,.4);border:2px solid white;
    ">${n}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });

import type { Route } from "@/app/routes/types";

export default function RouteMap({ route }: { route: Route | null }) {
  const center: [number, number] = route?.deliveries[0]
    ? [route.deliveries[0].address.lat, route.deliveries[0].address.lng]
    : [52.2297, 21.0122];

  const ordered = route
    ? [...route.deliveries].sort(
        (a, b) => (a.stopOrder ?? 999) - (b.stopOrder ?? 999),
      )
    : [];

  const polyline: [number, number][] = [];
  if (route?.startLat != null && route.startLng != null) {
    polyline.push([route.startLat, route.startLng]);
  }
  ordered.forEach((d) => polyline.push([d.address.lat, d.address.lng]));

  return (
    <MapContainer center={center} zoom={12} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {route?.startLat != null && route.startLng != null && (
        <Marker position={[route.startLat, route.startLng]}>
          <Popup>
            <strong>Start</strong>
          </Popup>
        </Marker>
      )}

      {ordered.map((d, i) => (
        <Marker
          key={d.id}
          position={[d.address.lat, d.address.lng]}
          icon={stopIcon((d.stopOrder ?? i) + 1)}
        >
          <Popup>
            <strong>
              #{(d.stopOrder ?? i) + 1} — {d.reference}
            </strong>
            <br />
            {d.recipient}
            <br />
            {d.address.street}, {d.address.city}
          </Popup>
        </Marker>
      ))}

      {polyline.length > 1 && (
        <Polyline
          positions={polyline}
          pathOptions={{ color: "#0ea5e9", weight: 4, opacity: 0.7 }}
        />
      )}
    </MapContainer>
  );
}
