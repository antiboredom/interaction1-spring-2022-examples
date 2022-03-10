function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  angleMode(DEGREES);

  // 100 randomly located ellipses
  // for (let i=0; i<100; i=i+1) {
  //   let x = random(0, 400);
  //   let y = random(0, 400);
  //   ellipse(x, y, 10);
  // }

  // draw a row of ellipses
  // for (let x=0; x <= width; x=x+50) {
  //   ellipse(x, 200, 50);
  // }

  // lines across screen
  // for (let x=0; x <= width; x=x+20) {
  //   line(x, 0, x, height);
  // }

  // lines that follow mouse
  // for (let x=0; x <= width; x=x+20) {
  //   line(x, 0, mouseX, mouseY);
  // }

  // for loop with sin
  for (let x=0; x <= width; x=x+50) {
    let y = abs(sin(frameCount + x/10) * height);
    ellipse(x, y, 50);
  }
}
