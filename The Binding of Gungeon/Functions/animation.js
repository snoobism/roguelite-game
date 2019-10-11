function animation(){

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
    
    document.getElementById("primary_ammo").innerHTML = weapon.clipAmmo + "/" + weapon.clipSize;
    
    updateBullets();

    updateEnemies();

    checkBulletImpact();
    
    checkEnemyHp();
    
    checkCharacterHp();
    
    checkCharacterImpact();

    checkEmptyRoom();
    
    }