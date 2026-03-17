import { describe, it, expect } from "vitest";
import { longestString, isPrime, shippingCost } from "../src/example";

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

// test suite for shippingCost
describe("examples.shippingCost", () => {
  //not much use in testing the error throwing, but we can check if the function throws an error when invalid input is provided
  it("calculates cost based on weight", () => {
    expect(shippingCost(0.5)).toBeTypeOf("number");
  });

  //checks the cost for different weight brackets
  it("charges correctly for different weight brackets", () => {
    expect(shippingCost(0.5)).toBe(3.99);
    expect(shippingCost(3)).toBe(5.99);
    expect(shippingCost(10)).toBe(8.99);
    expect(shippingCost(25)).toBe(14.99);
  });

  //boundary test cases for weight input
  it("handles boundary weight values", () => {
    expect(shippingCost(1)).toBe(3.99); // upper bound of first bracket
    expect(shippingCost(5)).toBe(5.99); // upper bound of second bracket
    expect(shippingCost(20)).toBe(8.99); // upper bound of third bracket
    expect(shippingCost(20.01)).toBe(14.99); // just above the upper bound of third bracket
  });

  //checks free shipping coupon code is applied correctly
  it("applies free shipping coupon", () => {
    expect(shippingCost(10, "FREESHIPPING")).toBe(0);
    expect(shippingCost(100, "FREESHIPPING")).toBe(0);
  });

  it("ignores invalid coupon codes", () => {
    expect(shippingCost(1, "freeshipping")).toBe(3.99);
    expect(shippingCost(5, "nothing")).toBe(5.99);
    expect(shippingCost(10)).toBe(8.99);
  });

  it("throws an error for invalid weight input", () => {
    // this is correct but too strict, checks the exact error msg to be exactly same as one defined in function
    expect(() => shippingCost(0)).toThrow("Weight must be greater than 0");
    // this is a more flexible regex that doesn't rely on text order, checks if error msg contain words weight and 0
    expect(() => shippingCost(0)).toThrow(/(?=.*weight)(?=.*0)/i);
    expect(() => shippingCost(-5)).toThrow(/(?=.*weight)(?=.*0)/i);
    expect(() => shippingCost("zod")).toThrow(/(?=.*weight)(?=.*number)/i);
  });

  it("throws an error for invalid coupon input", () => {
    expect(() => shippingCost(1, 123)).toThrow(/(?=.*coupon)/i);
    expect(() => shippingCost(1, {})).toThrow(/(?=.*coupon)/i);
    expect(() => shippingCost(1, null)).toThrow(/(?=.*coupon)(?=.*string)/i);
  });

  /*testing using it.each for multiple test cases with different inputs and expected outputs, 
    reduces code duplication and makes it easier to add more test cases in future*/
  it.each([
    { weight: 0.5, expected: 3.99 },
    { weight: 3, expected: 5.99 },
    { weight: 10, expected: 8.99 },
    { weight: 50, expected: 14.99 },
  ])("charges $expected for weight $weight", ({ weight, expected }) => {
    expect(shippingCost(weight)).toBe(expected);
  });

  it.each([
    { weight: 1, expected: 3.99 },
    { weight: 5, expected: 5.99 },
    { weight: 20, expected: 8.99 },
    { weight: 20.1, expected: 14.99 },
  ])(
    "handles boundary weight values: $weight => $expected",
    ({ weight, expected }) => {
      expect(shippingCost(weight)).toBe(expected); // upper bound of first bracket
    },
  );
});
