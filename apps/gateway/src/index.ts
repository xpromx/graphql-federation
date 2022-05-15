import "dotenv/config";
import { createApolloServer } from "./server";

createApolloServer().then(({ url }) => {
  console.log(`🚀 Gateway running at ${url}`);
});
