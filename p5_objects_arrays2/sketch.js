let rects = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // for (let i=0; i<rects.length; i=i+1) {
  //   let r = rects[i];
  //   rect(r.x, r.y, 20);
  //   r.x = r.x + random(-1, 1);
  // }
  
  // nicer way of looping through an array of objects
  // "r" contains each rectangle in our array
  for (let r of rects) {
    rect(r.x, r.y, 30);
  }
}

function mousePressed() {
  let thingy = {
    x: mouseX,
    y: mouseY,
  };
  rects.push(thingy);
  print(rects)
}