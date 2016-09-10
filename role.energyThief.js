module.exports = {
    run: function (creep, roomToGoTo, roomToTakeFrom) {

        if (creep.room.name == Game.spawns.Spawn1.room.name) {
            if (creep.y == 49) {
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
            }
            else {
                creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomToGoTo)));
            }
        }
        else if (creep.room.name == roomToGoTo) {
            if (creep.y == 0) {
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
            }
            else {
                creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomToTakeFrom)));
            }
        }
        else if (creep.room.name == roomToTakeFrom) {
            if (creep.x == 0) {
                creep.move(LEFT);
                creep.move(LEFT);
                creep.move(LEFT);
                creep.move(LEFT);
            }
            else {
                if (creep.memory.working == true && creep.carry.energy == 0) {
                    creep.memory.working = false;
                }
                else if (creep.memory.working == false && creep.carry.energy >= creep.carryCapacity) {
                    creep.memory.working = true;
                }

                if (creep.memory.working == true) {
                    creep.memory.goingHome == true;
                }
                else {
                    var source = creep.pos.findClosestByPath(FIND_SOURCES);
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                }
            }
        }
    }
};