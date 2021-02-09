// https://www.youtube.com/watch?v=uxf0--uiX0I&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=6

(function(){
    "use strict";

    $(document).ready(function () {
            $.get("https://api.openweathermap.org/data/2.5/onecall",{
                APPID: OWM_TOKEN,
                lat: 29.4241,
                lon: -98.4936,
                units: "imperial",
                exclude: "minutely, hourly"

            }).done(function(data){
                console.log(data);
                console.log(data.daily[0]);
                console.log(data.daily[0].temp.min);
                console.log(data.daily[0].temp.max);
                console.log(data.current.weather[0].description);
            });






/* need a function to render the weather data
        function renderWeatherData(items){
            let html = '';
            items.each(function (item){
                let htmlItem = "<div>"
                htmlItem += "<p>" + item.lon + "</p>"
                htmlItem += "<p>" + item.lat + "</p>"
                htmlItem += "<p>" + item.current + "</p>"
                htmlItem += "</div>"
                htmlItem += html;
            });
            $(".post").html(html);
                        

        }

 */

// displaying date, temp, description, humidity, wind, pressure
    }) // document.ready closing tag













})();










