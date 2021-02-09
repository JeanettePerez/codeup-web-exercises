

mapboxgl.accessToken = MAPBOX_TOKEN;
let map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.61,29.49], // starting position [lng, lat]
    zoom: 10// starting zoom
});
// add zoom and rotation controls to the map
map.addControl(new mapboxgl.NavigationControl());

// create the popup
/*
var popup = new mapboxgl.Popup({ offset: 25 }).setText(
   'Zuma Ice cream'
);

geocode("6565 Babcock Rd st17, San Antonio, TX 78249", mapboxToken).then(function (data){
    let zumaMarker = new mapboxgl.Marker() // so it
        .setLngLat(data)
        .setPopup(popup)
        .addTo(map);
    console.log(data); // gives back the coordinates
});
geocode("5602 W Hausman Rd suite 105, San Antonio, TX 78249", mapboxToken).then(function (data){
    let munchiesMarker = new mapboxgl.Marker() // so it
        .setLngLat(data)
        .addTo(map);
    console.log(data); // gives back the coordinates
});
geocode("11255 Huebner Rd STE 108, San Antonio, TX 78230", mapboxToken).then(function (data) {
    let teaTimeMarker = new mapboxgl.Marker() // so it
        .setLngLat(data)
        .addTo(map);
    console.log(data); // gives back the coordinates
});

geocode(dessertPlaces.data[2], mapboxToken).then(function (data) {
    let teaTimeMarker = new mapboxgl.Marker() // so it
        .setLngLat(data)
        .addTo(map);
    console.log(data); // gives back the coordinates
});

 */

let dessertPlaces = [
        {
            restaurantName: "Zuma",
            location: [-98.614468, 29.5557887],
            popupMessage: "Ice Cream"
        },
        {
            restaurantName: "Munchies",
            location: [-98.597028, 29.572189],
            popupMessage: "Shakes, Snacks, More"
        },
        {
            restaurantName: "Tea Time",
            location: [-98.57754, 29.547343],
            popupMessage: "Bubble Tea Shop"
        }
    ]




dessertPlaces.forEach(function(place){
    let popup = new mapboxgl.Popup()
        .setHTML(`<h2>${place.restaurantName}</h2><p>${place.popupMessage}</p>`)
    new mapboxgl.Marker()
        .setLngLat(place.location)
        .setPopup(popup)
        .addTo(map);
})

