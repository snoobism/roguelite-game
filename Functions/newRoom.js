function newRoom(w,x,y){
    z1 = 5, z2 = 5, z3 = 11, z4 = 11;  
    currentRoom = gamestate.mapRoomArray[x][y].currentRoom;
    wallArray = [];
    for(var i = 0; i < currentRoom.length; i++)
    {
        for (var j=0; j < currentRoom[0].length; j++)
            {
                if(currentRoom[i][j] == 'c')
                    {
                        currentRoom[i][j] = ' ';
                    }
            }
    }

    if(loc_car_y == 5)
    {
        character.x = loc_car_x * t;
        character.y = loc_car_y * t + (t - character.h)/2;        
    }
    else if(loc_car_y == 9 || loc_car_y == 1)
    {
        character.x = loc_car_x * t + (t - character.w)/2;
        character.y = loc_car_y * t;   
    }


    slotOne.x = character.x + character.r/2;
    slotOne.y = character.y + character.r/2;
    for(var i=0 ;i < currentRoom.length; i++)
    {
        for (var j=0; j < currentRoom[0].length; j++)
            {
                if(currentRoom[i][j] == "w")
                    {
                        wallArray.push(new Wall(t * j, t * i, t));
                    }
                
                if(typeof currentRoom[i][j] == 'number' && gamestate.mapRoomVisited[gamestate.mapPosX][gamestate.mapPosY] == 0)
                    {
                        enemyArray.push(new Enemy(j * t, i * t, getRandomInt(1, 2) )); //currentRoom[i][j] instead of random int
                    }
                if(currentRoom[i][j] == "i")
                    {
                        console.log("new Room pushed an item");
                        gamestate.mapRoomArray[x][y].items.push(new Item(j * t, i * t, x, y, 1));
                        gamestate.mapRoomArray[x][y].currentRoom[i][j] = ' ';
                    }
                if(currentRoom[i][j] == "r")
                    {
                        gamestate.mapRoomArray[x][y].rockArray.push(new Rock(j * t, i * t, t, t));
                    }   
                if(currentRoom[i][j].length > 1)
                {
                    if(currentRoom[i][j].substring(0, currentRoom[i][j].indexOf(":")) == 'con')
                    {

                        var consumableId = currentRoom[i][j].substring(currentRoom[i][j].indexOf(":") + 1, currentRoom[i][j].length)
                        gamestate.mapRoomArray[x][y].consumables.push(new Consumable(j * t, i * t, parseInt(consumableId)));
                        gamestate.mapRoomArray[x][y].currentRoom[i][j] = ' ';
                    }   
                    if(currentRoom[i][j].substring(0, currentRoom[i][j].indexOf(":")) == 'b')
                    {

                        var consumableId = currentRoom[i][j].substring(currentRoom[i][j].indexOf(":") + 1, currentRoom[i][j].length)
                        gamestate.mapRoomArray[x][y].bossArray.push(new Boss(j * t, i * t, parseInt(consumableId)));
                        gamestate.mapRoomArray[x][y].currentRoom[i][j] = ' ';
                    }   
                }
            }
    }

    createLockedDoors();
    checkEmptyRoom();
    bulletArray = []; // delete all bullets
    updateMiniMap(gamestate.mapPosX, gamestate.mapPosY);

}