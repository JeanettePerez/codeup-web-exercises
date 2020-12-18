// 2.
function showMultiplicationTable(input) {
    for(var i = 0; i <= 10; i++) {
        if (input * i) {
            console.log(input + " * " + i + " = " + input * i);
        }
    }
} showMultiplicationTable(7);

//3.
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

//4.
function numberPyramid() {
    var output = "";

    for (var i = 1; i < 10; i++) {
        output += i + " ";
    }
    console.log(output);
    output = "";
}

//5.
for(var i = 100; i >= 5; i = i - 5) {
    console.log(i)
}
