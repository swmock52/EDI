//random

function setup() {
  createCanvas(720, 720);
  noFill ();
  strokeWeight (3);
  stroke (255,50,100);//RGB red would be (255,0,0)
  //frameRate(3); to change speed w/o noLoop();
}

function draw() {
  
  background(220,220,220);
  
  var windowPane = 30; // padding around the box array
  var num = 10; // number of boxes
  var shift = random (-10, 10); // degree of shift in our quad
  var space = 0; //space between squares
  
  translate(windowPane + space/2,windowPane + space/2); // starting point of window (x,y)
  
  var sideLen = (720 - 2 * windowPane)/num; // pixel length
  
  
  
  for(var x=0; x < num*sideLen; x = x+sideLen){
    for(var y=0; y < num*sideLen; y = y+sideLen){
      
      fill(random(0, 400),random(0, 400), random(0, 400)); // random color RGB
      quad(x + random (-10, 10),y + random (-10, 10), x+sideLen + random (-10, 10),y + random (-10, 10), x+sideLen + random (-10, 10),y+sideLen + random (-10, 10), x + random (-10, 10),y+sideLen + random (-10, 10));
    }
  }
  
  noLoop();

}
  