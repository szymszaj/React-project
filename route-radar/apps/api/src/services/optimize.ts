// Route optimization service.
//
// Strategy:
//  1. Build NxN distance matrix between [start, ...stops]
//     - via OSRM /table API (real road distances) when metric === "osrm"
//     - or great-circle (haversine) fallback (offline, fast, ~roughly correct)
//  2. Nearest-neighbor heuristic to get an initial tour
//  3. 2-opt local search to improve it (swap edges while it shortens the tour)
//
// We treat this as an "open" TSP starting at index 0 (depot) — we don't return.

export type LatLng = { lat: number; lng: number };

const OSRM_BASE = "https://router.project-osrm.org";

// ---------- haversine fallback ----------
const R = 6_371_000; // meters
const toRad = (d: number) => (d * Math.PI) / 180;

export function haversine(a: LatLng, b: LatLng): number {
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function haversineMatrix(points: LatLng[]): number[][] {
  return points.map((a) => points.map((b) => haversine(a, b)));
}

// ---------- OSRM table API ----------
interface OsrmTableResponse {
  code: string;
  durations?: number[][]; // seconds
  distances?: number[][]; // meters
}

export async function osrmMatrix(points: LatLng[]): Promise<{
  distances: number[][];
  durations: number[][];
}> {
  const coords = points.map((p) => `${p.lng},${p.lat}`).join(";");
  const url = `${OSRM_BASE}/table/v1/driving/${coords}?annotations=distance,duration`;
  const res = await fetch(url, {
    headers: { "User-Agent": "RouteRadar-dev/0.1" },
  });
  if (!res.ok) throw new Error(`OSRM table failed: ${res.status}`);
  const data = (await res.json()) as OsrmTableResponse;
  if (data.code !== "Ok" || !data.distances || !data.durations) {
    throw new Error(`OSRM table returned ${data.code}`);
  }
  return { distances: data.distances, durations: data.durations };
}

// ---------- algorithms ----------
export function nearestNeighbor(matrix: number[][], start = 0): number[] {
  const n = matrix.length;
  const visited = new Array<boolean>(n).fill(false);
  const tour = [start];
  visited[start] = true;

  for (let step = 1; step < n; step++) {
    const last = tour[tour.length - 1]!;
    let best = -1;
    let bestDist = Infinity;
    for (let j = 0; j < n; j++) {
      if (visited[j]) continue;
      const d = matrix[last]![j]!;
      if (d < bestDist) {
        bestDist = d;
        best = j;
      }
    }
    if (best === -1) break;
    visited[best] = true;
    tour.push(best);
  }
  return tour;
}

export function tourLength(tour: number[], matrix: number[][]): number {
  let sum = 0;
  for (let i = 0; i < tour.length - 1; i++) {
    sum += matrix[tour[i]!]![tour[i + 1]!]!;
  }
  return sum;
}

// 2-opt for an OPEN tour (depot fixed at index 0, no return).
export function twoOpt(initial: number[], matrix: number[][]): number[] {
  let tour = [...initial];
  let improved = true;
  let guard = 0;
  const maxIters = 100;

  while (improved && guard++ < maxIters) {
    improved = false;
    // i starts at 1 to keep the depot fixed
    for (let i = 1; i < tour.length - 1; i++) {
      for (let k = i + 1; k < tour.length; k++) {
        const a = tour[i - 1]!;
        const b = tour[i]!;
        const c = tour[k]!;
        const d = tour[k + 1]; // may be undefined for open tour end

        const before = matrix[a]![b]! + (d !== undefined ? matrix[c]![d]! : 0);
        const after = matrix[a]![c]! + (d !== undefined ? matrix[b]![d]! : 0);

        if (after + 1e-9 < before) {
          // Reverse segment [i..k]
          const segment = tour.slice(i, k + 1).reverse();
          tour = [...tour.slice(0, i), ...segment, ...tour.slice(k + 1)];
          improved = true;
        }
      }
    }
  }
  return tour;
}

// ---------- public entry point ----------
export interface OptimizeInput {
  start?: LatLng; // depot; if omitted we use first stop as start
  stops: LatLng[];
  metric: "osrm" | "haversine";
}

export interface OptimizeResult {
  // Indices into the original `stops` array, in optimized visit order.
  order: number[];
  totalDistance: number; // meters
  totalDuration: number; // seconds (0 when haversine)
  metric: "osrm" | "haversine";
}

export async function optimizeRoute(
  input: OptimizeInput,
): Promise<OptimizeResult> {
  const { stops, metric } = input;
  if (stops.length === 0) {
    return { order: [], totalDistance: 0, totalDuration: 0, metric };
  }

  const points: LatLng[] = input.start ? [input.start, ...stops] : stops;

  let distances: number[][];
  let durations: number[][];

  if (metric === "osrm") {
    try {
      const m = await osrmMatrix(points);
      distances = m.distances;
      durations = m.durations;
    } catch {
      // graceful fallback
      distances = haversineMatrix(points);
      durations = distances.map((row) => row.map(() => 0));
    }
  } else {
    distances = haversineMatrix(points);
    durations = distances.map((row) => row.map(() => 0));
  }

  const initial = nearestNeighbor(distances, 0);
  const optimized = twoOpt(initial, distances);

  // Total cost along optimized tour
  const totalDistance = tourLength(optimized, distances);
  const totalDuration = tourLength(optimized, durations);

  // Map back to original stop indices.
  // If `start` was provided, points[0] is depot; subtract 1 to get stop index.
  const order = input.start ? optimized.slice(1).map((i) => i - 1) : optimized;

  return { order, totalDistance, totalDuration, metric };
}
