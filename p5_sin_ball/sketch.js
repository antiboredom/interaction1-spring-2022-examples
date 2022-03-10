function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 10);
  angleMode(DEGREES);

  wavyBall(0, 100, 1, 0);
  wavyBall(100, 100, 1, 20);
  wavyBall(200, 100, 1, 40);
  wavyBall(300, 100, 1, 60);
  wavyBall(400, 100, 1, 80);

  wavyBall(0, 200, 1, 100);
  wavyBall(100, 200, 1, 120);
  wavyBall(200, 200, 1, 140);
  wavyBall(300, 200, 1, 160);
  wavyBall(400, 200, 1, 180);

  wavyBall(0, 300, 1, 200);
  wavyBall(100, 300, 1, 220);
  wavyBall(200, 300, 1, 240);
  wavyBall(300, 300, 1, 260);
  wavyBall(400, 300, 1, 280);
  
}

function wavyBall(x, y, rate, delay) {
  // try this with tan instead of sin!
  let radius = sin((frameCount + delay) * rate) * 100;

  // noFill();
  ellipse(x, y, radius);
}
