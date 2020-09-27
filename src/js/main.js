function initMap() {
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();

  var map;

  var kutia = new google.maps.LatLng(42.656283, 21.1629681);
  var lipjan = new google.maps.LatLng(42.5217639, 21.1250641);

  var mapOptions = {
    zoom: 10,
    center: kutia,
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  directionsDisplay.setMap(map);

  function calculateRoute() {
    var request = {
      origin: kutia,
      destination: lipjan,
      travelMode: "DRIVING",
    };
    directionsService.route(request, function (result, status) {
      if (status == "OK") {
        directionsDisplay.setDirections(result);
      }
    });
  }
  document.getElementById("btnStart").onclick = function () {
    calculateRoute();
  };
}
