var bg,bgImg,thor,thorImg
function preload(){
bgImg=loadImage("assets/bg.jpeg");
thorImg=loadImage("assets/thor1.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(displayWidth/2,displayHeight/2,20,20);
  bg.addImage(bgImg);
  thor=createSprite(displayWidth-1000,displayHeight-300,50,50);
  thor.addImage(thorImg);
  thor.scale=0.5;
  thor.debug=true;
  thor.setCollider("rectangle",20,20,300,600)

  
}

function draw() {
  background(0);  
 if(keyDown("W")||touches.length>0){
   thor.y = thor.y-30;
 }
 if(keyDown("S")||touches.length>0){
  thor.y = thor.y+30;
 }
  drawSprites();
}