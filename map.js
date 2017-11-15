

function setMarkOnMap(geocoder, resultsMap, address, addressPosition){
  geocoder.geocode({'address': address}, function(results, status) {
         if (status === 'OK') {
           resultsMap.setCenter(results[0].geometry.location);
           var marker = new google.maps.Marker({
             map: resultsMap,
             position: results[0].geometry.location,
             icon:'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+ addressPosition +'|FF776B|000000',
           });
          Info(String(addressPosition) + ' - ' + address, 'action actionSucess');
         }
         else {
           var errorMessage = '</ br> Error: ' + status;
           Info(String(addressPosition) + ' - ' + address + errorMessage, 'action actionFail');
         }
       });
}
function setdirectionsOnMap(directionsDisplay,directionsService, firstAddress, addresses, lastAddress){
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
