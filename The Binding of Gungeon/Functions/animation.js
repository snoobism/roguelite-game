function animation(){
if(inMenu == 0)
{
    checkEmptyRoom();


    /*
    screenResizeCheck()
    Based on RESIZE_CANVAS it scales the canvas image to fit the new resolution
    */
    screenResizeCheck();


    /*
    exitRoomCheck()
    Checks if the Character exits the boundary of the canvas
    Thus it calls newRoom() based on which way the character goes 
    */
    exitRoomCheck();

    c.clearRect(0, 0, previousCanvasWidth, previousCanvasHeight);  //clear screen

    /*
    drawCharacterBullets()
    Draws each existing bullet
    */
    drawCharacterBullets();
    
    /*
    drawWalls()
    Draws each existing wall
    */
    drawWalls();

    /*
    drawCharacter()
    Checks if Character is alive, then draws it and its weapon
    */
    drawCharacter();

    /*
    drawItems()
    Draws items in the room
    */
    drawItems();

    /*
    drawEnemies()
    Draws each existing enemy
    */
    drawEnemies();

    /*
    createLockedDoors()
    Create locked doors if there are enemies in the room
    */
    createLockedDoors();

    drawLockedDoors();

    drawReloadBar();

    requestAnimationFrame(animation);
    
    checkKeysPressed();
    
    if(slotOne.empty == 0)
    {
        document.getElementById("primary_ammo").innerHTML = slotOne.clipAmmo + "/" + slotOne.clipSize;
        document.getElementById("primary_img").style.backgroundImage = slotOne.itemImageUrl;
    }
    if(slotTwo.empty == 0)
    {
        document.getElementById("secondary_ammo").innerHTML = slotTwo.clipAmmo + "/" + slotTwo.clipSize;
        document.getElementById("secondary_img").style.backgroundImage = slotTwo.itemImageUrl;
    }
    


    updateBullets();

    updateEnemies();

    checkItemIntersection();

    checkBulletImpact();
    
    checkEnemyHp();
    
    checkCharacterHp();
    
    checkCharacterImpact();

    
    }
}