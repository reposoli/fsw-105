//1
function capitalizeAndLowerCase(str1) {
    return str1.toLocaleUpperCase() + str1.toLocaleLowerCase();
}
console.log(capitalizeAndLowerCase("Hello"));

//2
function findMiddleIndex(str2) {
    return Math.floor(str2.length / 2);
}
console.log(findMiddleIndex("Hello"))
console.log(findMiddleIndex("Hello World"))

//3
function returnFirstHalf(str3) {
    return str3.slice(0, str3.length / 2);
}

console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));


//4
function capitalizeAndLowercase(str4) {
    //if (str5.length % 2 === 0){
        return str4.slice(0, str4.length / 2).toUpperCase() + str4.slice(str4.length / 2).toLowerCase();
    }

//function capitalizeAndLowercase(str6) {
 //   if (str6.length % 2 === 1){
  //  }
//      return str6.slice(0, str6.length / 2).toUpperCase() + str6.slice(5, str6.length(0)).toLowerCase();
    
//}

console.log(capitalizeAndLowercase("Hello"));
console.log(capitalizeAndLowercase("Hello World"));




