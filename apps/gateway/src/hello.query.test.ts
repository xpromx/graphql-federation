import request from "supertest";
import { gql } from "apollo-server";
import { query } from "./utils/testing/query";

const queryData = query(
  gql`
    query sayHello {
      hello
    }
  `
);

const url = "http://localhost:4001";

describe("e2e demo", () => {
  it("says hello", async () => {
    const response = await request(url).post("/").send(queryData);
    expect(response.error).toBeFalsy();
    expect(response.body.data?.hello).toBe("Hello World!");
  });
});
