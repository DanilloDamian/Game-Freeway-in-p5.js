let xPlayer= 230;
let yPlayer= 375;
let collision=false;
let myPoints=0;
let level=1;

function showPlayer(){
  image(playerImage, xPlayer,yPlayer,30,30);
}
function movePlayer(){
  if(keyIsDown(UP_ARROW)){
    yPlayer-=3;
  }
   if(keyIsDown(DOWN_ARROW)){
   if(canMove()){ yPlayer+=3;
  }}
   if(keyIsDown(LEFT_ARROW)){
    xPlayer-=3;
  }
   if(keyIsDown(RIGHT_ARROW)){
    xPlayer+=3;
  }
}
function checkCollision(){
for(let i =0; i< imageCar.length; i++){
  collision = collideRectCircle(xCars[i],yCars[i],lengthCar,heightCar,xPlayer, (yPlayer+20),15)
  if(collision){
    returnPlayer();
    collisionSound.play();
    myPoints=0;
    level=1;
  }}}
function returnPlayer(){
  yPlayer = 375;
  xPlayer=230;
}
function score(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,100))
  text(myPoints,width/5,25);
     }
function increaseScore(){
  if(yPlayer<15){
    myPoints+=1;
    pointSound.play();
    returnPlayer();
    addLevel()
    
}}
function canMove(){
  return yPlayer<375;
}
function addLevel(){
  level+=0.3;
  
}