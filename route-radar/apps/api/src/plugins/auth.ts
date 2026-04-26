import fp from "fastify-plugin";
import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    requireAuth: (req: FastifyRequest, reply: FastifyReply) => Promise<void>;
    requireRole: (
      ...roles: Array<"DISPATCHER" | "DRIVER" | "CLIENT">
    ) => (req: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
  interface FastifyJWT {
    payload: { sub: string; role: "DISPATCHER" | "DRIVER" | "CLIENT" };
    user: { sub: string; role: "DISPATCHER" | "DRIVER" | "CLIENT" };
  }
}

const plugin: FastifyPluginAsync = async (app) => {
  app.decorate(
    "requireAuth",
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        await req.jwtVerify();
      } catch {
        reply.code(401).send({ error: "unauthorized" });
      }
    }
  );

  app.decorate("requireRole", (...roles) => {
    return async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        await req.jwtVerify();
      } catch {
        return reply.code(401).send({ error: "unauthorized" });
      }
      if (!roles.includes(req.user.role)) {
        return reply.code(403).send({ error: "forbidden" });
      }
    };
  });
};

export const authPlugin = fp(plugin, { name: "auth-plugin" });
