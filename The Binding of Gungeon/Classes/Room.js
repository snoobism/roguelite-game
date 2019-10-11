function Room(x, y, room){
	this.mapX = x;
	this.mapY = y;
	this.currentRoom = room.slice(0);

	this.collectibles = [];
	this.items = [];
}