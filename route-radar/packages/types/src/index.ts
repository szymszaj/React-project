import { z } from "zod";

export const RoleSchema = z.enum(["DISPATCHER", "DRIVER", "CLIENT"]);
export type RoleT = z.infer<typeof RoleSchema>;

export const DeliveryStatusSchema = z.enum([
  "PENDING",
  "ASSIGNED",
  "IN_PROGRESS",
  "DELIVERED",
  "FAILED",
]);
export type DeliveryStatusT = z.infer<typeof DeliveryStatusSchema>;

export const LoginInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
export type LoginInputT = z.infer<typeof LoginInput>;

export const AddressInput = z.object({
  label: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  postalCode: z.string().min(1),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
});
export type AddressInputT = z.infer<typeof AddressInput>;

export const DeliveryCreateInput = z.object({
  reference: z.string().min(1),
  recipient: z.string().min(1),
  phone: z.string().optional(),
  notes: z.string().optional(),
  priority: z.number().int().min(0).max(10).default(0),
  address: AddressInput,
});
export type DeliveryCreateInputT = z.infer<typeof DeliveryCreateInput>;

export const DeliveryUpdateInput = z.object({
  status: DeliveryStatusSchema.optional(),
  notes: z.string().optional(),
  proofNote: z.string().optional(),
});
export type DeliveryUpdateInputT = z.infer<typeof DeliveryUpdateInput>;

export const GeocodeQuery = z.object({
  q: z.string().min(3),
});

export const RouteCreateInput = z.object({
  name: z.string().min(1),
  date: z.string().datetime().or(z.date()),
  driverId: z.string().optional(),
  startLat: z.number().min(-90).max(90).optional(),
  startLng: z.number().min(-180).max(180).optional(),
});
export type RouteCreateInputT = z.infer<typeof RouteCreateInput>;

export const RouteAssignInput = z.object({
  deliveryIds: z.array(z.string()).min(1),
});
export type RouteAssignInputT = z.infer<typeof RouteAssignInput>;

export const RouteOptimizeOptions = z.object({
  // "osrm" uses real road distances; "haversine" is offline fallback.
  metric: z.enum(["osrm", "haversine"]).default("osrm"),
});
export type RouteOptimizeOptionsT = z.infer<typeof RouteOptimizeOptions>;
