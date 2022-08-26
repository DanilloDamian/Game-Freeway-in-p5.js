
let pauseGame= false;

function setup() {
  createCanvas(500, 400);
  backgroundSound.loop();
}

function draw() {
  background(roadImage);
  showPlayer();
  showCar();
  if(pauseGame==false){
    moveCar();
  movePlayer();}
  returnCarStart();
  checkCollision();
  score();
  increaseScore();
  keyPressed();
  instructions()
}

function keyPressed() {
  if (keyCode == 32) {
    pauseGame = true;
  } else if (keyCode == 13) {
    pauseGame = false;
  }
}

function instructions(){
  textSize(15);
  fill(color(255,255,100))
   text("Use arrow keys to move",110,385 )
  textSize(12);
  text("Press space to pause and enter to return",380,385 )
}



