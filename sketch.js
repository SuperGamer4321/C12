var trex, trex_running, edges;
var groundImage;
var ground; 
var invisibleGrnd;
var rand;
var cloud , cloudImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);
  
  // creating trex, properties & function
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  trex.x = 50
    
  ground = createSprite(300,190,600,10);
  ground.velocityX = -3
  ground.addImage("grnd" , groundImage)
  ground.x = ground.width/2;

  invisibleGrnd = createSprite(300,197,600,10);
  invisibleGrnd.visible = false

  //random() ===> generate random no b/w 0 to 1
  //rand = Math.round(random(1,2));
  //console.log(rand);
}


function draw(){
  //set background color 
  background("white");
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  //logging the y position of the trex
  //console.log(trex.y);
  
  //jump when space key is pressed and the trex.y > 140
  if(keyDown("space") && trex.y > 140){
    trex.velocityY = -10;
  }
  


  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleGrnd);

  //creating clouds
  spawnClouds();

  drawSprites();
  //depth
}

function spawnClouds(){
  if(frameCount%80===0){
    cloud = createSprite(600,10,10,10);
    cloud.velocityX = -3;
    cloud.addImage("clouds" , cloudImage);
    cloud.scale = 0.5;
    cloud.y = Math.round(random(10,70));
    cloud.depth = trex.depth;
    trex.depth += 1;
  }
}