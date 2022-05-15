import { QueryResolvers } from "../types";
export const helloQuery: QueryResolvers["hello"] = () => {
  return "Hello World!";
};
