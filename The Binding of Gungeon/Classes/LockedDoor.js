function LockedDoor(x,y,w)
{
    this.x=x;
    this.y=y;
    this.w=w;
    
    
    
    this.draw=function(i){
        
        var door_frame_switch=1;
        var door_frame=i;
        
        c.beginPath();
        c.drawImage(door_sprite, door_frame * 224, 0, 224, 224, this.x, this.y, this.w, this.w);
       
  
    
}
}