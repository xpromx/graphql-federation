import { Context } from "../context";
import { QueryResolvers } from "../types";

export const toursQuery: QueryResolvers["tours"] = (
  _,
  _args,
  { prisma }: Context
) => {
  return prisma.tour.findMany();
};
