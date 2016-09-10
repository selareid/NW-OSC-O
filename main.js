var AISpawner = require ('AI.spawner');

var roleHarvester = require ('role.harvester');
var roleDistributor = require ('role.distributor');
var roleEnergyMover = require ('role.energyMover');
var roleUpgrader = require ('role.upgrader');
var roleBuilder = require ('role.builder');
var roleRepairer = require ('role.repairer');
var roleWallRepairer = require ('role.wallRepairer');
var roleClaimer = require ('role.claimer');
var roleOtherRoomCreep = require ('role.otherRoomCreep');
var roleEnergyThief = require ('role.energyThief');
var roleInvader = require ('role.invader');

var runTower = require ('run.tower');

module.exports.loop = function () {

    AISpawner.loop();

    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
        }
    }


    for (let name in Game.creeps) {
        var creep = Game.creeps[name];

        if (creep.pos.x == 0) {
            creep.move(RIGHT);
            creep.move(RIGHT);
        }

            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            else if (creep.memory.role == 'distributor') {
                roleDistributor.run(creep);
            }
            else if (creep.memory.role == 'energyMover') {
                roleEnergyMover.run(creep);
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
            else if (creep.memory.role == 'claimer') {
                var roomToClaim = 'E52N13';
                var middleRoom = 'E53N13';
                roleClaimer.run(creep, middleRoom, roomToClaim);
            }
            else if (creep.memory.role == 'otherRoomCreep') {
                var roomToGoTo = 'E53N13';
                roleOtherRoomCreep.run(creep, roomToGoTo);
            }
            else if (creep.memory.role == 'energyThief') {
                var roomToGoTo = 'E53N13';
                var roomToTakeFrom = 'E52N13';
                roleEnergyThief.run(creep, roomToGoTo, roomToTakeFrom);
            }
            else if (creep.memory.role == 'invader') {
                roleInvader.run(creep);
            }
            else {
                console.log('ERR UNKNOWN CREEP TYPE ' + creep.memory.role + ' Creep name = ' + creep.name);
            }

}

    var towers = Game.spawns.Spawn1.room.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    for (let tower of towers) {
        runTower.run(tower);
    }


};
