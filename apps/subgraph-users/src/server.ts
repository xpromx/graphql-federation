import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import { join } from "path";
import { resolvers } from "./resolvers";
import { context } from "./context";

const typeDefs = readFileSync(join(__dirname, "./schema.graphql"), "utf8");

interface ServerOptions {
  port: number;
}

export const createApolloServer = async (
  options: ServerOptions = { port: Number(process.env.PORT) }
) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
  });

  return server.listen(options);
};
