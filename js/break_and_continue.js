"use strict";
/*
// code that i wrote before walk through.
function giveMeABreak() {
    let response = parseFloat(prompt("Pick a odd number from 1 to 50"));
    if (response % 2 === 0) {
        response = parseFloat(prompt("Pick an ODD number from 1 to 50"));
    } else {

    }

    for(var i = 1; i < 50; i++) {
        if (i % 2 === 0) {
            continue;
        }
        if (response === i) {
            console.log("Yikes! Skipping number " + response);
        } else {
            console.log("here is an odd number: " + i);
        }
        if (i > 49) {
            break;
        }

    }
} giveMeABreak();





// Break and continue walk through
// step 1: getting the appropriate response from user: enter an odd number
//         prompt the user
// step 2: create a function to hold the variables
//         need a parseFloat(), variable to determine it's a number
//         variable to make sure it is odd and a variable to determine
//         correct range.
// step 3: create an infinite loop while conditions are true. add a break
// step 4: add an alert to alert the user of what they did wrong
// step 5: set up a loop to identify the odd number
// step 6: refactoring for loop to be wrapped in a function
// step 7: create function that produces the output
var userNum; // global variable
function isValid(input) {
    input = parseFloat(input);
    var isNumeric = !isNaN(input); // condition needs to resolve to tru
    var isOdd = input % 2 !== 0;
    var isInCorrectRange = input >= 1 && input <= 50;
    return isNumeric && isOdd && isInCorrectRange;

}
function getUserNumber() {
    var userNum;
    while(true) {
        userNum = parseFloat(prompt('please enter an odd number between 1 and 50'));
        if (isValid(userNum)) {
            break;
        }
        alert('INVALID NUMBER');
    } return userNum;
}
function createOddNumberMessages(userNum) {
    console.log('Number to skip is: ' + userNum);
    console.log(" ");
    for (var i = 1; i <= 50; i += 1) {
        if(i === userNum) {
            console.log('Yikes! Skipping number: ' + userNum);
            continue;
        }
        if(i % 2 === 0) {
            continue;
        }
        console.log('here is an odd number: ' + i);
    }
}
userNum = getUserNumber(); // assigning the value to the getUserNumber function
createOddNumberMessages(userNum); // calling the entry point of the program then pass in userNum



 */
