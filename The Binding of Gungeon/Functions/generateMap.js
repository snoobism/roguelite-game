// generates a 2D array with the dungeon outline (general form)
function generateMap()
{
    while(gamestate.mapRooms < 10)
        {
            for(var i=0;i<=gamestate.mapArray.length-2;i++)
                {
                    for(var j=0;j<=gamestate.mapArray[i].length-2;j++)
                        {
                            if(gamestate.mapArray[i][j] != 0)
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
}