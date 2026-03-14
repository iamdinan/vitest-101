import { describe, it, expect } from "vitest";
import { longestString } from "../src/example";

// can import "test" from vitest and use it instead of "it" — both are identical

describe("example.longest string", () => {
  it("should return the longest string", () => {
    const longest = longestString("superman", "batman");
    //longestString function assigned to longest variable and called variable in expect function
    expect(longest).toBe("superman");
  });

  it("should return first string when both strings are same length", () => {
    //longest string function directly called inside expect function. both approaches are same
    expect(longestString("antman", "batman")).toBe("antman");
  });

  it("should handle empty strings", () => {
    expect(longestString(" ", "batman")).toBe("batman");
    expect(longestString("superman", " ")).toBe("superman");
    expect(longestString(" ", " ")).toBe(" ");
  });

  it("ignore whitespace", () => {
    expect(longestString("superman", "  batman  ")).toBe("superman");
  });
});
