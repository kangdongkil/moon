var bg;
var y = 0;
var duration = 3000;
var timing = (new Date()%duration)/duration;

function setup() {
  

  bg = loadImage("moon.jpg");
  

  createCanvas(1500, 1650);
  background(255,0,0);
}
function draw(){
  
  var duration = 3000;
  var timing = (new Date()%duration)/duration;
  background(0);
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
function drawstar(){     

     var y;
     var x;
     fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
     x=10;
     y=300;
     
     rect(20,180,1*x,1*x);
     rect(120,80,15,15);
     //rect(180,200,13,13);
     rect(270,100,15,15);
     rect(400,10,18,18);
     rect(500,200,12,12);
     rect(650,80,1*x,1*x);
     rect(800,350,14,14);
     rect(950,140,12,12);
     rect(1000,20,15,15);
     rect(1100,190,18,18);
     rect(1300,250,16,16);
     rect(1450,50,15,15);
     
     rect(20,180+y,13,13);
     //rect(120,80+y,15,15);
     //rect(180,200+y,13,13);
     //rect(270,100+y,15,15);
     //rect(400,10+y,1*x,1*x);
     //rect(500,200+y,12,12);
     rect(650,80+y,15,15);
     rect(800,350+y,14,14);
     rect(950,140+y,12,12);
     rect(1000,20+y,15,15);
     rect(1100,190+y,18,18);
     rect(1300,250+y,1*x,1*x);
     rect(1450,50+y,15,15);

     y=600;
     rect(20,180+y,13,13);
     rect(120,80+y,15,15);
     rect(180,200+y,13,13);
     //rect(270,100+y,15,15);
     rect(400,10+y,18,18);
     //rect(500,200+y,12,12);
     rect(650,80+y,15,15);
     //rect(800,350+y,14,14);
     rect(950,140+y,12,12);
     //rect(1000,20+y,15,15);
     //rect(1100,190+y,18,18);
     rect(1300,250+y,16,16);
     rect(1450,50+y,15,15);

     y=900;
     rect(20,180+y,18,18);
     rect(120,80+y,15,15);
     rect(180,200+y,1*x,1*x);
     rect(270,100+y,15,15);
     rect(400,10+y,18,18);
     rect(500,200+y,12,12);
     //rect(650,80+y,13,13);
     //rect(800,350+y,14,14);
     rect(950,140+y,12,12);
     rect(1000,20+y,15,15);
     rect(1100,190+y,18,18);
     rect(1300,250+y,16,16);
     rect(1450,50+y,15,15);

     y=1200;
     rect(20,180+y,15,15);
     rect(120,80+y,15,15);
     rect(180,200+y,13,13);
     rect(270,100+y,15,15);
     rect(400,10+y,18,18);
     rect(500,200+y,12,12);
     //rect(650,80+y,13,13);
     //rect(800,350+y,14,14);
     //rect(950,140+y,12,12);
     //rect(1000,20+y,15,15);
     rect(1100,190+y,18,18);
     rect(1300,250+y,1*x,1*x);
     rect(1450,50+y,15,15);

     y=1500;
     rect(20,180+y,12,12);
     rect(120,80+y,15,15);
     rect(180,200+y,13,13);
     rect(270,100+y,15,15);
     rect(400,10+y,18,18);
     rect(500,200+y,12,12);
     rect(650,80+y,13,13);
     //rect(800,350+y,14,14);
     rect(950,140+y,12,12);
     rect(1000,20+y,15,15);
     rect(1100,190+y,18,18);
     rect(1300,250+y,16,16);
     rect(1450,50+y,15,15);

                                    // height
}


