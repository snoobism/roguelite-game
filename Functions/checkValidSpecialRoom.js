function checkValidSpecialRoom(i, j, type){
	if(type == "itemRoom")
	{
		var roomValue = 3;
	}
	else if(type == "bossRoom")
	{
		var roomValue = 4;
	}

	if(gamestate.mapArray[i][j-1] == 0 && Math.random() < 0.25)
	{
		if(gamestate.mapArray[i][j -1 -1] == 0 && gamestate.mapArray[i + 1][j-1] == 0 && gamestate.mapArray[i - 1][j-1] == 0)
		{
			gamestate.mapArray[i][j-1] = roomValue;
			return true;
		}
	}
	else if(gamestate.mapArray[i][j + 1] == 0 && Math.random() < 0.25)
	{
		if(gamestate.mapArray[i][j+1 + 1] == 0 && gamestate.mapArray[i + 1][j+1] == 0 && gamestate.mapArray[i - 1][j+1] == 0)
		{
			gamestate.mapArray[i][j+1] = roomValue; 
			return true;
		}
	}	
	else if(gamestate.mapArray[i - 1][j] == 0 && Math.random() < 0.25)
	{
		if(gamestate.mapArray[i-1 - 1][j] == 0 && gamestate.mapArray[i - 1][j + 1] == 0 && gamestate.mapArray[i - 1][j - 1] == 0)
		{
			gamestate.mapArray[i-1][j] = roomValue;
			return true;
		}
	}
	else if(gamestate.mapArray[i + 1][j] == 0 && Math.random() < 0.25)
	{
		if(gamestate.mapArray[i+1 + 1][j] == 0 && gamestate.mapArray[i + 1][j + 1] == 0 && gamestate.mapArray[i + 1][j - 1] == 0)
		{
			gamestate.mapArray[i+1][j] = roomValue;
			return true;
		}
	}
	return false;

}
