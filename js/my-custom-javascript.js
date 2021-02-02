"use strict";
/*
$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});

 */

// ==========ID Selectors
/*
let contents = $('#main-heading').html();
alert(contents);

 */





// ==========Class Selectors
/*
$(document).ready(function (){
    $(".codeup").css("border", "solid red 1px");
});
*/


// =========Element Selectors

$(document).ready(function(){
    $('li').css('font-size', '20px');
    $('h1, p, li').css("background", "lightblue")
    let headingAlert = $('h1').html();
    alert(headingAlert);
});



//===========Multiple Selectors

