"use strict";
console.log("Hello from external Javascript");
alert("Welcome to my website!");
var response = prompt("What's your favorite color?");
var message = "Great, " + response + " is my favorite color too!";
alert(message);

var facebookRatePerHourInDollars = 350;
var amazonRatePerHourInDollars = 380;
var googleRatePerHourInDollars = 400;
var googleHoursWorked = prompt("how many hours did you work at google this week");
var amazonHoursWorked = prompt("how many hours did you work at amazon this week");
var facebookHoursWorked = prompt("how many hours did you work at facebook this week");
var totalPayInDollars = (googleRatePerHourInDollars * googleHoursWorked) + (amazonRatePerHourInDollars * amazonHoursWorked) + (facebookRatePerHourInDollars * facebookHoursWorked);
alert("You made " + totalPayInDollars + " this week");


var moviePrice = 3
var littleMermaidRentalDays = prompt("How many days do you want to rent the Little Mermaid");
var brotherBearRentalDays = prompt("How many days do you want to rent Brother Bear");
var HerculesRentalDays = prompt("How many days do you want to rent Hercules");
var totalRentalCostDollars = (littleMermaidRentalDays * moviePrice) + (brotherBearRentalDays * moviePrice) + (HerculesRentalDays * moviePrice);
alert("Your total is " + totalRentalCostDollars);


var itemsBought = prompt("how many items did you buy?");
var offerNotExpired = confirm("Is offer still valid?");
var isAPremiumMember = confirm("Are you a premium member?")
var offerCanBeApplied = (offerNotExpired && ((itemsBought > 2) || isAPremiumMember));

alert("It's " +  offerCanBeApplied);


