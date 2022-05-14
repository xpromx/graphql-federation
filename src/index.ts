import { ApolloServer, gql } from "apollo-server";
import { readFileSync } from "fs";
import { join } from "path";
import resolvers from "./resolvers";

const typeDefs = gql(readFileSync(join(__dirname, "./schema.graphql"), "utf8"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return {
      dataSources: {},
    };
  },
});

const port = 4002;
const subgraphName = "locations";

server.listen(port).then(({ url }) => {
  console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
});
