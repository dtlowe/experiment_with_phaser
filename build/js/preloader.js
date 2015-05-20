// preloader.js
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
    this.load.image('monAlien', 'assets/monCards/alien.png');
    this.load.image('monThePsycho', 'assets/monCards/the_psycho.png');
    this.load.image('monVampire', 'assets/monCards/vampire.png');
    this.load.image('monWerewolf', 'assets/monCards/werewolf.png');
    this.load.image('monWitch', 'assets/monCards/witch.png');
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
    this.load.image('locArmyBase', 'assets/locCards/armyBase.png');
    this.load.image('locCircus', 'assets/locCards/circus.png');
    this.load.image('locMall', 'assets/locCards/mall.png');

  },
  create: function() {
    // start the next state, probably game
    this.state.start('initialize');
  }
};
