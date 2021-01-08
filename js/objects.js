(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
let person = {
    firstName: "Jeanette",
        lastName: "Perez",
    }

    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

person.sayHello = function() {
    return "Hello from " + this.firstName + " " + this.lastName + "!";
}
console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    function numToDollars(num) {
        return '$' + num.toFixed(2);
    }



     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];




       shoppers.forEach(function (shopper) {


           let totalNeededForDiscountInDollars = 200;
           let discountPercentage = .12;
           let totalAfterDiscountInDollars;
           let amountLeftToSpendForDiscount;
           if (shopper.amount >= totalNeededForDiscountInDollars) {
               totalAfterDiscountInDollars = shopper.amount - (shopper.amount * discountPercentage);
               console.log(shopper.name
                   + "'s total is "
                   + numToDollars(shopper.amount)
                   + "."
                   + "\n"
                   + shopper.name
                   + "'s new total after discount is "
                   + numToDollars(totalAfterDiscountInDollars));

           } else if (shopper.amount <= totalNeededForDiscountInDollars){
               amountLeftToSpendForDiscount = totalNeededForDiscountInDollars - shopper.amount;
               console.log(shopper.name
                   + " is not eligible for a discount yet."
                   + "\n"
                   + "Add "
                   + numToDollars(amountLeftToSpendForDiscount)
                   + " to your cart in order to receive "
                   + discountPercentage * 100
                   + "% off Your total bill!");
           }
       });

     /*
     // Justin's walkThrough
// the name for what describes the forEach method is a higher order function.
    // a function that can take in function as an argument.
    // the anonymous function takes in up to 3 arguments the element, index, array.

    // for loop benefits
    //      - flexible iteration
    //      - do anything a certain number
    //      - computer friendly

    //forEach loop benefits
    //      - Only can be used on arrays of data
    //      - All of the element in an array need to be accessed
    //      - more readable
    //      - User friendly

        // storing the object in a variable
    //          - let name = shopper.name
    //          - let amountPriorToDiscount = shopper.amount
     function calculateDiscount(amount, discountAmountThreshold, discountPercentage){
             return (amount > discountAmountThreshold) ? amount * discountPercentage : 0;
     }


        let totalNeededForDiscountInDollars = 200;
        let discountPercentage = .12;

    shoppers.forEach(function (shopper) {
        let shopperName = shopper.name;
        let amountPriorToDiscount = shopper.amount;
        let amountOff = calculateDiscount(amountPriorToDiscount, totalNeededForDiscountInDollars, discountPercentage)
        let totalCost = amountPriorToDiscount - amountOff;

            var message = shopperName
                + purchased "
                + numToDollars(amountPriorToDiscount)
                + " and is getting "
                + numToDollars(amountOff)
                + " off the purchase price "
                + "and paying "
                + numToDollars(totalCost);
    console.log(message);

    });

     */


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
let books = [
        {
            title: 'Interview With The Vampire',
            author: {
                firstName: "Anne",
                lastName: "Rice"
            }
        },
        {
            title: '1984',
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        },
        {
            title: 'Pet Sematary',
            author: {
                firstName: "Stephen",
                lastName: "King"
            }
        },
        {
            title: 'Harry Potter and the Deathly Hallows',
            author: {
                firstName: "J.K",
                lastName: "Rowling"
            }
        },
        {
            title: 'To Kill A Mockingbird',
            author: {
                firstName: "Harper",
                lastName: "Lee"
            }
        }
    ];
    console.log(books[0].title);
    console.log(books[0].author.firstName);
     console.log(books[0].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /*
// for loop version
    for(var i = 0; i < books.length; i += 1) {
        let bookNumber = i + 1;
        console.log('book # ' + bookNumber);
        console.log('title: ' + books[i].title);
        console.log('author: ' + books[i].author.firstName + ' ' + books[i].author.lastName);
        console.log('---');
    }




    books.forEach(function(book, index) {
        let bookNumber = index + 1;
        console.log('book # ' + bookNumber);
        console.log('title: ' + books.title);
        console.log('author: ' + books.author.firstName + ' ' + books.author.lastName);
        console.log('---');
    });

     */


    books.forEach(function(book, index) {
        console.log("Book # "
            + (index + 1)
            + "\n"
            +"Title: "
            + book.title
            + "\n"
            + "Author: "
            + book.author.firstName
            + " "
            + book.author.lastName
            + "\n"
            + "---");
        });



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
/*

 // walk-through
function createBook(title,author) {
        let nameArr = author.split(' ');
        let firstName = nameArr[0];
        let lastName = nameArr[1];
        return {
            title: title,
            author: {
                firstName: firstName;
                lastName: lastName;
            }
        }
    }
 let booksUsingFunction = [
   createBook('title1', 'john1 smith1'),
     createBook('title2', 'john1 smith2'),
     createBook('title3', 'john1 smith3'),
 ];
console.log(booksUsingFunction);

// Create a function named `showBookInfo` that accepts a book object and
//        outputs the information described above. Refactor your loop to use your
//        `showBookInfo` function.
function showBookInfo(book, bookNumber) {
    console.log('book # ' + bookNumber);
    console.log('title: ' + book.title);
    console.log('author: ' + book.author.firstName + ' ' + book.author.lastName);
    console.log('---');
}

    books.forEach(function(book, index) {
        showBookInfo(book, index + 1);
    });
/*






 */





})();