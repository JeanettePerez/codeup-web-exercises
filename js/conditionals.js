"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if (color === 'blue') {
        return 'blue is the color of the sky';
    } else if (color === 'red') {
        return 'strawberries are red';
    } else if (color === 'cyan') {
        return 'I dont know anything about cyan';
    } else {
        return color + ' can not be analyzed';
    }
}
console.log(analyzeColor('blue'));
console.log(analyzeColor('yellow'));
console.log(analyzeColor('red'));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

switch(randomColor) {
    case 'blue':
        alert('blue is the color of the sky');
        break;
    case 'red':
        alert('strawberries are red');
        break;
    case 'cyan':
        alert('i dont know anything about cyan');
        break;
    default:
        alert(randomColor + ' can not be analyzed');
        break;
}
console.log(randomColor);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */



let colorMessage = prompt("What's your favorite color?");
alert(analyzeColor(colorMessage));



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal (luckyNumber, totalAmount) {
    switch(luckyNumber) {
        case 1:
            return totalAmount - (totalAmount * .1).toFixed(2);

        case 2:
            return totalAmount - (totalAmount * .25).toFixed(2);

        case 3:
            return totalAmount - (totalAmount * .35).toFixed(2);

        case 4:
            return totalAmount - (totalAmount * .50).toFixed(2);

        case 5:
            return  totalAmount - (totalAmount * 1).toFixed(2);

        default:
            return totalAmount.toFixed(2);

    }


}
console.log(calculateTotal(0,100));
console.log(calculateTotal(1,100));
console.log(calculateTotal(2,100));
console.log(calculateTotal(3,100));
console.log(calculateTotal(4,100));
console.log(calculateTotal(5,100));
console.log(calculateTotal(5,75));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
let totalBill = parseFloat(prompt("what is the total of your bill?"));
let discountedAmount = calculateTotal(luckyNumber, totalBill);
let outputMessage = "Your lucky number is "
    + luckyNumber
    + "."
    + " Your price before the discount was "
    + numToDollars(totalBill)
    + "."
    + " Your new price after the discount is "
    + numToDollars(discountedAmount)
    + '.';
alert(outputMessage);
function numToDollars(num) {
    return '$' + num.toFixed(2);
}
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function pickANumber(){
    var pickANumber = confirm("would you like to play a game?");
    if(pickANumber) {
        var userNumberInput = prompt("Enter a number of your choice:")
        if(isNaN(userNumberInput)) {
            alert("That is not a number")
        } else {
            var evenOdd = (userNumberInput % 2 === 0) ? "Your number is even." : "Your number is odd."
            var positiveNegative = (userNumberInput > 0) ? "your number is positive" : "your number is negative"
                alert(evenOdd)
                alert(positiveNegative)
                alert("Your number plus 100 is " + (parseInt(userNumberInput) + 100))
        }
    } else alert("Have a nice day")
}

pickANumber();



//================= walk-through with justin Reich

   "use strict";

/* ########################################################################## */

/*
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value

function analyzeColor(color) {
    if(color === 'blue') {
        return 'blue is the color of the sky';
    } else if (color === 'red') {
        return 'strawberries are red';
    } else {
        return ' i don\'t know anything about ' + color;
    }
}


 console.log(analyzeColor('blue'), 'blue is the color of the sky');
 console.log(analyzeColor('red'), 'strawberries are red');
 console.log(analyzeColor('cyan'), 'i don\'t know anything about cyan');
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

 */
/*
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(randomColor);
//console.log(analyzeColor(randomColor));

/*
 * TODO:
 * Refactor your above function to use a switch-case statement

function analyzeColorSwitch(color) {
      switch (color) {
          case 'blue':
            return 'blue is the color of the sky';
          case 'red':
              return 'strawberries are red';
          default:
              return ' i do not know anything about ' + color;
      }
}


function analyzeColorSwitchWithBreaks(color) {
    let colorMsg;
    switch (color) {
        case 'blue':
            colorMsg = 'blue is the color of the sky';
            break;
        case 'red':
            colorMsg = 'strawberries are red';
            break;
        default:
            colorMsg = 'i don\'t know anything about ' + color;
    }
}

console.log(analyzeColorSwitchWithBreaks('blue'), 'blue is the color of the sky');
console.log(analyzeColorSwitchWithBreaks('red'), 'strawberries are red');
 console.log(analyzeColorSwitchWithBreaks('cyan'), 'i dont know anything about cyan');
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.


   let userColor = prompt('please enter a color!').toLowerCase();
   alert(analyzeColor(userColor));
/* ########################################################################## */

/*
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.


function calculateTotal(luckyNumber, totalAmount) {
     let discountNumber;
      switch(luckyNumber) {
          case 0:
              discountNumber = 0;
              break;
          case 1:
              discountNumber = .1;
              break;
          case 2:
              discountNumber = .25;
              break;
          case 3:
              discountNumber = .35;
              break;
          case 4:
              discountNumber = .50;
              break;
          case 5:
              discountNumber = 1;
              break;
          default:
            console.log('invalid input');
          

      }
     return totalAmount - (discountNumber * totalAmount);
}

console.log(calculateTotal(0, 100), 100);
console.log(calculateTotal(4, 100), 50);
console.log(calculateTotal(5, 100), 0);

 */
/*
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.

//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
 function numberToCurrency(number) {
     return '$' + number.toFixed(2);
 }
let totalBill = parseFloat(prompt('What is the total bill in dollars?'));
let message = ('Your lucky number is: ' + luckyNumber + '. '
    + 'Your price before the discount is: ' + numberToCurrency(totalBill) + '. '
    + 'your price after the discount is: ' + numberToCurrency(calculateTotal(luckyNumber, totalBill)) + '.';

    ));
alert(message);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


  function isNumeric(input) {
      return !isNaN(input);  // creating is a number function
  }

  function createEvenOddMessage(number) {
      return (number % 2 === 0) ? 'Number is even' : 'Number is odd';
  }

  function createNumberPlus100Message(number) {
      return number + ' plus 100 is ' + (number + 100);
  }

  function createNegativePostiveMessage(number) {
       return (number < 0) ? 'Number is negative' : 'Number is positive';
  }

  function getUserNumAndInfo() {
      let userWillEnterNumber = confirm('click ok to enter a number');
      let userNumber;
      if (userWillEnterNumber) {
          userNumber = parseFloat(prompt('please enter a number'));
          if (isNumeric(userNumber)) {   // if the user input is a number
              alert(createEvenOddMessage(userNumber)); // alert evenOdd message
              alert(createNumberPlus100Message(userNumber)); // alert number plus 100
              alert(createNegativePostiveMessage(usernumber)); //alert negative positive message
          } else {
              alert('input not a number!');// alert not a number
          }
      }
  }

 


