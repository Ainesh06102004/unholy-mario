class Enemy{
    constructor(){
       
    }
    display(){
        var frames;
        if(score<300){
            frames = 100;
        }
        else{
            frames = 40;
        }
        if(frameCount%frames === 0){
            enemies = createSprite(displayWidth + 300, random(200,600), 50,50);
            var result = enemies.collide(ground);
            console.log(result);

            enemies.visible = true;
            var rand = Math.round(random(8,20));
            enemies.velocityX = -(rand);
            enemies.lifetime = displayWidth + 300/rand;
            enemies.scale = 0.2;
            var rand2 = Math.round(random(1,3));
    
            switch(rand2){
            case 1: enemies.addImage("z1",z1);
            break;
    
            case 2: enemies.addImage("z2", z2);
            break;
    
            case 3: enemies.addImage("z3", z3);
            break;
    
            default: break;
            }
               
            
            enemyGroup.add(enemies);
         }
        }
         
         

    
}