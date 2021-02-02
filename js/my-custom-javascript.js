"use strict";
/*
$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});

 */

// ==========ID Selectors==============
/*
let contents = $('#main-heading').html();
alert(contents);

alert($("#main-heading").html());   // how to get the main heading to alert
alert($("#second-heading").html());
 */

// ==========Class Selectors============
/*
$(document).ready(function (){
    $(".codeup").css("border", "solid red 1px");
});
*/

// =========Element Selectors============
/*
$(document).ready(function(){
    $('li').css('font-size', '20px');
    $('h1').css("background", "lightblue")
    $('p').css("background", "violet")
    // $('li').css("background", "yellow") this is a duplicate element that
                                           you can daisy chain onto the li from the top
   alert($("h1").html());
   // to return multiple h1 this is the jquery loop
   // if you wanted to return multiple alerts that are not concat togther
    $("h1")each(function () {
        alert($(this).html())
      });
});

 */
//===========Multiple Selectors============
// $('h1, p, li').css({"background":"lightblue", "border": "1px"});


//===========The answer put together===========
$(document).ready(function(){
    // alert($("#main-heading").html());
    // alert($("#second-heading").html());
    // $(".codeup").css("border", "solid red 1px");
    $('li').css('font-size', '20px');
    $('h1, p, li').css("background", "lightblue");
    alert($("h1").html());
});