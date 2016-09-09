var roleRepairer = require ('role.repairer');

module.exports = {
    run: function(creep) {
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {

            var tower = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_TOWER
                && s.energy < s.energyCapacity
            });

            if (tower != undefined) {
                if (creep.transfer(tower, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(tower);
                }
            }
            else {
                roleRepairer.run(creep);
            }
        }
        else {

            var dropenergy = creep.pos.findClosestByPath(FIND_DROPPED_ENERGY);
            if (dropenergy) {
                if (creep.pickup(dropenergy) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(dropenergy)
                }
            }
            else {
                var container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER
                    && s.store[RESOURCE_ENERGY] < s.storeCapacity});
                if (container != undefined) {
                    if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container);
                    }
                }
            }
        }
    }
};