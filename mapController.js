var map;
var geocoder;

var usedDirectionsDisplays = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:-19.843746, lng:-43.967273},
    zoom: 13
  });
   geocoder = new google.maps.Geocoder();
//   map.working = false;
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

function setdirectionsOnMap(directionsDisplay,directionsService,firstAddress, addresses, lastAddress){
  directionsDisplay = new google.maps.DirectionsRenderer();

  usedDirectionsDisplays.push(directionsDisplay);
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
      map.working = true;
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
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var length = locationsText.length;
  if (length < 20) {
    var lastAddress = locationsText[length - 1];
    setdirectionsOnMap(directionsDisplay,directionsService,locationsText[0], locationsText.slice(1,length - 1), lastAddress)
  }
  else {
    //create a rout to every 20 locations.
    var startIndex = 0;
    var lastIndex = 20;
    var noWaypointsLeft = false;

    do {
        var startAddress = locationsText[startIndex];
        var lastAddress = locationsText[lastIndex];
        setdirectionsOnMap(directionsDisplay,directionsService,startAddress, locationsText.slice(startIndex+1,lastIndex-1), lastAddress)
        startIndex = lastIndex+1;
        lastIndex += 20;
        if (lastIndex >  locationsText.length){
          lastIndex = locationsText.length -1;
          var startAddress = locationsText[startIndex];
          var lastAddress = locationsText[lastIndex];
          setdirectionsOnMap(directionsDisplay,directionsService,startAddress, locationsText.slice(startIndex+1,lastIndex-1), lastAddress)
          noWaypointsLeft = true;
        }
    } while (!noWaypointsLeft);
  }
}

function clearMap(){
  for (var i = 0; i < usedDirectionsDisplays.length; i++) {
    usedDirectionsDisplays[i].setMap(null);
  }
}

// function waitMap(){
//   do {
//   console.log('map request: fail - Map is working.');
//  }
//   while(map.working)
//   console.log('map is available.');
// }
// function lockmap(){
//   map.working = true;
//   console.log('map locked.');
//
// }
