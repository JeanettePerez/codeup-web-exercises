"use strict";
{
	const users = [
		{
			id: 1,
			name: 'ryan',
			email: 'ryan@codeup.com',
			languages: ['clojure', 'javascript'],
			yearsOfExperience: 5
		},
		{
			id: 2,
			name: 'luis',
			email: 'luis@codeup.com',
			languages: ['java', 'scala', 'php'],
			yearsOfExperience: 6
		},
		{
			id: 3,
			name: 'zach',
			email: 'zach@codeup.com',
			languages: ['javascript', 'bash'],
			yearsOfExperience: 7
		},
		{
			id: 4,
			name: 'fernando',
			email: 'fernando@codeup.com',
			languages: ['java', 'php', 'sql'],
			yearsOfExperience: 8
		},
		{
			id: 5,
			name: 'justin',
			email: 'justin@codeup.com',
			languages: ['html', 'css', 'javascript', 'php'],
			yearsOfExperience: 9
		}
	];

// use .filter to create an array of user objects where
// each user object has at least 3 languages in the languages array
	let searchString = users.filter(l => l.languages.length >= 3);
	console.log(searchString);

// use .map to create an array of strings where each element is a user's email address
	let emailAddress = users.map(e => e.email)
	console.log(emailAddress);

// Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.

function totalExperience(){
	let total = users.reduce((accumulator, currentValue) => {
		console.log(`accumulator: ${accumulator}`);
		console.log(`currentValue: ${currentValue.yearsOfExperience}`);
		return accumulator + currentValue.yearsOfExperience;
	},0)
		console.log('total ' + total);
	return total / users.length;
}
	console.log(totalExperience());

function YearsOfExperienceRefactored(){
	let total = users
		.map(e => e.yearsOfExperience)
		.reduce((accumulator, currentValue) => accumulator + currentValue);
	return total / users.length;
}
console.log(YearsOfExperienceRefactored());

// use .reduce to get the longest email from the list of users

let longestEmail = emailAddress
	.reduce((emailString1, emailString2) => {

		console.log(`accumulator: ${emailString1} 
		characters: ${emailString1.length}`);
		console.log(`currentValue: ${emailString2} 
		characters: ${emailString2.length}`);

		return emailString1.length > emailString2.length ? emailString1 : emailString2;
	});
console.log(longestEmail);

// use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
	let firstName = users
		.map(n => n.name)
		.reduce((accumulator, currentValue) => {
			return accumulator + ' ' + currentValue;
		});
	console.log(`Your instructors are: ${firstName}`);

// Bonus: use .reduce to get the unique list of languages from the list of users

}

