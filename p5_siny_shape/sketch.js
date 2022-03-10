function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 1);
  angleMode(DEGREES);

  beginShape()
  vertex(sin(frameCount) * 300, sin(frameCount) * 200);
  vertex(sin(frameCount/3) * 500, sin(frameCount/2) * 200);
  vertex(sin(frameCount/4) * 100, sin(frameCount/5) * 200);

  endShape();
}
