//SECTION A - Use the built-in array method .filter() to solve all of these problems:
console.log("SECTION A ------------------------------------")
//1 Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveOrGreater(arr) {
    const result = arr.filter(function(num){
        if(num >= 5)
            return num
    });
    return result;
}
console.log("1 Given an array of numbers, return a new array that has only the numbers that are 5 or greater.")
console.log(fiveOrGreater([3, 6, 8, 2]));

//2 Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    const result = arr.filter(function(num){
        if (num % 2 == 0)
        return num;
    });
    return result;
}
console.log("2 Given an array of numbers, return a new array that only includes the even numbers.");
console.log(evensOnly([3, 6, 8, 2]));

//EXTRA CREDIT - make a filtered list of all the people who are old enough to see the Matrix (17+)
function ofAge(arr){
    const result = arr.filter(function(name){
        return name.age >= 17;
    });
    return result;
}
console.log ("extra credit - old enough to see Matrix")
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },

]));

//SECTION B - Use the built-in .map() method on arrays to solve all of these problems:
console.log("SECTION B ------------------------------------")
//1. Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    const result = arr.map(function(num){
        return num * 2;
    });
    return result;
    }
console.log("1. Make an array of numbers that are doubles of the first array")
console.log(doubleNumbers([2, 5, 100]));

//2. Take an array of numbers and make them strings
function stringItUp(arr){
    const result = arr.map(function(num){
        return num.toString();
    });
    return result;
}
console.log("2. Take an array of numbers and make them strings")
console.log(stringItUp([2, 5, 100]));

//3. Capitalize each of an array of names
function capitalizeNames(arr){
    const result = arr.map(function(num){
        return num[0].toUpperCase() + num.slice(1).toLowerCase();
    })
    return result;
}
console.log("3. Capitalize each of an array of names")
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


//SECTION C - Use the built-in .reduce() method on arrays to solve all of these problems:
console.log("SECTION C ------------------------------------")
//1. Turn an array of numbers into a total of all the numbers
function total(arr) {
    const result = arr.reduce(function(num, finalSum){
        return finalSum = finalSum + num;
    });
    return result;
}
console.log("1. Turn an array of numbers into a total of all the numbers")
console.log(total([1, 2, 3]));

//2. Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
 const result = arr.reduce(function(){
     return arr.join("");
 });
 return result;
}
console.log("2. Turn an array of numbers into a long string of all those numbers.")
console.log(stringConcat([1, 2, 3])); 

//3 Turn an array of voter objects into a count of how many people voted
function totalVoters(arr){
    return arr.reduce(function(x, y) {
    return x + y.voted;
    }, 0);
}
var voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary' , age: 31, voted: false},
    {name: 'Becky' , age: 43, voted: false},
    {name: 'Joey' , age: 41, voted: true},
    {name: 'Jeff' , age: 30, voted: true},
    {name: 'Zack' , age: 19, voted: false},
];
console.log("3 Turn an array of voter objects into a count of how many people voted")
console.log(totalVoters(voters));

//SECTION D - Use the built-in .sort() method on arrays to solve all of these problems:
console.log("SECTION D ------------------------------------")
//1. Sort an array from smallest number to largest
function  leastToGreatest(arr){
    const result = arr.sort(function(num1, num2){
        return num1 - num2;
    });
    return result;
}
console.log("1. Sort an array from smallest number to largest");
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

//2. Sort an array from largest number to smallest
function  greatestToLeast(arr){
    const result = arr.sort(function(num1, num2){
        return num2 - num1;
    });
    return result;
}
console.log("Sort an array from largest number to smallest")
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

//3 Sort an array from shortest string to longest
function lengthSort(arr) {
 const result = arr.sort(function(m, s){
     return m.length - s.length;
 });
 return result;
}
console.log("Sort an array from shortest string to longest")
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));