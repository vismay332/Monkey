var banana,bananaImage,foodgroup;
var monkey,monkeyImage;
var obstacle,obstacleImage,obstacleGroup;
var backgrounda;
var Iground,ground;
var score=0;
var END=0;
var PLAY=1;
var gameState=PLAY;

function preload(){
monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
bananaImage=loadImage("banana.png");
obstacleImage=loadImage("stone.png")

 }

function setup() {
  createCanvas(400, 400);
  monkey=createSprite(200,200,0,0);
  monkey.addAnimation("a",monkeyImage);
  monkey.scale=0.15;
  
  banana=createSprite(250,200,0,0);
  banana.addAnimation("a",bananaImage);
  banana.scale=0.15;
  
  obstacle=createSprite(300,200,0,0);
  obstacle=createSprite("b",obstacleImage);
  obstacle.scale=0.15;
  
  Iground=createSprite(400,200,400,10);
  Iground.visible=false;
  
  ground=createSprite(400,200,400,40);
  
 
  
}

function draw() {
  background(220);
  
  if(gameState===PLAY){
  if (monkey.isTouching(foodgroup)) {
 foodgroup.destroyEach();
 playSound("sound://category_hits/puzzle_game_button_01.mp3");
  score=score+2;
  }
  food();
  stone();

  monkey.collide(Iground);
  
  if(keyDown("space") && monkey.y >= 388.95){
      monkey.velocityY = -14 ;
      playSound("jump.mp3");
    }

    monkey.velocityY = monkey.velocityY + 0.8;
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
if(monkey.isTouching(rockgroup)){
gameState=END;
playSound("sound://category_tap/negative_select_2.mp3");
}
}
  
else if (gameState===END) {
 rockgroup.destroyEach();
 foodgroup.destroyEach();
 monkey.destroy();
 ground.destroy();
 
 textFont("Times New Roman");
 textSize(24);
 text("GAME OVER", 130, 200);
 
}

  drawSprites();
 textSize(24);
 text("score : "+ score, 130, 100);
}

function food(){
  if(frameCount % 80 === 0) {
    banana = createSprite(400,365,10,40);
    banana.addAnimation("Ba",bananaImage);
   
    banana.velocityX=-6;
    
    var rand = Math.round(random(1,6));
    switch(score) {
      case 10: monkey.scale=0.12
              break;
      case 20: monkey.scale=0.14
              break;
      case 30: monkey.scale=0.16
              break;
      case 40: monkey.scale=0.18
              break;
      case 50: monkey.scale=0.20
              break;
      case 60: monkey.scale=0.22
              break;
       case 70: monkey.scale=0.24
              break;
      case 80: monkey.scale=0.26
              break;
      case 90: monkey.scale=0.28
              break;
      case 100: monkey.scale=0.30
              break;
      case 110: monkey.scale=0.32
              break;
      case 120: monkey.scale=0.34
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.15 ;
    banana.lifetime = 80;
    
    banana.y=randomNumber(320,370);
    
    
    //add each obstacle to the group
   foodgroup.add(banana);
     
  } 
}

function stone(){
  if(frameCount % 150 === 0) {
     rock = createSprite(400,350,10,40);
    rock.setAnimation("Stone",obstacleImage);
   
    rock.velocityX=-6;
              
    rock.scale = 0.15 ;
    rock.lifetime = 80;

    rockgroup.add(rock);
     
  } 
}