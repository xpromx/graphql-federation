import { helloQuery } from "./queries/hello.query";
import { destinationsQuery } from "./queries/destinations.query";
import { toursQuery } from "./queries/tours.query";
import { Resolvers } from "./types";
import { destinationType } from "./types/destination.type";

export const resolvers: Resolvers = {
  Query: {
    hello: helloQuery,
    destinations: destinationsQuery,
    tours: toursQuery,
  },
  Destination: destinationType,
};
