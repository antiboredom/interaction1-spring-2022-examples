let x = 0;
let y = 0;
let size = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  ellipse(x, y, size);
}

// event when user clicks mouse
function mousePressed() {
  x = random(0, 400);
  y = random(0, 400);
}

// when user clicks and releases mouse
function mouseClicked() {

}

function doubleClicked() {
  x = 0;
  y = 0;
}

function mouseMoved() {
  size = size + 1;
  if (size > 200) {
    size = 100;
  }
}
