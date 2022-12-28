var x = new Array(20);
var dim = 50; 
//store the canvas as a variable
var canvas;
let myFont;

function preload() {

}

function windowResized() {
  console.log('resizing');
  resizeCanvas(windowWidth, windowHeight);
  centerCanvas();
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
 
  var r = random(255);
  var g = random(255);
  var b = random(255);
  
  canvas = createCanvas(windowWidth - 50, windowHeight - 50, WEBGL);
  centerCanvas();

  canvas.elt.style.position = "fixed";
  canvas.style('z-index', '-1');

  background(220);
  fill(0);
  textAlign(CENTER);
  textSize(100);
  
}

function draw() {
  
}
