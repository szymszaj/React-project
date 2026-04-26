"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Default Leaflet markers don't ship icons through bundlers cleanly; fix paths.
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface Item {
  id: string;
  reference: string;
  recipient: string;
  address: { lat: number; lng: number; street: string; city: string };
}

export default function DeliveriesMap({ deliveries }: { deliveries: Item[] }) {
  const center: [number, number] =
    deliveries[0]
      ? [deliveries[0].address.lat, deliveries[0].address.lng]
      : [52.2297, 21.0122]; // Warsaw

  return (
    <MapContainer center={center} zoom={12} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {deliveries.map((d) => (
        <Marker key={d.id} position={[d.address.lat, d.address.lng]}>
          <Popup>
            <strong>{d.reference}</strong>
            <br />
            {d.recipient}
            <br />
            {d.address.street}, {d.address.city}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
