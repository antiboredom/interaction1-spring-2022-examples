let face = {
  eyeColor: "red",
  eyeSize: 20,
  mouthSize: 30
}

function setup() {
  createCanvas(400, 400);
  randomizeFace();
}

function draw() {
  background(220);

  translate(width/2, height/2);
  fill(255);
  ellipse(0, 0, 100, 120);

  fill(face.eyeColor);
  ellipse(-15, 0, face.eyeSize);
  ellipse(15, 0, face.eyeSize);

  fill(255);
  ellipse(0, 40, face.mouthSize, 10)
}

function randomizeFace() {
  face.eyeSize = random(10, 30);
  face.mouthSize = random(10, 40);
  face.eyeColor = random(["blue", "purple", "black", "orange"])
}

function mousePressed(){
  randomizeFace();
}
