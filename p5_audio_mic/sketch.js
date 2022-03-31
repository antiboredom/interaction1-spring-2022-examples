let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);

  let level = mic.getLevel();
  text(level, 20, 20)
}
