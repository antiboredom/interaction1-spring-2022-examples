let button;
let slider;

function setup() {
  createCanvas(400, 400);
  button = createButton("click me!");
  button.mousePressed(clicker);

  slider = createSlider(200, 255);
}

function draw() {
  background(slider.value());
  text(slider.value(), 30, 30)
}

function clicker(){
  
}
