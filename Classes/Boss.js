function Boss(x, y, id){
	this.x = x;
	this.y = y;
	switch(id){
		case 1:
		this.w = 3 * t;
		this.h = 3 * t;

		this.v = 0;
		this.hp = 20;

        this.sprite = enemy1_sprite;

		var sprite_frame=0;
        var sprite_frame_switch=1;

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

		this.draw = function(){
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

		this.update = function(){
			var num = getRandomInt(0,3)
			{
				if(num == 0)
				{
					this.x += this.v * 5;
				}
				if(num == 1)
				{
					this.x -= this.v * 5;
				}
				if(num == 2)
				{
					this.y += this.v * 5;
				}
				if(num == 3)
				{
					this.y -= this.v * 5;
				}
			}
		}

	    this.remove= function(){
	        var z=gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].bossArray.indexOf(this);
	        gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].bossArray.splice(z,1);
		}
			break;
			
	}
}