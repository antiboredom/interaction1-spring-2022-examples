let bgColor = 220;

let y = 0;
let x = 200;

function setup() {
  createCanvas(400, 400);

  // setTimeout(doSomething, 1000);

  setInterval(randomBackground, 200);

  setInterval(resetBall, 2000);
}

function draw() {
  background(bgColor);

  ellipse(x, y, 100);

  y = y + 1;
}

function resetBall() {
  y = 0;
  x = random(0, width);
}

function doSomething() {
  print("hello!");
  bgColor = 0;
}

function randomBackground() {
  bgColor = random(0, 255);
}