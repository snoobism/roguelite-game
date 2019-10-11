function Character(x,y,v,w,h)
{
    this.x=x;
    this.y=y;
    this.v=v;
    this.w=w;
    this.h=h;
    this.hp=5;
    this.invincibility=1000;
    this.firerate=300;
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
        
       
        
        
        switch(key_pressed)
        {
            case "d":
                if ((this.x < canvas.width -this.w - t -this.v ) && !((this.x > 7 * t -this.v - this.w && this.y > 0 && this.y < t) || (this.x > 7 * t -this.v - this.w && this.y+this.w > 10 * t && this.y < 11 * t))) {
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
                if((this.y < canvas.height-this.h-this.v-t)  && !((this.y > 6 * t -this.v - this.h && this.x > 0 && this.x < t) || (this.y > 6 * t -this.v - this.h && this.x+this.w > 12 * t && this.x < 13 * t)) )
                    {
                        this.y += this.v;
                    }else if (this.x > 6*t && this.x <7*t-this.w && enemyArray.length==0 && currentRoom[10][6] != 'w')
                        {
                            this.y += this.v;
                        }
                break;
                
        }
        
        c.closePath();
        
    }
    this.remove= function(){
       
        
    }
}