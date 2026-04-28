import type { FastifyPluginAsync } from "fastify";
import { prisma } from "@route-radar/db";
import {
  RouteCreateInput,
  RouteAssignInput,
  RouteOptimizeOptions,
} from "@route-radar/types";
import { optimizeRoute } from "../services/optimize.js";

export const routesRoutes: FastifyPluginAsync = async (app) => {
  app.get("/", { preHandler: app.requireAuth }, async (req) => {
    const where = req.user.role === "DRIVER" ? { driverId: req.user.sub } : {};
    return prisma.route.findMany({
      where,
      include: {
        deliveries: {
          include: { address: true },
          orderBy: { stopOrder: "asc" },
        },
        driver: { select: { id: true, name: true, email: true } },
      },
      orderBy: { date: "desc" },
    });
  });

  app.get("/:id", { preHandler: app.requireAuth }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const route = await prisma.route.findUnique({
      where: { id },
      include: {
        deliveries: {
          include: { address: true },
          orderBy: { stopOrder: "asc" },
        },
        driver: { select: { id: true, name: true, email: true } },
      },
    });
    if (!route) return reply.code(404).send({ error: "not_found" });
    return route;
  });

  app.post(
    "/",
    { preHandler: app.requireRole("DISPATCHER") },
    async (req, reply) => {
      const parsed = RouteCreateInput.safeParse(req.body);
      if (!parsed.success) {
        return reply
          .code(400)
          .send({ error: "invalid_body", issues: parsed.error.issues });
      }
      const { date, ...rest } = parsed.data;
      const route = await prisma.route.create({
        data: { ...rest, date: new Date(date) },
      });
      return reply.code(201).send(route);
    },
  );

  app.post(
    "/:id/assign",
    { preHandler: app.requireRole("DISPATCHER") },
    async (req, reply) => {
      const { id } = req.params as { id: string };
      const parsed = RouteAssignInput.safeParse(req.body);
      if (!parsed.success) {
        return reply
          .code(400)
          .send({ error: "invalid_body", issues: parsed.error.issues });
      }

      const route = await prisma.route.findUnique({ where: { id } });
      if (!route) return reply.code(404).send({ error: "not_found" });

      await prisma.delivery.updateMany({
        where: { id: { in: parsed.data.deliveryIds } },
        data: { routeId: id, status: "ASSIGNED" },
      });

      return prisma.route.findUnique({
        where: { id },
        include: { deliveries: { include: { address: true } } },
      });
    },
  );

  app.post(
    "/:id/optimize",
    { preHandler: app.requireRole("DISPATCHER") },
    async (req, reply) => {
      const { id } = req.params as { id: string };
      const parsed = RouteOptimizeOptions.safeParse(req.body ?? {});
      if (!parsed.success) {
        return reply.code(400).send({ error: "invalid_body" });
      }

      const route = await prisma.route.findUnique({
        where: { id },
        include: { deliveries: { include: { address: true } } },
      });
      if (!route) return reply.code(404).send({ error: "not_found" });
      if (route.deliveries.length === 0) {
        return reply.code(400).send({ error: "no_deliveries_to_optimize" });
      }

      const stops = route.deliveries.map((d) => ({
        lat: d.address.lat,
        lng: d.address.lng,
      }));
      const start =
        route.startLat != null && route.startLng != null
          ? { lat: route.startLat, lng: route.startLng }
          : undefined;

      const result = await optimizeRoute({
        start,
        stops,
        metric: parsed.data.metric,
      });

      await prisma.$transaction([
        ...result.order.map((stopIdx, i) =>
          prisma.delivery.update({
            where: { id: route.deliveries[stopIdx]!.id },
            data: { stopOrder: i },
          }),
        ),
        prisma.route.update({
          where: { id },
          data: {
            totalDistance: result.totalDistance,
            totalDuration: result.totalDuration,
            optimizedAt: new Date(),
          },
        }),
      ]);

      return prisma.route.findUnique({
        where: { id },
        include: {
          deliveries: {
            include: { address: true },
            orderBy: { stopOrder: "asc" },
          },
        },
      });
    },
  );
};
