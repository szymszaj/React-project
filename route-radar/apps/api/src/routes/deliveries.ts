import type { FastifyPluginAsync } from "fastify";
import { prisma } from "@route-radar/db";
import { DeliveryCreateInput, DeliveryUpdateInput } from "@route-radar/types";

export const deliveriesRoutes: FastifyPluginAsync = async (app) => {
  // List (dispatcher sees all; driver sees their assigned)
  app.get("/", { preHandler: app.requireAuth }, async (req) => {
    const where =
      req.user.role === "DRIVER"
        ? { route: { driverId: req.user.sub } }
        : {};

    return prisma.delivery.findMany({
      where,
      include: { address: true, route: true },
      orderBy: [{ priority: "desc" }, { createdAt: "desc" }],
    });
  });

  // Create (dispatcher only)
  app.post(
    "/",
    { preHandler: app.requireRole("DISPATCHER") },
    async (req, reply) => {
      const parsed = DeliveryCreateInput.safeParse(req.body);
      if (!parsed.success) {
        return reply.code(400).send({ error: "invalid_body", issues: parsed.error.issues });
      }
      const { address, ...rest } = parsed.data;

      const delivery = await prisma.delivery.create({
        data: {
          ...rest,
          createdById: req.user.sub,
          address: { create: address },
        },
        include: { address: true },
      });
      return reply.code(201).send(delivery);
    }
  );

  // Update status (driver or dispatcher)
  app.patch("/:id", { preHandler: app.requireAuth }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const parsed = DeliveryUpdateInput.safeParse(req.body);
    if (!parsed.success) {
      return reply.code(400).send({ error: "invalid_body", issues: parsed.error.issues });
    }

    const existing = await prisma.delivery.findUnique({
      where: { id },
      include: { route: true },
    });
    if (!existing) return reply.code(404).send({ error: "not_found" });

    if (req.user.role === "DRIVER" && existing.route?.driverId !== req.user.sub) {
      return reply.code(403).send({ error: "forbidden" });
    }

    const data = {
      ...parsed.data,
      ...(parsed.data.status === "DELIVERED" ? { deliveredAt: new Date() } : {}),
    };

    return prisma.delivery.update({
      where: { id },
      data,
      include: { address: true },
    });
  });

  // Delete (dispatcher only)
  app.delete(
    "/:id",
    { preHandler: app.requireRole("DISPATCHER") },
    async (req, reply) => {
      const { id } = req.params as { id: string };
      await prisma.delivery.delete({ where: { id } }).catch(() => null);
      return reply.code(204).send();
    }
  );
};
