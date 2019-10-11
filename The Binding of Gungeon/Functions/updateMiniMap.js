function updateMiniMap(map, posX, posY)
{
	gamestate.mapRoomVisited[posX][posY] = 0;
	///////////////////////////////// check for adjacent not visited changes
	if(map[posX + 1][posY] == 1)
	{
		document.getElementById((posX + 1) + "/" + posY).style.backgroundColor = "rgba(255,255,255,0.75)";
		document.getElementById((posX + 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(map[posX][posY + 1] == 1)
	{
		document.getElementById(posX + "/" + (posY + 1)).style.backgroundColor = "rgba(255,255,255,0.75)";
		document.getElementById(posX + "/" + (posY + 1)).style.boxShadow = "0px 0px 2px black";				
	}
	if(map[posX - 1][posY] == 1)
	{
		document.getElementById((posX - 1) + "/" + posY).style.backgroundColor = "rgba(255,255,255,0.75)";
		document.getElementById((posX - 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(map[posX][posY - 1] == 1)
	{
		document.getElementById(posX + "/" + (posY - 1)).style.backgroundColor = "rgba(255,255,255,0.75)";
		document.getElementById(posX + "/" + (posY - 1)).style.boxShadow = "0px 0px 2px black";						
	}
	/////////////////////////////////// check for visited change
	if(map[posX + 1][posY] == 0)
	{
		document.getElementById((posX + 1) + "/" + posY).style.backgroundColor = "rgba(255,255,255,1)";
		document.getElementById((posX + 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(map[posX][posY + 1] == 0)
	{
		document.getElementById(posX + "/" + (posY + 1)).style.backgroundColor = "rgba(255,255,255,1)";
		document.getElementById(posX + "/" + (posY + 1)).style.boxShadow = "0px 0px 2px black";				
	}
	if(map[posX - 1][posY] == 0)
	{
		document.getElementById((posX - 1) + "/" + posY).style.backgroundColor = "rgba(255,255,255,1)";
		document.getElementById((posX - 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(map[posX][posY - 1] == 0)
	{
		document.getElementById(posX + "/" + (posY - 1)).style.backgroundColor = "rgba(255,255,255,1)";
		document.getElementById(posX + "/" + (posY - 1)).style.boxShadow = "0px 0px 2px black";						
	}
	//////////////////////////////////// check for current room change
	if(gamestate.mapRoomVisited[posX][posY] == 0)
	{
		document.getElementById(posX + "/" + posY).style.backgroundColor = "rgba(255,0,0,1)";
		document.getElementById(posX + "/" + posY).style.boxShadow = "0px 0px 2px black";											
	}
}