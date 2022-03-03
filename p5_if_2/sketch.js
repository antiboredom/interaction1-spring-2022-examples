let ballX = 0;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);

  ellipse(ballX, 200, 50);

  // these next two lines do the same thing!
  // ballX = ballX + 5;
  ballX += 5;

  if (ballX > width + 25) {
    ballX = -25;
  }
}
