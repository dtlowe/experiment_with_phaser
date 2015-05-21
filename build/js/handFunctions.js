// handFunctions.js, where we define all the functions that can be taken on hand objects

function hand(array) {

		this.array = array;

		this.calculateAP = function calculateAP() {

				var len = array.length;
				var totalAP = 0;

				for (i = 0; i < len; i++) { totalAP += array[i].actionPoints;}

				return totalAP;
		}

		this.discardHand = function discardHand() {

				discardThese = array.slice(0);
				console.log(array, discardThese);

				// Remove cards from player's hand (should only ever have 5 cards)
				array.splice(0, 5);

				return discardThese;

		}

}
