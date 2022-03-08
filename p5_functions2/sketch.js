function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  face(100, 100, 0);

  face(100, 200, 150);

  face(200, 200, 255);

  face(mouseX, mouseY, random(200));
}

function face(x, y, eyecolor) {
  // face!
  fill(127);
  ellipse(x, y, 100);
  fill(eyecolor)
  ellipse(x-20, y, 20);
  ellipse(x+20, y, 20);
}

