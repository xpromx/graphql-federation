import { usersQuery } from "./queries/users.query";
import { Resolvers } from "./types";
import { userType } from "./types/user.type";

export const resolvers: Resolvers = {
  Query: {
    users: usersQuery,
  },
  User: userType,
};
