// testFunctions.js, which was probably always obsolete (originally used to test deck, hand,
// and player functions)

/* Simulate a full round  */

player1Hand.array = player1Deck.drawCards(5);
player2Hand.array = player2Deck.drawCards(5);
player3Hand.array = player3Deck.drawCards(5);
player4Hand.array = player4Deck.drawCards(5);
// console.log(player1Hand, player1Deck, player1Discard);

/*
var fourRounds = 4;
for (i = 0; i < fourRounds; i++) {

	player1Discard.array = player1Hand.discardHand();
	player1Hand.array = player1Deck.drawCards(5);
	// console.log(player1Hand, player1Deck, player1Discard);

	switch (player1Hand.array) {
			case false:
				remCardsInDeck = player1Deck.array.length;
				numCardsInDiscard = player1Discard.array.length;
				// Take the cards in deck and put them in discard pile
				for (j = 0; j < remCardsInDeck; j++) { player1Discard.push(player1Deck.array[j]); }

				// Remove all the cards from the deck
				player1Deck.array.splice(0, remCardsInDeck);

				player1Discard.FYShuffle();
				player1Deck.array = player1Discard.array.slice(0);

				// console.log(player1Hand, player1Deck, player1Discard);
				break;
			default:
				break;

	}


	player2Discard.array = player2Hand.discardHand();
	player2Hand.array = player2Deck.drawCards(5);
	player3Discard.array = player3Hand.discardHand();
	player3Hand.array = player3Deck.drawCards(5);
	player4Discard.array = player4Hand.discardHand();
	player4Hand.array = player4Deck.drawCards(5);


}
*/
