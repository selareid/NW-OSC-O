module.exports = {
    run: function (creep, spawn, middleRoom, roomToClaim) {

        if (creep.room.name == spawn.room.name) {
                if (creep.pos.y == 49) {
                    creep.move(BOTTOM);
                    creep.move(BOTTOM);
                    creep.move(BOTTOM);
                    creep.move(BOTTOM);
                }
                else {
                    creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(middleRoom)));
                } 
        }
        else if (creep.room.name == middleRoom) {
                if (creep.pos.y == 0) {
                    creep.move(BOTTOM);
                    creep.move(BOTTOM);
                    creep.move(BOTTOM);
                    creep.move(BOTTOM);
                }
                else {
                    creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomToClaim)));
                }

        }
        else if (creep.room.name == roomToClaim) {
            if (creep.pos.x == 49) {
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
            }
            else if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
};
