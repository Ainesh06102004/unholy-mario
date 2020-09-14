class Player{
    constructor(){
       this.image = loadImage("images/back2.jpg");
       this.playerimage = loadImage("images/player.png");
       this.groundimage = loadImage("images/ground.jpg")
       
    }
    display(){
        gamebg.addImage("gamebackground", this.image);
        gamebg.visible = true;
        
        ground.addImage("groundimage", this.groundimage);
        ground.scale = 2;

        player1.collide(ground);
        player1.addImage("playerimage", this.playerimage);
        player1.scale = 0.15;
        player1.visible = true;
        ground.visible = true;
        if(ground.x < 0){
            ground.x = displayWidth/2;
        }
        if(gamebg.x < -600){
            gamebg.x = displayWidth/2 + 1300;
        }


        if(keyDown("space")){
            player1.velocityY = -15;
            
        }
        /*if(player1.y < 100){
            player1.velocityY = 0;
        }*/ 
        player1.velocityY = player1.velocityY + 1;  
         
    }
}