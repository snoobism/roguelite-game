function Enemy(x,y,id)
{
    this.x=x;
    this.y=y;
     switch (id)
     {
         case 1:
             this.w=t;
             this.h=t;
             this.v=2;
             this.hp=5;
             this.sprite=enemy1_sprite;
             var sprite_frame=0;
             var sprite_frame_switch=1;
             
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
             
             this.update = function()
             {
                 if (this.x > character.x && intersection(character.x, character.y, character.w, character.h, this.x, this.y, this.w, this.h) == false)
                 {
                     this.x -= this.v;
                 }else if(intersection(character.x, character.y, character.w, character.h, this.x, this.y, this.w, this.h) == false){
                     this.x += this.v;
                 }
                 if(this.y > character.y && intersection(character.x, character.y, character.w, character.h, this.x, this.y, this.w, this.h) == false)
                 {
                    this.y -= this.v;
                 }else if(intersection(character.x, character.y, character.w, character.h, this.x, this.y, this.w, this.h) == false){
                    this.y += this.v;
                 }
             }
             break;
        }
    this.remove= function(){
        var z=enemyArray.indexOf(this);
        enemyArray.splice(z,1);
    }
             
}