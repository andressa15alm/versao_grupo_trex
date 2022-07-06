//crie as variaveis
var ground,groundImg,groundInvisivel;
var trex,trexCorrendo;

function preload(){
  //adicione a animação
 trexCorrendo=loadAnimation("trex1.png","trex3.png","trex4.png");
 groundImg=loadImage("ground2.png");
}

function setup() {
  createCanvas(600,200)
  
  //criar sprite do ground
  ground=createSprite(305,180,600,10);
  ground.x=ground.width/2;
  ground.addImage(groundImg);

  groundInvisivel=createSprite(305,190,600,10);
  groundInvisivel.visible=false;

  //criar a sprite do trex
  trex=createSprite(200,150,30,30);
  trex.addAnimation("correndo",trexCorrendo);
  trex.scale=0.5;
}

function draw() {
  background(180);
 //adicione o controle de pulo
 if(keyDown("space")&& trex.y>=149){
  trex.velocityY=-10;
 }
//adicione gravidade
  trex.velocityY=trex.velocityY+0.8;

  //velocidade do solo
  ground.velocityX=-2;

  //retorno do solo
  if(ground.x<0){
    ground.x=ground.width/2;
  }
   
//adicione a colisão com o ground
  trex.collide(groundInvisivel);
  drawSprites();
}
