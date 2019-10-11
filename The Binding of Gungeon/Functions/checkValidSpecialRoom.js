function checkValidSpecialRoom(i, j){

	if(gamestate.mapArray[i][j-1] == 0 && Math.random() < 0.25)
	{
		if(gamestate.mapArray[i][j -1 -1] != 1 && gamestate.mapArray[i + 1][j-1] != 1 && gamestate.mapArray[i - 1][j-1] != 1)
		{
			gamestate.mapArray[i][j-1] = 3;
			return true;
		}
	}
	else if(gamestate.mapArray[i][j + 1] == 0 && Math.random() < 0.25)
	{
		if(gamestate.mapArray[i][j+1 + 1] != 1 && gamestate.mapArray[i + 1][j+1] != 1 && gamestate.mapArray[i - 1][j+1] != 1)
		{
			gamestate.mapArray[i][j+1] = 3; 
			return true;
		}
	}	
	else if(gamestate.mapArray[i - 1][j] == 0 && Math.random() < 0.25)
	{
		if(gamestate.mapArray[i-1 - 1][j] != 1 && gamestate.mapArray[i - 1][j + 1] != 1 && gamestate.mapArray[i - 1][j - 1] != 1)
		{
			gamestate.mapArray[i-1][j] = 3;
			return true;
		}
	}
	else if(gamestate.mapArray[i + 1][j] == 0 && Math.random() < 0.25)
	{
		if(gamestate.mapArray[i+1 + 1][j] != 1 && gamestate.mapArray[i + 1][j + 1] != 1 && gamestate.mapArray[i + 1][j - 1] != 1)
		{
			gamestate.mapArray[i+1][j] = 3;
			return true;
		}
	}
	return false;

}
