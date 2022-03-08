let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(x, y, 100);

  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 1;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 1;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y = y + 1;
  }
  if (keyIsDown(UP_ARROW)) {
    y = y - 1;
  }
}

function keyPressed() {
  if (key == "Enter") {
    x = random(0, 400);
  }

  print(keyCode);

  // if (key == "ArrowRight") {
  //   x = x + 5;
  // }
}
