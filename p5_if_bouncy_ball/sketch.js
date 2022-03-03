let ballX = 100;
let xSpeed = 2;
let ballY = 320;
let ySpeed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  ellipse(ballX, ballY, 50);

  ballX = ballX + xSpeed;

  if (ballX > width) {
    xSpeed = -2;
  }

  if (ballX < 0) {
    xSpeed = 2;
  }

  ballY = ballY + ySpeed;

  if (ballY > height) {
    ySpeed = -3;
  }

  if (ballY < 0) {
    ySpeed = 3;
  }
}
