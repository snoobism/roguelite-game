function drawShadows(){
    
    character.drawShadow();

    for(var i = 0; i < enemyArray.length; i++)
    {
        if(enemyArray[i] != undefined)
        {
            enemyArray[i].drawShadow();
        }
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

function drawEnemyBullets(){

    /*
    bulletArray[] - array to store Character's Bullet objects
    */

    for(var i = 0; i <= bulletEnemyArray.length - 1; i++)
    {
        if(bulletEnemyArray[i] != undefined)
        {
            bulletEnemyArray[i].draw();
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

function drawRocks(){
    var currentRockArray = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].rockArray;
    for (var i=0; i < currentRockArray.length; i++)
    {
        currentRockArray[i].draw();
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
    for(var i = 0; i < gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].items.length; i++)
    {
            if(gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].items[i] != undefined)
            {
                gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].items[i].draw();
            }
    }
}

function drawConsumables(){
    for(var i = 0; i < gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].consumables.length; i++)
    {
            if(gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].consumables[i] != undefined)
            {
                gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY].consumables[i].draw();
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

function drawBosses(){

    var currentRoom = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY];
    for(var i = 0; i < currentRoom.bossArray.length; i++)  //make enemy move
        {
            if(currentRoom.bossArray[i] != undefined)
            {
                
                currentRoom.bossArray[i].draw();
            }
        }
}

function drawLockedDoors(){
    
    /*
    enemyArray[] - array to store Enemy objects
    
    */
    var currentRoomClass = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY];

    if (enemyArray.length != 0 || currentRoomClass.bossArray.length != 0) 
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