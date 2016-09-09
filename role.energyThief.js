module.exports = {
    run: function (creep, roomToGoTo) {
        
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

            }
        }
    }
};