import { tours } from "../dataset";
import { Resolvers } from "../types";

export const locationType: Resolvers["Location"] = {
  tours: (root) => {
    return tours.filter((tour) => tour.locationId === root.id);
  },
};
