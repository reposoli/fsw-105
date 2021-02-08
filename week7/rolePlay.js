const readlineSync = require('readline-sync');

const name = readlineSync.question('Welcome to the Krypt. What is your name? ');

readlineSync.question(name + ', Can you find your way out the Krypt without being attacked? press Enter to begin and Best of Luck!');

const enemies = ['Krypt Monster', 'Aragog Agromantula', 'Nagini Basilisk']
const tools = ['Health', 'Ammo', 'Escape Map', 'Light']
var escape = []
let pH = 40
const menu = ['Run', 'Walk', 'Tool', 'Exit']
let toolGrab = tools[Math.floor(Math.random() * tools.length)];

function kryptKeeper() {
    const aP = Math.floor(Math.random() * (9 - 3 + 4) + 4)
    const villain = enemies[Math.floor(Math.random() * enemies.length)]
    let eH = 42
    const eP = Math.floor(Math.random() * (9 - 4 + 2) + 4)
    const index = readlineSync.keyInSelect(menu, 'What will you do next?')

    if (menu[index] == 'Exit') {``
        return pH = 0;
    } else if (menu[index] == 'Tool') {
        console.log(name + ': \n' + pH + '\nTool Box: ' + toolGrab)
    } else if (menu[index] == 'Run') {
        console.log('You Can Run, But You Wont Escape the Krypt that Way!')
        console.log('----------------------------------------------------------------------------------------------------------')
    } else if (menu[index] === 'Walk') {
        let key = Math.random()
        if (key <= .3) {
            console.log('walking... ')
        } else if (key >= .3) {
            console.log(villain + ' has blocked your passage.')

            while (eH > 0 && pH > 0) {

                const player = readlineSync.question('What do you want to do? Enter "r" to run the other way or "a" to attack. Enter "h" for health stats: ')

                switch (player) {
                    case 'r':
                        const run = Math.random()
                        if (run < .7) {
                            console.log('Before you can run ' + villain + ' attacked you with: ' + eP)
                            console.log('----------------------------------------------------------------------------------------------------------')
                        } else {
                            console.log('You fall into a sink hole while running away... GAME OVER!!')
                            console.log('----------------------------------------------------------------------------------------------------------')
                            return pH = 0;
                            
                        }
                    case 'a':
                        eH -= aP
                        console.log('You Struck the ' + villain + ' with ' + aP + ' attack power. His health is down to ' + eH)
                        console.log('----------------------------------------------------------------------------------------------------------')

                        pH -= eP
                        console.log(villain + ' just attacked you with: ' + eP + ' attack power.' + '\nYour  health is down to ' + pH)
                        console.log('----------------------------------------------------------------------------------------------------------')

                        if (eH <= 0) {
                            console.log('You defeated the villain!!' + '\n' + villain + ' ran away: ' + 'Here is your way out.. Player Received: ' + '\n' + toolGrab + ' and uses it to escape the Krypt!!.. Bye For Now' )
                            console.log('----------------------------------------------------------------------------------------------------------')
                    
                            
                            let loot = Math.random()
                            if (loot <= .4) {
                                escape.push(toolGrab)
                                
                            }
                            return pH = 0;
                            
                        } else if (pH <= 0) {
                            console.log(name + ' YOU HAVE RUN OUT OF HEALTH AND WILL DIE IN THIS KRYPT.. GAME OVER!!')
                            console.log('----------------------------------------------------------------------------------------------------------')
                            
                        }
                    
                    case 'h':
                        pH = pH
                        console.log('Your health is ' + pH + '  ' + 'Your enemies health is ' + eH)
                }
            }
        }
    }
}

while (pH > 0) {
    playerContinue = function () {
        playerActive = true;
        pH = 35
    };
    playerContinue()
    kryptKeeper()
}