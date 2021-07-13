var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  btn_red = createButton("RED");
  btn_red.position(100,60);
  btn_red.mousePressed(redPress);

  btn_green = createButton("GREEN");
  btn_green.position(300,60);
  btn_green.mousePressed(greenPress);

  btn_blue = createButton("BLUE")
  btn_blue.position(200,200)
  btn_blue.mousePressed(bluePress)
}

function draw() {
  background(r,g,b);
}

function redPress() {
  r = 255;
  g = 0;
  b = 0;
}

function greenPress() {
  r = 0;
  g = 255;
  b = 0;
}

function bluePress() {
  r = 0
  g = 0
  b= 255
}
