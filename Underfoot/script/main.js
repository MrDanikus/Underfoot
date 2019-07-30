//[Global Values]
var LAT = 0, LNG = 0;
var map, infoWindow;

const show = (str) => {
	let element = document.getElementById(str);
	element.style.display = "block";
}
const hide = (str) => {
	let element = document.getElementById(str);
	element.style.display = "none";
}

window.onload = function() {

	type();
	initMap(LAT,LNG);


}



function initMap(lat,lng){
	map = L.map('map').fitWorld();
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2FpdGFuIiwiYSI6ImNqeW91dDcxMzAzdTczbnVmbjZnZjVzNGcifQ.LVJggfKqpjPUzbk697xktg'
}).addTo(map);
	hide("map");
	map.locate({setView: true, maxZoom: 16});
	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);
}


function onLocationFound(e) {
	hide("loading");
    show("map");
    show("btn");
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + Math.floor(radius) + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);


}




function onLocationError(e) {
    throw new Error(e.message);
}


function find(){
	let lat = -LAT;
	let lng = LNG < 0 ? LNG + 180 : -180 - LNG;
	map.setView([lat, lng], 13);
	L.marker([lat, lng]).addTo(map).bindPopup("This place is right under you").openPopup();
}



