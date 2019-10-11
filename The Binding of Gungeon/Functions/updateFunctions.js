function updateBullets(){
	for(var i = 0; i < bulletArray.length; i++)  //make bullet move
        {
            if(bulletArray[i] != undefined)
            {
                bulletArray[i].update();
            }
        }
}

function updateEnemies(){
    for(var i = 0; i < enemyArray.length; i++)  //make enemy move
        {
            if(enemyArray[i] != undefined)
            {
                
                enemyArray[i].update();
            }
        }
}

function updateBosses(){
    var currentRoom = gamestate.mapRoomArray[gamestate.mapPosX][gamestate.mapPosY];
    for(var i = 0; i < currentRoom.bossArray.length; i++)  //make enemy move
        {
            if(currentRoom.bossArray[i] != undefined)
            {
                
                currentRoom.bossArray[i].update();
            }
        }
}

