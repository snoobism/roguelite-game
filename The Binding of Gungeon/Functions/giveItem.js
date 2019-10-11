	function giveItem(slotChosen, id){
	if(slotChosen === "passive" && itemArray[id].itemType == "passive")
	{
		character.passiveItems.push(itemArray[id]);
		itemArray[id].onPickUp();
	}
	else{

		slotChosen.empty = 0;
		
		slotChosen.width = itemArray[id].width;
		slotChosen.height = itemArray[id].height;

		slotChosen.itemId = itemArray[id].id;
		slotChosen.itemImage = itemArray[id].itemImage;
		slotChosen.itemImageUrl = itemArray[id].itemImageUrl;

		slotChosen.shotSpeed = itemArray[id].shotSpeed;
		slotChosen.clipAmmo = itemArray[id].clipAmmo + character.currentBulletArmour;
		slotChosen.clipSize = itemArray[id].clipSize + character.currentBulletArmour;
		slotChosen.firerate = itemArray[id].firerate;
		slotChosen.reloadTime = itemArray[id].reloadTime;
		slotChosen.bulletDamage = itemArray[id].bulletDamage;
		slotChosen.bulletImage = itemArray[id].bulletImage;
		slotChosen.bulletSize = itemArray[id].bulletSize;

		slotChosen.passive = itemArray[id].passive;
		slotChosen.active = itemArray[id].active;


		slotChosen.passive();

		slotChosen.update();
		slotChosen.draw();
	}
}