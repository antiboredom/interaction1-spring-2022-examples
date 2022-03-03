function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // == means is equal to
  // != means NOT equal to
  // < means less than
  // > greater than
  // <= less than or equal to
  // >= greater than or equal to

  if (mouseX > 200) {
    fill("red");
    rect(100, 100, 100);
  } else {
    fill("blue");
    ellipse(100, 100, 100);
  }
}
