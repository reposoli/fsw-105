const sync = require("readline-sync");
var firstInt = sync.questionInt("Please enter your first number: ");
var secondInt = sync.questionInt("Please enter your second number: ");
var selectOp = sync.question("Please enter the operation to perform: add, sub, mul, div ");

function addNum(firstInt, secondInt){
    return firstInt + secondInt;
}
function subNum(firstInt, secondInt){
    return firstInt - secondInt;
}
function mulNum(firstInt, secondInt){
    return firstInt * secondInt;
}
function divNum(firstInt, secondInt){
    return firstInt / secondInt;
}
function calculator(firstInt, secondInt, selectOp){
    if(selectOp == 'add'){
        console.log("The result is: " + addNum(firstInt, secondInt));
    } else if (selectOp == 'sub') {
        console.log("The result is: " + subNum(firstInt, secondInt));
    } else if (selectOp == 'mul'){
        console.log("The result is: " + mulNum(firstInt, secondInt));
    } else if (selectOp == 'div'){
        console.log("The result is: " + divNum(firstInt, secondInt));
    } 
}

calculator(firstInt, secondInt, selectOp);
