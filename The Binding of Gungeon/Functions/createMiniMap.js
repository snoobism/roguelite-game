function createMiniMap(){
	let col = 13;
	let row = 11;

	for(var i = 0; i < row; i++)
	{
		for(var j = 0; j < col; j++)
		{
			var cell = document.createElement("div");
			cell.id = i + "/" + j;
			cell.style.position = "absolute";
			cell.style.width = 2 + "vw";
			cell.style.height = 2 + "vh";
			cell.style.marginLeft = j * 2 + "vw";
			cell.style.marginTop = i * 2 + "vh";

			if(gamestate.mapRoomVisited[i][j] == 0)
			{
				cell.style.backgroundColor = "rgba(255,255,255,1)";
				cell.style.boxShadow = "0px 0px 2px black";											
			}
			else if(gamestate.mapRoomVisited[i][j] == 1)
			{
				cell.style.backgroundColor = "rgba(255,255,255,0)";
				cell.style.boxShadow = "0px 0px 2px black"
			}

		 	document.getElementById("map").appendChild(cell);
		}
	}
}