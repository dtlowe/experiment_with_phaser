// boot.js, where we prepare the game environment

var NOOHH = {};
NOOHH.boot = function(game){};
NOOHH.boot.prototype = {
  preload: function(game) {
    /*
     if i had preload image assets, prior to game initialization,
     i'd put them here
    */
  },
  create: function() {
    // here we set the scale options
    this.input.MAX_POINTERS = 1;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    // Phaser docs say this method is deprecated as of 2.2.0
    // this.scale.setScreenSize(true);

    this.state.start('preloader')
  }

}
