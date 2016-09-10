require('prototype.spawn')();

module.exports.loop = function() {

    var minimumNumberOfHarvesters = 2;
    var minimumNumberOfDistributors = 2;
    var minimumNumberOfEnergyMovers = 0;
    var minimumNumberOfUpgraders = 3;
    var minimumNumberOfBuilders = 1;
    var minimumNumberOfRepairers = 2;
    var minimumNumberOfWallRepairers = 2;
    var minimumNumberOfClaimers = 0;
    var minimumNumberOfOtherRoomCreeps = 5;
    var minimumNumberOfEnergyThiefs = 1;
    var minimumNumberOfInvaders = 0;

    var maximumNumberOfHarvesters = 7;
    var maximumNumberOfDistributors = 5;
    var maximumNumberOfEnergyMovers = 1;
    var maximumNumberOfFallBack = 2;
    var maximumNumberOfOtherRoomCreeps = 15;
    
    if (Memory.aYIT == true) {
        console.log('ur dead');
        Game.notify('ur totally dead');
        minimumNumberOfInvaders = 10;
    }

    var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
    var numberOfDistributors = _.sum(Game.creeps, (c) => c.memory.role == 'distributor');
    var numberOfEnergyMovers = _.sum(Game.creeps, (c) => c.memory.role == 'energyMover');
    var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
    var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
    var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
    var numberOfWallRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer');
    var numberOfClaimers = _.sum(Game.creeps, (c) => c.memory.role == 'claimer');
    var numberOfOtherRoomCreeps = _.sum(Game.creeps, (c) => c.memory.role == 'otherRoomCreep');
    var numberOfEnergyThiefs = _.sum(Game.creeps, (c) => c.memory.role == 'energyThief')
    var numberOfInvaders = _.sum(Game.creeps, (c) => c.memory.role == 'invader');


    var energy = Game.spawns.Spawn1.room.energyAvailable;
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


    if (Game.spawns.Spawn1.spawning != true && Game.spawns.Spawn1.energy >= 300 && (energy - (energy * amountToSave)) >= 300) {

        if (numberOfHarvesters < minimumNumberOfHarvesters) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'harvester', amountToSave);
        }
        else if (numberOfDistributors < minimumNumberOfDistributors) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'distributor', amountToSave);
        }
        else if (numberOfEnergyMovers < minimumNumberOfEnergyMovers) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'energyMover', amountToSave);
        }
        else if (numberOfUpgraders < minimumNumberOfUpgraders) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'upgrader', amountToSave);
        }
        else if (numberOfBuilders < minimumNumberOfBuilders) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder', amountToSave);
        }
        else if (numberOfRepairers < minimumNumberOfRepairers) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'repairer', amountToSave);
        }
        else if (numberOfWallRepairers < minimumNumberOfWallRepairers) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'wallRepairer', amountToSave);
        }
        else if (numberOfClaimers < minimumNumberOfClaimers) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'claimer', amountToSave);
        }
        else if (numberOfOtherRoomCreeps < minimumNumberOfOtherRoomCreeps) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'otherRoomCreep', amountToSave);
        }
        else if (numberOfEnergyThiefs < minimumNumberOfEnergyThiefs) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'energyThief', amountToSave);
        }
        else if (numberOfInvaders < minimumNumberOfInvaders) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'invader', amountToSave);
        }
        else if (numberOfHarvesters < maximumNumberOfHarvesters) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'harvester', amountToSave);
        }
        else if (numberOfDistributors < maximumNumberOfDistributors) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'distributor', amountToSave);
        }
        else if (numberOfEnergyMovers < maximumNumberOfEnergyMovers) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'energyMover', amountToSave);
        }
        else if (numberOfRepairers < maximumNumberOfFallBack) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'repairer', amountToSave);
        }
        else if (numberOfOtherRoomCreeps < maximumNumberOfOtherRoomCreeps) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'otherRoomCreep', amountToSave);
        }

        if (name != undefined && -4 && -6) {
            console.log("Creating Creep " + name);
        }

    }


    //update me on current situation
    //about one hour = 1028 game ticks
    var timeOfNextUpdate = Game.spawns.Spawn1.memory.timeofnextupdate;
    var timeTillNextUpdate = 1;

    var d = new Date();
    var time = d.getHours();

    if (numberOfHarvesters <= 0) {
        Game.notify("No harvesters you're in trouble");
        console.log("No distributors you're in trouble");
    }
    else if (numberOfDistributors <= 0) {
        Game.notify("No distributors you're in trouble");
        console.log("No distributors you're in trouble");
    }


    if (time >= timeOfNextUpdate) {
        Game.notify('You Controller Level Is ' + Game.spawns.Spawn1.room.controller.level);
        Game.notify('And Your Progress Needed Is ' + (Game.spawns.Spawn1.room.controller.progressTotal - Game.spawns.Spawn1.room.controller.progress));
        Game.notify('You Have ' + numberOfHarvesters + ' harvesters');
        Game.notify('You Have ' + numberOfDistributors + ' distributors');
        Game.notify('You Have ' + numberOfEnergyMovers + ' energy movers');
        Game.notify('You Have ' + numberOfUpgraders + ' upgraders');
        Game.notify('You Have ' + numberOfBuilders + ' builders');
        Game.notify('You Have ' + numberOfRepairers + ' repairers');
        Game.notify('You Have ' + numberOfWallRepairers + ' wall repairers');
        Game.notify('You Have ' + numberOfClaimers + ' claimers');
        Game.notify('You Have ' + numberOfOtherRoomCreeps + ' other room creeps');
        Game.notify('You Have ' + numberOfInvaders + ' invaders');

        console.log('timeofnextupdate = now. Time = ' + time + '. Next Update In ' + (time + timeTillNextUpdate));
        Game.spawns.Spawn1.memory.timeofnextupdate = time + timeTillNextUpdate;
    }

};