function Item(roomX, roomY, mapX, mapY, id){
	this.x = roomX;
	this.y = roomY;
	this.w = t;
	this.h = t;
	this.mapX = mapX;
	this.mapY = mapY;
	this.itemId = id;

    var sprite_frame=0; // current frame
    var sprite_frame_switch=1; // check for the final frame

	this.draw = function(){
		
		c.beginPath();
        c.drawImage(item_background, sprite_frame * 32, 0, 32, 32, this.x, this.y, this.w, this.h);
        if (sprite_frame_switch == 1) {
            sprite_frame_switch = 0;
            setTimeout(function () {
                if (sprite_frame >= 6) {
                    sprite_frame = 0;
                    sprite_frame_switch = 1;
                } else {
                    sprite_frame++;
                    sprite_frame_switch = 1;

                }
            }, 200);
        }
        c.drawImage(itemArray[this.itemId].itemImage,this.x +(this.w - itemArray[this.itemId].width)/2,this.y + (this.h - itemArray[this.itemId].height)/2,itemArray[this.itemId].width,itemArray[this.itemId].height);
	}

	this.update = function(){
	}

    this.remove= function(){
        var z=itemClassArray.indexOf(this);
        itemClassArray.splice(z,1);
    }
}