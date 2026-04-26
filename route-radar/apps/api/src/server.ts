import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import { authRoutes } from "./routes/auth.js";
import { deliveriesRoutes } from "./routes/deliveries.js";
import { geocodeRoutes } from "./routes/geocode.js";
import { authPlugin } from "./plugins/auth.js";

const PORT = Number(process.env.API_PORT ?? 4000);
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET || JWT_SECRET.length < 16) {
  console.error("JWT_SECRET missing or too short. Set it in .env (>=16 chars).");
  process.exit(1);
}

const app = Fastify({ logger: { level: "info" } });

await app.register(cors, {
  origin: [`http://localhost:${process.env.WEB_PORT ?? 3000}`],
  credentials: true,
});

await app.register(jwt, { secret: JWT_SECRET });
await app.register(authPlugin);

app.get("/health", async () => ({ ok: true, ts: Date.now() }));

await app.register(authRoutes, { prefix: "/auth" });
await app.register(deliveriesRoutes, { prefix: "/deliveries" });
await app.register(geocodeRoutes, { prefix: "/geocode" });

app
  .listen({ port: PORT, host: "0.0.0.0" })
  .then(() => app.log.info(`API listening on http://localhost:${PORT}`))
  .catch((err) => {
    app.log.error(err);
    process.exit(1);
  });
