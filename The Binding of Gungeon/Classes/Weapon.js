function Weapon (x,y,v,w,h)
{
    this.x=character.x+character.w/2;
    this.y=character.y+character.h/2;
    this.v=v;
    this.w=w;
    this.h=h;
    this.angle=Math.atan(Math.abs(character.y+character.h-mouse.y)/Math.abs(character.x+character.w-mouse.x));
    this.angleRad=this.angle*(Math.PI/180);
    this.draw=function(){
        c.save();
        c.beginPath();
        c.fillStyle='darkblue';
        c.translate( this.x, this.y);
        c.rotate(this.angle);
        if(mouse.x<this.x)
            {
                c.scale(1, -1);
                c.drawImage(weapon_sprite,0,0,w,h);
                c.scale(1, -1);
            }else {c.drawImage(weapon_sprite,0,0,w,h);}
        
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
        
        this.x=character.x+character.w/2;
        this.y=character.y+character.h/2;
        
        }
        
}