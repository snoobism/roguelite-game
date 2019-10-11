function Wall(x,y,w)
{
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=w;
    this.random=getRandomInt(0, 4);
    this.random2=getRandomInt(7, 11);
    this.random3=getRandomInt(13, 17);
    this.random4=getRandomInt(19, 23);
    
    this.draw = function () {

        if (this.x == 0 && this.y == 0) {
            c.beginPath();

            c.drawImage(wall_sprite, 5 * 224, 0, 224, 224, this.x, this.y, this.w, this.w);
        }
        if (this.y == 0 && (this.x > 0 && this.x < t * 12)) {
            c.beginPath();
            c.drawImage(wall_sprite, this.random * 224, 0, 224, 224, this.x, this.y, this.w, this.w);
        }
        if (this.x == t * 12 && this.y == 0) {
            c.beginPath();
            c.drawImage(wall_sprite, 6 * 224, 0, 224, 224, this.x, this.y, this.w, this.w);
        }
        if(this.x == t*12 && this.y>0 && this.y<10*t)
            {
                c.beginPath();
            c.drawImage(wall_sprite, this.random2 * 224, 0, 224, 224, this.x, this.y, this.w, this.w);
            }
        if (this.x == t * 12 && this.y == 10*t) {
            c.beginPath();
            c.drawImage(wall_sprite, 12 * 224, 0, 224, 224, this.x, this.y, this.w, this.w);
        }
        if(this.y == t*10 && this.x>0 && this.x<12*t)
            {
                c.beginPath();
                c.drawImage(wall_sprite, this.random3 * 224, 0, 224, 224, this.x, this.y, this.w, this.w);
            }
        if(this.y== t*10 && this.x==0)
            {
                c.beginPath();
                c.drawImage(wall_sprite, 18 * 224, 0, 224, 224, this.x, this.y, this.w, this.w);
            }
        if(this.x==0&&this.y>0&&this.y<10*t)
            {
                c.beginPath();
                c.drawImage(wall_sprite, this.random4 * 224, 0, 224, 224, this.x, this.y, this.w, this.w);
            }
    }
    
    this.remove= function(){
        var z=blockDoor.indexOf(this);
        blockDoor.splice(z,1);
    }
    
    
}