module.exports = {
    run: function (creep, spawn) {

            var target = creep.findClosestByRange(FIND_HOSTILE_CREEPS);

            if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
    }
};