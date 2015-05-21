// preloader.js, where we load all the assets and create instances of players

NOOHH.preloader = function(game){
  // define width and height of the game
  NOOHH.GAME_WIDTH = 1024;
  NOOHH.GAME_HEIGHT = 768;
};
NOOHH.preloader.prototype = {
  preload: function() {
    // set background color and preload any images
    this.stage.backgroundColor = '#CC99B2';

    // load non card assets
    this.load.image('background', 'assets/background.png');

    // load monster cards
    this.load.image('monThePsycho', 'assets/monCards/the_psycho.png');
    this.load.image('monVampire', 'assets/monCards/vampire.png');
    this.load.image('monWerewolf', 'assets/monCards/werewolf.png');
    this.load.image('monWitch', 'assets/monCards/witch.png');
    this.load.image('monAlien', 'assets/monCards/alien.png');
    this.load.image('monZombies', 'assets/monCards/zombies.png');

    // load supply cards
    this.load.image('splyBaseballBat', 'assets/supplyCards/baseballBat.png');
    this.load.image('splyMachete', 'assets/supplyCards/machete.png');
    this.load.image('splyShotgun', 'assets/supplyCards/shotgun.png');

    // load support cards
    this.load.image('sprtGirlNextDoor', 'assets/supportCards/girlNextDoor.png');
    this.load.image('sprtSherriff', 'assets/supportCards/sheriff.png');
    this.load.image('sprtTheHermit', 'assets/supportCards/theHermit.png');

    // load location cards
    this.load.image('locCircus', 'assets/locCards/circus.png');
    this.load.image('locMall', 'assets/locCards/mall.png');
    this.load.image('locArmyBase', 'assets/locCards/armyBase.png');


    // load monster card sprite keys into appropriate array
    allMonsterCards[0].spriteKey = 'monThePsycho';
    allMonsterCards[1].spriteKey = 'monVampire';
    allMonsterCards[2].spriteKey = 'monWerewolf';
    allMonsterCards[3].spriteKey = 'monWitch';
    allMonsterCards[4].spriteKey = 'monAlien';
    allMonsterCards[5].spriteKey = 'monZombies';

    // load supply card sprite keys
    allSupplyCards[0].spriteKey = 'splyBaseballBat';
    allSupplyCards[1].spriteKey = 'splyMachete';
    allSupplyCards[21].spriteKey = 'splyShotgun';

    // load support card sprite keys
    allSupportCards[0].spriteKey = 'sprtGirlNextDoor';
    allSupportCards[1].spriteKey = 'sprtSherriff';
    allSupportCards[2].spriteKey = 'sprtTheHermit';

    // load location card sprite keys
    allLocationCards[0].spriteKey = 'locCircus';
    allLocationCards[1].spriteKey = 'locMall';
    allLocationCards[2].spriteKey = 'locArmyBase';


    //console.log(allMonsterCards, allSupplyCards, allSupportCards, allLocationCards);
    //console.log(player1, player2, player3, player4);

  },
  create: function() {
    // start the next state
    this.state.start('initialize');
  }
};
