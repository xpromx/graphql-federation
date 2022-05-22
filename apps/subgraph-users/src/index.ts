import "dotenv/config";
import { createApolloServer } from "./server";

createApolloServer().then(({ url }) => {
  console.log(`------------------------------------------------------`);
  console.log(`🚀 Subgraph 「${process.env.GRAPH_NAME}」 running at ${url}`);
  console.log(`------------------------------------------------------`);
});
