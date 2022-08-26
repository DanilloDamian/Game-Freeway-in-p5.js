
function setup() {
  createCanvas(500, 400);
  backgroundSound.loop();
}

function draw() {
  background(roadImage);
  showPlayer();
  showCar();
  moveCar();
  movePlayer();
  returnCarStart();
  checkCollision();
  score();
  increaseScore();
  
}






