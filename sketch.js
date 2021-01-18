var bananaimg , obstacleimg , obstacleGroup , backimg, score , monkey , monkeyimg , back , foodGroup , obstaclesGroup , ground , gameover ;

var score=0;

function preload(){

  back = loadImage("jungle.jpg");
  
  monkeyimg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimg = loadImage("banana.png");
  obstacles = loadImage("stone.png");
}

function setup() {
  
createCanvas(800, 400);
  
  backimg = createSprite(0,0,800,400);
  backimg.addImage("backimg",back);
  backimg.scale = 1.5;
  backimg.x = backimg.width /2;
  //backimg.velocityX = -4;
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("running",monkeyimg);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  obstacleGroup = new Group();
  foodGroup = new Group();
  
  score = 0;
  
}

function draw() {
  
  background(255);
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if (backimg.x<100){
    backimg.x = backimg.width/2;
  }
  
  if(foodGroup.isTouching(monkey)){
      foodGroup.destroyEach();
    score = score + 2;
    }
  
  switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
  
   
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles(); 
  
  if(obstacleGroup.isTouching(monkey)) {
    monkey.scale = 0.08;
    //score = score - 2;
  }
  
    
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:",+ score, 150, 100);
}

function spawnFood() {
  
  if(frameCount % 80 === 0){
   var banana = createSprite(600,250,40,20);
   banana.addImage(bananaimg); 
   banana.scale =0.05; 
   banana.y = random(120,200);
   banana.velocityX = -5;
   banana.lifetime = 300;
   foodGroup.add(banana);
   monkey.depth = banana.depth + 1; 
  }
  
}

function spawnObstacles() {
  
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage("stone",obstacles);
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
  
}  
  
  //https://editor.p5js.org/rupin/sketches/5e1hYE4iZ


//https://editor.p5js.org/ramya.aswadhati/sketches/EhIeIiTT_
