function screenResizeCheck(){

    /*
    RESIZE_CANVAS - flag for resize
    canvas.width/height - new canvas size
    previousCanvasWidth/Height - initial canvas size
    */


    if(RESIZE_CANVAS == 1)
    {
        document.getElementById("canvas").style.width = Math.ceil(window.innerHeight * 13/11) + "px";
        document.getElementById("canvas").style.height = window.innerHeight + "px";
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


function createLockedDoors(){

    /*
    enemyArray[] - array to store Enemy objects
    blockDoor[] - array to store LockedDoor objects
    */
    var currentRoom = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY];

    if(enemyArray.length != 0 || currentRoom.bossArray.length != 0)
    {
        blockDoor[0] = new LockedDoor(6 * t, 0 * t, t);
        blockDoor[1] = new LockedDoor(6 *t , 10 * t, t);
        blockDoor[2] = new LockedDoor(0 * t, 5 * t, t);
        blockDoor[3] = new LockedDoor(12 * t, 5 * t, t);
    }
}

function checkEnemyHp(){
    for(var i = 0; i <= enemyArray.length - 1;i ++) //check enemy hp
        {
            if(enemyArray[i].hp <= 0)
            {
                enemyArray[i].remove();
                checkEmptyRoom();

            }
        }
}

function checkBossHp(){
    var currentRoom = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY];
    for(var i = 0; i < currentRoom.bossArray.length;i ++) //check enemy hp
        {
            if(currentRoom.bossArray[i].hp <= 0)
            {
                currentRoom.bossArray[i].remove();
                checkEmptyRoom();

            }
        }
}

function checkCharacterHp(){
    if(character.currentHp <= 0)  //check character hp
        {
            character.remove();
        }
}

function characterTakeDamage(enemy){
    if(timeout == 0)
        {
            if(character.currentBulletArmour > 0)
            {
                character.currentBulletArmour--;    
                if(slotOne.empty == 0)
                {
                    slotOne.clipSize--;
                    if(slotOne.clipAmmo > slotOne.clipSize)
                    {
                        slotOne.clipAmmo--;
                    }
                }
                if(slotTwo.empty == 0)
                {
                    slotTwo.clipSize--;
                    if(slotTwo.clipAmmo > slotTwo.clipSize)
                    {
                        slotTwo.clipAmmo--; 
                    }
                }
            }
            else
            if(character.currentArmour > 0)
            {
                character.currentArmour--;
            }
            else
            {
                character.currentHp--;
            }
            updateCharacterHpBar();
            timeout = 1;
            setTimeout(function(){
                timeout = 0;
            }, character.invincibility);
        }
}

function checkCharacterImpact(){
    var currentBossArray = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].bossArray;

	for(var j = 0; j < enemyArray.length; j++)
        {
            for(var k = 0; k < enemyArray[j].bodyParts.length; k++)
            {
                if(intersection(character.x, character.y, character.w, character.h, enemyArray[j].bodyParts[k].x, enemyArray[j].bodyParts[k].y, enemyArray[j].bodyParts[k].w, enemyArray[j].bodyParts[k].h))
                    {
                        characterTakeDamage(enemyArray[j]);
                    }
            }
        }

    for(var j = 0; j < currentBossArray.length; j++)
        {
            for(var k = 0; k < currentBossArray[j].bodyParts.length; k++)
            {
                if(intersection(character.x, character.y, character.w, character.h, currentBossArray[j].bodyParts[k].x, currentBossArray[j].bodyParts[k].y, currentBossArray[j].bodyParts[k].w, currentBossArray[j].bodyParts[k].h))
                    {
                        characterTakeDamage(currentBossArray[j]);
                    }
            }
        }
}

function checkEmptyRoom(){
    if(enemyArray.length == 0 && gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].bossArray.length == 0)
    {
        gamestate.mapRoomVisited[gamestate.mapPosX][gamestate.mapPosY] = 1;
        blockDoor = [];
    }
}

function checkItemIntersection(){
    itemClassArray = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].items; 
    for(var j = 0; j < itemClassArray.length; j++)
    {
        if(intersection(character.x, character.y, character.w, character.h, itemClassArray[j].x, itemClassArray[j].y, itemClassArray[j].w, itemClassArray[j].h) && itemPickUpTimeout == 0)
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

function checkConsumableIntersection(){
    consumableClassArray = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].consumables; 
    for(var j = 0; j <consumableClassArray.length; j++)
    {
        if(intersection(character.x, character.y, character.w, character.h, consumableClassArray[j].x, consumableClassArray[j].y, consumableClassArray[j].w, consumableClassArray[j].h))
            {
                consumableClassArray[j].onPickUp();
            }
    }
}

