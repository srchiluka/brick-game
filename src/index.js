import Paddle from "/src/paddle";
import InputHandler from "/src/input";

let canvas = document.getElementById("GameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);
let imgBall = document.getElementById("imgBall");
paddle.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);
  ctx.drawImage(imgBall, 10, 10, 16, 16);
  console.log("draw ball completed");
  //requestAnimationFrame(gameLoop);
}

//gameLoop();
