"use strict";

// write a function named wait that accepts a number as a parameter, and return a promise that resolves after the passed number of milliseconds

function wait(num){

	return new Promise((resolve) => {
		setTimeout(() => {
			if(num === 1000){
				resolve(`you'll see this after 1 second`)
			}
			if(num === 3000){
				resolve(`you'll see this after 3 seconds`)
			}
		}, num)

	})
}

wait(3000).then(console.log);
