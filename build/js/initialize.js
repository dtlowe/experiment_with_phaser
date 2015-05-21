// initialize.js, where a main menu will possibly appear, but definitely where
// all the items will appear in the game area

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
