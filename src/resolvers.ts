import { locations, tours } from "./dataset";

export default {
  Query: {
    hello: () => "Hello!",
    locations: () => locations,
    tours: () => tours,
  },
  Location: {
    tours: (root: { id: string }) => {
      return tours.filter((tour) => tour.locationId === root.id);
    },
  },
};
