import { tours } from "../dataset";
import { QueryResolvers } from "../types";
export const toursQuery: QueryResolvers["tours"] = () => {
  return tours;
};
