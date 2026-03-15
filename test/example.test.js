import { describe, it, expect } from "vitest";
import { longestString, isPrime } from "../src/example";

// can import "test" from vitest and use it instead of "it" — both are identical
//basic test case examples
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

//Matchers examples
describe("examples.isPrime", () => {
  it("returns true/truthy for small prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBeTruthy();
  });

  it("returns false/falsy for non-primes", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(4)).toBeFalsy();
  });

  it("matches results in an array using toEqual", () => {
    const numbers = [2, 3, 4, 5];
    const results = numbers.map(isPrime);
    //"toBe" works fine with primitive values, but for arrays and objects (reference types) we need to use "toEqual" func.
    expect(results).toEqual([true, true, false, true]);
  });

  it("detects primes within a filtered list", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const primes = nums.filter(isPrime);

    expect(primes).toContain(7);
    expect(primes).not.toContain(4);
  });

  it("throws an error when passed a non-number", () => {
    const badCall = () => isPrime("pikachu");

    expect(badCall).toThrow();
    expect(badCall).toThrow("Input must be a number");
  });

  it("has correct type for result", () => {
    //both checks are same, just different matchers used to check the type of result
    expect(isPrime(7)).toBeTypeOf("boolean"); // checks if the result is of type boolean
    expect(typeof isPrime(8)).toBe("boolean"); // another way to check if the result is of type boolean
  });
});

// test suite for isPrime
describe("examples.isPrime", () => {
  it("treats 0 and 1 as non-prime, and 2 as prime", () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
  });

  it("returns false forall even numbers > 2", () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(50)).toBe(false);
  });

  it("identifies common primes", () => {
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
  });

  it("returns false for perfect squares reliably", () => {
    expect(isPrime(49)).toBe(false);
    expect(isPrime(121)).toBe(false);
  });

  it("returns false for non integers", () => {
    expect(isPrime(2.5)).toBe(false);
    expect(isPrime(4.25)).toBe(false);
  });

  it("throws an error for non number integers", () => {
    const badCall = () => isPrime("wonder woman");
    expect(badCall).toThrow();
  });
});
