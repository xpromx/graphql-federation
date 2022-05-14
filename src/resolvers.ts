import { locations, tours } from "./dataset";
import { Resolvers } from "./types";

const resolvers: Resolvers = {
  Query: {
    hello: () => "Hello!",
    locations: () => locations,
    tours: () => tours,
  },
  Location: {
    tours: (root) => {
      return tours.filter((tour) => tour.locationId === root.id);
    },
  },
};

export default resolvers;
