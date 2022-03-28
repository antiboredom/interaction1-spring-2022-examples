
// // variables for the ball
// let x = 100;
// let y = 30;
// let r = 50;

let ball = {
  x: 100,
  y: 30,
  r: 50
}

function setup() {
  createCanvas(400, 400);
  ball.x = 0;
  ball.color = 128;
  print(ball);
}

function draw() {
  background(220);

  fill(ball.color)
  ellipse(ball.x, ball.y, ball.r);
  ball.x = ball.x + 2;
}
