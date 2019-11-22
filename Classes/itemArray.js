/*

!!!!!EMPTY VESSEL!!!!!!!

itemArray[] = {
	id : ,
	name : ,
	description : ,
	activeType : ,// passive / one-handed / two-handed / active
	itemImage : , //must give the source

	width : ,
	height : ,

	shotSpeed : ,
	clipAmmo : ,
	clipSize : ,
	firerate : ,
	reloadTime : ,
	bulletDamage : ,
	bulletImage : , //must give the source
	bulletSize : ,


	passive : function(){
	
	},
	
	active : function(){
       
	}
}

*/

itemArray[0] = {
	id : 0,
	name : "The Original",
	description : "Olddie",
	itemType : "active",
	activeType : "oneHand",
	itemImage : weapon_sprite, //must give the source
	itemImageUrl : "url(img/pistol.png)",

	width : 35*1.8/100*t,
	height : 35/100*t,

	shotSpeed : 10.39/100*t,
	clipAmmo : 5,
	clipSize : 5,
	firerate : 300,
	reloadTime : 500,
	bulletDamage : 5,
	bulletImage : char_bullet, //must give the source
	bulletSize : 25/100*t,


	passive : function(){
	},
	active : function(){
        if(this.clipAmmo > 0 && this.reloadTimeout == 0) 
        {
        	if(mouse.x > this.x)
        	{
            	bulletArray.push(new Bullet(this.x + (this.width)* Math.cos(this.angle), this.y + (this.height + this.bulletSize) * Math.sin(this.angle), this.shotSpeed, this.bulletSize, mouse.x, mouse.y, this.bulletImage, this.bulletDamage));
        	}
        	else
        	{
            	bulletArray.push(new Bullet(this.x + (this.width + this.bulletSize)* Math.cos(this.angle), this.y + (this.height + this.bulletSize) * Math.sin(this.angle), this.shotSpeed, this.bulletSize, mouse.x, mouse.y, this.bulletImage, this.bulletDamage));
        	}
            this.clipAmmo--;            
        }

	}
}

itemArray[1] = {
	id : 1,
	name : "The Placeholder",
	description : "This Looks Familiar",
	itemType : "active",
	activeType : "oneHand",
	itemImage : weapon_sprite_2, //must give the source
	itemImageUrl : "url(img/pistol_2.png)",

	width : 35*1.8/100*t,
	height : 35/100*t,

	shotSpeed : 10.39/100*t,
	clipAmmo : 2,
	clipSize : 2,
	firerate : 700,
	reloadTime : 1500,
	bulletDamage : 3,
	bulletImage : char_bullet_2, //must give the source
	bulletSize : 25/100*t,


	passive : function(){},
	active : function(){
        if(this.clipAmmo > 0 && this.reloadTimeout == 0) 
        {
        	if(mouse.x > this.x)
        	{
            	bulletArray[k] = new Bullet(this.x + (this.width)* Math.cos(this.angle), this.y + (this.height + this.bulletSize) * Math.sin(this.angle), this.shotSpeed + character.passiveShotSpeed, this.bulletSize, mouse.x, mouse.y, this.bulletImage, this.bulletDamage + character.passiveDamage);
        	}
        	else
        	{
            	bulletArray[k] = new Bullet(this.x + (this.width + this.bulletSize)* Math.cos(this.angle), this.y + (this.height + this.bulletSize) * Math.sin(this.angle), this.shotSpeed + character.passiveShotSpeed, this.bulletSize, mouse.x, mouse.y, this.bulletImage, this.bulletDamage + character.passiveDamage);
        	}
            k++;
            this.clipAmmo--;            
        }
	}
}

itemArray[2] = {
	id : 2,
	name : "atk up",
	description : "basic passive",
	itemType : "passive",
	activeType : "none",
	itemImage : sword, //must give the source
	itemImageUrl : "url(img/sword.png)",

	width : t * 0.8,
	height : t * 0.8,

	damageUp : 1,
	rangeUp : 0,
	shotSpeedUp : 0,
	velocityUp : 0,


	onPickUp : function(){
		character.passiveDamage = character.passiveDamage + this.damageUp;
		character.passiveRange  = character.passiveRange + this.rangeUp;
		character.passiveShotSpeed = character.passiveShotSpeed + this.shotSpeedUp;
		character.passiveVelocity = character.passiveVelocity + this.velocityUp;
	},
	onLetDown : function(){
		character.passiveDamage = character.passiveDamage - this.damageUp;
		character.passiveRange  = character.passiveRange - this.rangeUp;
		character.passiveShotSpeed = character.passiveShotSpeed - this.shotSpeedUp;
		character.passiveVelocity = character.passiveVelocity - this.velocityUp;
	}
}


