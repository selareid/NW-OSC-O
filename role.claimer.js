module.exports = {
<<<<<<< HEAD
    run: function (creep, spawn, roomToGoTo, roomToClaim) {
        
        if (creep.room.name == spawn.room.name) {
            if (creep.pos.y == 49) {
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
            }
            else {
                creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomToGoTo)));
            }
        }
        if (creep.room.name == spawn.room.name) {
            if (creep.pos.y == 0) {
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
            }
            else {
                creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomToClaim)));
            }
=======
    run: function (creep, middleRoom, roomToClaim) {

        if (creep.room.name == Game.spawns.Spawn1.room.name) {
                if (creep.pos.y == 49) {
                    creep.move(BOTTOM);
                    creep.move(BOTTOM);
                    creep.move(BOTTOM);
                    creep.move(BOTTOM);
                }
                else {
                    creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomToGoTo)));
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
                    creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomToTakeFrom)));
                }
>>>>>>> origin/In-Use-Now
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
