module.exports = {
    run: function (creep, roomToGoTo, roomToTakeFrom) {

        if (creep.room.name == Game.spawns.Spawn1.room.name) {
            if (creep.memory.goingHome == false) {
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
            else {
                if (creep.memory.working == true && creep.carry.energy == 0) {
                    creep.memory.working = false;
                }
                else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
                    creep.memory.working = true;
                }

                if (creep.memory.working == true) {
                    if (Game.spawns.Spawn1.energy < Game.spawns.Spawn1.energyCapacity) {
                        var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                            filter: (s) => s.structureType == STRUCTURE_SPAWN
                            && s.energy < s.energyCapacity
                        });
                    }
                    else {
                        var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                            filter: (s) => (s.structureType == STRUCTURE_EXTENSION || s.structureType == STRUCTURE_TOWER)
                            && s.energy < s.energyCapacity
                        });
                    }
                    if (structure != undefined) {
                        if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(structure);
                        }
                    }
                    else {
                        var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                            filter: (s) => s.structureType == STRUCTURE_CONTAINER
                            && s.store[RESOURCE_ENERGY] < s.storeCapacity
                        });
                        if (structure != undefined) {
                            if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(structure);
                            }
                        }
                        else {
                            creep.moveTo(14, 39)
                        }
                    }
                }
                else {
                    creep.memory.goingHome = false;
                }
            }
        }
        else if (creep.room.name == roomToGoTo) {
            if (creep.memory.goingHome == false) {
                if (creep.pos.y == 0) {
                    creep.move(BOTTOM);
                    creep.move(BOTTOM);
                    creep.move(BOTTOM);
                    creep.move(BOTTOM);
                }
                else {
                    creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomToTakeFrom)));
                }
            }
            else {
                if (creep.pos.y == 0) {
                    creep.move(TOP);
                    creep.move(TOP);
                    creep.move(TOP);
                    creep.move(TOP);
                }
                else {
                    creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(Game.spawns.Spawn1.room)));
                }
            }
        }
        else if (creep.room.name == roomToTakeFrom) {

            if (creep.memory.goingHome == false) {
                if (creep.pos.x == 0) {
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
                        var site = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                        if (site != undefined) {
                            if (creep.build(site) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(site);
                            }
                        }
                        else {
                            creep.memory.goingHome = true;
                        }
                    }
                    else {
                        var source = creep.pos.findClosestByPath(FIND_SOURCES);
                        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(source);
                        }
                    }
                }
            }
            else {
                if (creep.pos.x == 49) {
                    creep.move(RIGHT);
                    creep.move(RIGHT);
                    creep.move(RIGHT);
                    creep.move(RIGHT);
                }
                else {
                    creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomToGoTo)));
                }
            }
        }
    }
};