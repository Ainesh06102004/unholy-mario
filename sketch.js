var login, player, screennumber, player1, ground, gamebg, groundimg, zombiegroup, enemy, bulletImg, bulletsound;
var z1,z2,z3, enemies;
var bulletGroup, enemyGroup;
var score;


function preload(){
   z1 = loadImage("images/zombie 1.png");
   z2 = loadImage("images/zombie2.png");
   z3 = loadImage("images/zombie3.png");

   bulletImg = loadImage("images/bullet.png");

   bulletsound = loadSound("sound/gunshot.mp3");
}

function setup(){
   var canvas = createCanvas(displayWidth -1.25,displayHeight-4);
   login = new Login();
   screennumber = 0;

   gamebg = createSprite(displayWidth/2 ,displayHeight/2 , displayWidth ,displayHeight );
   gamebg.visible = false;
   gamebg.velocityX =-2;

   ground = createSprite(displayWidth/2,900, displayWidth + 400, 10);
   ground.visible = false;
   ground.shapeColor = "black";
   ground.velocityX = -5;

   player1 = createSprite(200,-50,10,10);
   player1.visible = false;
   
   //enemies = createSprite(displayWidth/2,900, 500,500);
   //enemies.visible = false;

   bulletGroup = new Group();
   enemyGroup = new Group();

   score = 0;
  
}   
   
function draw(){

   if(screennumber === 0 ){
      login.display();
      
  }else if(screennumber === 1  ){
      player.display();
      if(enemyGroup.isTouching(ground)){
         enemyGroup.setVelocityYEach(0);
      }
      else{
         enemyGroup.setVelocityYEach(2);
      }
      enemy.display();
      if(bulletGroup.isTouching(enemyGroup)){
         bulletGroup.destroyEach();
         enemyGroup.destroyEach();
         score = score + 100;
      }
      else if(enemyGroup.isTouching(player1)){
         console.log("works");
         screennumber = 2;
      }
     

   }
   else if(screennumber === 2){
      player1.destroy();
      ground.velocityX = 0;
      gamebg.velocityX = 0;
      enemyGroup.destroyEach();
      
      
   }

  var edges = createEdgeSprites();
  player1.bounceOff(edges[1]);

  drawSprites();

  if(screennumber === 2){
   textSize(25);
   fill("black");
   text("GAME ENDED, WE'LL GET EM' NEXT TIME", displayWidth/2 - 300, displayHeight/2 )
  }


 if(screennumber === 1){
   textSize(25);
   fill ("white");
   //this.scoredisplay.html("Score: "+ score, displayWidth - 500, 50);
   text("Score: "+ score, displayWidth - 300, 50);
  }
  
}

function mouseReleased(){  
   if(screennumber === 1){
      console.log(player1.position.y);
      var bullet = createSprite(200,player1.position.y -18,10,10);
      bullet.velocityX = 80;
      console.log(bullet);
      bullet.addImage("bullet", bulletImg);
      bullet.scale = 0.03;
      bulletsound.play();
      bullet.lifetime = displayWidth/60; 
      bulletGroup.add(bullet);
      
   }
   
}