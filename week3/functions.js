function functionName(parameters){
    //functiion body
}
function square(a){
    //lines of code
}

function add(a, b){
    //lines of code
}

function say(message){
    console.log(message);
}

//functionName(arguments); process called invocation

say("Hello");

var result = 
console.log("Result is: " + result);

//return expression;
function add(a, b){
    //lines of code
    return a + b;
}

var sum = add(10, 25);
console.log("Sum is: " + sum)

function compare(a, b){
    if (a > b){
        return -1;
    }
    else if ( a < b){
        return 1;
    }
    return 0;
}

console.log(compare(10, 25));

function say(message){
    //show nothing if the message is empty
    if(! message){
        return;
    }
    console.log(message);
}

say("Hello World");

function add(){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2, 3, 4, 5));

//IIFE Immediately Invoked Function Expression
var showMessage = function (){
    console.log("Hello World!");
};

showMessage();

var sayHello = function (firstName){
    console.log("Hello, " + firstName);
}

sayHello("Bill");

//nested functions
function showMessage(lastName){
    function sayHello(){
        console.log("Hello, " + Name + ", how are you?");
    }
    return sayHello();
}

showMessage("Steve")
