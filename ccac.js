function setup(){
  //Creates the initial canvas with specified dimensions
  createCanvas(800, 800);
  //Sets angle measurements to degrees
  angleMode(DEGREES);
}

function sCounter(){
  for (var i = 0; i < 60; i++)
  {
    //Makes marks every 5 seconds starting at zero
    if((i % 5) == 0){
      push();
      //Rotates 6 degrees each time
      rotate(6 * i);
      //Makes the shapes yellow
      fill(165, 42, 42);
      //Creates 16x16 squares
      rect(210, 210, 16, 16);
      pop();
    }else{
      push();
      //Rotates 6 degrees each time
      rotate(6 * i);
      //Makes the shapes yellow
      fill(255, 255, 0);
      //Creates 16x16 squares
      rect(210, 210, 16, 16);
      pop();
    }
  }
}

function mCounter(){
  for (var i = 0; i < 60; i++)
  {
    //Makes marks every 5 minutes in a different color
    if((i % 5) == 0){
      push();
      //Rotates 6 degrees each time
      rotate(6 * i);
      //Makes the shape red
      fill(0, 255, 255);
      //Creates a 8x8 square
      rect(130, 130, 8, 8);
      pop();
    }else{
      push();
      //Rotates 6 degrees each time
      rotate(6 * i);
      //Makes the shape red
      fill(255, 0, 0);
      //Creates a 8x8 square
      rect(130, 130, 8, 8);
      pop();
    }
  }
}

function hCounter(){
  for (var i = 0; i < 24; i++)
  {
    //Makes a different colot marker for noon
    if(i == 0){
      push();
      //Rotates 30 degrees each time
      rotate(15 * i);
      //Makes the shape purple
      fill(0);
      //Creates a 8x8 square
      rect(50, 50, 8, 8);
      pop();
    }else if((i > 0)&&((i % 6) == 0)){
      push();
      //Rotates 30 degrees each time
      rotate(15 * i);
      //Makes the shape purple
      fill(112, 128, 144);
      //Creates a 8x8 square
      rect(50, 50, 8, 8);
      pop();
    }else{
      push();
      //Rotates 30 degrees each time
      rotate(15 * i);
      //Makes the shape purple
      fill(255, 255, 255);
      //Creates a 8x8 square
      rect(50, 50, 8, 8);
      pop();
    }
  }
}

function draw()
{
  //Creates a white background
  background(255, 255, 255);
  //Centers everything at the origin
  translate(width / 2, height / 2);
  //Rotates the entire canvas
  rotate(225);

  //Sets h, m, and s equal to corresponding time variables
  let h = hour();
  let m = minute();
  let s = second();

  strokeWeight(1);
  //Adds black outline to mCounter and remaps the image as the secs increase
  stroke(0);
  noFill();
  let sAngle = map(s, 0, 60, 0, 360);

   //Adds black outline to mCounter and remaps the image as the mins increase
  stroke(0);
  let mAngle = map(m, 0, 60, 0, 360);

  //Adds black outline to hCounter and remaps the image as the hours increases
  stroke(0);
  let hAngle = map(h % 24, 0, 24, 0, 360);

  //Adds the tick marks
  sCounter();
  mCounter();
  hCounter();

  if((h >= 7)&&(h < 19)){
    //Makes the sun
    fill(255, 215, 0);
    //Makes tracking circle with radius 50 at (0, 0)
    ellipse(0, 0, 50, 50);
  }else{
    //Makes the moon
    fill(245, 255, 250);
    //Makes tracking circle with radius 50 at (0, 0)
    ellipse(0, 0, 50, 50);
  }

  //sWheel
  push();
  //Rotates based on parameters
  rotate(sAngle);
  //Makes the tracking circle green
  fill(0, 255, 0);
  //Makes tracking circle with radius 25 at (660,660)
  ellipse(260, 260, 50, 50);
  pop();

  //mWheel
  push();
  //Rotates based on parameters
  rotate(mAngle);
  //Makes the tracking circle blue
  fill(0, 0, 255);
  //Makes tracking circle with radius 25 at (570,570)
  ellipse(170, 170, 50, 50);
  pop();

  //hWheel
  push();
  //Rotates based on parameters
  rotate(hAngle);
  //Makes the circle red
  fill(128, 0, 128);
  //Makes circle with radius 25 at (490,490)
  ellipse(90, 90, 50, 50);
  pop();
}
