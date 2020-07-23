import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";

export default class game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeigth = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.ball.update(deltaTime);
    this.paddle.update(deltaTime);
  }

  draw(ctx) {
    console.log('in game draw');
    this.paddle.draw(ctx);
    this.ball.draw(ctx);
  }
}
