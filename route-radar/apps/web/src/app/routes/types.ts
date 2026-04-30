export type Address = {
  id: string;
  label: string;
  street: string;
  city: string;
  lat: number;
  lng: number;
};

export type Delivery = {
  id: string;
  reference: string;
  recipient: string;
  status: string;
  stopOrder: number | null;
  routeId: string | null;
  address: Address;
};

export type Route = {
  id: string;
  name: string;
  date: string;
  startLat: number | null;
  startLng: number | null;
  totalDistance: number | null;
  totalDuration: number | null;
  optimizedAt: string | null;
  deliveries: Delivery[];
};

export type OptimizeMetric = "haversine" | "osrm";
