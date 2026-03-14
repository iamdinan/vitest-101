import { describe, it, expect } from "vitest";
import { longestString } from "../src/example";

describe("example.longest string", () => {
  it("should return the longest string", () => {
    const longest = longestString("superman", "spiderman");

    expect(longest).toBe("spiderman");
  });
});
