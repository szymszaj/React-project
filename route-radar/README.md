# RouteRadar 🗺️

Monorepo dla planera dostaw: dispatcher panel + mapa + (planowane) optymalizacja tras, PWA dla kierowcy i live tracking.

## Stack

- **Monorepo:** Turborepo + npm workspaces
- **apps/web** — Next.js 15 (App Router) + Tailwind + Leaflet
- **apps/api** — Fastify 5 + JWT + zod
- **packages/db** — Prisma (SQLite na dev, Postgres docelowo)
- **packages/types** — współdzielone schematy zod

## Quick start

```bash
cd route-radar

# 1. instalacja
npm install

# 2. env
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env

# 3. baza (SQLite, zero infra)
npm run -w @route-radar/db generate
npm run db:push
npm run db:seed

# 4. odpal wszystko (web + api równolegle)
npm run dev
```

Web: http://localhost:3000 · API: http://localhost:4000/health

Dane logowania (z seeda):

- `dispatcher@routeradar.dev` / `password123`
- `driver@routeradar.dev` / `password123`

## Roadmapa (etapy do CV)

| Etap                             | Zakres                                                                                     | Status |
| -------------------------------- | ------------------------------------------------------------------------------------------ | ------ |
| 1 — MVP                          | Auth (JWT), CRUD dostaw, lista + mapa, geocoding (Nominatim)                               | ✅     |
| 2 — Optymalizacja                | Routes CRUD, nearest-neighbor + 2-opt, OSRM table API + haversine fallback, polilinia w UI | ✅     |
| 3 — PWA dla kierowcy             | offline cache, status dostawy, proof of delivery (zdjęcie + podpis)                        | ⏳     |
| 4 — Realtime tracking            | WebSocket (Socket.IO), publiczny link dla klienta                                          | ⏳     |
| 5 — Powiadomienia + multi-tenant | SMS (Twilio) / email (Resend), wiele firm, statystyki                                      | ⏳     |

## Przejście na Postgres + Redis

Po zainstalowaniu Docker Desktop:

```bash
docker compose up -d
# Edytuj .env: DATABASE_URL na postgres
# Zmień provider w packages/db/prisma/schema.prisma na "postgresql"
npm run db:push
npm run db:seed
```

## Struktura

```
apps/
  api/   Fastify REST API
  web/   Next.js dispatcher + driver UI
packages/
  db/    Prisma client + schema + seed
  types/ Zod schemas (DTO)
```
