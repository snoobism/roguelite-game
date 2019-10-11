function Bullet(x,y,v,r,mx,my){
    var adaos_x;
    var adaos_y;
    this.x=x;
    this.y=y;
    this.v=v;
    this.r=r;
    this.mx=mx;
    this.my=my;
    this.angle=Math.atan(Math.abs(this.y-this.my)/Math.abs(this.x-this.mx));
    this.angleRad=this.angle*(Math.PI/180);
    if(this.mx>this.x){
            
            adaos_x= this.v * Math.cos(this.angle);
           
        }
        if(this.my>this.y){
           
            adaos_y= this.v * Math.sin(this.angle);
        }
        if(this.mx<this.x){
            
            adaos_x= -this.v * Math.cos(this.angle);
        }
        if(this.my<this.y){
            
            adaos_y= -this.v * Math.sin(this.angle);
        }
    this.x += adaos_x;
    this.y += adaos_y;
    this.draw = function(){
        c.beginPath();
        c.drawImage(char_bullet, 0, 0, 224, 224, this.x, this.y, this.r, this.r);
    }
    this.update = function () {
        
        
        if (this.x < canvas.width && this.x > 0 && this.y < canvas.height && this.y > 0) {
            this.x += adaos_x;
            this.y += adaos_y;
            
        }else this.remove();
    }
    this.remove= function(){
        var z=bulletArray.indexOf(this);
        bulletArray.splice(z,1);
    }
    
    
}