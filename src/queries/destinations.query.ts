import { Context } from "../context";
import { QueryResolvers } from "../types";

export const destinationsQuery: QueryResolvers["destinations"] = async (
  _,
  _args,
  { prisma }: Context
) => {
  return prisma.destination.findMany();
};
