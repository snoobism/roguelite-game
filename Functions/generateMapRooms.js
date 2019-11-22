/* 
Based on the shape of the map, it chooses
the appropriate room layout based on the connections to the other rooms

Room arrays based on exit location (North, West , South, East):

roomsArray_0  - NWSE
roomsArray_1  - NWS
roomsArray_2  - NWE
roomsArray_3  - NSE
roomsArray_4  - WSE
roomsArray_5  - NS
roomsArray_6  - WE
roomsArray_7  - NE
roomsArray_8  - NW
roomsArray_9  - SE
roomsArray_10 - WS
roomsArray_11 - E
roomsArray_12 - N
roomsArray_13 - S
roomsArray_14 - W 
 */
 
function generateMapRooms() {
    var up, down, left, right;
    for (var i = 1; i <= gamestate.mapArray.length - 2; i++) {
        for (var j = 1; j <= gamestate.mapArray[i].length - 2; j++) {
            /*if (i == 5 && j == 6)
            {
                gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.test_room);
            }
            */
            if (gamestate.mapArray[i][j] == 1) {
                if (gamestate.mapArray[i - 1][j] != 0) {
                    up = 1;
                } else {
                    up = 0;
                }
                if (gamestate.mapArray[i + 1][j] != 0) {
                    down = 1;
                } else {
                    down = 0;
                }
                if (gamestate.mapArray[i][j + 1] != 0) {
                    right = 1;
                } else {
                    right = 0;
                }
                if (gamestate.mapArray[i][j - 1] != 0) {
                    left = 1;
                } else {
                    left = 0;
                }
                if (left == 1 && right == 1 && up == 1 && down == 1) {
                    gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_0[0]);
                } else {
                    if (left == 1 && right == 0 && up == 1 && down == 1) {
                        gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_1[0]);
                    } else {
                        if (left == 1 && right == 1 && up == 1 && down == 0) {
                            gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_2[0]);
                        } else {
                            if (left == 0 && right == 1 && up == 1 && down == 1) {
                                gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_3[0]);
                            } else {
                                if (left == 1 && right == 1 && up == 0 && down == 1) {
                                    gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_4[0]);
                                } else {
                                    if (left == 0 && right == 0 && up == 1 && down == 1) {
                                        gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_5[0]);
                                    } else {
                                        if (left == 1 && right == 1 && up == 0 && down == 0) {
                                            gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_6[0]);
                                        } else {
                                            if (left == 0 && right == 1 && up == 1 && down == 0) {
                                                gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_7[0]);
                                            } else {
                                                if (left == 1 && right == 0 && up == 1 && down == 0) {
                                                    gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_8[0]);
                                                } else {
                                                    if (left == 0 && right == 1 && up == 0 && down == 1) {
                                                        gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_9[0]);
                                                    } else {
                                                        if (left == 1 && right == 0 && up == 0 && down == 1) {
                                                            gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_10[0]);
                                                        } else {
                                                            if (left == 0 && right == 1 && up == 0 && down == 0) {
                                                                gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_11[0]);
                                                            } else {
                                                                if (left == 0 && right == 0 && up == 1 && down == 0) {
                                                                    gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_12[0]);
                                                                } else {
                                                                    if (left == 0 && right == 0 && up == 0 && down == 1) {
                                                                        gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_13[0]);
                                                                    } else {
                                                                        if (left == 1 && right == 0 && up == 0 && down == 0) {
                                                                            gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.roomsArray_14[0]);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }; //elses end
            }
            if (gamestate.mapArray[i][j] == 3) {
                if (gamestate.mapArray[i - 1][j] == 1) {
                    up = 1;
                } else {
                    up = 0;
                }
                if (gamestate.mapArray[i + 1][j] == 1) {
                    down = 1;
                } else {
                    down = 0;
                }
                if (gamestate.mapArray[i][j + 1] == 1) {
                    right = 1;
                } else {
                    right = 0;
                }
                if (gamestate.mapArray[i][j - 1] == 1) {
                    left = 1;
                } else {
                    left = 0;
                }

                if (left == 1 && right == 0 && up == 0 && down == 0) 
                {
                    gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.itemRooms_left[0]);
                }     
                else if (left == 0 && right == 1 && up == 0 && down == 0) 
                {
                    gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.itemRooms_right[0]);
                }
                else if (left == 0 && right == 0 && up == 1 && down == 0) 
                {
                    gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.itemRooms_up[0]);
                }
                else if (left == 0 && right == 0 && up == 0 && down == 1)
                {
                    gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.itemRooms_down[0]);
                }
            }       
            if (gamestate.mapArray[i][j] == 4) {
                if (gamestate.mapArray[i - 1][j] == 1) {
                    up = 1;
                } else {
                    up = 0;
                }
                if (gamestate.mapArray[i + 1][j] == 1) {
                    down = 1;
                } else {
                    down = 0;
                }
                if (gamestate.mapArray[i][j + 1] == 1) {
                    right = 1;
                } else {
                    right = 0;
                }
                if (gamestate.mapArray[i][j - 1] == 1) {
                    left = 1;
                } else {
                    left = 0;
                }

                if (left == 1 && right == 0 && up == 0 && down == 0) 
                {
                    gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.bossRooms_left[0]);
                }     
                else if (left == 0 && right == 1 && up == 0 && down == 0) 
                {
                    gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.bossRooms_right[0]);
                }
                else if (left == 0 && right == 0 && up == 1 && down == 0) 
                {
                    gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.bossRooms_up[0]);
                }
                else if (left == 0 && right == 0 && up == 0 && down == 1)
                {
                    gamestate.mapRoomArray[i][j] = new Room(i, j, gamestate.bossRooms_down[0]);
                }
            } 

        }
    }
    //        gamestate.mapRoomArray[5][6] = new Room(5, 6, gamestate.test_room);      

}