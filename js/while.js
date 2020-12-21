"use strict";

var i = 2;
while (i <= 65536) {
    console.log(i);
    i *= 2;
}




// ========== do-while loop walkthrough
// step 1: transfer over the variables provided
// step 2: create do while loop that follows the promblem
/*

var allCones = Math.floor(Math.random() * 50) + 50;   // This is how you get a random number between 50 and 100
var conesToSell;
console.log('We have ' + allCones + ' to sell.');

do {
    // create conesToSell number of cones to sell
    conesToSell = Math.floor(Math.random() * 5) + 1; // This expression will generate a random number between 1 and 5

    // if conesToSell is less than or equal to cones left decrease allCones by conesToSell
    if(conesToSell <= allCones) {
        console.log(conesToSell + ' cones sold');  // log conesToSell cones sold
        allCones -= conesToSell; // subtract conesToSell from all cones
    } else { // otherwise
        console.log('Cannot sell you ' + conesToSell + ' I only have ' + allCones + ' ...')// log cannot sell message
    }
    console.log(allCones + ' are left...');



} while(allCones > 0);
console.log('Yay! I sold them all!');

 */


// step 3: refactoring the code into functions
//      - create function to fix the grammar of the outputs
//        - create a function that wraps the code




function pluralOrSingularCones(numOfCones) {
    return (numOfCones > 1) ? 'cones' : 'cone';
}
function createRandomIceCreamOrder(allCones) {
    var conesToSell;
    conesToSell = Math.floor(Math.random() * 5) + 1;
    if (conesToSell <= allCones) {
        console.log(conesToSell + ' ' + pluralOrSingularCones(conesToSell) + ' sold... ');
        allCones -= conesToSell; // subtract conesToSell from all cones
    } else { // otherwise
        console.log('Cannot sell you ' + conesToSell + ' ' + pluralOrSingularCones(conesToSell) + ' I only have ' + allCones + ' ...')// log cannot sell message
    }
    console.log(allCones + ' are left...');
    return allCones;
}
function runIceCreamStore() {
    var allCones = Math.floor(Math.random() * 50) + 50;

    console.log('We have ' + allCones + ' to sell.');



    do {
        allCones = createRandomIceCreamOrder(allCones);
    } while (allCones > 0);
    console.log('Yay! I sold them all!');
} runIceCreamStore();