import { PrismaClient } from "@prisma/client";

export interface Context {
  prisma: PrismaClient;
}

const prisma = new PrismaClient({
  log: ["query"],
});

export const context: Context = {
  prisma: prisma,
};
