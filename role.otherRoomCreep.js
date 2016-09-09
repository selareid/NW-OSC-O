var type1 = require ('role.type1');
var type2 = require ('role.type2');
var type3 = require ('role.type3');

module.exports = {
    run: function (creep, roomToGoTo) {

        if (creep.room.name == Game.spawns.Spawn1.room.name) {
            if (creep.y == 49) {
                creep.move(BOTTOM);
                creep.move(BOTTOM);
            }
            else {
                creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomToGoTo)));
            }
        }
        else if (creep.room.name == roomToGoTo) {
                if (creep.memory.type == undefined) {
                    creep.move(BOTTOM);
                    if (_.sum(Game.creeps, (c) => c.memory.type == 'type1') < 2) {
                        creep.memory.type = 'type1';
                    }
                    else if (_.sum(Game.creeps, (c) => c.memory.type == 'type2') < 1) {
                        creep.memory.type = 'type2';
                    }
                    if (_.sum(Game.creeps, (c) => c.memory.type == 'type3') < 2) {
                        creep.memory.type = 'type3';
                    }
                    else {creep.memory.type = 'type3';}
                }
                else {
                    if (creep.memory.type == 'type1') {
                        type1.run(creep);
                    }
                    else if (creep.memory.type == 'type2') {
                        type2.run(creep);
                    }
                    else if (creep.memory.type == 'type3') {
                        type3.run(creep);
                    }
                }


        }
    }
};