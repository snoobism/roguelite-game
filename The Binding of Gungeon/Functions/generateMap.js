// generates a 2D array with the dungeon outline (general form)
function generateMap()
{
    while(gamestate.mapRooms < 10)
        {
            for(var i=1;i<=gamestate.mapArray.length-2;i++)
                {
                    for(var j=1;j<=gamestate.mapArray[i].length-2;j++)
                        {
                            if(gamestate.mapArray[i][j] == 1)
                                {   
                                    if(Math.random()>0.75 && gamestate.mapArray[i-1][j]==0 && gamestate.mapArray[i-1][j-1]==0 && gamestate.mapArray[i-1][j+1]==0)
                                        {
                                            gamestate.mapArray[i-1][j]=1;
                                            gamestate.mapRooms++;
                                            
                                        }
                                    if(Math.random()>0.75 && gamestate.mapArray[i][j+1]==0 && gamestate.mapArray[i-1][j+1]==0 && gamestate.mapArray[i+1][j+1]==0)
                                        {
                                            gamestate.mapArray[i][j+1]=1;
                                            gamestate.mapRooms++;
                                            
                                        }
                                    if(Math.random()>0.75 && gamestate.mapArray[i+1][j]==0 && gamestate.mapArray[i+1][j-1]==0 && gamestate.mapArray[i+1][j+1]==0)
                                        {
                                            gamestate.mapArray[i+1][j]=1;
                                            gamestate.mapRooms++;
                                           
                                        }
                                    if(Math.random()>0.75 && gamestate.mapArray[i][j-1]==0 && gamestate.mapArray[i-1][j-1]==0 && gamestate.mapArray[i+1][j-1]==0)
                                        {
                                            gamestate.mapArray[i][j-1]=1;
                                            gamestate.mapRooms++;
                                            
                                        }
                                }
                        }
                }
                
        }


    var itemRoomPlaced = 0;

    while(itemRoomPlaced == 0)
    {
        for(var i=2;i<=gamestate.mapArray.length-3;i++)
        {
            for(var j=2;j<=gamestate.mapArray[i].length-3;j++)    
            {
                if(gamestate.mapArray[i][j] == 1 && Math.random() < 0.5)
                {
                    if(checkValidSpecialRoom(i,j) == true)
                    {
                        itemRoomPlaced = 1;
                        break;
                    }
                }
            }
            if(itemRoomPlaced == 1)
            {
                break;
            }
        }
    }

    
}