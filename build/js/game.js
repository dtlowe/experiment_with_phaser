// game.js
NOOHH.game = function(game){
  this._player = null;
};
NOOHH.game.prototype = {
  create: function() {
    // Set the physics engine
    this.physics.startSystem(Phaser.Physics.ARCADE);

    var playerHand = this.add.sprite(NOOHH.GAME_WIDTH-400, NOOHH.GAME_HEIGHT-700, 'splyBaseballBat')

  }
}
