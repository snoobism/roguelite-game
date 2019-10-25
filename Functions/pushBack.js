function pushBack(item){
	while(intersection(character.x, character.y, character.w, character.h, item.x, item.y, item.w, item.h) == true)
	{
		if(character.direction[0] == -1)
		{
			character.x = character.x + character.v * 2;
		}
		if(character.direction[0] == 1)
		{
			character.x = character.x - character.v * 2;
		}
		if(character.direction[1] == -1)
		{
			character.y = character.y + character.v * 2;
		}
		if(character.direction[1] == 1)
		{
			character.y = character.y - character.v * 2;
		}
	}
}