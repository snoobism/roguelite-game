function newRoom(w,x,y){
    z1 = 5, z2 = 5, z3 = 11, z4 = 11;  
    currentRoom = gamestate.mapRoomArray[x][y];
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
                        enemyArray.push(new Enemy(j * t, i * t, currentRoom[i][j]));
                    }
                if(currentRoom[i][j] == "i")
                    {
                        console.log("new Room pushed an item");
                        itemClassArray.push(new Item(j * t, i * t, x, y, 2));
                        gamestate.mapRoomArray[x][y][i][j] = ' ';
                    }
            }
    }
    bulletArray = []; // delete all bullets
    updateMiniMap(gamestate.mapPosX, gamestate.mapPosY);

}