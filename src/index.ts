import { config } from "dotenv";
import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import { join } from "path";
import resolvers from "./resolvers";

config();

const typeDefs = readFileSync(join(__dirname, "./schema.graphql"), "utf8");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return {
      dataSources: {},
    };
  },
});

server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀 Subgraph 「${process.env.GRAPH_NAME}」 running at ${url}`);
});
