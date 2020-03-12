class Deck {
  // initial deck state
  #deck = ["A♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","0♠","J♠","Q♠","K♠",
          "A♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","0♥","J♥","Q♥","K♥",
          "A♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","0♣","J♣","Q♣","K♣",
          "A♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","0♦","J♦","Q♦","K♦"]

  deal() {
    // Return a card from the top of the deck
    return this.#deck.pop();
  }

  shuffle() {
    for(let i = 0; i < this.#deck.length; i++) {
      // 1. Select a random card from the deck
      const offset = Math.floor(Math.random() * this.#deck.length)
      const temp = this.#deck[offset];
      // 2. remove the card from the deck
      this.#deck.splice(offset,1);
      // 3. place the card on the top of the deck
      this.#deck.push(temp);
      // 4. every 3rd shuffle, reverse the deck
      if(i%3 === 0) this.#deck.reverse()
    }
  }
}

export default Deck;
