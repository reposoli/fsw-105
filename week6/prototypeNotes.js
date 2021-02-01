/*
JavaScript is a prototype based language, so, 
whenever we create a function using JavaScript, 
JavaScript engine adds a prototype property inside a function.  

Prototype property is basically an object (also known as Prototype object), 
where we can attach methods and properties in a prototype object, 
which enables all the other objects to inherit these methods and properties.

Consider the example below:

There are different ways to create an object, one of the way is to create an object using function constructor.


// function constructor 
function person(name, job, yearOfBirth){ 
   this.name= name; 
   this.job= job; 
   this.yearOfBirth= yearOfBirth; 
} 

// this will show Person's prototype property. 
console.log(person.prototype); 


//Now, we will add a method calculateAge() to the 
//Prototype property in a Person function constructor which 
//will be inherited by different objects. Below is the code for this:


// function constructor 
function person(name, job, yearOfBirth){ 
    this.name= name; 
    this.job= job; 
    this.yearOfBirth= yearOfBirth; 
 } 
 
 Person.prototype.calculateAge= function(){ 
    console.log('The current age is: ' + (2019 - this.yearOfBirth) ); 
 } 
 
 console.log(person.prototype); 


//Now, we will create 2 different objects which will inherit calculateAge() method 
//and remember, when a certain method (or property) is called, 
//it first checks inside the object but when it doesn’t find, then search moves on Object’s prototype.

// function constructor 
function person(name, job, yearOfBirth){ 
    this.name= name; 
    this.job= job; 
    this.yearOfBirth= yearOfBirth; 
 } 
 
 // adding calculateAge() method to the Prototype property 
 Person.prototype.calculateAge= function(){ 
    console.log('The current age is: '+ (2021 - this.yearOfBirth) ); 
 } 
 console.log(Person.prototype);
 
 // creating Object Person1 
 let Person1 = new Person('Jenni', 'clerk', 1986); 
 console.log(Person1);
 
 let Person2 = new Person('Madhu', 'Developer', 1997); 
 console.log(Person2);
 
 Person1.calculateAge(); 
 Person2.calculateAge();

 /*
 As seen above, we created two Objects Person1 and Person2 using 
 constructor function Person. When we called Person1.calculateAge() and 
 Person2.calculateAge(), it will first check whether it is present inside 
 Person1 and Person2 object. If it is not present, it will move to 
 Person’s Prototype object and prints the current age, 
 which shows Prototype property enables other objects 
 to inherit all the properties and methods of function constructor.
 */



 function Book(name, author, year){
     this.name = name;
     this.author = author;
     this.year = year;
 }

 function displayBook(book){
     console.log(book.name + "authored by: " + book. author + " was published in the year: " + book.year + ".");
 }

 var book1 = new Book('Node.js Web Development', 'David Herron', 2020);
 var book2 = new Book('Professional JavaScript for Eeb Developers', 'Matt Frisbie', 2019);
 var book3 = new Book('Modern Full-Stack Development', 'Frank Zammetti', 2020);

 displayBook(book1);
 displayBook(book2);
 displayBook(book3);

 function Student(){
     this.name = 'John';
     this.gender = 'Male';
 }

 Student.prototype.age = 15;
 Student.prototype.sayHi = function(){
     console.log("Hi, How are you?");
 }

 var student1 = new Student();
 var proto = Object.getPrototypeOf(student1);
    //student1.age = 15;
    console.log(student1.age);  // returns 15
    console.log(proto.constructor); //returns Student function in its entirety

    var student2 = new Student();
    student2.sayHi()
    console.log(student2.age);  // return 15 now after age is added to the prototype
    