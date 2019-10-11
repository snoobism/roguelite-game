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

			if(gamestate.mapArray[i][j] == 1)
			{
				cell.style.backgroundColor = "rgba(255,255,255,0)";
			}
			if(gamestate.mapArray[i][j] == 3)
			{
				cell.style.backgroundColor = "rgba(255,255,0,1)";
			}

		 	document.getElementById("map").appendChild(cell);
		}
	}
	document.getElementById("left_side").style.width = document.getElementById("map").offsetWidth;
	document.getElementById("map").style.height = 22 + "vh";
	document.getElementById("health").style.width = 20 + "vw";

}