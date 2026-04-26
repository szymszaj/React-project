import type { FastifyPluginAsync } from "fastify";
import bcrypt from "bcryptjs";
import { createHash } from "node:crypto";
import { prisma } from "@route-radar/db";
import { LoginInput } from "@route-radar/types";

// Seed uses sha256 (no native deps). Real registrations use bcrypt.
// We try bcrypt first, then fall back to sha256 for seeded users.
const verifyPassword = async (plain: string, stored: string) => {
  if (stored.startsWith("$2")) return bcrypt.compare(plain, stored);
  const sha = createHash("sha256").update(plain).digest("hex");
  return sha === stored;
};

export const authRoutes: FastifyPluginAsync = async (app) => {
  app.post("/login", async (req, reply) => {
    const parsed = LoginInput.safeParse(req.body);
    if (!parsed.success) {
      return reply.code(400).send({ error: "invalid_body", issues: parsed.error.issues });
    }
    const { email, password } = parsed.data;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return reply.code(401).send({ error: "invalid_credentials" });

    const ok = await verifyPassword(password, user.passwordHash);
    if (!ok) return reply.code(401).send({ error: "invalid_credentials" });

    const token = app.jwt.sign({ sub: user.id, role: user.role }, { expiresIn: "7d" });
    return { token, user: { id: user.id, email: user.email, name: user.name, role: user.role } };
  });

  app.get("/me", { preHandler: app.requireAuth }, async (req) => {
    const user = await prisma.user.findUnique({
      where: { id: req.user.sub },
      select: { id: true, email: true, name: true, role: true },
    });
    return { user };
  });
};
