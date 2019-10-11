function animation(){
    if(character.x<0)
        {
            
            gamestate.mapPosY--;
            loc_car_x=11;
            loc_car_y=5;
            newRoom(0,gamestate.mapPosX,gamestate.mapPosY);
            
        }
    if(character.y<0)
        {
            gamestate.mapPosX--;
            loc_car_x=6;
            loc_car_y=9;
            newRoom(0,gamestate.mapPosX,gamestate.mapPosY);
        }
    if(character.x>canvas.width)
        {
            gamestate.mapPosY++;
            loc_car_x=1;
            loc_car_y=5;
            newRoom(0,gamestate.mapPosX,gamestate.mapPosY);
        }
    if(character.y>canvas.height)
        {
            gamestate.mapPosX++;
            loc_car_x=6;
            loc_car_y=1;
            newRoom(0,gamestate.mapPosX,gamestate.mapPosY);
        }
    c.clearRect(0,0,innerWidth,innerHeight);  //clear screen
    if(character.hp>0)
        {
            character.draw();    //draw character
            weapon.draw();    //draw weapon   
        }
    
    for(var i=0;i<=bulletArray.length-1;i++) //draw bullets
        {
            if(bulletArray[i] != undefined)
            {
                bulletArray[i].draw();
            }
        }
    for(var i=0;i<=enemyArray.length-1;i++) //draw enemies
        {
            if(enemyArray[i] != undefined)
            {
                
                enemyArray[i].draw();
            }
        }
    for (var i=0;i<=wallArray.length-1;i++)
    {
        wallArray[i].draw();
    }
    
    if(enemyArray.length!=0)
        {
            blockDoor[0]=new LockedDoor(6*t,0*t,t);
            blockDoor[1]=new LockedDoor(6*t,10*t,t);
            blockDoor[2]=new LockedDoor(0*t,5*t,t);
            blockDoor[3]=new LockedDoor(12*t,5*t,t);
        }

    if (enemyArray.length != 0) {
        if(currentRoom !== 'undefined')
            {
                
            
        if(currentRoom[0][6] != 'w')
            {   
                
                     blockDoor[0].draw(z1);
                
               
                if(ok1==0 && z1>0){   
                    ok1=1;
                   setTimeout(function(){
                    z1--;
                    ok1=0;
                    },50);
                }
            }
        if(currentRoom[10][6] != 'w')
            {   
                blockDoor[1].draw(z2);
                if(ok2==0 && z2>0){   
                    ok2=1;
                   setTimeout(function(){
                    z2--;
                    ok2=0;
                    },50);
                }
            }
        if(currentRoom[5][0] != 'w')
            {   
                blockDoor[2].draw(z3);
                if(ok3==0 && z3>6){   
                    ok3=1;
                   setTimeout(function(){
                    z3--;
                    ok3=0;
                    },50);
                }
            }
        if(currentRoom[5][12] != 'w')
            {   
                blockDoor[3].draw(z4);
                if(ok4==0 && z4>6){  
                    ok4=1;
                   setTimeout(function(){
                    z4--;
                    ok4=0;
                    },50);
                }
                
            }
            }
    }
    
    requestAnimationFrame(animation);
    
    
     if (keys['w'] == true) {
        
        character.update('w');
        weapon.update();
    }
    if (keys['a'] == true) {
        
        character.update('a');
        weapon.update();
    }
    if (keys['s'] == true) {
        
        character.update('s');
        weapon.update();
    }
    if (keys['d'] == true) {
        
        character.update('d');
        weapon.update();
    }
    if (keys['clic'] == true) {
        if (firerate_timeout == 0) {
            bulletArray[k] = new Bullet(character.x+character.w/2, character.y+character.h/2, 13.85/100*t, 25/100*t, mouse.x, mouse.y);
            k++;
            firerate_timeout = 1;
            setTimeout(function () {
                firerate_timeout = 0;
            }, character.firerate);
        }
    }
   
    
    for(var i=0;i<=bulletArray.length-1;i++)  //make bullet move
        {
            if(bulletArray[i] != undefined)
            {
                bulletArray[i].update();
            }
        }
    for(var i=0;i<=enemyArray.length-1;i++)  //make enemy move
        {
            if(enemyArray[i] != undefined)
            {
                
                enemyArray[i].update();
            }
        }
    for (var i = 0; i <= bulletArray.length - 1; i++) { //check impact
        for (var j = 0; j <= enemyArray.length - 1; j++) {
            if (bulletArray[i] != undefined) {
                if (intersection(bulletArray[i].x, bulletArray[i].y, bulletArray[i].r, bulletArray[i].r, enemyArray[j].x, enemyArray[j].y, enemyArray[j].w, enemyArray[j].h)) {

                    bulletArray[i].remove();
                    enemyArray[j].hp--;

                }
            }
        }
    }
    for(var i=0;i<=enemyArray.length-1;i++) //check enemy hp
        {
            if(enemyArray[i].hp <= 0)
            {
                enemyArray[i].remove();
            }
        }
    
    if(character.hp<=0)  //check character hp
        {
            character.remove();
        }
    for(var j=0;j<=enemyArray.length-1;j++)
        {
            if(intersection(character.x, character.y, character.w, character.h, enemyArray[j].x, enemyArray[j].y, enemyArray[j].w, enemyArray[j].h))
                {
                    if(timeout==0)
                        {
                            character.hp--;
                            timeout=1;
                            console.log('a');
                            setTimeout(function(){timeout=0},character.invincibility);
                        }
                    
                }
        }
    
   
    
    }