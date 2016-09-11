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

    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
        }
    }

    for (var room_it in Game.rooms) {
        var room = Game.rooms[room_it];
        var spawn = room.find(FIND_MY_SPAWNS)[0];
        var mainSpawn = Game.spawns.Spawn1;

        if (spawn != undefined) {
            var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.room == spawn.room);
            
            for (let name in Game.creeps) {
                var creep = Game.creeps[name];
                
                if (numberOfHarvesters <= 0) {
                creep.memory.role = 'harvester';
            }
                
                if (creep.memory.role == 'harvester') {
                    creep.say('HARVEST!');
                    roleHarvester.run(creep, spawn);
                }
                else if (creep.memory.role == 'distributor') {
                    creep.say('DISTRIBUTE!');
                    roleDistributor.run(creep, spawn);
                }
                else if (creep.memory.role == 'energyMover') {
                    creep.say('STORE!');
                    roleEnergyMover.run(creep, spawn);
                }
                else if (creep.memory.role == 'upgrader') {
                    creep.say('UPGRADE!');
                    roleUpgrader.run(creep, spawn);
                }
                else if (creep.memory.role == 'builder') {
                    creep.say('BUILD!');
                    roleBuilder.run(creep, spawn);
                }
                else if (creep.memory.role == 'repairer') {
                    creep.say('REPAIR!');
                    roleRepairer.run(creep, spawn);
                }
                else if (creep.memory.role == 'wallRepairer') {
                    creep.say('WALLS4LYF!');
                    roleWallRepairer.run(creep, spawn);
                }
                else if (creep.memory.role == 'claimer') {
                    creep.say('CLAIM!');
                    var roomToGoTo = 'E53N13'
                    var roomToClaim = 'E52N13';
                    roleClaimer.run(creep, mainSpawn, roomToGoTo, roomToClaim);

                }
                else if (creep.memory.role == 'otherRoomCreep') {
                    creep.say('THEOTHER1!');
                    var roomInPath = 'E53N13';
                    var roomToGoTo = 'E52N13';
                    roleOtherRoomCreep.run(creep, mainSpawn, roomInPath, roomToGoTo);
                }
                else if (creep.memory.role == 'energyThief') {
                    creep.say('TAKE!');
                    var roomToGoTo = 'E53N13';
                    var roomToTakeFrom = 'E52N13';
                    roleEnergyThief.run(creep, mainSpawn, roomToGoTo, roomToTakeFrom);
                }
                else if (creep.memory.role == 'invader') {
                    creep.say('ALL MINE!');
                    roleInvader.run(creep, mainSpawn);
                }
                else {
                    creep.memory.role = 'harvester';
                    creep.memory.working= false;
                    console.log('ERR UNKNOWN CREEP TYPE ' + creep.memory.role + ' Creep name = ' + creep.name);
                }


                AISpawner.loop(spawn, mainSpawn);

                var towers = room.find(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_TOWER
                });
                for (let tower of towers) {
                    runTower.run(tower);
                }
            }
        }
    }
};
