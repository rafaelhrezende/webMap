var vueController = new Vue({
  el: '#HeaderControls',
  data: {
    title: 'Map Lab',
    routePoints: 'Route Points (Separate by "to:")',
    color: 'FF776B|000000'
  },
  methods: {
    loadLocations: function(){
      vueMapController.locations = [];
      var arrayLocations = this.routePoints.split('to:');
      for (var index in arrayLocations) {
          var location = {id:Number(index)+1,
            location: arrayLocations[index].replace(new RegExp('\\+', 'g'), ' '),
            status:'W',
            showInput:false
          };
          vueMapController.locations.push(location);
      }

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
    },
    load616: function(){
      loadBusInfo(616);
    },
    load617: function(){
        loadBusInfo(617);
      }

  }
})

var vueMapController = new Vue({
  el:'#sideArea',
  data: {
      locations: null
    }
})
