// Global Variables
var p5Canvas;
var myName;
var ballX;
var ballY;
var ballRadius;
var ballXVelocity;
var ballGrowth;
var y = 100;


function setup() {
 p5Canvas = createCanvas(800, 600);
 p5Canvas.parent("#p5-canvas");
 myName = select("#my-name");
 myName.html("Bryana");
 ballX = width / 2;
 ballY = height / 2;
 ballRadius = 50;
 ballXVelocity = 20;
 ballGrowth = 10;
 stroke(255);
 frameRate(30);
}

function draw() {
 background(0, 0, 0)
 drawSquares(random(30, 60));
 drawBall();  
}
function drawBall() {
 if(ballX >= width - ballRadius || ballX <= 0 + ballRadius) {
   ballXVelocity *= -1;
 }
 
 var circumference = getCircumference(); // local variable
 if(circumference >= 1000 || circumference <= 160) {
   ballGrowth *= -1;
 }
 ballX += ballXVelocity;
 ballRadius += ballGrowth; 
 var ballDiameter = ballRadius * 2; // local variable
 fill(255,255,255);
 ellipse(ballX, ballY, ballDiameter, ballDiameter);
}

function getCircumference() {
 return 2 * PI * ballRadius;
}

function drawSquares(num) {
 while(num > 0) {
   var randomX = random(width); 
   var randomY = random(height); 
   var randomLength = random(20, 80);
   var randomRed = random(255); 
   var randomGreen = random(255);
   var randomBlue = random(255);
   fill(randomRed, randomGreen, randomBlue);
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
   fill(randomRed, randomGreen, randomBlue);
   rect (randomX, randomY, randomLength, randomLength);
 }
}
