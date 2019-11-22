function pickUpItem(itemClass){
	if(slotOne.empty == 0 && slotTwo.empty == 0)
	{	
		inMenu = 1;
		document.getElementById("change_items_container").style.display = "block";
		
		document.getElementById("change_primary_image").style.backgroundImage = itemArray[slotOne.itemId].itemImageUrl;
		document.getElementById("change_primary_name").innerText =  itemArray[slotOne.itemId].name;
		document.getElementById("change_primary_desc").innerText = itemArray[slotOne.itemId].description;

		document.getElementById("change_secondary_image").style.backgroundImage = itemArray[slotTwo.itemId].itemImageUrl;
		document.getElementById("change_secondary_name").innerText =  itemArray[slotTwo.itemId].name;
		document.getElementById("change_secondary_desc").innerText = itemArray[slotTwo.itemId].description;
		
	}else
	if(slotOne.empty == 1)
	{
		giveItem(slotOne, itemClass.itemId);

	}
	else
	if(slotTwo.empty == 1)
	{
		giveItem(slotTwo, itemClass.itemId);
	}

}