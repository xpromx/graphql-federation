import { initDatabase, PrismaClient } from "@app/database";

export interface Context {
  prisma: PrismaClient;
}

export const context: Context = {
  prisma: initDatabase(),
};
