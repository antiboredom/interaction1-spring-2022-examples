// let drop = {
//   x: 100,
//   y: -10,
//   yspeed: 2
// }

let drops = [];

function setup() {
  createCanvas(400, 400);

  for (let n=0; n<100; n=n+1) {
    let d = {
      x: random(0, width),
      y: random(-10, -300),
      yspeed: random(5, 10),
      radius: random(1, 5),
    };
    drops.push(d);
  }

  print(drops);
}

function draw() {
  background(220);

  for (let i=0; i<drops.length; i=i+1) {
    let d = drops[i];
    noStroke();
    fill("darkblue")
    ellipse(d.x, d.y, d.radius);
    d.y = d.y + d.yspeed;

    if (d.y > height) {
      d.y = -10
    }
  }

  // ellipse(drop.x, drop.y, 10);
  // drop.y = drop.y + 2;
  // if (drop.y > height) {
  //   drop.y = -10;
  // }
}
