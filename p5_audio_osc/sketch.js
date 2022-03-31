let osc;

function setup() {
  createCanvas(400, 400);

  osc = new p5.Oscillator();
  osc.setType("sawtooth");
  osc.freq(240);
  osc.amp(1)
  osc.start();

}

function draw() {
  background(220);

  let freq = map(mouseX, 0, width, 0, 1000);
  let amp = map(mouseY, 0, height, 0, 1);

  osc.freq(freq);
  osc.amp(amp);
}
