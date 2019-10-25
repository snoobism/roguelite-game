function Rock(x,y,w,h)
{
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=w;

    this.sprite = rock_sprite;

    this.gridRow = Math.trunc(this.y/t);
    this.gridCol = Math.trunc(this.x/t);
    
    this.draw = function () {
            c.beginPath();
            c.imageSmoothingEnabled = false;

            c.drawImage(this.sprite, 0, 0, 32, 32, this.x, this.y, this.w, this.h);
    }
    
    this.remove= function(){
        var z=blockDoor.indexOf(this);
        blockDoor.splice(z,1);
    }
    
    
}