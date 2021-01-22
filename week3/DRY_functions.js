//1 return the sum
function add(m, s){
    return m + s;
}
console.log(add (7, 4));

//2 compare 3 numbers - return the largest
function compare(s, a, n){
    return Math.max(s, a, n);
}
console.log(compare(6, 9, 3));

//3 odd or even?
function oddEven(z){
    if(z % 2 === 0){
        return (z + " is even");
    } else {
        return (z + " is odd");
    }
}
console.log(oddEven(74));

//4 character count
function characterCount(charString){
    if(charString.length <= 20){
    return (charString + charString);
    } else {
        return charString.substring(0, charString.length / 2);
    }
}
console.log(characterCount("I absolutely love icecream"));
console.log(characterCount("I Bake "));

//extra credit Fibonacci...  
function fibonacciNum(n) {  
    var numberOne = 1, numberTwo = 1, nextNumber, interimTotal = 0;
    //console.log("Value of Input n: " + n);
    if(n == 0) {    
        return 0;
    }  

    if(n == 1) {    
        return 1;
    }  
    
    for (var i = 0; i < n; i++) { //  0, 1, 2, 3, 4, 5, 6<6 is false, ends the loop 
        //console.log("Number-1: " + numberOne);  // 1, 1, 2, 3, 5, 8, end
        //console.log("Number-2: " + numberTwo);  // 1, 2, 3, 5, 8, 13, end
        nextNumber = numberOne + numberTwo;  //  2, 3, 5, 8, 13, 21, end
        interimTotal += numberOne;  // 0+1=1, 1+1=2, 2+2=4, 4+3=7, 7+5=12, 12+8=20, end
        //console.log("Interim Addition: " + interimTotal);  // 1, 2, 4, 7, 12,  20, end
        numberOne = numberTwo; // 1, 2, 3, 5, 8, 13, end
        numberTwo = nextNumber; // 2, 3, 5, 8, 13, 21, end
    }   
    return interimTotal; // 20
}
console.log("Function Return Value: " + fibonacciNum(6));  // prints 20
//console.log(1+1+2+3+5+8);




