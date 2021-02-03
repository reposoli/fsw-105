const readlineSync = require('readline-sync');

const name = readlineSync.question('What is you name? ');

readlineSync.question('Hello ' + name +', Welcome to My Game. Press Enter to begin ');

const villains = ['Bellatrix Lestrange' , 'Queen of Hearts' , 'Cruella de Vil' , 'Jadis the White Witch'];
const treasure = ['Medkit' , 'Security Armor' , 'Berserk Pack' , 'Health Potion'];
var prize = [];
let userHealth = 50;
const options = ['Walk' , 'Exit' , 'Print'];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (7 - 4 + 3) + 4);
    const villain = villains[Math.floor(Math.random() * villains.length)];
    let villainsHealth = 50;
    const villainsPower = Math.floor(Math.random() * (7 - 3 + 4) + 3);

    const index = readlineSync.keyInSelect(options, "What will you do next?");

    if(options[index] == 'Exit') {
        return userHealth = 0;
    } else if (options[index] == 'Print') {
        console.log(name + ': \n' + userHealth + '\nTreasure: ' + pickUp);
    } else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking......');
        } else if (key >= .3) {
            console.log(villain + ' showed up.');

            while(villainsHealth > 0 && userHealth > 0) {

                const user = readlineSync.question(' What do yo want to do? enter "r" to run or "a" to attack: ');

                switch (user){
                    case 'r': //runaway
                    const run = Math.random()
                    if(run < .4) {
                        console.log('Before you can run away ' + villains + ' attacks you with: ' + villainsPower);
                    } else {
                        console.log('You Ran Away!!');
                        break;
                    }

                    case 'a':
                    //attack the enemy
                    villainsHealth -= attackPower;
                    console.log('You attacked ' + villain + ' with ' + attackPower + ' attack Power');

                    if (villainsHealth <= 0){
                        console.log('You killed' + villain + '.\n' + villain + 'left: ' + pickUp);
                        let loot = Math.random();
                        if(loot <= .3){
                            prize.push(pickUp);
                        }
                    } else if (userHealth <= 0){
                        console.log( villain + ' has defeated you. you are dead.')
                    }
                }
            }
        }
    }
}

while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 50;
    };
    userRestore();
    game();
}