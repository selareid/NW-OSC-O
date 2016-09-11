var roleUpgrader = require ('role.upgrader');

module.exports = {
    run: function(creep, spawn) {
        roleUpgrader.run(creep, spawn);
        // if (creep.memory.working == true && creep.carry.energy == 0) {
        //     creep.memory.working = false;
        // }
        // else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
        //     creep.memory.working = true;
        // }
        //
        // if (creep.memory.working == true) {
        //     var storage = Game.spawns.Spawn1.room.storage;
        //
        //     if (creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //         creep.moveTo(storage);
        //     }
        //
        // }
        // else {
        //
        //         var dropenergy = creep.pos.findClosestByPath(FIND_DROPPED_ENERGY);
        //         if (dropenergy) {
        //             if (creep.pickup(dropenergy) == ERR_NOT_IN_RANGE) {
        //                 creep.moveTo(dropenergy)
        //             }
        //         }
        // }
        
    }
};