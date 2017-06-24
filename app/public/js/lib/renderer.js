var Renderer = function(ctx){
  this.ctx = ctx;
};

Renderer.prototype = {
  draw: function(canvasSize, bodies) {
    this.ctx.clearRect(0, 0, canvasSize.x, canvasSize.y);
    for ( var i = 0; i < bodies.foods.length; i++) {
      bodies.foods[i].draw(this);
    }
    bodies.pacman.draw(this);
    bodies.score.draw(this);
  },
  drawImg: function(body) {
    this.ctx.drawImage(
      body.img,
      body.canvasPos.x - body.size.x / 2,
      body.canvasPos.y - body.size.y / 2,
      body.img.width,
      body.img.height );
  },
  drawText: function(body) {
    this.ctx.font = body.font;
    this.ctx.fillStyle = body.color;
    this.ctx.fillText(
      body.text,
      body.canvasPos.x,
      body.canvasPos.y);
  },
  drawCircle: function(body, circlestart, circlefinish) {
    this.ctx.beginPath();
    this.ctx.arc(
      body.canvasPos.x,
      body.canvasPos.y,
      body.radius,
      circlestart,
      circlefinish,
      false
    );
    this.ctx.fillStyle = this.fill;
    this.ctx.fill();
    this.ctx.closePath();
  },
};