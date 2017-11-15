var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:-19.843746, lng:-43.967273},
    zoom: 13
  });
  var geocoder = new google.maps.Geocoder();
  var addresses = split(bhTransResult);//static - get from bhtrans site
  bhTrans50Initi = bhTrans50Initi.replace(new RegExp('\\+', 'g'), ' ');
  // Set actions
  $('#btAddressAction').click(function(){
    setMarkOnMap(geocoder,map, bhTrans50Initi, 0);
    for (var index in addresses) {
      var address = addresses[index].replace(new RegExp('\\+', 'g'), ' ');
      setMarkOnMap(geocoder,map, address, Number(index) + 1);

      var start = new Date().getTime(); //Avoid Over query Limit (Temp...)
      while (new Date().getTime() < start + 750);
    }
  });

  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  $('#btRouteAddressAction').click(function(){
    var length = addresses.length;
    if (length < 20) {
      var lastAddress = addresses[length - 1];
      setdirectionsOnMap(directionsDisplay,directionsService, bhTrans50Initi, addresses.slice(1,length - 1), lastAddress)
    }
    else {
      var startIndex = 0;
      var lastIndex = 20;
      var noWaypointsLeft = false;
      do {
          var startAddress = addresses[startIndex];
          var lastAddress = addresses[lastIndex];
          setdirectionsOnMap(directionsDisplay,directionsService,startAddress, addresses.slice(startIndex,lastIndex), lastAddress)
          startIndex = lastIndex;
          lastIndex += 20;
          if (lastIndex >  addresses.length){
            lastIndex = addresses.length -1;
            var startAddress = addresses[startIndex];
            var lastAddress = addresses[lastIndex];
            setdirectionsOnMap(directionsDisplay,directionsService,startAddress, addresses.slice(startIndex,lastIndex), lastAddress)
            noWaypointsLeft = true;
          }

      } while (!noWaypointsLeft);
    }
  });
}//initMap


function Info(message, className){
  $("#logbox").append('<p class="' +className+'"">' + message +'</p>');
}
function split( multiplePoint){
  return multiplePoint.split('to:');
}
