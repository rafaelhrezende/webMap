var map;
var geocoder;
var directionsDisplay;
var directionsService;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:-19.843746, lng:-43.967273},
    zoom: 13
  });
   geocoder = new google.maps.Geocoder();
   directionsService = new google.maps.DirectionsService();
}

function setMarkOnMap( resultsMap, locationItem, markColor){
  geocoder.geocode({'address': locationItem.location}, function(results, status) {
         if (status === 'OK') {
           resultsMap.setCenter(results[0].geometry.location);
           var marker = new google.maps.Marker({
             map: resultsMap,
             position: results[0].geometry.location,
             icon:'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+ locationItem.id + '|'+ markColor,
           });
           locationItem.status = 'OK';
         }
         else {
           var errorMessage = status;
           locationItem.status = 'Fail';
           locationItem.message = errorMessage;
         }
       });
}

function setdirectionsOnMap(firstAddress, addresses, lastAddress){
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);
  var request = {
    origin: firstAddress,
    destination: lastAddress,
    travelMode: 'DRIVING',
    waypoints: []
  };

  for (var index in addresses) {
    var address = addresses[index].replace(new RegExp('\\+', 'g'), ' ');
    request.waypoints.push({location: address});
  }

  directionsService.route(request, function(result, status){
    if (status === 'OK') {
      directionsDisplay.setDirections(result);
    }
  })
}

function setDirections(locations){
//get just location`s text.
  var locationsText = locations.map(function (item){
    return item.location;
  });

  // google maps api limits the waypoints, this is used to allow us to combine routes.
  var length = locationsText.length;
  if (length < 20) {
    var lastAddress = locationsText[length - 1];
    setdirectionsOnMap(locationsText[0], locationsText.slice(1,length - 1), lastAddress)
  }
  else {
    //create a rout to every 20 locations.
    var startIndex = 0;
    var lastIndex = 20;
    var noWaypointsLeft = false;
    do {
        var startAddress = locationsText[startIndex];
        var lastAddress = locationsText[lastIndex];
        setdirectionsOnMap(startAddress, locationsText.slice(startIndex,lastIndex), lastAddress)
        startIndex = lastIndex;
        lastIndex += 20;
        if (lastIndex >  locationsText.length){
          lastIndex = locationsText.length -1;
          var startAddress = locationsText[startIndex];
          var lastAddress = locationsText[lastIndex];
          setdirectionsOnMap(startAddress, locationsText.slice(startIndex,lastIndex), lastAddress)
          noWaypointsLeft = true;
        }

    } while (!noWaypointsLeft);
  }
}
