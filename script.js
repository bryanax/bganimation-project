// Global Variables
var p5Canvas;
var myName;


function setup() {
 p5Canvas = createCanvas(700, 500, WEBGL);
 p5Canvas.parent("#p5-canvas");
 myName = select("#my-name");
 myName.html("Bryana");
 stroke(250);
 frameRate(90);
}


function draw() {
  background(0);

  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

  ambientLight(10);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);

  push();
  translate(-width / 4, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  specularMaterial(300);
  box(150, 150, 150);
  pop();

  translate(width / 4, 0, 0);
  ambientMaterial(250);
  sphere(125, 60);
  drawSquares(random(100,200));
}


function drawSquares(num) {
 while(num > 0) {
   var randomX = random(width); 
   var randomY = random(height); 
   var randomLength = random(20, 80);
   var randomRed = random(200); 
   var randomGreen = random(200);
   var randomBlue = random(200);
   fill(100, 100, 100);
   rect(randomX, randomY, randomLength, randomLength);
   num--;
 }
}

function drawSquaresAlt(num) {
 for(var i = 0; i < num; i++) {
   var randomX = random(width); 
   var randomY = random(height); 
   var randomLength = random(20, 80); 
   var randomRed = random(255); 
   var randomGreen = random(255);
   var randomBlue = random(255);
   fill(200, 200, 200);
   rect (randomX, randomY, randomLength, randomLength);
 }
}
