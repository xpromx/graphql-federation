import request from "supertest";
import { gql } from "apollo-server";
import { query } from "../utils/testing/query";
import { TESTING_SERVER_HOST } from "../constants";

const queryData = query(
  gql`
    query sayHello {
      hello
    }
  `
);

describe("e2e demo", () => {
  it("says hello", async () => {
    const response = await request(TESTING_SERVER_HOST)
      .post("/")
      .send(queryData);
    expect(response.error).toBeFalsy();
    expect(response.body.data?.hello).toBe("Hello World!");
  });
});
