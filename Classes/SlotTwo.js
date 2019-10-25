function SlotTwo ()
{
    this.empty = 1;
    this.x = character.x - character.w / 2;
    this.y = character.y - character.h / 2;
    this.width;
    this.height;
    this.angle=Math.atan(Math.abs(character.y+character.h-mouse.y)/Math.abs(character.x+character.w-mouse.x));
    this.angleRad=this.angle * (Math.PI / 180);

    this.itemId;
    this.itemImage;
    this.itemImageUrl;

    this.useTimeout = 0;
    this.reloadTimeout = 0;
    
    this.shotSpeed;
    this.clipAmmo;
    this.clipSize;
    this.firerate;
    this.reloadTime;
    this.bulletDamage;
    this.bulletImage;
    this.bulletSize;

    this.activeType;

    this.passive = function(){

    }

    this.active = function(){
 
    }

    this.draw = function(){
        c.save();
        c.beginPath();
        c.fillStyle='darkblue';

        if(mouse.x<this.x)
            {
                c.translate(this.x, this.y);
                c.rotate(this.angle);
                c.scale(1, -1);
                c.translate(-this.x, -this.y);
                c.drawImage(this.itemImage,this.x,this.y,this.width,this.height);
                c.scale(1, -1);
            }else 
            {
                c.translate( this.x, this.y);
                c.rotate(this.angle);
                c.translate(-this.x, -this.y);
                c.drawImage(this.itemImage,this.x,this.y,this.width,this.height);
            }
        
        c.restore();
    }
    
    this.update=function(){
        
        this.angle=Math.atan(Math.abs(character.y+character.h-mouse.y)/Math.abs(character.x+character.w-mouse.x));
        this.angleRad=this.angle*(Math.PI/180);
        if(this.x<mouse.x && this.y>mouse.y)
            {
                this.angle= -this.angle;
            }
        if(this.x>mouse.x && this.y>mouse.y)
            {
                this.angle+=Math.PI;
            }
        if(this.x>mouse.x && this.y<mouse.y)
            {
                this.angle=-(this.angle+Math.PI);
            }
        if(this.x<mouse.x && this.y<mouse.y)
            {
                this.angle=(this.angle);
            }
        
        this.x=character.x;
        this.y=character.y+ (character.h - this.height)/2;
        
        }
}