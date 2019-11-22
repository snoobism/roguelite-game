function Consumable(x, y, id){
	
	this.w = t/2;
	this.h = t/2;

	this.x = x + (t - this.w)/2;
	this.y = y + (t - this.h)/2;

	var sprite_frame_max;
	
	var sprite_frame_switch = 1;
	var sprite_frame = 0;
	
	switch(id)
	{
		case 0: //normal hp
			
			this.sprite = health_ball;
			sprite_frame_max = 5;

		    this.onPickUp = function()
			{	
				if(character.currentHp < character.maxHp)
				{
					character.currentHp++;
					updateCharacterHpBar();
					this.remove();
				}
			}

			break;
		
		case 1: //armour
			
			this.sprite = armour;
			sprite_frame_max = 0;

		    this.onPickUp = function()
			{	

					character.currentArmour++;
					updateCharacterHpBar();
					this.remove();
				
			}

			break;

		case 2: //bullet armour
			
			this.sprite = bullet_armour;
			sprite_frame_max = 0;

		    this.onPickUp = function()
			{	

					character.currentBulletArmour++;
					if(slotOne.empty == 0)
					{
						slotOne.clipSize++;
						slotOne.clipAmmo++;
					}
					if(slotTwo.empty == 0)
					{
						slotTwo.clipSize++;
						slotTwo.clipAmmo++;
					}
					updateCharacterHpBar();
					this.remove();
				
			}


			break;
	}


	this.draw = function()
    {
        c.beginPath();
        c.drawImage(this.sprite, sprite_frame * 32, 0, 32, 32, this.x, this.y, this.w, this.h);
        if (sprite_frame_switch == 1) {
            sprite_frame_switch = 0;
            setTimeout(function () {
                if (sprite_frame >= sprite_frame_max) {
                    sprite_frame = 0;
                    sprite_frame_switch = 1;
                } else {
                    sprite_frame++;
                    sprite_frame_switch = 1;

                }
            }, 100);
        }
    }

	this.remove = function()
	{
        var z=gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].consumables.indexOf(this);
        gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].consumables.splice(z,1);
    }
}