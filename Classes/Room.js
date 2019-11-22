function Room(x, y, room){
	this.mapX = x;
	this.mapY = y;
	this.currentRoom = room.slice(0);

	this.consumables = [];
	this.items = [];
	this.bossArray = [];
	this.rockArray = [];
}