// game.js, where all the game functions will be stored/take place

NOOHH.game = function(game){
  this._player1 = null;
  this._player2 = null;
  this._player3 = null;
  this._player4 = null;
};
NOOHH.game.prototype = {
  create: function() {
    // Set the physics engine
    this.physics.startSystem(Phaser.Physics.ARCADE);
  }
}
