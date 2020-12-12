var monkey , monkey_running
var bananaGroup ,bananaImage, obstaclesGroup, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime;

function preload(){

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  createCanvas(400, 400);
  
  monkey =createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();

  SurvivalTime=0;
  
}

function draw() {
  
  background("white")
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
   }
  
  monkey.velocityY = monkey.velocityY + 0.8 ;
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+SurvivalTime,100,50);
  
  spawnobstacle();
  spawnbanana();
  
  drawSprites ();

}

function spawnobstacle (){
  
if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,330,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacleGroup.add(obstacle);
  
  }
      
}

function spawnbanana(){
  if (frameCount % 190 === 0) {
    var banana = createSprite(400,150,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 300;
    bananaGroup.add(banana);
  }
}