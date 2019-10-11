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

    character.x = loc_car_x * t;
    character.y = loc_car_y * t;

    weapon.x = character.x + character.r/2;
    weapon.y = character.y + character.r/2;

    for(var i=0 ;i < currentRoom.length; i++)
    {
        for (var j=0; j < currentRoom[0].length; j++)
            {
                if(currentRoom[i][j] == 'w')
                    {
                        wallArray.push(new Wall(t * j, t * i, t));
                    }
                
                if(typeof currentRoom[i][j] == 'number')
                    {
                        enemyArray.push(new Enemy(j * t, i * t, currentRoom[i][j]));
                    }
            }
    }
    bulletArray = []; // delete all bullets

}