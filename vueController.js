var vueController = new Vue({
  el: '#HeaderControls',
  data: {
    title: 'Map Lab',
    routePoints: 'Route Points (Separate by "to:")',
    color: 'FF776B|000000',
    showCapture: false
  },
  methods: {
    loadLocations: function(){
      vueMapController.locations = [];
      var arrayLocations = this.routePoints.split('to:');
      for (var index in arrayLocations) {
          var location = new Location(
            Number(index)+1,
            arrayLocations[index].replace(new RegExp('\\+', 'g'), ' ')
          );
          vueMapController.locations.push(location);
      }
      this.showCapture = false;
    },
    loadLocation: function(location){
      var newLocation = new Location(vueMapController.locations.length+1, location.location);
      vueMapController.locations.push(newLocation);
    },
    markOnMap: function () {
      for (var index in vueMapController.locations){
        setMarkOnMap(map, vueMapController.locations[index], this.color);
          var start = new Date().getTime(); //Avoid Over query Limit (Temp...)
          while (new Date().getTime() < start + 750);
      }
    },
    setRoute: function(){
      setDirections(vueMapController.locations);
    },
    clearMap: function(){
      clearMap();
      vueMapController.locations = [];
    }

  }
})

var vueMapController = new Vue({
  el:'#sideArea',
  data: {
      locations: [],
      newLocation: {
        data:   new Location(0,'Set Location'),
        actionAdd: function(){
          vueController.loadLocation(vueMapController.newLocation.data);
          vueMapController.newLocation.data  = new Location(0,'');
        }
      }
    }
})

var vueBHTransController = new Vue({
  el:'#IntBHTrans',
  data:{
    busCode: "s10"
  },
  methods: {
  load616: function(){
    loadBusInfo(616);
  },
  load617: function(){
      loadBusInfo(617);
    },
  Search: function(){
    BHTransIntegration(this.busCode);
  }
  }
})
