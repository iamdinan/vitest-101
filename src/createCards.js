//function to create a deck of cards
export function createCards({ suits, values }) {
  if (!Array.isArray(suits) || !Array.isArray(values)) {
    //check if suits and values are arrays
    throw new TypeError("suits and values must be arrays");
  }

  if (suits.length !== 4 || values.length !== 13) {
    //check if suits and values are standard lengths
    throw new RangeError(
      "suits and values must be standard lengths (4 and 13 respectively)",
    );
  }

  if (new Set(suits).size !== suits.length) {
    //check for duplicate suits
    throw new Error("suits array contains duplicates");
  }

  if (new Set(values).size !== values.length) {
    //check for duplicate values
    throw new Error("values array contains duplicates");
  }

  let cards = [];

  for (let suit of suits) {
    //loop through each suit
    for (let value of values) {
      //loop through each value
      cards.push({ value, suit }); //create a card object and add it to the cards array
    }
  }

  return cards;
}
