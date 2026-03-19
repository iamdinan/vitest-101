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

  it("returns an array", () => {
    const cards = createCards({ suits, values });
    expect(Array.isArray(cards)).toBe(true);
  });

  it("creates a deck of 52 cards", () => {
    const cards = createCards({ suits, values });
    expect(cards).toHaveLength(52);
  });
});
