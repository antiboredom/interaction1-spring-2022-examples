let ballX = 0;
let xSpeed = 4;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  ellipse(ballX, 100, 50);

  ballX = ballX + xSpeed;

  if (ballX > width) {
    xSpeed = -4;
  }

  if (ballX < 0) {
    xSpeed = 4;
  }
}
