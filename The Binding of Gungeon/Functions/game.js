var canvas = document.querySelector('canvas');

var t;

function setCanvasSize(){
	
	if(window.innerHeight > window.innerWidth)
	{
		canvas.width = window.innerWidth;
		canvas.height = 11/13 * canvas.width;
		t=canvas.width/13;	
	}
	else
	{
		canvas.height = window.innerHeight;
		canvas.width = 13/11 * canvas.height;
		t=canvas.height/11;	
	}
	
}

setCanvasSize(); // set canvas for the first time
window.addEventListener('resize', function(){setCanvasSize()}); //set dimensions once again on resize

var c = canvas.getContext('2d');

var z1=2, z2=2, z3=5, z4=5; // variables used for door animations
var loc_car_x = 6, loc_car_y = 5;
var blockDoor = [];
var wallArray = [];
var bulletArray = [];
var enemyArray = [];
var timeout=0;
var firerate_timeout=0;

var gamestate = new gameState(0);

generateMap();
generateMapRooms();
console.log(gamestate.mapArray);
console.log(gamestate.mapRoomArray);

var currentRoom=[];

var mouse = new Mouse ();
var character = new Character (1*t,1*t, 7/100*t, (69/100*t)*0.65517,(69/100*t));//x, y, v, w, h
var weapon = new Weapon (character.w/2, character.h/2, 10.39/100*t, 35*1.8/100*t,35/100*t);//x, y, v, w, h

// create object to save all pressed keys
var keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    clic: false
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
});

addEventListener('mousemove', function(event){
	if(innerWidth > innerHeight)
	{
		mouse.x=event.clientX-(window.innerWidth-canvas.width)/2;
		mouse.y=event.clientY;
	}
	else
	{
		mouse.x=event.clientX;
		mouse.y=event.clientY-(window.innerHeight-canvas.height)/2;
	}
    weapon.update();
})

var k=0;
addEventListener('mousedown', function(event){
    keys['clic'] = true;
})
addEventListener('mouseup', function(event){
    keys['clic'] = false;
})

var ok1=0,ok2=0,ok3=0,ok4=0;
newRoom(0,gamestate.mapPosX,gamestate.mapPosY);

animation();
