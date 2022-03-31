let words = ["A", "spectre", "is", "haunting", "europe"]

function setup() {
  // createCanvas(windowWidth, windowHeight);
  noCanvas();

  for (let i=0; i<100; i=i+1) {
    let d = createDiv(random(words));
    d.position(random(windowWidth), random(windowHeight));
    d.style("background-color", "red");
    d.style("font-size", random(10, 100) + "px");
  }
}

// function draw() {
//   background(random(200, 220));
// }
