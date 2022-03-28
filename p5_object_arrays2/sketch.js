let points = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (mouseIsPressed) {
    let point = {
      x: mouseX,
      y: mouseY
    };
    points.push(point);
  }

  noFill();
  beginShape();
  for (let p of points) {
    vertex(p.x, p.y);
    p.x = p.x + random(-1, 1);
  }
  // for (let i=0; i<points.length; i=i+1) {
  //   let p = points[i];
  //   vertex(p.x, p.y);
  // }
  endShape();
}
