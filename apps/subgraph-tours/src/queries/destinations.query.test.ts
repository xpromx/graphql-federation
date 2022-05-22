import request from "supertest";
import { gql } from "apollo-server";
import { query } from "../utils/testing/query";
import { TESTING_SERVER_HOST } from "../constants";
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
    await context.prisma.destination.deleteMany();
    await context.prisma.destination.createMany({
      data: destinations,
    });
  });

  it("should return destinations", async () => {
    const response = await request(TESTING_SERVER_HOST)
      .post("/")
      .send(queryData);
    expect(response.error).toBeFalsy();
    expect(response.body.data).toMatchObject({
      destinations: destinations.map((v) => ({
        id: v.id,
        name: v.name,
      })),
    });
  });
});
