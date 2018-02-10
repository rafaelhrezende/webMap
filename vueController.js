var vueController = new Vue({
  el: '#HeaderControls',
  data: {
    title: 'Map Lab',
    routePoints: 'Locations Separate by ";" - Try read me link to learn how create BHTrans`s bus-line route',
    color: '#FF776B',
    showCapture: false,
    class_button: ["btn", "btn-sm", "btn-primary"]
  },
  methods: {
    loadLocations: function(){
      if (this.routePoints.indexOf('to:') == -1 && this.routePoints.indexOf('\t') >-1 ){
        var bhtrans = new BHTransIntegration(this.routePoints, vueMapController.locations.length+1);
        bhtrans.afterAddressAdd = "Belo Horizonte. MG";
        bhtrans.FromOldSiteVersionTable(vueMapController.locations);
      }
      else if (this.routePoints.indexOf('to:' ==-1)){
        var arrayLocations = this.routePoints.split(';');
        let initialIndex = vueMapController.locations.length+1;
        for (var index in arrayLocations) {
            var location = new Location(
              initialIndex ++,
              arrayLocations[index].replace(new RegExp('\\+', 'g'), ' ')
            );
            location.color = '#563d7c';
            vueMapController.locations.push(location);
        }
    }
      else {
        var arrayLocations = this.routePoints.split('to:');
        let initialIndex = vueMapController.locations.length+1;
        for (var index in arrayLocations) {
            var location = new Location(
              initialIndex ++,
              arrayLocations[index].replace(new RegExp('\\+', 'g'), ' ')
            );
            location.color = '#563d7c';
            vueMapController.locations.push(location);
        }
    }
    },
    loadLocation: function(location){
      var newLocation = new Location(vueMapController.locations.length+1, location.location);
      newLocation.color = '#563d7c';
      vueMapController.locations.push(newLocation);
    },
    markOnMap: function () {
      var activatedItems = vueMapController.locations.filter(function (elem) {  if (elem.active == true) return elem});

      for (var index in activatedItems){
        setMarkOnMap(map, activatedItems[index], this.color);
          var start = new Date().getTime(); //Avoid Over query Limit (Temp...)
          while (new Date().getTime() < start + 750);
      }
    },
    setRoute: function(){
      setDirections(vueMapController.locations, this.color);
    },
    clearMap: function(){
      clearMap();
    }

  }
})

var vueMapController = new Vue({
  el:'#sideArea',
  data: {
      locations: [],
      newLocation: {
        css: {class_button: vueController.class_button},
        data:   new Location(0,'Set Location'),
        actionAdd: function(){
          vueController.loadLocation(vueMapController.newLocation.data);
          vueMapController.newLocation.data  = new Location(0,'');
        },
        actionCheckAll (state){
          for (var itemI in vueMapController.locations){
            vueMapController.locations[itemI].active = state;
          }
        },
        actionClear(){
          vueMapController.locations = [];
        }
      }
    }
})

// var vueBHTransController = new Vue({
//   el:'#IntBHTrans',
//   data:{
//     busCode: "s10"
//   },
//   methods: {
//   load616: function(){
//     loadBusInfo(616);
//   },
//   load617: function(){
//       loadBusInfo(617);
//     },
//   Search: function(){
//     BHTransIntegration(this.busCode);
//   }
//   }
// })
