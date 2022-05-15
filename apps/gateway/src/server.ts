import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";

interface ServerOptions {
  port: number;
}

export const createApolloServer = async (
  options: ServerOptions = { port: Number(process.env.PORT) }
) => {
  const gateway = new ApolloGateway();
  const server = new ApolloServer({ gateway });

  return server.listen(options);
};
