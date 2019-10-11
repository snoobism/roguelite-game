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
    if(character.currentHp>0)
    {

        character.draw(); 
        if(slotOne.empty == 0)
        {
            slotOne.draw();    
        }
        if(slotTwo.empty == 0)
        {
            slotTwo.draw();
        }
    }
}

function drawItems(){
    for(var i = 0; i < itemClassArray.length; i++)
    {
        if(itemClassArray[i].mapX == gamestate.mapPosX && itemClassArray[i].mapY == gamestate.mapPosY)
        {
            if(itemClassArray[i] != undefined)
            {
                itemClassArray[i].draw();
            }
        }
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
    reloadBarOne.draw();
    if(slotOne.reloadTimeout == 1)
    {
        reloadBarOne.progress += 1;
    }
    reloadBarTwo.draw();
    if(slotTwo.reloadTimeout == 1)
    {
        reloadBarTwo.progress += 1;
    }
}

function checkKeysPressed(){
	
	if (keys['w'] == true) {
        
        character.update('w');
        slotOne.update();
        slotTwo.update();
    }

    if (keys['a'] == true) {
        
        character.update('a');
        slotOne.update();
        slotTwo.update();
    }

    if (keys['s'] == true) {
        
        character.update('s');
        slotOne.update();
        slotTwo.update();
    }

    if (keys['d'] == true) {
        
        character.update('d');
        slotOne.update();
        slotTwo.update();
    }

    if (keys['clic1'] == true) {
        if (slotOne.useTimeout == 0)
        {
            slotOne.active();
            slotOne.useTimeout = 1;
            setTimeout(function () {
                slotOne.useTimeout = 0;
            }, slotOne.firerate);
        }
    }
    if (keys['clic2'] == true) {
        if (slotTwo.useTimeout == 0)
        {   
            slotTwo.active();
            slotTwo.useTimeout = 1;
            setTimeout(function () {
                slotTwo.useTimeout = 0;
            }, slotTwo.firerate);
        }
    }

    if(keys['r'] == true && slotOne.reloadTimeout == 0 && slotOne.clipAmmo != slotOne.clipSize)
    {
        slotOne.reloadTimeout = 1;
        setTimeout(function(){
            slotOne.clipAmmo = slotOne.clipSize;
            slotOne.reloadTimeout = 0;
            reloadBarOne.progress = 0;
        }, slotOne.reloadTime)
    }
    if(keys['r'] == true && slotTwo.reloadTimeout == 0 && slotTwo.clipAmmo != slotTwo.clipSize)
    {
        slotTwo.reloadTimeout = 1;
        setTimeout(function(){
            slotTwo.clipAmmo = slotTwo.clipSize;
            slotTwo.reloadTimeout = 0;
            reloadBarTwo.progress = 0;
        }, slotTwo.reloadTime)
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

                    enemyArray[j].hp = enemyArray[j].hp - bulletArray[i].damage;
                    bulletArray[i].remove();

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
    if(character.currentHp <= 0)  //check character hp
        {
            character.remove();
        }
}

function checkCharacterImpact(){
	for(var j = 0; j < enemyArray.length; j++)
        {
            if(intersection(character.x, character.y, character.w, character.h, enemyArray[j].x, enemyArray[j].y, enemyArray[j].w, enemyArray[j].h))
                {
                    if(timeout == 0)
                        {
                            character.currentHp--;
                            updateCharacterHpBar();
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
        gamestate.mapRoomVisited[gamestate.mapPosX][gamestate.mapPosY] = 1;
    }
}

function checkItemIntersection(){
    for(var j = 0; j < itemClassArray.length; j++)
    {
        if(intersection(character.x, character.y, character.w, character.h, itemClassArray[j].x, itemClassArray[j].y, itemClassArray[j].w, itemClassArray[j].h) && itemClassArray[j].mapX == gamestate.mapPosX && itemClassArray[j].mapY == gamestate.mapPosY && itemPickUpTimeout == 0)
            {
                // pickup item
                itemPickUpTimeout = 1;
                setTimeout(function(){
                    itemPickUpTimeout = 0;
                }, 2000);
                if(itemArray[itemClassArray[j].itemId].itemType == "active")
                    {
                        pushBack(itemClassArray[j]);
                        currentClassItemPickedId = itemClassArray[j].itemId;
                        currentClassItemPickedIndex = j;
                        var slotOneEmptyFlag = slotOne.empty;//slotOne.empty before pick-up
                        var slotTwoEmptyFlag = slotTwo.empty;//slotTwo.empty before pick-up 
                        pickUpItem(itemClassArray[j]);

                        if(slotOneEmptyFlag || slotTwoEmptyFlag)
                        {
                            itemClassArray[j].remove();
                        }
                    }
                else if(itemArray[itemClassArray[j].itemId].itemType == "passive")
                {
                    giveItem("passive", itemClassArray[j].itemId);
                    itemClassArray[j].remove();
                }
            }
    }
}

function updateCharacterHpBar(){
    var i = document.getElementById("health").childElementCount;
    console.log(character.currentHp);
    while(i != character.maxHp)
    {
        if(i < character.maxHp){
            var heart = document.createElement("div");
            heart.id = "heart_cont" + i;
            heart.style.position = "relative";
            heart.style.display = "inline-block";
            heart.style.width = 5 + "vh";
            heart.style.height = 5 + "vh";
            heart.style.marginLeft = "1vh";
            heart.style.marginTop = "1vh";
            heart.style.backgroundImage = "url(img/heart_empty.png)"
            heart.style.backgroundSize = "contain";
            heart.style.backgroundRepeat = "no-repeat";
            heart.style.backgroundPosition = "center";
            heart.style.zIndex = 1;
            document.getElementById("health").appendChild(heart);
            i++;
        }
        else if(i > character.maxHp){
            document.getElementById("heart_cont" + i).remove();
            i--;
        }
    }

    for(var i = 0; i < character.maxHp; i++)
    {
        if(i < character.currentHp){

            document.getElementById("heart_cont" + i).style.backgroundImage = "url(img/heart_full.png)";
        
        }
        else{

            document.getElementById("heart_cont" + i).style.backgroundImage = "url(img/heart_empty.png)";
        }

    }
}