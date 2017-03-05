var x=0;
var y=0;

var xspeed =3;
var yspeed=3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  stroke(0);
  ellipse(x, y, 50, 50);
  
  x = x + xspeed;
  
  if(x>=width){
    xspeed = -3;
    fill (random(0, 255), random(0, 255), random(0, 255));
  }
   if(x<=0){
    xspeed = 3;
    fill (random(0, 255), random(0, 255), random(0, 255));
  }
  
  y = y + yspeed;
  
  if(y>=height){
    yspeed = -3;
    fill (random(0, 255), random(0, 255), random(0, 255));
  }
   if(y<=0){
    yspeed = 3;
    fill (random(0, 255), random(0, 255), random(0, 255));
  }

}