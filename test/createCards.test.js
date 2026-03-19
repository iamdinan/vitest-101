import { describe, it, expect } from "vitest";
import { createCards } from "../src/createCards";

describe("createCards", () => {
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];

  //test if createCards returns an array
  it("returns an array", () => {
    const cards = createCards({ suits, values });
    expect(Array.isArray(cards)).toBe(true);
  });

  //test if createCards creates a deck of 52 cards
  it("creates a deck of 52 cards", () => {
    const cards = createCards({ suits, values });
    expect(cards).toHaveLength(52);
  });

  //test if createCards throws an error if suits or values are not standard lengths
  it("throws an error if suits or values are not standard lengths", () => {
    expect(() => createCards({ suits: ["Hearts"], values })).toThrow(/4/);
    expect(() => createCards({ suits, values: ["1", "2"] })).toThrow(/13/);
  });

  //test if createCards throws an error if suits or values are not arrays
  it("throws an error if suits or values are not arrays", () => {
    expect(() => createCards({ suits: "not an array", values })).toThrow();
    expect(() => createCards({ suits, values: "not an array" })).toThrow();
  });

  //test if createCards creates card objects with { value, suit } properties
  it("creates card objects with { value, suit } properties", () => {
    const cards = createCards({ suits, values });
    const sampleCard = cards[0];

    expect(sampleCard).toBeTypeOf("object");
    expect(sampleCard).toHaveProperty("value");
    expect(sampleCard).toHaveProperty("suit");
  });

  //test if createCards creates combinations of suits and values
  it("creates combinations of suits and values", () => {
    const cards = createCards({ suits, values });
    const tenOfHearts = cards.find(
      (c) => c.value === "10" && c.suit === "Hearts", //find the 10 of Hearts card
    );
    expect(tenOfHearts).toBeDefined();

    const aceOfSpades = cards.find(
      (c) => c.value === "Ace" && c.suit === "Spades", //find the Ace of Spades card
    );
    expect(aceOfSpades).toBeDefined();
  });

  //test if createCards throws an error for duplicate suits or values
  it("throws an error for duplicate suits or values", () => {
    expect(() =>
      createCards({
        suits: ["Hearts", "Diamonds", "Clubs", "Clubs"],
        values,
      }),
    ).toThrow(/duplicates/);

    expect(() =>
      createCards({
        suits,
        values: [
          "Ace",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "Jack",
          "Queen",
          "Ace",
        ],
      }),
    ).toThrow(/duplicates/);
  });
});
