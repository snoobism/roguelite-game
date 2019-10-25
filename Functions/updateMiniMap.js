function updateMiniMap(posX, posY)
{
	console.log("1////" + gamestate.mapArray[posX][posY]);

	///////////////////////////////// check for adjacent not visited changes

	if(gamestate.mapArray[posX + 1][posY] == 1 && !isVisited(posX + 1, posY))
	{
		document.getElementById((posX + 1) + "/" + posY).style.backgroundColor = "rgba(255,255,255,0.75)";
		document.getElementById((posX + 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX][posY + 1] == 1 && !isVisited(posX, posY + 1))
	{
		document.getElementById(posX + "/" + (posY + 1)).style.backgroundColor = "rgba(255,255,255,0.75)";
		document.getElementById(posX + "/" + (posY + 1)).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX - 1][posY] == 1 && !isVisited(posX - 1, posY))
	{
		document.getElementById((posX - 1) + "/" + posY).style.backgroundColor = "rgba(255,255,255,0.75)";
		document.getElementById((posX - 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX][posY - 1] == 1 && !isVisited(posX, posY - 1))
	{
		document.getElementById(posX + "/" + (posY - 1)).style.backgroundColor = "rgba(255,255,255,0.75)";
		document.getElementById(posX + "/" + (posY - 1)).style.boxShadow = "0px 0px 2px black";						
	}
	
	/////////////////////////////////// check for adjacent visited change

	//########################### ORDINARY ROOM
	if(gamestate.mapArray[posX + 1][posY] == 1 && isVisited(posX + 1, posY))
	{
		document.getElementById((posX + 1) + "/" + posY).style.backgroundColor = "rgba(255,255,255,1)";
		document.getElementById((posX + 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX][posY + 1] == 1 && isVisited(posX, posY + 1))
	{
		document.getElementById(posX + "/" + (posY + 1)).style.backgroundColor = "rgba(255,255,255,1)";
		document.getElementById(posX + "/" + (posY + 1)).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX - 1][posY] == 1 && isVisited(posX - 1, posY))
	{
		document.getElementById((posX - 1) + "/" + posY).style.backgroundColor = "rgba(255,255,255,1)";
		document.getElementById((posX - 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX][posY - 1] == 1 && isVisited(posX, posY - 1))
	{
		document.getElementById(posX + "/" + (posY - 1)).style.backgroundColor = "rgba(255,255,255,1)";
		document.getElementById(posX + "/" + (posY - 1)).style.boxShadow = "0px 0px 2px black";						
	}
    //########################### ITEM ROOM
	if(gamestate.mapArray[posX + 1][posY] == 3 && !isVisited(posX + 1, posY))
	{
		document.getElementById((posX + 1) + "/" + posY).style.backgroundColor = "rgba(255,255,0,0.7)";
		document.getElementById((posX + 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX][posY + 1] == 3 && !isVisited(posX, posY + 1))
	{
		document.getElementById(posX + "/" + (posY + 1)).style.backgroundColor = "rgba(255,255,0,0.7)";
		document.getElementById(posX + "/" + (posY + 1)).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX - 1][posY] == 3 && !isVisited(posX - 1, posY))
	{
		document.getElementById((posX - 1) + "/" + posY).style.backgroundColor = "rgba(255,255,0,0.7)";
		document.getElementById((posX - 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX][posY - 1] == 3 && !isVisited(posX, posY - 1))
	{
		document.getElementById(posX + "/" + (posY - 1)).style.backgroundColor = "rgba(255,255,0,0.7)";
		document.getElementById(posX + "/" + (posY - 1)).style.boxShadow = "0px 0px 2px black";						
	}

	if(gamestate.mapArray[posX + 1][posY] == 3 && isVisited(posX + 1, posY))
	{
		document.getElementById((posX + 1) + "/" + posY).style.backgroundColor = "rgba(255,255,0,1)";
		document.getElementById((posX + 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX][posY + 1] == 3 && isVisited(posX, posY + 1))
	{
		document.getElementById(posX + "/" + (posY + 1)).style.backgroundColor = "rgba(255,255,0,1)";
		document.getElementById(posX + "/" + (posY + 1)).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX - 1][posY] == 3 && isVisited(posX - 1, posY))
	{
		document.getElementById((posX - 1) + "/" + posY).style.backgroundColor = "rgba(255,255,0,1)";
		document.getElementById((posX - 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX][posY - 1] == 3 && isVisited(posX, posY - 1))
	{
		document.getElementById(posX + "/" + (posY - 1)).style.backgroundColor = "rgba(255,255,0,1)";
		document.getElementById(posX + "/" + (posY - 1)).style.boxShadow = "0px 0px 2px black";						
	}

	//########################### BOSS ROOM
	if(gamestate.mapArray[posX + 1][posY] ==  4 && !isVisited(posX + 1, posY))
	{
		document.getElementById((posX + 1) + "/" + posY).style.backgroundColor = "rgba(255, 0,0,0.7)";
		document.getElementById((posX + 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX][posY + 1] ==  4 && !isVisited(posX, posY + 1))
	{
		document.getElementById(posX + "/" + (posY + 1)).style.backgroundColor = "rgba(255, 0,0,0.7)";
		document.getElementById(posX + "/" + (posY + 1)).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX - 1][posY] ==  4 && !isVisited(posX - 1, posY))
	{
		document.getElementById((posX - 1) + "/" + posY).style.backgroundColor = "rgba(255, 0,0,0.7)";
		document.getElementById((posX - 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX][posY - 1] ==  4 && !isVisited(posX, posY - 1))
	{
		document.getElementById(posX + "/" + (posY - 1)).style.backgroundColor = "rgba(255, 0,0,0.7)";
		document.getElementById(posX + "/" + (posY - 1)).style.boxShadow = "0px 0px 2px black";						
	}

	if(gamestate.mapArray[posX + 1][posY] ==  4 && isVisited(posX + 1, posY))
	{
		document.getElementById((posX + 1) + "/" + posY).style.backgroundColor = "rgba(255, 0,0,1)";
		document.getElementById((posX + 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX][posY + 1] ==  4 && isVisited(posX, posY + 1))
	{
		document.getElementById(posX + "/" + (posY + 1)).style.backgroundColor = "rgba(255, 0,0,1)";
		document.getElementById(posX + "/" + (posY + 1)).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX - 1][posY] ==  4 && isVisited(posX - 1, posY))
	{
		document.getElementById((posX - 1) + "/" + posY).style.backgroundColor = "rgba(255, 0,0,1)";
		document.getElementById((posX - 1) + "/" + posY).style.boxShadow = "0px 0px 2px black";				
	}
	if(gamestate.mapArray[posX][posY - 1] ==  4 && isVisited(posX, posY - 1))
	{
		document.getElementById(posX + "/" + (posY - 1)).style.backgroundColor = "rgba(255, 0,0,1)";
		document.getElementById(posX + "/" + (posY - 1)).style.boxShadow = "0px 0px 2px black";						
	}



	//////////////////////////////////// check for current room change
	document.getElementById(posX + "/" + posY).style.backgroundColor = "rgba(0,255,0,1)";
	document.getElementById(posX + "/" + posY).style.boxShadow = "0px 0px 2px black";											

	console.log("2////"+gamestate.mapArray[posX][posY]);


}