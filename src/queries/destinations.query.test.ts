import { createApolloServer } from "../server";
import request from "supertest";
import { gql, ServerInfo } from "apollo-server";
import { query } from "../utils/testing/query";
import { context } from "../context";

const queryData = query(
  gql`
    query destinations {
      destinations {
        id
        name
      }
    }
  `
);

describe("e2e destinations", () => {
  let server: ServerInfo["server"], url: ServerInfo["url"];
  const destinations = [
    {
      id: 1,
      name: "des-1",
    },
    {
      id: 2,
      name: "des-2",
    },
  ];

  // before the tests we will spin up a new Apollo Server
  beforeAll(async () => {
    ({ server, url } = await createApolloServer({ port: 0 }));
    await context.prisma.destination.deleteMany();
    await context.prisma.destination.createMany({
      data: destinations,
    });
  });

  // after the tests we will stop our server
  afterAll(async () => {
    await server?.close();
  });

  it("should return destinations", async () => {
    const response = await request(url).post("/").send(queryData);
    expect(response.error).toBeFalsy();
    expect(response.body.data).toMatchObject({
      destinations: destinations.map((v) => ({
        id: v.id,
        name: v.name,
      })),
    });
  });
});
