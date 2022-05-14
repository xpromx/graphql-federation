import { PrismaClient } from "@prisma/client";
import { destinations, tours } from "./dataset";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  await prisma.destination.createMany({
    data: destinations,
  });
  console.log(`created ${destinations.length} destinations`);

  await prisma.tour.createMany({
    data: tours,
  });
  console.log(`created ${tours.length} tours`);
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
