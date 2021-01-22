//preliminaries #1
var s = 5

if (5 > 3)
    console.log ("5 is greater than 3");


//preliminiaries #2
var animalCat = "cat"

if (animalCat.length == 3) {
    console.log ("3 is the length of cat");
}
else 
    console.log ("3 is not the length")

//preliminaries #3
var cat;
var dog;
if ( cat <= dog) { 
    console.log ("cat and dog are the same")
    }
else 
    console.log ("cat & dog are not the same");

//bronze medal #1
var person = {
    name: "Bobby", 
    age: 12
}
if (person.age < 18)
    console.log ("NOT allowed");
else 
    console.log ("IS allowed");

//bronze medal #2

if (person.name[0] == "B")
    console.log ("starts with B - IS allowed")
else 
    console.log ("doesn't start with B - is NOT allowed")

//bronze medal #3
if (person.name[0] == "B" && person.age >= 18) {
    console.log ("bobby can attend")
}
else 
console.log ("bobby cannot attend")

//silver medal #1

if (1 === "1") {
    console.log ("strict")
}
if ( 1 == "1") {
    console.log ("loose" || "abstract")
}
else 
    console.log ("not equal at all")

//silver medal #2
if (1 <= 2 && 2 === 4){
    console.log ("yes")
}
else 
    console.log ("no")

//extra credit
 var person = (person.age < 18) ? $Result = "not allowed" : $Result = "is allowed";
    console.log ($Result)
   


//GOLD MEDAL

//is dog a string?
var dog;
    
if ("dog" === "dog"){
 console.log ("yes, dog is a string")
}
else "no dog is not a string";
    console.log ("no, dog is not a string")

//is true a boolean?
var booleanTrue = true;

if (booleanTrue === true){
    console.log ("true is a boolean")
    }
else 
    console.log ("true is not a boolean")


//has variable been defined or not?
if (person.name = "bobby" ){
    console.log ("person name HAS been defined")
}
if (person.height = "52in")
    console.log ("person height is NOT defined")
else 
    console.log ("everything else")

//is s greater than 12
if (s > 12)
    console.log ("s is greather than 12")
else (s <= 12)
    console.log ("s is NOT greater than 12")

//more letters and numbers
var m = 32
var l = 35
var a = 12
var n = 2

if (n = 2)
    console.log ("n equals 2")
if (l > 30)
    console.log ("l is greater than 30")
if ( a <= 9)
    console.log ("a is greater than 9")
else 
    console.log ("all other letters")

// odd or even?
var myNum = 10
var myNum = (myNum % 2 == 0) ? $Result = "EVEN number" : $Result = "ODD number";
console.log ($Result)

var myNum = 11
var myNum = (myNum % 2 == 0) ? $Result = "EVEN number" : $Result = "ODD number";
console.log ($Result)





