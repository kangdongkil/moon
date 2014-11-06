var bg;
var y = 0;
var duration = 3000;
var timing = (new Date()%duration)/duration;

function setup() {
  bg = loadImage("moon.jpg");
  createCanvas(1920, 1080);
  
}
function draw(){
  
  var duration = 3000;
  var timing = (new Date()%duration)/duration;
 
  noStroke();
  background(bg);
  
  stroke(226, 204, 0);
  line(0, y, width, y);
  
  y++;
  if (y > height) {
    y = 0; 
  fill(255,0,0);
  ellipse(240,240,100,100);
  fill(255,225,0);
  
  ellipse(240+Math.cos(timing*2*PI)*200,                         // x좌표
        240 + Math.sin(timing*2*PI)*200, // y좌표
        50,                                  // width
        50);                                 // height
  
  fill(255,0,255,100);
  ellipse(240+Math.cos(timing*2*PI)*100,                     // x좌표
        240 + Math.sin(timing*2*PI)*100 , // y좌표
        50,                                  // width
        50);
  var duration = 1500;
  var timing2 = (new Date()%duration)/duration;
  fill(30,200,255); 
  ellipse(240+Math.cos(timing*2*PI)*100+ Math.cos(timing2*2*PI)*50,                         // x좌표
        240 + Math.sin(timing*2*PI)*100 + Math.sin(timing2*2*PI)*50, // y좌표
        10,                                  // width
        10); 
        var duration = 1000;
                               // height
  fill(0,255,108);
  ellipse(200+Math.cos(timing*2*PI)*300,                         // x좌표
        240 + Math.sin(timing*2*PI)*300*alpha, // y좌표
        30,                                  // width
        30);  
        fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
        drawstar();
}



