function Character(x,y,v,w,h)
{
    this.v = v*2;
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    
    this.currentHp = 5;
    this.maxHp = 15;
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
            c.drawImage(char_sprite_move, char_frame_2 * 133, 0, 133, 203, this.x, this.y, this.w, this.h);
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
            c.drawImage(char_sprite_still, char_frame * 133, 0, 133, 203, this.x, this.y, this.w, this.h);
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

}
    this.update=function(key_pressed){
        
        this.v = this.v + this.passiveVelocity;
       
        var xBeforeVelocity = this.x;
        var yBeforeVelocity = this.y;
        
        switch(key_pressed)
        {
            case "d":
                if ((this.x < previousCanvasWidth -this.w - t -this.v ) && !((this.x > 7 * t -this.v - this.w && this.y > 0 && this.y < t) || (this.x > 7 * t -this.v - this.w && this.y+this.w > 10 * t && this.y < 11 * t))) {
                    this.x += this.v;
                } else if (this.y > 5 * t && this.y < 6 * t - this.h  && enemyArray.length==0 && currentRoom[5][12] != 'w') {
                    this.x += this.v;
                }
                break;
            case "a":
                if((this.x > t + this.v) && !((this.x < 6 * t +this.v  && this.y > 0 && this.y < t) || (this.x < 6 * t +this.v && this.y+this.w > 10 * t && this.y < 11 * t)))
                    {
                        this.x -= this.v;
                    }else if (this.y > 5*t && this.y <6*t-this.h && enemyArray.length==0 && currentRoom[5][0] != 'w')
                        {
                            this.x -= this.v;
                        }
                break;
            case "w":
                if((this.y > t+this.v)  && !((this.y <= 5 * t +this.v   && this.x > 0 && this.x < t) || (this.y <= 5 * t +this.v && this.x+this.w > 12 * t && this.x-this.w < 13 * t)))
                    {
                        this.y -= this.v;
                    }else if (this.x > 6*t && this.x <7*t-this.w && enemyArray.length==0 && currentRoom[0][6] != 'w')
                        {
                            this.y -= this.v;
                        }
                break;
            case "s":
                if((this.y < previousCanvasHeight-this.h-this.v-t)  && !((this.y > 6 * t -this.v - this.h && this.x > 0 && this.x < t) || (this.y > 6 * t -this.v - this.h && this.x+this.w > 12 * t && this.x < 13 * t)) )
                    {
                        this.y += this.v;
                    }else if (this.x > 6*t && this.x <7*t-this.w && enemyArray.length==0 && currentRoom[10][6] != 'w')
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