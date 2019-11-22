function Enemy(x,y,id, arrayIndex)
{
    this.x=x;
    this.y=y;
     switch (id)
     {
        case 1:
            this.w=t * 0.8;
            this.h=t * 0.8;
            this.x=x + (t-this.w)/2;
            this.y=y + (t-this.h)/2;
            this.v=7;
            this.hp=5;
            this.sprite=enemy1_sprite;
            this.gridRow = 0;
            this.gridCol = 0;
            var sprite_frame=0;
            var sprite_frame_switch=1;

            this.gridRow = Math.trunc(this.y/t);
            this.gridCol = Math.trunc(this.x/t);  

            this.bodyParts = [];

            this.path = [];
            
            this.updateBodyParts = function(){
                this.bodyParts = [
                    {
                        x: this.x + 21/196 * this.w,
                        y: this.y + 63/196 * this.h,
                        w: 155/196 * this.w, 
                        h: 84/196 * this.h
                    },
                    {
                        x: this.x + 35/196 * this.w,
                        y: this.y + 147/196 * this.h,
                        w: 126/196 * this.w,
                        h: 18/196 * this.h
                    },
                    {
                        x: this.x + 56/196 * this.w,
                        y: this.y + 165/196 * this.h,
                        w: 84/196 * this.w,
                        h: 24/196 * this.h
                    }

                ];
            }
            this.updateBodyParts();
            
            this.draw = function()
            {
  

                c.beginPath();
                c.drawImage(this.sprite, sprite_frame * 203, 0, 203, 196, this.x, this.y, this.w, this.h);
                if (sprite_frame_switch == 1) {
                    sprite_frame_switch = 0;
                    setTimeout(function () {
                        if (sprite_frame >= 1) {
                            sprite_frame = 0;
                            sprite_frame_switch = 1;
                        } else {
                            sprite_frame++;
                            sprite_frame_switch = 1;

                        }
                    }, 200);
                }
             }
            

            this.drawShadow = function(){
                c.beginPath();
                c.globalAlpha = 0.5;   
                c.drawImage(shadow, 0, 0, 32, 19, this.x , this. y + this.h, this.w, this.h * 0.25 );
                c.globalAlpha = 1;
            }

            var currentRockArray = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].rockArray;
            
            this.checkCollision = function(key, exception, rushX, rushY)
            {
                var xAdd = 0;
                var yAdd = 0;
                switch(key)
                {
                    case "East":
                        xAdd += this.v;
                        break;
                    case "West":
                        xAdd -= this.v;
                        break;
                    case "North":
                        yAdd -= this.v;
                        break;
                    case "South":
                        yAdd += this.v; 
                        break;
                    default: 
                        xAdd = rushX;
                        yAdd = rushY;
                        break;
                }
                for(var i = 0; i < wallArray.length; i++)
                    {
                        if(intersection(this.x + xAdd, this.y + yAdd, this.w, this.h, wallArray[i].x, wallArray[i].y, wallArray[i].w, wallArray[i].h) == true)
                        {
                            return 1;
                        }
                    }
                if(exception == undefined)
                    {
                        if(intersection(this.x + xAdd, this.y + yAdd, this.w, this.h,  character.x + character.w * 0.35, character.y + character.h * 0.35, character.w * 0.3, character.h * 0.3 ) == true)
                        {
                            return 1;
                        }
                    }
                        
                for(var i = 0; i < blockDoor.length; i++)
                {
                    if(intersection(this.x + xAdd, this.y + yAdd, this.w, this.h, blockDoor[i].x, blockDoor[i].y, blockDoor[i].w, blockDoor[i].h) == true)
                    {
                        return 1;
                    }               
                }

                for(var i = 0; i < currentRockArray.length; i++)
                {
                    if(intersection(this.x + xAdd, this.y + yAdd, this.w, this.h, currentRockArray[i].x, currentRockArray[i].y, currentRockArray[i].w, currentRockArray[i].h) == true)
                    {
                        return 1;
                    }    
                }
                return 0;
            }

            var cnt = 0;
            var allowMoving = 0;
            var xAdd, yAdd = 0;
            var distanceTraversed = 0;
            var previousDirection = [];
            this.update = function()
            {  
                if(allowMoving == 0)
                {
                    yAdd = 0;
                    xAdd = 0;
                    startPathFind(enemyArray[0], character);
                    if(this.path[0] == "North")
                    {
                        yAdd -= this.v;
                    }
                    if(this.path[0] == "East")
                    {
                        xAdd += this.v;
                    }
                    if(this.path[0] == "West")
                    {
                        xAdd -= this.v;
                    }
                    if(this.path[0] == "South")
                    {
                        yAdd += this.v;
                    }
                    allowMoving = 1;
                }
                else if(this.path.length == 0) //close the distance on the character
                {
                    if(this.x + this.w/2 <= character.x + character.w/2)    
                        xAdd += this.v;   
                    else
                        xAdd -= this.v;

                    if(this.y + this.h/2 <= character.y + character.h/2)    
                        yAdd += this.v;
                    else
                        yAdd -= this.v;

                    if(!this.checkCollision("", 1, xAdd, yAdd) && intersection(this.x + xAdd, this.y + yAdd, this.w, this.h,  character.x + character.w * 0.35, character.y + character.h * 0.35, character.w * 0.3, character.h * 0.3) == false)
                    {
                        this.x += xAdd;
                        this.y += yAdd;
                    }
                    allowMoving = 0;
                }
                else if(this.checkCollision(this.path[0]) == 0)
                {
                    this.y += yAdd;
                    this.x += xAdd;
                    if(previousDirection[0] != this.path[0])
                    {
                        previousDirection[1] = previousDirection[0];
                        previousDirection[0] = this.path[0];
                    }
                    console.log(previousDirection);
                    this.gridCol = Math.trunc((this.x + this.w/2)/t);
                    this.gridRow = Math.trunc((this.y + this.h/2)/t);
                    allowMoving = 0;
                }
                else if(this.checkCollision(previousDirection[1]) == 0)
                {
                    if(previousDirection[1] == "North")
                    {
                        this.y -= this.v;
                    }
                    if(previousDirection[1] == "East")
                    {
                        this.x += this.v;
                    }
                    if(previousDirection[1] == "West")
                    {
                        this.x -= this.v;
                    }
                    if(previousDirection[1] == "South")
                    {
                        this.y += this.v;
                    }


                    allowMoving = 0;
                }                
                else if(this.checkCollision(previousDirection[0]) == 0)
                {
                    if(previousDirection[0] == "North")
                    {
                        this.y -= this.v;
                    }
                    if(previousDirection[0] == "East")
                    {
                        this.x += this.v;
                    }
                    if(previousDirection[0] == "West")
                    {
                        this.x -= this.v;
                    }
                    if(previousDirection[0] == "South")
                    {
                        this.y += this.v;
                    }


                    allowMoving = 0;
                }


                this.updateBodyParts();
            }
            break; // basic melee enemy
        case 2:
            this.w=t * 0.8;
            this.h=t * 0.8;
            this.x=x + (t-this.w)/2;
            this.y=y + (t-this.h)/2;
            this.v=0;
            this.hp=5;
            this.sprite=ranged;

            this.angle=Math.atan(Math.abs(character.y+character.h-this.y)/Math.abs(character.x+character.w-this.x));
            this.angleRad=this.angle * (Math.PI / 180);

            this.shotSpeed = 0.1*t;
            this.reloadTime = 15;
            this.reloadCounter = 0;
            this.bulletDamage = 5;
            this.bulletImage = enemy_bullet;//must give the source
            this.bulletSize = 25/100*t;

            this.attackTimeout = 1;

            this.bodyParts = [];

            this.updateBodyParts = function(){
                this.bodyParts = [
                    {
                        x: this.x,
                        y: this.y,
                        w: this.w, 
                        h: this.h
                    }

                ];
            }
            this.updateBodyParts();
            
            this.draw = function()
            {
                c.beginPath();
                c.drawImage(this.sprite, 0, 0, 32, 32, this.x, this.y, this.w, this.h);
             }
            

            this.drawShadow = function(){
                c.beginPath();
                c.globalAlpha = 0.5;   
                c.drawImage(shadow, 0, 0, 32, 19, this.x , this. y + this.h, this.w, this.h * 0.25 );
                c.globalAlpha = 1;
            }

            var currentRockArray = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].rockArray;
            
            this.update = function()
            {  
                if(this.reloadCounter == this.reloadTime)
                {
                    this.reloadCounter = 0;
                    this.attackTimeout = 0;
                }

                this.reloadCounter++;

                if(this.attackTimeout == 0)
                {
                    if(character.x > this.x)
                    {
                        bulletEnemyArray.push(new BulletEnemy(this.x + this.w/2, this.y + this.h/2, this.shotSpeed, this.bulletSize, character.x, character.y, this.bulletImage, this.bulletDamage));
                    }
                    else
                    {
                        bulletEnemyArray.push(new BulletEnemy(this.x + this.w/2, this.y + this.h/2, this.shotSpeed, this.bulletSize, character.x, character.y, this.bulletImage, this.bulletDamage));
                    }

                    this.attackTimeout = 1;

                }
            }
        }
    this.remove= function(){
        var z=enemyArray.indexOf(this);
        enemyArray.splice(z,1);
    }
             
}