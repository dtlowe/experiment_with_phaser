// cardDecks.js, where we enumerate all possible cards that exist in the game and put them
// into deck arrays

var allMonsterCards = [];
var allSupplyCards = [];
var allPossessions = [];
var allActions = [];
var allSupportCards = [];
var allLocationCards = [];
var allHideSeekCards = [];


// List all monster cards
allMonsterCards.push(new monsterCard("The Psycho", "Discard any overturned weapons", 12, 6, "Chainsaw"))
allMonsterCards.push(new monsterCard("Vampire", "Action cards have no effect", 12, 6, "Chainsaw"))
allMonsterCards.push(new monsterCard("Werewolf", "Experience from other monsters is cut in half", 12, 6, "Crucifix"))
allMonsterCards.push(new monsterCard("Witch", "All +1 Action Point cards have no effect", 12, 6, "Crossbow"))
allMonsterCards.push(new monsterCard("Alien", "Discard any overturned support cards", 12, 6, "Shotgun"))
allMonsterCards.push(new monsterCard("Zombies", "Add +1 HP for all support cards in your hand", 10, 5, "Assault Rifle"))
allMonsterCards.push(new monsterCard("Demon", "Double the effects of possessions", 10, 5, "Crucifix"))
allMonsterCards.push(new monsterCard("Undead Stalker", "Discard any vehicles in your hand", 8, 4, "Chainsaw"))
allMonsterCards.push(new monsterCard("Cannibal Tribe", "Blades have no effect", 8, 4, "Assault Rifle"))
allMonsterCards.push(new monsterCard("Dinosaur", "Discard top card of main deck", 8, 4, "Hunting Rifle"))
// Cave Monster supposed to have weakness "2 Flashlights"?
allMonsterCards.push(new monsterCard("Cave Monster", "Guns are ineffective on this monster", 8, 4, "2 Flashlights"))
allMonsterCards.push(new monsterCard("Bloody Mary", "Double the effects of Beer", 8, 4, "Crucifix"))
allMonsterCards.push(new monsterCard("Ghost", "Phones, Cameras, and Flashlights have no effect", 8, 4, "Crucifix"))
allMonsterCards.push(new monsterCard("Puzzle Maker", "No special abilities may be used", 8, 4, "Chainsaw"))
allMonsterCards.push(new monsterCard("Poltergeist", "Location cards have no effect", 8, 4, "Crucifix"))
allMonsterCards.push(new monsterCard("Mountain Freaks", "No vehicles may be used", 8, 4, "Hunting Rifle"))
allMonsterCards.push(new monsterCard("The Infected", "Discard any overturned support cards", 8, 4, "Axe"))
allMonsterCards.push(new monsterCard("Killer Scarecrow", "Discard any overturned blade cards", 6, 3, "Molotov Cocktail"))
allMonsterCards.push(new monsterCard("Bogeyman", "Double the effects of Beer", 6, 3, "Kitchen Knife"))
allMonsterCards.push(new monsterCard("Space Blob", "Discard all overturned cards", 6, 3, "Molotov Cocktail"))
allMonsterCards.push(new monsterCard("Swamp Monster", "Blades have no effect", 6, 3, "Molotov Cocktail"))
allMonsterCards.push(new monsterCard("Bigfoot", "No support cards may be used", 6, 3, "Crossbow"))
allMonsterCards.push(new monsterCard("Evil Tree", "No special abilities may be used", 6, 3, "Axe"))
allMonsterCards.push(new monsterCard("Giant Spider", "Players only draw 4 cards each turn", 6, 3, "Sledgehammer"))
allMonsterCards.push(new monsterCard("Evil Car", "No vehicles may be used", 6, 3, "Crowbar"))
allMonsterCards.push(new monsterCard("Mummy", "Guns have no effect", 4, 2, "Molotov Cocktail"))
allMonsterCards.push(new monsterCard("Voodoo Priest", "Players only draw 4 cards each turn", 4, 2, "Cricket Bat"))
allMonsterCards.push(new monsterCard("Killer Gnome", "Except for the its weakness, only +1 Action Point cards will affect this monster", 4, 2, "Sledgehammer"))
allMonsterCards.push(new monsterCard("Evil Clown", "Guns have no effect", 4, 2, "Knife"))
allMonsterCards.push(new monsterCard("Hillbilly", "Guns are only worth +1 Action Point each", 4, 2, "Pitchfork"))


// List all supply cards
allSupplyCards.push(new supplyCard("Baseball Bat", 5, 1, 1, ""))
allSupplyCards.push(new supplyCard("Machete", 5, 1, 1, ""))
allSupplyCards.push(new supplyCard("Video Camera", 5, 1, 0, "Draw one card from the discard pile"))
allSupplyCards.push(new supplyCard("Flashlight", 5, 1, 0, "Draw a card"))
allSupplyCards.push(new supplyCard("Kitchen Knife", 5, 1, 1, ""))
allSupplyCards.push(new supplyCard("Axe", 4, 2, 2, ""))
allSupplyCards.push(new supplyCard("Beer", 7, 2, 0, "In Game: -1 Action Point, Post Game: +2 Action Points"))
allSupplyCards.push(new supplyCard("Nightstick", 4, 2, 2, ""))
allSupplyCards.push(new supplyCard("Bayonet", 3, 2, 1, "+3 Action Points if equipped with Rifle"))
allSupplyCards.push(new supplyCard("Pistol", 5, 2, 1, ""))
allSupplyCards.push(new supplyCard("Hammer", 4, 2, 2, ""))
allSupplyCards.push(new supplyCard("Cell Phone", 4, 2, 0, "Draw a card"))
allSupplyCards.push(new supplyCard("Crowbar", 4, 2, 2, ""))
allSupplyCards.push(new supplyCard("Crucifix", 7, 2, 0, "+2 Action Points in monster encounter, otherwise no effect"))
allSupplyCards.push(new supplyCard("Crossbow", 4, 3, 3, ""))
allSupplyCards.push(new supplyCard("Lead Pipe", 3, 3, 3, ""))
allSupplyCards.push(new supplyCard("Pitchfork", 3, 3, 3, ""))
allSupplyCards.push(new supplyCard("Sword", 4, 3, 3, ""))
allSupplyCards.push(new supplyCard("Cricket Bat", 3, 3, 3, ""))
allSupplyCards.push(new supplyCard("Hunting Rifle", 3, 4, 4, ""))
allSupplyCards.push(new supplyCard("Molotov Cocktail", 3, 4, 4, ""))
allSupplyCards.push(new supplyCard("Shotgun", 4, 4, 4, ""))
allSupplyCards.push(new supplyCard("Sledgehammer", 2, 4, 4, ""))
allSupplyCards.push(new supplyCard("Assault Rifle", 2, 4, 4, ""))
allSupplyCards.push(new supplyCard("Chainsaw", 2, 5, 5, ""))
allSupplyCards.push(new supplyCard("Car", 1, 4, 0, "Escape an encounter with a Monster with 4 HP"))
allSupplyCards.push(new supplyCard("Truck", 1, 4, 0, "Escape an encounter with a Monster with 6 HP"))
allSupplyCards.push(new supplyCard("Ambulance", 1, 4, 0, "Escape an encounter with a Monster with 8 HP"))
allSupplyCards.push(new supplyCard("Police Car", 1, 4, 0, "Escape an encounter with a Monster with 10 HP"))
allSupplyCards.push(new supplyCard("Firetruck", 1, 4, 0, "Escape an encounter with a Monster with 12 HP"))


// List all possessions
allPossessions.push(new possessionCard("Demon", "-4 Action Points until defeated. Cure: Crucifix"))
allPossessions.push(new possessionCard("Ancient Curse", "You may only draw 3 cards per turn. Cure: Monster experience totaling 5 EXP"))
allPossessions.push(new possessionCard("Scary Mask", "-2 Action Points per turn. Cure: Sword"))
allPossessions.push(new possessionCard("Wendigo", "Discard all support cards. Cure: Pitchfork"))
allPossessions.push(new possessionCard("Infected Spores", "-4 Action Points per turn. Cure: Molotov Cocktail"))
allPossessions.push(new possessionCard("Rabies", "Skip every other turn. Cure: Beer"))


// List all actions
allActions.push(new actionCard("Use Radio", 5, "Choose a player-- you may use the support cards in their hands as your own this turn"))
allActions.push(new actionCard("Mysterious Phone Call", 5, "Choose a player-- they draw two cards that you may use as your own this turn. The player discards the cards afterward"))
allActions.push(new actionCard("Say a Prayer", 5, "Double the effects of a crucifix"))
allActions.push(new actionCard("Get It On", 5, "Choose another player-- trade three random cards"))
allActions.push(new actionCard("Deja Vu", 5, "At the end of your turn put three random cards from your discard pile into your hand"))
allActions.push(new actionCard("Salt The Earth", 5, "You may check the top of all three main decks and move any monsters to the bottom"))


// List all Support Cards
allSupportCards.push(new supportCard("Girl Next Door", 5, "Post Game: +3 Victory Points if Neighbor's House also owned"))
allSupportCards.push(new supportCard("Sheriff", 5, "In Game: +2 Action Points for every Pistol in your hand"))
allSupportCards.push(new supportCard("The Hermit", 5, "In Game: You may search your discard pile for the monster's weakness"))
allSupportCards.push(new supportCard("Psychic", 5, "In Game: Overcome a possession"))
allSupportCards.push(new supportCard("Hunter", 5, "In Game: +3 Action Points for every Hunting Rifle in your hand"))
allSupportCards.push(new supportCard("Little Sister", 5, "In Game: You cannot defeat a monster holding this card. Post Game: +3 Victory Points"))
allSupportCards.push(new supportCard("Town Loon", 4, "In Game: Draw 2 cards from your discard pile"))
allSupportCards.push(new supportCard("Soldier", 4, "In Game: +1 Action Point for every firearm in your hand"))
allSupportCards.push(new supportCard("Fireman", 4, "In Game: +2 Action Points for every Axe. Post Game: +2 for 'Firehouse' and 'Fire Truck' cards"))
allSupportCards.push(new supportCard("Private Detective", 4, "In Game: +1 Action Point for every Flashlight in your hand"))
allSupportCards.push(new supportCard("Garbage Man", 4, "In Game: Search your discard pile for any one card"))
allSupportCards.push(new supportCard("Reporter", 4, "In Game: Draw a card for every Video Camera in your hand"))
allSupportCards.push(new supportCard("Priest", 4, "In Game: +1 Action Point for every crucifix"))
allSupportCards.push(new supportCard("Bartender", 3, "In Game: +1 Action Point for every Molotov Cocktail. Post Game: +1 Victory Point for every Beer"))
allSupportCards.push(new supportCard("EMT", 3, "In Game: Draw a random card from the discard pile"))
allSupportCards.push(new supportCard("Photographer", 3, "In Game: At any time if a video camera is played, draw a card"))
allSupportCards.push(new supportCard("Trucker", 3, "In Game: Draw two cards, then discard one of them"))
allSupportCards.push(new supportCard("The Old Man", 3, "In Game: Draw a card"))
allSupportCards.push(new supportCard("Farmer" , 3, "In Game: +1 Action Point for every Pitchfork"))
allSupportCards.push(new supportCard("Tracker", 3, "In Game: Draw a card"))
allSupportCards.push(new supportCard("Teacher", 3, "Post Game: +4 Victory Points if 'School' card is also owned"))
allSupportCards.push(new supportCard("Security Guard", 3, "In Game: +1 for every Nightstick. Post Game: +3 if Mall card is also owned"))
allSupportCards.push(new supportCard("Football Coach", 3, "In Game: +2 Action Points"))
allSupportCards.push(new supportCard("Creepy Kid", 3, "In Game: Halves the HP of an attacking monster"))
allSupportCards.push(new supportCard("Fry Cook", 3, "In Game: +1 Action Point for every Frying Pan"))


// List all Location Cards
allLocationCards.push(new locationCard("Circus", 5, "In Game: Defeat the Clown instantly"))
allLocationCards.push(new locationCard("Mall", 5, "In Game: Draw three cards, pick one, discard two"))
allLocationCards.push(new locationCard("Army Base", 5, "Post Game: +1 Victory Point for every Assault Rifle"))
allLocationCards.push(new locationCard("Hospital", 5, "In Game: Search your discard pile for the cure to a Possession"))
allLocationCards.push(new locationCard("Fire Department", 5, "Post Game: +2 if Fireman or Firetruck owned, +5 if both owned"))
allLocationCards.push(new locationCard("Police Station", 4, "In Game: +2 Action Points for every Shotgun in your hand"))
allLocationCards.push(new locationCard("Church", 4, "In Game: +1 Action Point for every Crucifix. Post Game: +1 Victory Point for every Crucifix"))
allLocationCards.push(new locationCard("Cave", 4, "In Game: Escape any encounter"))
allLocationCards.push(new locationCard("Neighbor's House", 4, "Post Game: +2 Victory Points if Girl Next Door owned"))
allLocationCards.push(new locationCard("Abandoned Mine", 4, "In Game: Escape an encounter"))
allLocationCards.push(new locationCard("School", 4, "In Game: Draw a card"))
allLocationCards.push(new locationCard("Barn", 3, "Post Game: +2 Victory Points if Farmer is also owned"))
allLocationCards.push(new locationCard("Gymnasium", 3, "Post Game: +2 Victory Points if Football Coach is owned"))
allLocationCards.push(new locationCard("Kiddie Park", 3, "Post Game: +4 Victory Points if Creepy Kid is owned"))
allLocationCards.push(new locationCard("Gas Station", 3, "Post Game: +1 Victory Point for every vehicle owned"))
allLocationCards.push(new locationCard("Camp Site", 3, "Post Game: +2 Victory Points if Hunter is owned"))
allLocationCards.push(new locationCard("The Cabin", 3, "Post Game: +2 Victory Points if The Hermit is owned"))
allLocationCards.push(new locationCard("Back Alley", 3, "In Game: You may permanently discard any 'Hide' cards in your hand"))
allLocationCards.push(new locationCard("Book Store", 3, "In Game: Draw two cards"))
allLocationCards.push(new locationCard("Doctor's Office", 3, "In Game: Draw a card"))

// cardName, numInDeck, actionPoints
// List Hide, Seek cards
allHideSeekCards.push(new hideSeekCard("HIDE", 4, 0))
allHideSeekCards.push(new hideSeekCard("SEEK", 6, 1))
