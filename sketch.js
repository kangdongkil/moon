
var a;
function setup() {
  /*bg = loadImage("moon.jpg");*/
  a=loadImage("sun.png")
  createCanvas(1920, 1080);
  
}
function draw(){
  /*background(bg);*/
  background(255);
  var duration = 3000;
  var timing = (new Date()%duration)/duration;

  noStroke();
  fill(255,0,0);

  a(240,240,158,158);
  fill(Math.random()*255,Math.random()*255,Math.random()*255,100);

  ellipse(240+Math.cos(timing*2*PI)*300,                         // x좌표
        240 + Math.sin(timing*2*PI)*300, // y좌표
        50,                                  // width
        50);                                 // height
  
  fill(255,0,255,100);
  ellipse(240+Math.cos(timing*2*PI)*150,                     // x좌표
        240 + Math.sin(timing*2*PI)*150 , // y좌표
        50,                                  // width
        50);
  noFill();
  stroke(255,0,0);
  ellipse(240+Math.cos(timing*2*PI)*150,                     // x좌표
        240 + Math.sin(timing*2*PI)*150 , // y좌표
        100,                                  // width
        100);

  var duration = 1500;
  var timing2 = (new Date()%duration)/duration;
  noStroke();
  fill(30,200,255); 
  ellipse(240+Math.cos(timing*2*PI)*150+ Math.cos(timing2*2*PI)*50,                         // x좌표
        240 + Math.sin(timing*2*PI)*150 + Math.sin(timing2*2*PI)*50, // y좌표
        10,                                  // width
        10); 
  fill(30,200,230); 
  ellipse(240+Math.cos(timing*2*PI)*150+ Math.cos(timing2*4*PI)*50,                         // x좌표
        240 + Math.sin(timing*2*PI)*150 + Math.sin(timing2*4*PI)*50, // y좌표
        10,                                  // width
        10); 
  fill(0,255,78);
   ellipse(240+Math.cos(timing*2*PI)*150+ Math.cos(timing2*4*PI)*50,                         // x좌표
        240 + Math.sin(timing*2*PI)*150 + Math.sin(timing2*4*PI)*50, // y좌표
        15,                                  // width
        15); 
   fill(121,0,88);
   ellipse(240+Math.cos(timing*2*PI)*150+ Math.cos(timing2*4*PI)*100,                         // x좌표
        240 + Math.sin(timing*2*PI)*150 + Math.sin(timing2*4*PI)*100, // y좌표
        20,                                  // width
        20); 
   fill(255,144,0);
   ellipse(240+Math.cos(timing*2*PI)*200,                         // x좌표
        240 + Math.sin(timing*2*PI)*50,  // y좌표
        20,                                  // width
        20); 
   ellipse(440,290,20,20);  // y좌표
        


   var duration = 1000;
                               // height
  fill(0,255,108);
  ellipse(500+Math.cos(timing*2*PI)*180,                         // x좌표
        500 + Math.sin(timing*2*PI)*180*alpha, // y좌표
        30,                                  // width
        30);  
  
}
function draw() {
  background(bg);
  
  stroke(226, 204, 0);
  line(0, y, width, y);
  
  y++;
  if (y > height) {
    y = 0; 
  }
}


