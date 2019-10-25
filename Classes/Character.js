function Character(x,y,v,w,h)
{
    this.v = v;
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;

    this.colSizeMultiplier = 0.3;
    this.colMarginMultiplier = 0.35;

    this.colX = this.x + this.w * this.colMarginMultiplier;
    this.colY = this.y * this.h * this.colMarginMultiplier;
    this.colW = this.w * this.colSizeMultiplier;
    this.colH = this.h * this.colSizeMultiplier;


    this.gridRow = 5;
    this.gridCol = 6;
    
    this.currentBulletArmour = 5;
    this.currentArmour = 1;
    this.currentHp = 5;
    this.maxHp = 5;
    this.itemArray = [];
    this.invincibility = 1000;

    this.passiveItems =[];
    this.passiveDamage = 0;
    this.passiveVelocity = 0;
    this.passiveRange = 0;
    this.passiveShotSpeed = 0;
/*
    DIRECTION INFO
    direction [x y]
    -1 -1 => NW
    -1  0 => W
    -1  1 => SW

     0 -1 => N
     0  0 => stationary
     0  1 => S

     1 -1 => NE
     1  0 => E
     1  1 => SE
*/

    this.direction = [0, 0];
    var wall_collision_w=0;
    var wall_collision_a=0;
    var wall_collision_s=0;
    var wall_collision_d=0;
    var char_frame=0;
    var char_frame_switch = 1;
    var char_frame_2=0;
    var char_frame_switch_2 = 1;
    this.draw = function () {
  
        if (keys['w'] == true || keys['s'] == true || keys['a'] == true || keys['d'] == true) {
            c.beginPath();
            c.translate(0.5, 0.5);

            c.drawImage(char_sprite_move, char_frame_2 * 133, 0, 133, 203, this.x, this.y, this.w, this.h);
                   c.translate(-0.5, -0.5);

            if (char_frame_switch_2 == 1) {
                char_frame_switch_2 = 0;
                setTimeout(function () {
                    if (char_frame_2 >= 8) {
                        char_frame_2 = 0;
                        char_frame_switch_2 = 1;
                    } else {
                        char_frame_2++;
                        char_frame_switch_2 = 1;

                    }
                }, 71);
            }
        } else {
            c.beginPath();
            c.translate(0.5, 0.5);
            c.drawImage(char_sprite_still, char_frame * 133, 0, 133, 203, this.x, this.y, this.w, this.h);
            c.translate(-0.5, -0.5);
            if (char_frame_switch == 1) {
                char_frame_switch = 0;
                setTimeout(function () {
                    if (char_frame >= 1) {
                        char_frame = 0;
                        char_frame_switch = 1;
                    } else {
                        char_frame++;
                        char_frame_switch = 1;

                    }
                }, 300);
            }
        }
/*
        c.beginPath();
                            c.imageSmoothingEnabled = false;
       c.translate(0.5, 0.5);
        c.drawImage(char_sprite_move, 0, 0, 16, 32, this.x, this.y, this.w, this.h);
       c.translate(-0.5, -0.5);
       */

}

this.drawShadow = function(){
        c.beginPath();
        c.globalAlpha = 0.5;   
        c.drawImage(shadow, 0, 0, 32, 19, this.x , this. y + this.h * 0.825, this.w, this.h * 0.25 );
        c.globalAlpha = 1;  
}

this.checkCollision = function(key)
        {

            var currentRockArray = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].rockArray;
            var xAdd = 0;
            var yAdd = 0;
            switch(key)
            {
                case "d":
                    xAdd += this.v;
                    break;
                case "a":
                    xAdd -= this.v;
                    break;
                case "w":
                    yAdd -= this.v;
                    break;
                case "s":
                    yAdd += this.v; 
                    break;
            }
            for(var i = 0; i < wallArray.length; i++)
                {
                    if(intersection(this.colX + xAdd, this.colY + yAdd, this.colW, this.colH, wallArray[i].x, wallArray[i].y, wallArray[i].w, wallArray[i].h) == true)
                    {
                        return 1;
                    }
                }
            for(var i = 0; i < enemyArray.length; i++)
            {
                if(intersection(this.colX + xAdd, this.colY + yAdd, this.colW, this.colH,  enemyArray[i].x + enemyArray[i].w * 0.3, enemyArray[i].y + enemyArray[i].h * 0.35, enemyArray[i].w * 0.3, enemyArray[i].h * 0.3) == true)
                {
                    return 1;
                }
            }
            for(var i = 0; i < blockDoor.length; i++)
            {
                if(intersection(this.colX + xAdd, this.colY + yAdd, this.colW, this.colH, blockDoor[i].x, blockDoor[i].y, blockDoor[i].w, blockDoor[i].h) == true)
                {
                    return 1;
                }               
            }

            for(var i = 0; i < currentRockArray.length; i++)
            {
                if(intersection(this.colX + xAdd, this.colY + yAdd, this.colW, this.h * this.colSizeMultiplier*2, currentRockArray[i].x, currentRockArray[i].y, currentRockArray[i].w, currentRockArray[i].h) == true)
                {
                    return 1;
                }    
            }
            return 0;
        }
    this.update=function(key_pressed){
        
        this.colX = this.x + this.w * this.colMarginMultiplier;
        this.colY = this.y + this.h * this.colMarginMultiplier;
        this.colW = this.w * this.colSizeMultiplier;
        this.colH = this.h * this.colSizeMultiplier;

        this.v = this.v + this.passiveVelocity;
       
        this.gridRow = Math.trunc((this.y + this.h/2)/t);w
        this.gridCol = Math.trunc((this.x + this.w/2)/t);

        var xBeforeVelocity = this.x;
        var yBeforeVelocity = this.y;

        var checkIntersectionW = 0;
        var checkIntersectionA = 0;
        var checkIntersectionS = 0;
        var checkIntersectionD = 0;
        
        

        switch(key_pressed)
        {

            case "d":
                checkIntersectionD = this.checkCollision(key_pressed);
                if(checkIntersectionD == 0)
                {
                    this.x += this.v;
                }
                break;
            case "a":
                checkIntersectionA = this.checkCollision(key_pressed);
                if(checkIntersectionA == 0)
                {
                    this.x -= this.v;
                }
                break;
            case "w":
                checkIntersectionW = this.checkCollision(key_pressed);
                if(checkIntersectionW == 0)
                {
                    this.y -= this.v;
                }
                break;
            case "s":
                checkIntersectionS = this.checkCollision(key_pressed);
                if(checkIntersectionS == 0)
                {
                    this.y += this.v;
                }
                break;
                
        }
        

        var xDifference = this.x - xBeforeVelocity;
        var yDifference = this.y - yBeforeVelocity;

        if(xDifference > 0)
        {
            this.direction[0] = 1;
        }
        if(xDifference == 0)
        {
            this.direction[0] = 0;
        }
        if(xDifference < 0)
        {
            this.direction[0] = -1;
        }

        if(yDifference > 0)
        {
            this.direction[1] = 1;
        }
        if(yDifference == 0)
        {
            this.direction[1] = 0;
        }
        if(yDifference < 0)
        {
            this.direction[1] = -1;
        }

        c.closePath();
        
    }
    this.remove= function(){
       
        
    }
}