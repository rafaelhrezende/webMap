var vueController = new Vue({
  el: '#HeaderControls',
  data: {
    title: 'Map Lab',
    startPoint: 'Start Point',
    routePoints: 'Route Points'
  },
  methods: {
    loadLocations: function(){
      vueMapController.locations = [
        {id:0, location: this.startPoint.replace(new RegExp('\\+', 'g'), ' '), status:'W'}
      ];
      var arrayLocations = this.routePoints.split('to:');
      for (var index in arrayLocations) {
          var location = {id:Number(index)+1,
            location: arrayLocations[index].replace(new RegExp('\\+', 'g'), ' '),
            status:'W'
          };
          vueMapController.locations.push(location);
      }

    },
    markOnMap: function () {
      for (var index in vueMapController.locations){
        setMarkOnMap(map, vueMapController.locations[index]);
          var start = new Date().getTime(); //Avoid Over query Limit (Temp...)
          while (new Date().getTime() < start + 750);
      }
    },
    setRoute: function(){
      setDirections(vueMapController.locations);
    }
  }
})

var vueMapController = new Vue({
  el:'#sideArea',
  data: {
      locations: null
    }
})
