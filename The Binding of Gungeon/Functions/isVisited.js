function isVisited(posX, posY){
	if(gamestate.mapRoomVisited[posX][posY] == 0)
	{
		return false;
	}
	else if(gamestate.mapRoomVisited[posX][posY] == 1)
	{
		return true;
	}
}