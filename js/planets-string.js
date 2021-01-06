(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
planetsArray = planetsString.split("|");
     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
 var planetsWithBreaks = planetsArray.join("<br>");

 console.log(planetsWithBreaks);
// simplifies how to add things inbetween strings without typing it all out



    let planetUnorderedList = "<ul>"
        planetUnorderedList += planetsArray.join("<li>");
        planetUnorderedList += "<li></ul>"
    console.log(planetUnorderedList);

    var htmlString = '<ul> <li>';
    htmlString += planetsArray.join('</li> <li>');
    htmlString += '</li> </ul>';
    console.log(htmlString);

    document.getElementById("demo").innerHTML = htmlString;

})();
/* class walkthrough
var listOfPlanets = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
   document.getElementById("demo").innerHTML = listOfPlanets;
 */