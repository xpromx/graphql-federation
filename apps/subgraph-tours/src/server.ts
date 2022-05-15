import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { readFileSync } from "fs";
import { join } from "path";
import { resolvers } from "./resolvers";
import { context } from "./context";

const typeDefs = gql(readFileSync(join(__dirname, "./schema.graphql"), "utf8"));

interface ServerOptions {
  port: number;
}

export const createApolloServer = async (
  options: ServerOptions = { port: Number(process.env.PORT) }
) => {
  const server = new ApolloServer({
    schema: buildSubgraphSchema({
      typeDefs,
      resolvers,
    }),
    context,
  });

  return server.listen(options);
};
