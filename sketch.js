function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  orbitControl();

  
  torus(mouseX);
}