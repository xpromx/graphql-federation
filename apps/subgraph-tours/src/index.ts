import "dotenv/config";
import { createApolloServer } from "./server";

createApolloServer().then(({ url }) => {
  console.log(`🚀 Subgraph 「${process.env.GRAPH_NAME}」 running at ${url}`);
});
