module.exports = function () {
    StructureSpawn.prototype.createCustomCreep =
        function (energy, roleName, amountToSave) {

            if (!Game.spawns.Spawn1.spawning) {

                var numberOfParts;
                var body = [];

                if (roleName == 'harvester') {
                    numberOfParts = Math.floor(((energy - (energy * amountToSave)) - 50) / 150);


                    body.push(MOVE);

                    for (let i = 0; i < numberOfParts; i++) {
                        body.push(CARRY);
                        body.push(WORK);
                    }
                    return this.createCreep(body, undefined, {role: roleName, working: false});
                }
                else if (roleName == 'distributor') {
                    numberOfParts = Math.floor((energy - (energy * amountToSave)) / 100);

                    for (let i = 0; i < numberOfParts; i++) {
                        body.push(CARRY);
                        body.push(MOVE);
                    }
                    return this.createCreep(body, undefined, {role: roleName, working: false});
                }
                else if (roleName == 'energyMover') {
                    numberOfParts = Math.floor((energy - (energy * amountToSave)) / 100);

                    for (let i = 0; i < numberOfParts; i++) {
                        body.push(CARRY);
                        body.push(MOVE);
                    }
                    return this.createCreep(body, undefined, {role: roleName, working: false});
                }
                else if (roleName == 'upgrader') {
                    numberOfParts = Math.floor((energy - (energy * amountToSave)) / 200);

                    for (let i = 0; i < numberOfParts; i++) {
                        body.push(WORK);
                        body.push(CARRY);
                        body.push(MOVE);
                    }
                    return this.createCreep(body, undefined, {role: roleName, working: false});
                }
                else if (roleName == 'wallRepairer') {
                    numberOfParts = Math.floor((energy - (energy * amountToSave)) / 200);

                    for (let i = 0; i < numberOfParts; i++) {
                        body.push(WORK);
                        body.push(CARRY);
                        body.push(MOVE);
                    }
                    return this.createCreep(body, undefined, {role: roleName, working: false});
                }
                else if (roleName == 'repairer') {
                    numberOfParts = Math.floor((energy - (energy * amountToSave)) / 200);

                    for (let i = 0; i < numberOfParts; i++) {
                        body.push(WORK);
                        body.push(CARRY);
                        body.push(MOVE);
                    }
                    return this.createCreep(body, undefined, {role: roleName, working: false});
                }
                else if (roleName == 'builder') {
                    numberOfParts = Math.floor((energy - (energy * amountToSave)) / 200);

                    for (let i = 0; i < numberOfParts; i++) {
                        body.push(WORK);
                        body.push(CARRY);
                        body.push(MOVE);
                    }
                    return this.createCreep(body, undefined, {role: roleName, working: false});
                }
                else if (roleName == 'claimer' && Math.floor((energy - (energy * amountToSave))) >= 650) {
                    body.push(MOVE);
                    body.push(CLAIM);
                    return this.createCreep(body, undefined, {role: roleName, working: false});
                }
                else if (roleName == 'otherRoomCreep') {
                    numberOfParts = Math.floor((energy - (energy * amountToSave)) / 200);

                    for (let i = 0; i < numberOfParts; i++) {
                        body.push(WORK);
                        body.push(CARRY);
                        body.push(MOVE);
                    }

                    return this.createCreep(body, undefined, {role: roleName, type: undefined, working: false});
                }
                else if (roleName == 'energyThief') {
                    numberOfParts = Math.floor((energy - (energy * amountToSave)) / 200);

                    for (let i = 0; i < numberOfParts; i++) {
                        body.push(WORK);
                        body.push(CARRY);
                        body.push(MOVE);
                    }

                    return this.createCreep(body, undefined, {role: roleName, goingHome: false, working: false});
                }
                else if (roleName == 'invader') {
                    numberOfParts = Math.floor((energy - (energy * amountToSave)) / 380);

                     for (let i = 0; i < numberOfParts; i++) {
                    body.push(MOVE);
                    body.push(ATTACK);
                    }
                    return this.createCreep(body, undefined, {role: roleName, working: false});
                }
                else if (roleName == 'claimer') {
                    return 'TRIED TO SPAWN CLAIMER';
                }
                else {
                    return 'SPAWNING ERROR';
                }
            }
        }
};