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



// const githubUsers = `https://api.github.com/users/${username}/events/public`;
const GITHUB_API_URL = `https://api.github.com`;
function getDateOflastCommit(username){
	const ENDPOINT = `/users/${username}/events/public`;
	const CONFIG = {
		headers: {
			'Authorization': `token ${GITHUB_TOKEN}`
		}
	}
	return fetch(GITHUB_API_URL + ENDPOINT, CONFIG)
		.then(response => response.json())
		.then(data => {
			let mostRecentPush = dateFormat(data[0]["created_at"]);
			console.log(mostRecentPush);
			return mostRecentPush;
		}
	);

}
console.log(getDateOflastCommit('JeanettePerez'));



function dateFormat(){
	return new Date().toDateString();
}
dateFormat();
// console.log(dateFormat("2021-02-24T18:42:41Z"))