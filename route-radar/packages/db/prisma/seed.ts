import { PrismaClient } from "@prisma/client";
import { createHash } from "node:crypto";

const prisma = new PrismaClient();

// Simple sha256 for seed only. Real auth uses bcrypt (see apps/api).
const hash = (s: string) => createHash("sha256").update(s).digest("hex");

async function main() {
  const dispatcher = await prisma.user.upsert({
    where: { email: "dispatcher@routeradar.dev" },
    update: {},
    create: {
      email: "dispatcher@routeradar.dev",
      name: "Anna Dispatcher",
      passwordHash: hash("password123"),
      role: "DISPATCHER",
    },
  });

  const driver = await prisma.user.upsert({
    where: { email: "driver@routeradar.dev" },
    update: {},
    create: {
      email: "driver@routeradar.dev",
      name: "Marek Kierowca",
      passwordHash: hash("password123"),
      role: "DRIVER",
    },
  });

  // Sample addresses around Warsaw
  const samples = [
    {
      label: "Klient A",
      street: "Marszałkowska 1",
      city: "Warszawa",
      postalCode: "00-001",
      lat: 52.2297,
      lng: 21.0122,
    },
    {
      label: "Klient B",
      street: "Puławska 100",
      city: "Warszawa",
      postalCode: "02-595",
      lat: 52.1846,
      lng: 21.0226,
    },
    {
      label: "Klient C",
      street: "Wolska 50",
      city: "Warszawa",
      postalCode: "01-134",
      lat: 52.236,
      lng: 20.962,
    },
    {
      label: "Klient D",
      street: "Grochowska 200",
      city: "Warszawa",
      postalCode: "04-077",
      lat: 52.248,
      lng: 21.095,
    },
  ];

  for (const [i, s] of samples.entries()) {
    const addr = await prisma.address.create({ data: s });
    await prisma.delivery.create({
      data: {
        reference: `RR-${1000 + i}`,
        recipient: s.label,
        phone: "+48500000000",
        addressId: addr.id,
        createdById: dispatcher.id,
        status: "PENDING",
      },
    });
  }

  console.log("Seeded:", {
    dispatcher: dispatcher.email,
    driver: driver.email,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
