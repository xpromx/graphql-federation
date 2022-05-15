import { Context } from "../context";
import { Resolvers } from "../types";

export const destinationType: Resolvers["Destination"] = {
  tours: (destination, _ars, { prisma }: Context) => {
    return prisma.tour.findMany({
      where: { destinationId: destination.id },
    });
  },
};
