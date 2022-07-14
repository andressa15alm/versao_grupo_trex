//crie as variaveis
var GAME=1;
var OVER=0;
var gameState=GAME;
var ground,groundImg,groundInvisivel;
var trex,trexCorrendo;
var nuvemImg;
var cac1,cac2,cac3,cac4,cac5,cac6;
var pontos=0;

function preload(){
  //adicione a animação
 trexCorrendo=loadAnimation("trex1.png","trex3.png","trex4.png");
 groundImg=loadImage("ground2.png");
 nuvemImg=loadImage("cloud.png");

 cac1=loadImage("obstacle1.png");
 cac2=loadImage("obstacle2.png");
 cac3=loadImage("obstacle3.png");
 cac4=loadImage("obstacle4.png");
 cac5=loadImage("obstacle5.png");
 cac6=loadImage("obstacle6.png");
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
  //pontos na tela
  text("Pontuação:"+pontos,500,20);
  pontos=pontos+Math.round(frameCount/60);
  //ESTADO DO JOGO
  if( gameState===GAME){
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

      //chamada de função
    GerarNuvens();
    gerarCactos()
    drawSprites();

  } else if(gameState===OVER){
    ground.velocityX=0;
  
  }
   
//adicione a colisão com o ground
trex.collide(groundInvisivel);
   
}

function GerarNuvens(){

  if(frameCount %60===0){
    
    var nuvem=createSprite(600,50,10,10);
    nuvem.velocityX=-3;
    nuvem.addImage(nuvemImg);
    nuvem.scale=0.4;
    nuvem.y=Math.round(random(10,100));

  //profundidade
  nuvem.depth=trex.depth;
  trex.depth=trex.depth+1;

  //tempo de vida
  nuvem.lifetime=200;
  
  }
 
}


function gerarCactos(){
  if(frameCount %60===0){

    var cacto=createSprite(600,165,10,10);
    cacto.velocityX=-3;

    //switch
    //gerar cactos
    var rand=Math.round(random(1,6));

    switch(rand){
      case 1:cacto.addImage(cac1);
              break;
      case 2:cacto.addImage(cac2);
              break;
      case 3:cacto.addImage(cac3); 
              break;
      case 4:cacto.addImage(cac4);
              break;
      case 5:cacto.addImage(cac5);
              break;
      case 6:cacto.addImage(cac6);
              break
      default: break;                    
    }

    cacto.scale=0.5;
    cacto.lifetime=200;
  }
}
