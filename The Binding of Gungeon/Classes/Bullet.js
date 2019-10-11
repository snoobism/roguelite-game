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

    this.id = Date.now() + Math.random();
    

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



    var currentRoom = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY];

    this.x += adaos_x;
    this.y += adaos_y;
    this.draw = function(){
        c.beginPath();
        c.drawImage(img, 0, 0, 224, 224, this.x, this.y, this.r, this.r);
    }
    this.update = function () {
            for (var j = 0; j < enemyArray.length; j++) {
                for(var k = 0; k < enemyArray[j].bodyParts.length; k++)
                {
                    if (intersection(this.x, this.y, this.r, this.r, enemyArray[j].bodyParts[k].x, enemyArray[j].bodyParts[k].y, enemyArray[j].bodyParts[k].w, enemyArray[j].bodyParts[k].h)) {

                        enemyArray[j].hp = enemyArray[j].hp - this.damage;
                        this.remove();
                        j = 999;
                    }
                }
            }

            for(var j = 0; j < currentRoom.bossArray.length; j++)
            {
                for(var k = 0; k < currentRoom.bossArray[j].bodyParts.length; k++)
                {
                    if (intersection(this.x, this.y, this.r, this.r, currentRoom.bossArray[j].bodyParts[k].x, currentRoom.bossArray[j].bodyParts[k].y, currentRoom.bossArray[j].bodyParts[k].w, currentRoom.bossArray[j].bodyParts[k].h)) {

                        currentRoom.bossArray[j].hp = currentRoom.bossArray[j].hp - this.damage;
                        this.remove();
                        j = 999;

                    }
                }
            }

            for(var j = 0; j < currentRoom.rockArray.length; j++)
            {
                if (intersection(this.x, this.y, this.r, this.r, currentRoom.rockArray[j].x, currentRoom.rockArray[j].y, currentRoom.rockArray[j].w, currentRoom.rockArray[j].h)) {
                    this.remove();
                    j = 999;
                }
            }
        
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