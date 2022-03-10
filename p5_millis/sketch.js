let y = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let time = millis();

  print(time);

  // text(time, 100, 100);
  
  if (time > 2000) {
    ellipse(100, y, 100);
  }

  // ellipse(100, y, 100);

  // y = y + 5;

  // if (time > 1000) {
  //   y = 0;
  // }

}
