// https://www.youtube.com/watch?v=uxf0--uiX0I&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=6

(function(){
    "use strict";

    $(document).ready(function () {

		$.get("https://api.openweathermap.org/data/2.5/onecall", {
			APPID: OWM_TOKEN,
			lat: 29.4241,
			lon: -98.4936,
			units: "imperial",
			exclude: "minutely, hourly"

		}).done(function(data){
			renderWeather(data)
		})
		function renderWeather(data){
			let day = data.daily;
			let html = "";
			for(let i = 0; i < 5; i++){
				let date = day[i].dt;
				let dateCal = new Date(date * 1000);
				let dateEnUS = dateCal.toLocaleDateString("en-US");
				let minTemp = data.daily[i].temp.min;
				let maxTemp = data.daily[i].temp.max;
				let description = data.current.weather[0].description;
				let humidity = data.daily[i].humidity;
				let wind = data.daily[i].wind_speed;
				let pressure = data.daily[i].pressure;

				let htmlItem = "<div class='card' style='width: 18rem;'>"
				htmlItem += "<div class='card-header text-center'>" +  dateEnUS + "</div>"

				htmlItem += "<ul class='list-group list-group-flush'>"
				htmlItem += "<li class='list-group-item'>"  + minTemp + "°F"
					+ " / "
					+ maxTemp + "°F"

					+ "</li>"
				htmlItem += "<li class='list-group-item'>" 	+ "Description: "
					+  description
					+  "</li>"
				htmlItem += "<li class='list-group-item'>"	+ "Humidity: "
					+ humidity
					+ "</li>"
				htmlItem += "<li class='list-group-item'>"  + "Wind: "
					+ wind
					+ "</li>"
				htmlItem += "<li class='list-group-item'>"	+ "Pressure: "
					+ pressure
					+ "</li>"
				htmlItem += "</ul>"
				htmlItem += "</div>"
				html += htmlItem
				$(".container").html(html);
				console.log(data.daily[i]);
			}




			// console log for all the data i am going to need to extract and put into the card

			console.log(data);
			console.log(data.current.dt);
			console.log(data.daily[0]);
			console.log(data.daily[0].temp.min);
			console.log(data.daily[0].temp.max);
			console.log(data.current.weather[0].description);
			console.log(data.daily[0].humidity);
			console.log(data.daily[0].pressure);
			console.log(data.daily[0].wind_speed);
		}

		mapboxgl.accessToken = MAPBOX_TOKEN;
		let map = new mapboxgl.Map({
			container: 'map', // container id
			style: 'mapbox://styles/mapbox/streets-v11', // style URL
			center: [-98.61,29.49], // starting position [lng, lat]
			zoom: 10// starting zoom
		});
		map.addControl(new mapboxgl.NavigationControl());
		var marker = new mapboxgl.Marker()
			.setLngLat([-98.61,29.49])
			.addTo(map);

    }) // document.ready closing tag
})();


/** TODO:
 *    	function for image that matches the description http://openweathermap.org/img/w/[icon].png [icon] becomes api response
 *    	eliminate everything that is hardcoded
 *    	start the map section for 5 day forecast
 *    	markers and controls
 *
 */






