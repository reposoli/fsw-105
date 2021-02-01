var readlineSync = require('readline-sync');
var playerName = readlineSync.question('What is Your Name? ');

var escape = `${playerName}, Let's Play a Game... You Are Locked In This Room, How Will You ESCAPE??: `;
console.log(escape);

var noKey = true;
var yesKey = false;

while(noKey == true){
    const gameMenu = readlineSync.keyIn(' Enter 1 to Put Hand in Hole \n Enter 2 to Find The Key \n Enter 3 to Open The Door ', {limit: '$<1-9>'});
    
    if (gameMenu == 1){
        console.log(`${playerName}, You FAILED To Escape the Room.. Now, YOU ARE DEAD`);
        noKey = false;
    }
    else if (gameMenu == 2 && yesKey == false) {
        console.log(`${playerName} , YAY! You Found The Key.. Now You Must -> Open The Door <- or DIE!`);
        yesKey = true;
    }
    else if (gameMenu == 2 && yesKey == true) {
        console.log(`${playerName} , You Already Found The Key Silly! You Need To -> Open The Door <- or DIE!`)
    }
    else if (gameMenu == 3 && yesKey == false){
        console.log(`${playerName} , Nice Try Buddy.. Come Back When You -> Find The Key <-.. or DIE!`);
    }
    else if (gameMenu == 3 && yesKey == true){
        console.log(`${playerName} , WoOt WoOt! You Found The Key, Opened The Door And Escaped The Room. Reward: YOUR LIFE!!`);
        noKey = false;
    }
    else if (gameMenu >= 4 && yesKey == false){
        console.log(`${playerName} , You Must Enter 1, 2, or 3.. Now, YOU ARE DEAD!`);
        noKey = false;
    }
}