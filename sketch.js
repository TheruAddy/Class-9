var box
function setup() {
  createCanvas(400,400);
 
}

function draw() 
{
  background("yellow");
  if(keyIsDown(RIGHT_ARROW))  {
    background("red")

  }
  if(keyIsDown(LEFT_ARROW))  {
    background("purple")
  }
  if(keyIsDown(UP_ARROW)) {
    background("green")
  
  }
  if(keyIsDown(DOWN_ARROW)) {
    background("blue")
  }
drawSprites()
}




