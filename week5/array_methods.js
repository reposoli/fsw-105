var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1. remove last item
vegetables.pop();
//console.log("vegetables: ", vegetables);

//2 remove first item
fruit.shift()
//console.log("fruit: ", fruit);

//3 find orange
var indexOforange = fruit.indexOf("orange")
fruit.indexOf("orange");
//console.log("find orange: " + indexOforange);

//4 add index of orange to the end of fruit array
fruit.push(indexOforange);
//console.log(fruit.push(indexOforange));

//5 length property to find length of vegetable array
//console.log(vegetables.length)

//6 add veg length to end of array 
vegetables.push (vegetables.length);

//7 two arrays together into one array. fruit first then new array "food"
var food = fruit.concat(vegetables);
//console.log(food)

//8 remove two elements from new array at index4 with 1 method
food.splice(4,2)
//console.log(food);

//9 reverse array
food.reverse()
//console.log(food);

//10turn array into string and return
console.log(food.toString());