function updateCharacterHpBar(){
    var i = document.getElementById("health").childElementCount;
    while(i != character.maxHp + character.currentArmour + character.currentBulletArmour)
    {
        if(i < character.maxHp + character.currentArmour + character.currentBulletArmour){
            var heart = document.createElement("div");
            heart.id = "heart_cont" + i;
            heart.style.position = "relative";
            heart.style.display = "inline-block";
            heart.style.width = 5 + "vh";
            heart.style.height = 5 + "vh";
            heart.style.marginLeft = "1vh";
            heart.style.marginTop = "1vh";
            if(i < character.maxHp)
            {
                heart.style.backgroundImage = "url(img/heart_empty.png)"
            }
            else if(i < character.maxHp + character.currentArmour)
            {
                heart.style.backgroundImage = "url(img/armour.png)";
            }
            else
            {
                heart.style.backgroundImage = "url(img/bullet_armour.png)";
            }
            heart.style.backgroundSize = "contain";
            heart.style.backgroundRepeat = "no-repeat";
            heart.style.backgroundPosition = "center";
            heart.style.zIndex = 1;
            document.getElementById("health").appendChild(heart);
            i++;
        }
        else if(i > character.maxHp + character.currentArmour + character.currentBulletArmour){
            document.getElementById("heart_cont"+(i -1)).remove();
            i--;
        }
    }

    for(var i = 0; i < character.maxHp; i++)
    {
        if(i < character.currentHp){

            document.getElementById("heart_cont" + i).style.backgroundImage = "url(img/heart_full.png)";
        
        }
        else{

            document.getElementById("heart_cont" + i).style.backgroundImage = "url(img/heart_empty.png)";
        }

    }
    for(var j = i; j < character.maxHp + character.currentArmour; j++)
    {
        document.getElementById("heart_cont" + j).style.backgroundImage = "url(img/armour.png)";
    }
    for(var k = j; k < character.maxHp + character.currentArmour + character.currentBulletArmour; k++)
    {
        document.getElementById("heart_cont" + k).style.backgroundImage = "url(img/bullet_armour.png)";        
    }
}