import { PrismaClient } from "@prisma/client";

export interface Context {
  prisma: PrismaClient;
}

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "test" ? [] : ["query"],
});

export const context: Context = {
  prisma: prisma,
};
