var xPosition = 200;
var yPosition = 200;
var xSpeed = 1;

function setup() {
  createCanvas(1000, 1000);
}

function keyPressed() {
  if(keyCode == UP_ARROW) {
    xLocation = xLocation + 1;
  }
}

function draw() {
  //draw background
  background(255, 0, 0);

  // H, S & B integer values
  colorMode(HSB);
  fill(255, 204, 100, .5);
  strokeWeight(4);
  stroke(100, 50, 50);

  //draw circle
  ellipse(xPosition, 50, 100, 100);

  //update the x position
  xPosition = xPosition + xSpeed;
}
