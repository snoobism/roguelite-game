function ReloadBar(slotId, w, h, colourMax, colourCurrent, offsetY){
	this.slotId = slotId;
	this.w = w;
	this.h = h;
	this.offsetY = offsetY;
	this.progress = 0;
	this.colourMax = colourMax;
	this.colourCurrent = colourCurrent;

	this.draw = function(){
			this.x = character.x - (this.w - character.w) / 2;
			this.y = character.y - offsetY;

			if(this.slotId == 1)
			{
				if(slotOne.reloadTimeout == 1)
				{			
					c.beginPath();
					c.fillStyle = colourMax;
					c.fillRect(this.x, this.y, this.w, this.h);
					
					c.beginPath();
					c.fillStyle = colourCurrent;
					c.fillRect(this.x, this.y, this.progress * this.w / (60 * slotOne.reloadTime / 1000), this.h);
				}
				else if(slotOne.reloadTimeout == 0 && slotOne.clipAmmo == 0)
				{
					c.beginPath();
					c.fillStyle = "white";
					c.font = "bold " + this.h + "px Arial";
					c.fillText("EMPTY", character.x - character.w / 4, character.y - this.h); // this should be modified to be centered based on the final text
				}
			}	
			else if(this.slotId == 2)
			{
				if(slotTwo.reloadTimeout == 1)
				{			
					c.beginPath();
					c.fillStyle = colourMax;
					c.fillRect(this.x, this.y, this.w, this.h);
					
					c.beginPath();
					c.fillStyle = colourCurrent;
					c.fillRect(this.x, this.y, this.progress * this.w / (60 * slotTwo.reloadTime / 1000), this.h);
				}
				else if(slotTwo.reloadTimeout == 0 && slotTwo.clipAmmo == 0)
				{
					c.beginPath();
					c.fillStyle = "white";
					c.font = "bold " + this.h + "px Arial";
					c.fillText("EMPTY", character.x - character.w / 4, character.y - this.h); // this should be modified to be centered based on the final text
				}
			}

	}
}