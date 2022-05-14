import { locations } from "../dataset";
import { QueryResolvers } from "../types";
export const locationsQuery: QueryResolvers["locations"] = () => {
  return locations;
};
