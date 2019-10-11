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
            this.v=3;
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
            
            this.checkCollision = function(key)
            {
                var currentRockArray = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].rockArray;
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
                }
                for(var i = 0; i < wallArray.length; i++)
                    {
                        if(intersection(this.x + xAdd, this.y + yAdd, this.w, this.h, wallArray[i].x, wallArray[i].y, wallArray[i].w, wallArray[i].h) == true)
                        {
                            return 1;
                        }
                    }

                if(intersection(this.x + xAdd, this.y + yAdd, this.w, this.h,  character.x, character.y, character.w, character.h) == true)
                    {
                            return 1;
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
            this.update = function()
            {  


                    // if (this.x > character.x - character.w/2 && intersection(character.x, character.y, character.w, character.h, this.x + this.w * 0.1, this.y + this.w * 0.1, this.w * 0.8, this.h * 0.8) == false)
                    // {
                    //     this.x -= this.v;
                    // }else if(intersection(character.x, character.y, character.w, character.h, this.x + this.w * 0.1, this.y + this.w * 0.1, this.w * 0.8, this.h * 0.8) == false){
                    //     this.x += this.v;
                    // }
                    // if(this.y > character.y - character.h/2 && intersection(character.x, character.y, character.w, character.h, this.x + this.w * 0.1, this.y + this.w * 0.4, this.w * 0.8, this.h * 0.8) == false)
                    // {
                    //     this.y -= this.v;
                    // }else if(intersection(character.x, character.y, character.w, character.h, this.x + this.w * 0.1, this.y + this.w * 0.1, this.w * 0.8, this.h * 0.8) == false){
                    //     this.y += this.v;
                    // }
                
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
                    distanceTraversed = 0;
                    console.log(distanceTraversed);
                    allowMoving = 1;
                }
                else if(this.checkCollision(this.path[0]) == 0)
                {
                    this.y += yAdd;
                    this.x += xAdd;
                    console.log(distanceTraversed)
                    distanceTraversed = distanceTraversed + xAdd + yAdd;
                    if(Math.abs(distanceTraversed) >= t)
                    {
                        this.gridRow = Math.trunc((this.y - yAdd)/t);
                        this.gridCol = Math.trunc((this.x - xAdd)/t);
                        allowMoving = 0;
                    }
                }
                    // if(this.checkCollision(this.path[0]) == 0)
                    // {
                    //     if(this.path[0] == "North")
                    //     {
                    //         this.y -= this.v;
                    //     }
                    //     if(this.path[0] == "East")
                    //     {
                    //         this.x += this.v;
                    //     }
                    //     if(this.path[0] == "West")
                    //     {
                    //         this.x -= this.v;
                    //     }
                    //     if(this.path[0] == "South")
                    //     {
                    //         this.y += this.v;
                    //     }
                    // }


                this.updateBodyParts();
            }
        }
    this.remove= function(){
        var z=enemyArray.indexOf(this);
        enemyArray.splice(z,1);
    }
             
}