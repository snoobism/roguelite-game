function checkKeysPressed(){
	
	if (keys['w'] == true) {
        
        character.update('w');
        slotOne.update();
        slotTwo.update();
    }

    if (keys['a'] == true) {
        
        character.update('a');
        slotOne.update();
        slotTwo.update();
    }

    if (keys['s'] == true) {
        
        character.update('s');
        slotOne.update();
        slotTwo.update();
    }

    if (keys['d'] == true) {
        
        character.update('d');
        slotOne.update();
        slotTwo.update();
    }

    if (keys['clic1'] == true) {
        if (slotOne.useTimeout == 0)
        {
            slotOne.active();
            slotOne.useTimeout = 1;
            setTimeout(function () {
                slotOne.useTimeout = 0;
            }, slotOne.firerate);
        }
    }
    if (keys['clic2'] == true) {
        if (slotTwo.useTimeout == 0)
        {   
            slotTwo.active();
            slotTwo.useTimeout = 1;
            setTimeout(function () {
                slotTwo.useTimeout = 0;
            }, slotTwo.firerate);
        }
    }

    if(keys['r'] == true && slotOne.reloadTimeout == 0 && slotOne.clipAmmo != slotOne.clipSize)
    {
        slotOne.reloadTimeout = 1;
        setTimeout(function(){
            slotOne.clipAmmo = slotOne.clipSize;
            slotOne.reloadTimeout = 0;
            reloadBarOne.progress = 0;
        }, slotOne.reloadTime)
    }
    if(keys['r'] == true && slotTwo.reloadTimeout == 0 && slotTwo.clipAmmo != slotTwo.clipSize)
    {
        slotTwo.reloadTimeout = 1;
        setTimeout(function(){
            slotTwo.clipAmmo = slotTwo.clipSize;
            slotTwo.reloadTimeout = 0;
            reloadBarTwo.progress = 0;
        }, slotTwo.reloadTime)
    }
}