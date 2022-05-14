import { helloQuery } from "./queries/hello.query";
import { locationsQuery } from "./queries/locations.query";
import { toursQuery } from "./queries/tours.query";
import { Resolvers } from "./types";
import { locationType } from "./types/location.type";

const resolvers: Resolvers = {
  Query: {
    hello: helloQuery,
    locations: locationsQuery,
    tours: toursQuery,
  },
  Location: locationType,
};

export default resolvers;
