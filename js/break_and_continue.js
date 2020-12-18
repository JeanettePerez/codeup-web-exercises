

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

