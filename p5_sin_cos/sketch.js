let circleX = 0;
let circleY = 0;
let c = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  angleMode(DEGREES);

  print(cos(frameCount)*200);
  circleY = cos(frameCount * 0.5) * 100 + 100;
  circleX = map(cos(frameCount*2), -1, 1, 100, 200)

  // adjusting the red value
  c = abs(sin(frameCount) * 255);
  fill(c, 0, 125);

  // using colormode hsb
  // colorMode(HSB);
  // c = abs(sin(frameCount) * 360);
  // fill(c, 100, 100);

  ellipse(circleX, circleY, 100);
  
}
