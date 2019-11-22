function selectItemSwitch(itemSlot){
    inMenu = 0;
	if(itemSlot == 0)
	{
	console.log("hey??");
		itemClassArray[currentClassItemPickedIndex].itemId = slotOne.itemId;
		giveItem(slotOne, currentClassItemPickedId);
	}
	else if(itemSlot == 1)
	{
	console.log("hey!!");
		itemClassArray[currentClassItemPickedIndex].itemId = slotTwo.itemId;
		giveItem(slotTwo, currentClassItemPickedId);
	}
	document.getElementById("change_items_container").style.display = "none";
	animation();
}