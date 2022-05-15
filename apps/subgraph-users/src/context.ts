import { PrismaClient, initDatabase } from "@app/database";

export interface Context {
  prisma: PrismaClient;
}

export const context: Context = {
  prisma: initDatabase(),
};
