var one;
var two;

function setup() {
  createCanvas(1200,800);
  one = createSprite(200, 200, 50, 50);
  one.shapeColor = "blue";

  two = createSprite(1000, 200, 100, 100);
  two.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

  two.x = World.mouseX;
  two.y = World.mouseY;

  if( two.x - one.x < (one.width + two.width) / 2 && one.x - two.x < (one.width + two.width) / 2 && 
  two.y - one.y < (one.height + two.height) / 2 && one.y - two.y < (one.height + two.height) / 2){
   two.shapeColor = "red";
  }

  else{
   two.shapeColor = "blue";
  }

  drawSprites();
}