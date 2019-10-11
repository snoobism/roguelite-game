function ReloadBar(){
	this.w = t;
	this.h = t/5;
	this.progress = 0;

	this.draw = function(){
			this.x = character.x - (this.w - character.w) / 2;
			this.y = character.y - this.h * 1.5;

			if(weapon.reloadTimeout == 1)
			{			
				c.beginPath();
				c.fillStyle = "red";
				c.fillRect(this.x, this.y, this.w, this.h);
				
				c.beginPath();
				c.fillStyle = "green";
				c.fillRect(this.x, this.y, this.progress * this.w / 60, this.h);
			}
			else if(weapon.reloadTimeout == 0 && weapon.clipAmmo == 0)
			{
				c.beginPath();
				c.fillStyle = "white";
				c.font = "bold " + this.h + "px Arial";
				c.fillText("EMPTY", character.x - character.w / 4, character.y - this.h); // this should be modified to be centered based on the final text
			}


	}
}