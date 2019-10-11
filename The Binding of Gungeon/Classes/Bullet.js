function Bullet(x,y,v,r,mx,my, img, dmg){
    var adaos_x;
    var adaos_y;
    this.mx=mx;
    this.my=my;
    this.x=x;
    this.y=y;
    this.v=v;
    this.r=r;
    this.imgSource = img;
    this.damage = dmg;

    this.angle = Math.atan(Math.abs(this.y - this.my) / Math.abs(this.x - this.mx)); // in PI
    this.angleDeg = this.angle * (180/Math.PI); // in DEG
    this.angleRad = this.angle * (Math.PI/180); // in RAD

    

    console.log(this.angleDeg);
    if(this.mx>x){
            
        adaos_x= this.v * Math.cos(this.angle); 
    }
    if(this.my>y){
           
        adaos_y= this.v * Math.sin(this.angle);
    }
    if(this.mx<x){
        
        adaos_x= -this.v * Math.cos(this.angle);
    }
    if(this.my<y){
        
        adaos_y= -this.v * Math.sin(this.angle);
    }




    this.x += adaos_x;
    this.y += adaos_y;
    this.draw = function(){
        c.beginPath();
        c.drawImage(img, 0, 0, 224, 224, this.x, this.y, this.r, this.r);
    }
    this.update = function () {
        
        
        if (this.x < previousCanvasWidth && this.x > 0 && this.y < previousCanvasHeight && this.y > 0) {
            this.x += adaos_x;
            this.y += adaos_y;
            
        }else this.remove();
    }
    this.remove= function(){
        var z=bulletArray.indexOf(this);
        bulletArray.splice(z,1);
    }
    
    
}