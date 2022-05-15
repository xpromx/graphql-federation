import { QueryResolvers } from "../types";

export const usersQuery: QueryResolvers["users"] = (_, _args) => {
  return [
    {
      id: 1,
      firstName: "firstName-1",
      lastName: "lastName-1",
      email: "1@gmail.com",
    },
    {
      id: 2,
      firstName: "firstName-2",
      lastName: "lastName-2",
      email: "2@gmail.com",
    },
  ];
};
