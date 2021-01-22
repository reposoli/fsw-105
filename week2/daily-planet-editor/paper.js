/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function Who_Wins(isThereKryptonite, enemies) {
if (isThereKryptonite) {
return "Superman beats" + " " + enemies + "," + " " + "of course";    
    } else {
return "Depends on how quick Superman can get rid of the Kryptonite." + enemies + " " + "could possibly win this one.";
    }
}
var i;
for (i = 0; i < enemies.length; i++) {
    console.log(Who_Wins(is_there_kryptonite,enemies[i]));
    var is_there_kryptonite;
if (i % 2 == 0) {
    is_there_kryptonite = true;
    } else {
    is_there_kryptonite = false;
    }
}

function HowAttractedIsLoisLaneToMe (){
    // 1 is not at all attracted, 10 is "super" attracted...
    consol.log("How attracted is Lois Lane to me?");
    return Math.floor((Mat.random () * 10) + 1);
}

var clarkKent = true;
var superman = false;

while (clarkKent) {
    console.log ("I'm just a nerdy columnist");
var phoneBoothQuickChange = Math.random();
if (phoneBoothQuickChange >= 0.5) {
    clarkKent= false;
    superman= true;
    console.log ("Now I'm Superman!");
    }
}