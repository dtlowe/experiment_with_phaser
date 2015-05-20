// initialize.js
NOOHH.initialize = function(game){};
NOOHH.initialize.prototype = {
  create: function() {
    // display images
    this.add.sprite(0, 0, 'background');

  },
  startGame: function() {
    // start the game state
    this.state.start('game');
  }
};
