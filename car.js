let yCars=[45,96,150,210,270,318];
let xCars=[600,600,600,600,600,600];
let velocityCars=[2,3,2.5,1,3.5,4];
let lengthCar=50;
let heightCar=40;

function showCar(){
  for(let i = 0;i < imageCar.length; i++){
  image(imageCar[i],xCars[i],yCars[i],lengthCar,heightCar);
  }}
function moveCar(){
  for(let i = 0;i < imageCar.length; i++){
    xCars[i]-=velocityCars[i]*level;
  }}
function returnCarStart(){
 for(let i = 0;i < imageCar.length; i++){
  if(carPassedScreen(xCars[i])){
    xCars[i]=600;
  }}}
function carPassedScreen(xCars){
  return xCars <- 50;
}
