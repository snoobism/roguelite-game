//setCanvasSize(); // set canvas for the first time
//window.addEventListener("resize", function(){setCanvasSize()}); //set dimensions once again on resize


var z1=2, z2=2, z3=5, z4=5; // variables used for door animations
var loc_car_x = 6, loc_car_y = 5;
var blockDoor = [];
var wallArray = [];
var bulletArray = [];
var enemyArray = [];
var itemClassArray = [];
var consumableClassArray = [];

var currentClassItemPickedId;
var currentClassItemPickedIndex;
var itemPickUpTimeout = 0;
var itemSelected = 0;
var switchedItemId;

var inMenu = 0; 
var timeout=0;

var gamestate = new gameState(0);

generateMap();
generateMapRooms();

//gamestate.mapRoomVisited = [...gamestate.mapArray];

for(var i = 0; i < gamestate.mapRoomVisited.length; i++)
{
    for(var j = 0; j < gamestate.mapRoomVisited[0].length; j++)
    {

        gamestate.mapRoomVisited[i][j] = gamestate.mapArray[i][j]; // 0 - visited; 1 - not visited; 2 - undefined ; 3.5 - item room adjacent, not visited ; 3 - item room, visited
    }
}

for(var i = 0; i < gamestate.mapRoomVisited.length; i++)
{
    for(var j = 0; j < gamestate.mapRoomVisited[0].length; j++)
    {
        if(gamestate.mapRoomVisited[i][j] == 0)
        {
            gamestate.mapRoomVisited[i][j] = 2;
        }
        if(gamestate.mapRoomVisited[i][j] == 1)
        {
            gamestate.mapRoomVisited[i][j] = 0; // 0 - visited; 1 - not visited; 2 - undefined ; 3.5 - item room adjacent, not visited ; 3 - item room, visited
        }
    }
}
gamestate.mapRoomVisited[5][6] = 1;


var currentRoom=[];

var mouse = new Mouse ();
var character = new Character (1*t,1*t, 7/100*t, t * 0.64,t * 0.64);//x, y, v, w, h
var slotOne = new SlotOne ();
var slotTwo = new SlotTwo ();
var reloadBarOne = new ReloadBar(1, t, t/5, "grey", "green", t/5 * 1.5);
var reloadBarTwo = new ReloadBar(2, t, t/5, "white", "red", t/5 * 3.5);
giveItem(slotOne, 0);
giveItem(slotTwo, 0);


updateCharacterHpBar(); // initialize hp bar drawn

// create object to save all pressed keys
var keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    clic1: false,
    clic2: false
};

addEventListener("keydown", function(event) {
// save status of the button 'pressed' == 'true'
    if (event.keyCode == 87) {
        keys["w"] = true;
    }
    if (event.keyCode == 65) {
        keys["a"] = true;
    }
    if (event.keyCode == 83) {
        keys["s"] = true;
    }
    if (event.keyCode == 68) {
        keys["d"] = true;
    }
    if (event.keyCode == 82) {
        keys["r"] = true;
    }
    
});

addEventListener("keyup", function(event) {
    if (event.keyCode == 87) {
        keys["w"] = false;
    }
    if (event.keyCode == 65) {
        keys["a"] = false;
    }
    if (event.keyCode == 83) {
        keys["s"] = false;
    }
    if (event.keyCode == 68) {
        keys["d"] = false;
    }
    if (event.keyCode == 82) {
        keys["r"] = false;
    }    
});

addEventListener('mousemove', function(event){
	if(innerWidth > innerHeight)
	{
		mouse.x=event.clientX-(innerWidth-canvas.width)/2;
		mouse.y=event.clientY;
	}
	else
	{
		mouse.x=event.clientX;
		mouse.y=event.clientY-(innerHeight-canvas.height)/2;
	}
    mouse.x = mouse.x * (previousCanvasWidth / canvas.width);    //our size values are set when starting the game and do not change when resizing the window 
    mouse.y = mouse.y * (previousCanvasWidth / canvas.width);    //since our cursor location is based on the window size, we will have to scale it up on resize
     
    slotOne.update();
    slotTwo.update();
})

var k=0;
addEventListener('mousedown', function(event){
    if(event.which == 1){
        keys['clic1'] = true;
    }
    else if(event.which == 3)
    {
        keys['clic2'] = true;
    }
})
addEventListener('mouseup', function(event){
    if(event.which == 1){
        keys['clic1'] = false;
    }
    else if(event.which == 3)
    {
        keys['clic2'] = false;
    }
})

var ok1=0,ok2=0,ok3=0,ok4=0;
createMiniMap();
newRoom(0,gamestate.mapPosX,gamestate.mapPosY);
animation();
