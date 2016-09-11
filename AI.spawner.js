require('prototype.spawn')();

module.exports.loop = function(spawn, mainSpawn) {

    var minimumNumberOfHarvesters = 5;
    var minimumNumberOfDistributors = 3;
    var minimumNumberOfEnergyMovers = 0;
    var minimumNumberOfUpgraders = 4;
    var minimumNumberOfBuilders = 1;
    var minimumNumberOfRepairers = 2;
    var minimumNumberOfWallRepairers = 2;
    var minimumNumberOfClaimers = 2;
    var minimumNumberOfOtherRoomCreeps = 3;
    var minimumNumberOfEnergyThiefs = 1;
    var minimumNumberOfInvaders = 0;

    var maximumNumberOfHarvesters = 7;
    var maximumNumberOfDistributors = 5;
    var maximumNumberOfEnergyMovers = 1;
    var maximumNumberOfFallBack = 4;
    var maximumNumberOfOtherRoomCreeps = 3;

    if (Memory.aYIT == true) {
        console.log('ur dead');
        Game.notify('ur totally dead');
        minimumNumberOfInvaders = 10;
    }

    var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.room == spawn.room);
    var numberOfDistributors = _.sum(Game.creeps, (c) => c.memory.role == 'distributor' && c.room == spawn.room);
    var numberOfEnergyMovers = _.sum(Game.creeps, (c) => c.memory.role == 'energyMover' && c.room == spawn.room);
    var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader' && c.room == spawn.room);
    var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder' && c.room == spawn.room);
    var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer' && c.room == spawn.room);
    var numberOfWallRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer' && c.room == spawn.room);
    var numberOfClaimers = _.sum(Game.creeps, (c) => c.memory.role == 'claimer');
    var numberOfOtherRoomCreeps = _.sum(Game.creeps, (c) => c.memory.role == 'otherRoomCreep');
    var numberOfEnergyThiefs = _.sum(Game.creeps, (c) => c.memory.role == 'energyThief')
    var numberOfInvaders = _.sum(Game.creeps, (c) => c.memory.role == 'invader' && c.room == spawn.room);


    var energy = spawn.room.energyAvailable;
    var amountToSave = 0;
    var name = undefined;

    if ((numberOfHarvesters >= minimumNumberOfHarvesters)
        && (numberOfDistributors >= minimumNumberOfDistributors)
        && (numberOfEnergyMovers >= minimumNumberOfEnergyMovers)) {
        amountToSave = 0.1;//in percent
    }
    else {
        amountToSave = 0;
    }


    if (spawn.spawning != true && spawn.energy >= 300 && (energy - (energy * amountToSave)) >= 300) {

        if (numberOfHarvesters < minimumNumberOfHarvesters) {
            name = spawn.createCustomCreep(energy, 'harvester', amountToSave);
        }
        else if (numberOfDistributors < minimumNumberOfDistributors) {
            name = spawn.createCustomCreep(energy, 'distributor', amountToSave);
        }
        else if (numberOfEnergyMovers < minimumNumberOfEnergyMovers) {
            name = spawn.createCustomCreep(energy, 'energyMover', amountToSave);
        }
        else if (numberOfUpgraders < minimumNumberOfUpgraders) {
            name = spawn.createCustomCreep(energy, 'upgrader', amountToSave);
        }
        else if (numberOfBuilders < minimumNumberOfBuilders) {
            name = spawn.createCustomCreep(energy, 'builder', amountToSave);
        }
        else if (numberOfRepairers < minimumNumberOfRepairers) {
            name = spawn.createCustomCreep(energy, 'repairer', amountToSave);
        }
        else if (numberOfWallRepairers < minimumNumberOfWallRepairers) {
            name = spawn.createCustomCreep(energy, 'wallRepairer', amountToSave);
        }
        else if (numberOfClaimers < minimumNumberOfClaimers) {
            name = mainSpawn.createCustomCreep(energy, 'claimer', amountToSave);
        }
        else if (numberOfOtherRoomCreeps < minimumNumberOfOtherRoomCreeps) {
            name = mainSpawn.createCustomCreep(energy, 'otherRoomCreep', amountToSave);
        }
        else if (numberOfEnergyThiefs < minimumNumberOfEnergyThiefs) {
            name = mainSpawn.createCustomCreep(energy, 'energyThief', amountToSave);
        }
        else if (numberOfInvaders < minimumNumberOfInvaders) {
            name = spawn.createCustomCreep(energy, 'invader', amountToSave);
        }
        else if (numberOfHarvesters < maximumNumberOfHarvesters) {
            name = spawn.createCustomCreep(energy, 'harvester', amountToSave);
        }
        else if (numberOfDistributors < maximumNumberOfDistributors) {
            name = spawn.createCustomCreep(energy, 'distributor', amountToSave);
        }
        else if (numberOfEnergyMovers < maximumNumberOfEnergyMovers) {
            name = spawn.createCustomCreep(energy, 'energyMover', amountToSave);
        }
        else if (numberOfRepairers < maximumNumberOfFallBack) {
            name = spawn.createCustomCreep(energy, 'repairer', amountToSave);
        }
        else if (numberOfOtherRoomCreeps < maximumNumberOfOtherRoomCreeps) {
            name = mainSpawn.createCustomCreep(energy, 'otherRoomCreep', amountToSave);
        }

        if (name != undefined && -4 && -6) {
            console.log("Creating Creep " + name);
        }

    }


    //update me on current situation
    //about one hour = 1028 game ticks
    var timeOfNextUpdate = Memory.timeofnextupdate;
    var timeTillNextUpdate = 1028;
    var time = Game.time;

    if (numberOfHarvesters <= 0) {
        Game.notify("No harvesters in room " + spawn.room);
        console.log("No harvesters in room " + spawn.room);
    }
    else if (numberOfDistributors <= 0) {
        Game.notify("No distributors in room " + spawn.room);
        console.log("No distributors in room " + spawn.room);
    }


    if (time >= timeOfNextUpdate) {
        Game.notify('Room ' + spawn.room);
        Game.notify('You Controller Level Is ' + spawn.room.controller.level);
        Game.notify('And Your Progress Needed Is ' + (spawn.room.controller.progressTotal - spawn.room.controller.progress));
        Game.notify('You Have ' + numberOfHarvesters + ' harvesters');
        Game.notify('You Have ' + numberOfDistributors + ' distributors');
        Game.notify('You Have ' + numberOfEnergyMovers + ' energy movers');
        Game.notify('You Have ' + numberOfUpgraders + ' upgraders');
        Game.notify('You Have ' + numberOfBuilders + ' builders');
        Game.notify('You Have ' + numberOfRepairers + ' repairers');
        Game.notify('You Have ' + numberOfWallRepairers + ' wall repairers');
        Game.notify('You Have ' + numberOfClaimers + ' claimers');
        Game.notify('You Have ' + numberOfOtherRoomCreeps + ' other room creeps');
        Game.notify('You Have ' + numberOfEnergyThiefs + ' energy thiefs');
        Game.notify('You Have ' + numberOfInvaders + ' invaders');

        console.log('timeofnextupdate = now. Time = ' + time + '. Next Update In ' + (time + timeTillNextUpdate));
        Memory.timeofnextupdate = time + timeTillNextUpdate;
    }

};
