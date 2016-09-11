var roleEmergencyHarvester = require ('role.emergencyHarvester');

module.exports = {
    run: function(creep, spawn) {
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy >= creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            var numberOfDistributors = _.sum(Game.creeps, (c) => c.memory.role == 'distributor' && c.room == spawn.room);
            if (numberOfDistributors <= 0) {
                roleEmergencyHarvester.run
            }
            else {
            creep.drop(RESOURCE_ENERGY);
            }
        }
        else {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    }
};
