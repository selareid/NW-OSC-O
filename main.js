var roleHarvester = require ('role.harvester');
var roleUpgrader = require ('role.upgrader');
var roleBuilder = require ('role.builder');
var roleRepairer = require ('role.repairer');
var roleWallRepairer = require ('role.wallRepairer');


module.exports.loop = function () {


    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
        }
    }

    for (let name in Game.creeps) {
        var creep = Game.creeps[name];

        if (creep.memory.role == 'harvester') {
        roleHarvester.run(creep);
        }
        else if (creep.memory.role == 'upgrader') {
        roleUpgrader.run(creep);
        }
        else if (creep.memory.role == 'builder') {
         roleBuilder.run(creep);
        }
        else if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        else if (creep.memory.role == 'wallRepairer') {
            roleWallRepairer.run(creep);
        }
    }

    var towers = Memory.tower;
    for (let tower in towers) {
        runTower.run(tower);
    }


    var minimumNumberOfHarvesters = 5;
    var minimumNumberOfUpgraders = 4;
    var minimumNumberOfBuilders = 3;
    var minimumNumberOfRepairers = 4;
    var minimumNumberOfWallRepairers = 3;

    var maximumNumberOfRepairers = 8;

    var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
    var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
    var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
    var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
    var numberOfWallRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer');

    // console.log(numberOfHarvesters + " Harvesters");
    // console.log(numberOfUpgraders + " Upgraders");
    // console.log(numberOfBuilders + " Builders");
    // console.log(numberOfRepairers + " Repairers");
    // console.log(numberOfWallRepairers + " Wall Repairers");

    var name = undefined;

    if (Game.spawns.Spawn1.energy >= 300) {

        if (numberOfHarvesters < minimumNumberOfHarvesters) {
            name = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {
                role: 'harvester',
                working: false
            });
        }
        else if (numberOfUpgraders < minimumNumberOfUpgraders) {
            name = Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE, MOVE], undefined, {
                role: 'upgrader',
                working: false
            });
        }
        else if (numberOfRepairers < minimumNumberOfRepairers) {
            name = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {
                role: 'repairer',
                working: false
            });
        }
        else if (numberOfBuilders < minimumNumberOfBuilders) {
            name = Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE, MOVE], undefined, {
                role: 'builder',
                working: false
            });
        }
        else if (numberOfWallRepairers < minimumNumberOfWallRepairers) {
            name = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {
                role: 'wallRepairer',
                working: false
            });
        }
        else if (!numberOfRepairers >= maximumNumberOfRepairers) {
            name = Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], undefined, {
                role: 'repairer',
                working: false
            });
        }

    }

    if (!name < 0) {
        console.log("Spawned new creep: " + name);
    }


    //update me on current situation
    //about one hour = 1028 game ticks
    var timeOfNextUpdate = Game.spawns.Spawn1.memory.timeofnextupdate;
    var timeTillNextUpdate = 1028;

    if (Game.time >= timeOfNextUpdate) {
        Game.notify('You Have ' + numberOfHarvesters + ' harvesters');
        Game.notify('You Have ' + numberOfUpgraders + ' upgraders');
        Game.notify('You Have ' + numberOfBuilders + ' builders');
        Game.notify('You Have ' + numberOfRepairers + ' repairers');
        Game.notify('You Have ' + numberOfWallRepairers + ' wall repairers');

        console.log('timeofnextupdate = now. Game Time = ' + Game.time + '. Next Update In ' + (Game.time+timeOfNextUpdate));
        Game.spawns.Spawn1.memory.timeofnextupdate = Game.time + timeOfNextUpdate;
    }

};