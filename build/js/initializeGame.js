// initializeGame.js, where we initialize the game area and all the players' decks

// Shuffle all three decks before pulling out 10 from each
monsterDeck = new deck(allMonsterCards.slice(0));
monsterDeck.FYShuffle();
supportDeck = new deck(allSupportCards.slice(0));
supportDeck.FYShuffle();
locationDeck = new deck(allLocationCards.slice(0));
locationDeck.FYShuffle();


// Deck that contains ten cards from each. Shuffle, then split into three decks of 10
var tempDeck = [];
tempMainDeck = new deck(tempDeck.concat(monsterDeck.drawCards(10), supportDeck.drawCards(10), locationDeck.drawCards(10)));
tempMainDeck.FYShuffle();

// Main decks for players to turn over
stack1Main = new deck(tempMainDeck.drawCards(10));
stack2Main = new deck(tempMainDeck.drawCards(10));
stack3Main = new deck(tempMainDeck.drawCards(10));


// Must combine Supply, Possession, and Action cards
var allSupPosActCards = [];
supPosActDeck = new deck(allSupPosActCards.concat(allSupplyCards, allPossessions, allActions));

// Duplicate Supply cards if needed, then shuffle.
supPosActDeck.duplicateCards();
supPosActDeck.FYShuffle();


supplyArea = new deck(supPosActDeck.drawCards(12));


// Give each player's deck 6 SEEK/4 HIDE cards...
player1Deck = new deck(allHideSeekCards.slice(0));
player1Deck.duplicateCards();
player2Deck = new deck(allHideSeekCards.slice(0));
player2Deck.duplicateCards();
player3Deck = new deck(allHideSeekCards.slice(0));
player3Deck.duplicateCards();
player4Deck = new deck(allHideSeekCards.slice(0));
player4Deck.duplicateCards();

// ...shuffle each hand individually
player1Deck.FYShuffle(); player2Deck.FYShuffle(); player3Deck.FYShuffle(); player4Deck.FYShuffle();


// Initialize players' hands
player1Hand = new hand([]);
player2Hand = new hand([]);
player3Hand = new hand([]);
player4Hand = new hand([]);

// Initialize players' discard piles
player1Discard = new deck([]);
player2Discard = new deck([]);
player3Discard = new deck([]);
player4Discard = new deck([]);


// Initialize an instance of each player
player1 = new player(player1Hand, player1Deck, player1Discard);
player2 = new player(player2Hand, player2Deck, player2Discard);
player3 = new player(player3Hand, player3Deck, player3Discard);
player4 = new player(player4Hand, player4Deck, player4Discard);
