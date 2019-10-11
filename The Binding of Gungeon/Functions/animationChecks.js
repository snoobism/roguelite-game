function screenResizeCheck(){

    /*
    RESIZE_CANVAS - flag for resize
    canvas.width/height - new canvas size
    previousCanvasWidth/Height - initial canvas size
    */

    if(RESIZE_CANVAS == 1)
    {
        c.scale(canvas.width / previousCanvasWidth, canvas.width / previousCanvasWidth);
        RESIZE_CANVAS = 0;
    }
}

function exitRoomCheck(){

    /*
    gamestate.mapPosX/Y - map coordinates of Character
    loc_car_x/y - room coordinates to spawn the Character in
    */

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
    if(character.x > previousCanvasWidth)
        {
            gamestate.mapPosY++;
            loc_car_x=1;
            loc_car_y=5;
            newRoom(0,gamestate.mapPosX,gamestate.mapPosY);
        }
    if(character.y > previousCanvasHeight)
        {
            gamestate.mapPosX++;
            loc_car_x=6;
            loc_car_y=1;
            newRoom(0,gamestate.mapPosX,gamestate.mapPosY);
        }
}

function drawCharacterBullets(){

    /*
    bulletArray[] - array to store Character's Bullet objects
    */

    for(var i = 0; i <= bulletArray.length - 1; i++)
    {
        if(bulletArray[i] != undefined)
        {
            bulletArray[i].draw();
        }
    }
}

function drawWalls(){

    /*
    wallArray[] - array to store the Wall objects
    */

    for (var i=0;i<=wallArray.length-1;i++)
    {
        wallArray[i].draw();
    }
}

function drawCharacter(){
    if(character.hp>0)
    {

        character.draw(); 
        weapon.draw();    
    }
}

function drawEnemies(){

    /*
    enemyArray[] - array to store Enemy objects
    */

    for(var i = 0;i <= enemyArray.length - 1; i++) 
    {
        if(enemyArray[i] != undefined)
        {
            
            enemyArray[i].draw();
        }
    }
}

function createLockedDoors(){

    /*
    enemyArray[] - array to store Enemy objects
    blockDoor[] - array to store LockedDoor objects
    */

    if(enemyArray.length != 0)
    {
        blockDoor[0] = new LockedDoor(6 * t, 0 * t, t);
        blockDoor[1] = new LockedDoor(6 *t , 10 * t, t);
        blockDoor[2] = new LockedDoor(0 * t, 5 * t, t);
        blockDoor[3] = new LockedDoor(12 * t, 5 * t, t);
    }
}

function drawLockedDoors(){
    
    /*
    enemyArray[] - array to store Enemy objects
    
    */
    
	if (enemyArray.length != 0) 
	{
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
}

function drawReloadBar(){
    reloadBar.draw();
    if(weapon.reloadTimeout == 1)
    {
        reloadBar.progress += 1;
    }
}

function checkKeysPressed(){
	
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
        if (weapon.firerate_timeout == 0 && weapon.clipAmmo > 0 && weapon.reloadTimeout == 0) {
            bulletArray[k] = new Bullet(weapon.x + weapon.w * Math.cos(weapon.angle), weapon.y + weapon.h * Math.sin(weapon.angle), 13.85/100*t, 25/100*t, mouse.x, mouse.y);
            k++;
            weapon.firerate_timeout = 1;
            weapon.clipAmmo--;
            setTimeout(function () {
                weapon.firerate_timeout = 0;
            }, weapon.firerate);
        }
    }

    if(keys['r'] == true && weapon.reloadTimeout == 0 && weapon.clipAmmo != weapon.clipSize)
    {
        weapon.reloadTimeout = 1;
        setTimeout(function(){
            weapon.clipAmmo = weapon.clipSize;
            weapon.reloadTimeout = 0;
            reloadBar.progress = 0;
        }, weapon.reloadTime)
    }
}

function updateBullets(){
	for(var i = 0; i <= bulletArray.length - 1; i++)  //make bullet move
        {
            if(bulletArray[i] != undefined)
            {
                bulletArray[i].update();
            }
        }
}

function updateEnemies(){
    for(var i = 0; i <= enemyArray.length - 1; i++)  //make enemy move
        {
            if(enemyArray[i] != undefined)
            {
                
                enemyArray[i].update();
            }
        }
}

function checkBulletImpact(){
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
}

function checkEnemyHp(){
    for(var i = 0; i <= enemyArray.length - 1;i ++) //check enemy hp
        {
            if(enemyArray[i].hp <= 0)
            {
                enemyArray[i].remove();
            }
        }
}

function checkCharacterHp(){
    if(character.hp <= 0)  //check character hp
        {
            character.remove();
        }
}

function checkCharacterImpact(){
	for(var j = 0; j <= enemyArray.length - 1; j++)
        {
            if(intersection(character.x, character.y, character.w, character.h, enemyArray[j].x, enemyArray[j].y, enemyArray[j].w, enemyArray[j].h))
                {
                    if(timeout == 0)
                        {
                            character.hp--;
                            timeout = 1;
                            setTimeout(function(){
                            	timeout = 0;
                            }, character.invincibility);
                        }
                    
                }
        }
}

function checkEmptyRoom(){
    if(enemyArray.length == 0)
    {
        gamestate.mapRoomVisited[gamestate.mapPosX][gamestate.mapPosY] = 0;
    }
}