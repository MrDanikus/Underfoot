async function GEO(callback){
        if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            LNG = pos.lng;
            LAT = pos.lat;
            callback();
          }, function() {
            handleLocationError(true);
          },geo_options);
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false);
        }
}
var geo_options = {
  enableHighAccuracy: true, 
  maximumAge        : 30000, 
  timeout           : 27000
};


function handleLocationError(browserHasGeolocation) {
  alert(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}