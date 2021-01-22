var shopper = {
    preFix: "Ms.",
    firstName: "Stephanie",
    lastName: "Olivares",
    age: 32,
    payWithCash: false,
    groceryCart: [" Dairy ", " Produce ", " Fruits ", " Vegetables ", " Pasta ", " Bread ", " and Meat. "],
    whyAmIShopping: function(){
        return this.preFix + " " + this.firstName + " " + this.lastName + " is shopping at Whole Foods for her: " + this.groceryCart + " She is paying with cash. " + " The last statement is " + this.payWithCash + "."
    }
}

console.log( shopper.whyAmIShopping() );