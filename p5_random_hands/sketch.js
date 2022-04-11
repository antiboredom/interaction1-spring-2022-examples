let hands = [];
let theHand;

function setup() {
  createCanvas(windowWidth, windowHeight);
  hands.push(loadImage("hand1.png"));
  hands.push(loadImage("hand2.png"));
  hands.push(loadImage("hand3.png"));
  hands.push(loadImage("hand4.png"));

  theHand = random(hands);
  imageMode(CENTER);
}

function draw() {
  // background(220);
  image(theHand, mouseX, mouseY)
}

function mousePressed() {
  theHand = random(hands);
}
