module.exports = {
    run: function (creep) {

        if (Memory.aYIT == true) {
            var target = creep.findClosestByRange(FIND_HOSTILE_CREEPS);

            if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
        else {
            var roomToGoTo = 'E20S53';
            var nextRTGT = 'E20S54';

            if (creep.room.name == Game.spawns.Spawn1.room.name) {
                var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
                if (creep.attack(target) != undefined && creep.attack(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
                else if (creep.x == 49) {
                    creep.move(RIGHT);
                }
                else {
                    creep.moveTo(creep.pos.findClosestByPath((creep.room.findExitTo(roomToGoTo))));
                }
            }
            else if (creep.room.name == roomToGoTo) {

                var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
                if (creep.attack(target) != undefined && creep.attack(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
                else if (creep.room.name == roomToGoTo) {
                    if (creep.x == 0) {
                        creep.move(LEFT);
                    }
                    else {
                        creep.moveTo(creep.pos.findClosestByPath((creep.room.findExitTo(nextRTGT))));
                    }
                }

            }
            else if (creep.room.name == nextRTGT) {

                var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);

                if (creep.attack(target) != undefined && creep.attack(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
                else if (creep.room.name == nextRTGT) {
                    if (creep.x == 0) {
                        creep.move(LEFT);
                        creep.move(LEFT);
                    }
                    else {
                        creep.moveTo(Game.flags.Flag2.pos);
                        //creep.moveTo(creep.pos.findClosestByPath((creep.room.findExitTo())));
                    }

                }
            }
            else {
                var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
                var ATTACK = creep.getActiveBodyParts(ATTACK);

                if (ATTACK <= 0) {
                    if (creep.attack(target) != undefined && creep.attack(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }
            }
        }
    }
};