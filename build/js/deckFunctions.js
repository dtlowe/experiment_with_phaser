// deckFunctions.js, where we define all the functions that can be taken on a deck object

// Actions/Special Abilities use "action" property
function card(cardName, numInDeck, cost, actionPoints, action, spriteKey) {
		this.cardName = cardName;
		this.numInDeck = numInDeck || 1;
		this.cost = cost || 0;
		this.actionPoints = actionPoints || 0;
		this.action = action || "";
		this.spriteKey = spriteKey;
}


function monsterCard(cardName, action, hp, exp, weakness, spriteKey) {
		card.call(this, cardName, 1, 0, 0, action, spriteKey);
		this.hp = hp;
		this.exp = exp;
		this.weakness = weakness;
}


function supportCard(cardName, cost, action, spriteKey) {
		card.call(this, cardName, 1, cost, 0, action, spriteKey);
}

function locationCard(cardName, cost, action, spriteKey) {
		card.call(this, cardName, 1, cost, 0, action, spriteKey);
}

function supplyCard(cardName, numInDeck, cost, actionPoints, action, spriteKey) {
		card.call(this, cardName, numInDeck, cost, actionPoints, action, spriteKey);
}

function possessionCard(cardName, action, spriteKey) {
		card.call(this, cardName, 1, 0, 0, action, spriteKey);
}

function actionCard(cardName, cost, action, spriteKey) {
		card.call(this, cardName, 1, cost, 0, action, spriteKey);
}

function hideSeekCard(cardName, numInDeck, actionPoints, spriteKey) {
		card.call(this, cardName, numInDeck, 0, actionPoints, "", spriteKey);
}


function deck(array) {

		this.array = array;

	/* 	Why doesn't this syntax work?

		FYShuffle: function(array) {
			var m = array.length, t, i;

				// While there remain elements to shuffle...
				while (m) {

						// Pick a remaining element...
						i = Math.floor(Math.random() * m--);

						// And swap it with the current element
						t = array[m];
						array[m] = array[i];
						array[i] = t;
				}

				return array;
		}
	*/
		this.FYShuffle = function FYShuffle() {
				var m = array.length, t, i;

				// While there remain elements to shuffle...
				while (m) {

						// Pick a remaining element...
						i = Math.floor(Math.random() * m--);

						// And swap it with the current element
						t = array[m];
						array[m] = array[i];
						array[i] = t;
				}

				return array;
		}


		this.duplicateCards = function duplicateCards() {

				var len = array.length;

				// Start at the beginning of the array, loop to the end
				for (i = 0; i < len; i++) {
					// If there's supposed be more than 1 of a card...
					if (array[i].numInDeck > 1) {
						// Make a copy of the card and add it to the end of the array
						for (j = 1; j < array[i].numInDeck; j++) {
							array.push(array[i]);
						}
					}
				}

				return array;
		}

		this.drawCards = function drawCards(numOfCards) {
				// Number of cards to draw. If no arg, draw 1
				this.numOfCards = numOfCards || 1;

				// Check deck, if cards left in deck < numOfCards, add those cards to discard pile and shuffle
				if (array.length < numOfCards) {
						return false;

				} else {
					// Off the top of the deck, draw (numOfCards)
					drawnCards = array.slice(0, numOfCards);

					// Remove those cards from the deck
					array.splice(0, numOfCards);
					return drawnCards;
				}

		}

		/*
		this.discardCards = function discardCards(cardsLeftInDeck) {
				this.cardsLeftInDeck = cardsLeftInDeck;



		}
		*/

		// Not yet tested
		this.calculateVP = function calculateVP() {

				var len = array.length;

				var totalAP = 0;
				var totalEXP = 0;
				var totalVP = 0;

				for (i = 0; i < len; i++) { totalAP += array[i].actionPoints; totalEXP += array[i].exp; }

				totalVP = (totalAP / 2) + totalEXP;

				return totalVP;
		}


}
