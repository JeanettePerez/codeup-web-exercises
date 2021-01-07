"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello, " + name + "!"

}


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello("Jeanette");
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

let myName = "Jeanette";
console.log(sayHello(myName));
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);


/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(num) {
    return num === 2;

}
console.log(random);
console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercent, totalBill) {
    return tipPercent * totalBill;
}
console.log(calculateTip(.25, 25.50));
console.log(calculateTip(.20, 20));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// my original code
//let billTotal = parseInt(prompt("what is your bill total?"));
//let tipPercentage = parseFloat(prompt("What percentage for a tip would you like to apply?"));
//let tipAmount = (calculateTip(tipPercentage, billTotal));
 //   alert(tipAmount);
    // the problem works, but it is not user readable.
    // the class demo makes more sense. notes are commented below.

// class demo and corrections
let billTotal = parseFloat(prompt("what is your bill total?"));
let tipPercentage = parseFloat(prompt("What percentage for a tip would you like to apply?")) / 100;
let tipAmount = (calculateTip(tipPercentage, billTotal));
let outputMessage = 'Your bill is '
    + numToDollars(billTotal) + ' and you would like to tip '
    + tipPercentage * 100 + '%.'
    + ' Your total tip is '
    + numToDollars(tipAmount) + '.';
alert(outputMessage);

// remember when you make a code make it readable for other humans.
// adding parseFloat in order for the user to be able to put in decimal places in the total and percentages prompts.
// dividing the tipPercentage by 100 will make it more user readable because people are more likely to put the whole number and not the decimal of the tip percent.
// making the alert more specific in order for the user to understand what is going on with the output


// the numToDollar converts the tipAmount so it shows up with a $ in front of the dollar amount
function numToDollars(num) {
    return '$' + num.toFixed(2);
}

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


// my orginal code
//function applyDiscount(originalPrice, discountPercent) {
//    let totalDiscount = originalPrice * discountPercent;
//    return originalPrice - totalDiscount;


//}

// class demo and correction
function applyDiscount(billDollars, discountPercentage) {
    return billDollars - (billDollars * discountPercentage);
}
console.log(applyDiscount(45.99, .12));