let circleX = 200;
let circleY = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  let bg = random(0, 255);

  background(0);

  ellipse(circleX, circleY, 100);

  // circleX = random(0, width);
  // circleY = random(0, height);

  circleX = circleX + random(-2, 2);
  circleY = circleY + random(-2, 2)

  // let randomNumber = random(-100, 500);

  // print(randomNumber);
}
