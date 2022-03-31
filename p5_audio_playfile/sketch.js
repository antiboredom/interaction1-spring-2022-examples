let sound;
let sound2;
let sound3;

function preload() {
  sound = loadSound("1.mp3");
  sound2 = loadSound("2.mp3");
  sound3 = loadSound("3.mp3");
}

function setup() {
  createCanvas(400, 400);
  sound.rate(1)
}

function draw() {
  background(220);
  let rate = map(mouseX, 0, width, 0.5, 2);
  sound.rate(rate);
  sound2.rate(rate);
  sound3.rate(rate);
}

function keyPressed() {
  if (key == "1") {
    sound.play();
  }
  if (key == "2") {
    sound2.play();
  }
  if (key == "3") {
    sound3.play();
  }
}
// function mousePressed(){
//   sound.play();
// }


