import { createApolloServer } from "../server";
import request from "supertest";
import { gql, ServerInfo } from "apollo-server";
import { query } from "../utils/testing/query";

const queryData = query(
  gql`
    query sayHello {
      hello
    }
  `
);

describe("e2e demo", () => {
  let server: ServerInfo["server"], url: ServerInfo["url"];

  // before the tests we will spin up a new Apollo Server
  beforeAll(async () => {
    ({ server, url } = await createApolloServer({ port: 0 }));
  });

  // after the tests we will stop our server
  afterAll(async () => {
    await server?.close();
  });

  it("says hello", async () => {
    const response = await request(url).post("/").send(queryData);
    expect(response.error).toBeFalsy();
    expect(response.body.data?.hello).toBe("Hello World!");
  });
});
