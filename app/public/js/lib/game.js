var Game = function() {
  this.bodies = [];
};

Game.prototype = {
  update: function() {
    for (var i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update();
    }
  },

  createPacmanObject: function(canvasSize) {
    var pacman = new PacMan(canvasSize);
    this.bodies.push(pacman);
  }

};
