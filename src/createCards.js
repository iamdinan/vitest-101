//function to create a deck of cards
export function createCards({ suits, values }) {
  let cards = [];

  for (let suit of suits) {
    //loop through each suit
    for (let value of values) {
      //loop through each value
      cards.push(`${value} of ${suit}`); //create a card string and add it to the cards array
    }
  }

  return cards;
}
