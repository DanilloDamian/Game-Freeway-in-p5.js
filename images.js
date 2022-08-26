let roadImage;
let playerImage;
let carImage;
let carImage2;
let carImage3;

let backgroundSound;
let pointSound;
let collisionSound;

function preload(){
  roadImage= loadImage("images/estrada.png");
  playerImage = loadImage("images/ator-1.png");
  carImage = loadImage("images/carro-1.png");
  carImage2 = loadImage("images/carro-2.png");
  carImage3 = loadImage("images/carro-3.png");
  imageCar= [carImage,carImage2,carImage3,carImage,carImage2,carImage3];
  backgroundSound = loadSound("sounds/trilha.mp3");
 pointSound = loadSound("sounds/pontos.wav");
collisionSound = loadSound("sounds/colidiu.mp3");
}