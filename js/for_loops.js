"use strict";

/*
function showMultiplicationTable(input) {
    for(var i = 0; i <= 10; i++) {
        if (input * i) {
            console.log(input + " * " + i + " = " + input * i);
        }
    }
} showMultiplicationTable(7);


// how to generate a random number from 20 to 200
https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomNumberGenerator() {

    for(var i = 0; i < 10; i++) {
        var x = randomNum(20, 200);
        if(x % 2 === 0) {
            console.log(x + " is even")

        } else
            console.log(x + " is odd");
        }
    }
 randomNumberGenerator();


function numberPyramid() {
    var output = "";

    for (var i = 1; i < 10; i++) {
        output += i + " ";
    }
    console.log(output);
    output = "";
}


for(var i = 100; i >= 5; i = i - 5) {
    console.log(i)
}









// for loop walk through
 function showMultiplicationTable(num) {
    // create a loop that runs 10x
    for (var i = 1; i <= 10; i += 1) {

    console.log(num + 'x' + i + ' = ' + num * i );
    }
  }

  showMultiplicationTable(7);






function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
   }
function createTenRandomEvenOddMessage() {
    var random, evenOddString;
    for (var i = 0; i < 10; i += 1) {
         random = randomIntFromInterval(20, 200)
         evenOddString = (random % 2 === 0) ? 'even' : 'odd';
        console.log(random + ' is ' + evenOddString);
    }
}
//createTenRandomEvenOddMessage();
// best practice to declare variables atthe top of the script
// hoisting:

// string.repeat: using the repeat method to concat
// to use repeat method you need to convert i to a string by using
// the string constructor (string(i))
for(var i = 1; i <= 9; i += 1) {
    console.log(String(i).repeat(i));
}

// loop that counts backwards from 100
for (var i = 100; i > 0; i -= 5) {
    console.log(i);
}

 */