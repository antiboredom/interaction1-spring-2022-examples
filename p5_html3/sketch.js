let button;
let title;
let fontsize = 3;

function setup() {
  noCanvas();
  button = select("button");
  button.mousePressed(doSomething)
  title = select(".title")
  // title.mousePressed(doSomething)
  // title.style("background-color", "red")

  // setInterval(doSomething, 1000);
}

function doSomething() {
  fontsize = fontsize + 2;
  title.style("font-size", fontsize + "px");

  let paragraphs = selectAll("*");
  for (let i=0; i<paragraphs.length; i=i+1) {
    paragraphs[i].position(random(600), random(600))
  }


}