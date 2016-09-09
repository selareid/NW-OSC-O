module.exports = {
    run: function (tower) {

        var towerTarget = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: (c) => c.getActiveBodyparts(HEAL) >= 1
        || c.getActiveBodyparts(ATTACK) >= 1
        || c.owner.username != 'starwar15432'})

        if ((towerTarget) != undefined) {
            Memory.aYIT = true;
            tower.attack(towerTarget);
            console.log('Enemy Creep Owned By ' + towerTarget.owner.username + ' spotted by tower ' + tower.id);
            Game.notify('Enemy Creep Owned By ' + towerTarget.owner.username + ' spotted by tower ' + tower.id);
            console.log('Enemy Creep has ' + towerTarget.getActiveBodyParts(ATTACK) +
                'ATTACK parts and ' + towerTarget.getActiveBodyParts(HEAL) + ' HEAL parts');
            Game.notify('Enemy Creep has ' + towerTarget.getActiveBodyParts(ATTACK) +
                'ATTACK parts and ' + towerTarget.getActiveBodyParts(HEAL) + ' HEAL parts');
        }
        else if ((towerHeal = tower.pos.findClosestByRange(FIND_MY_CREEPS, {filter: (c) => c.hits < c.hitsMax})) != undefined) {
            tower.heal(towerHeal);
        }
        else if ((towerRepair = tower.pos.findClosestByRange(FIND_STRUCTURES, { filter: (s) =>
            s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART})) != undefined) {
            tower.repair(towerRepair);
            Memory.aYIT = false;
        }

    }
};