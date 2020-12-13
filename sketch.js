var movingrec,fixedrec,rec1,rec2;
function setup() {
  createCanvas(800,400);
  movingrec =createSprite(400, 200, 50, 50);
  movingrec.shapeColor="yellow"
  fixedrec =createSprite(200, 200, 50, 50);
 fixedrec.shapeColor="yellow"
 rec1=createSprite(100,100,50,50);
 rec1.shapeColor="pink";
 rec1.velocityX=5;
 rec2=createSprite(700,100,50,50);
 rec2.shapeColor="green";
 rec2.velocityX=-5;
}

function draw() {
  background(0,0,0);  
  movingrec.x=World.mouseX;
  movingrec.y=World.mouseY;
  if (isTouching(movingrec,rec2)){
    movingrec.shapeColor="pink";
    rec2.shapeColor="pink";
  }
  else {
    movingrec.shapeColor="yellow";
    rec2.shapeColor="yellow";
  }
bounceOff(rec1,rec2);
  drawSprites();
}
