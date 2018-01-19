var vueController = new Vue({
  el: '#HeaderControls',
  data: {
    title: 'Map Lab',
    routePoints: 'Route Points (Separate by "to:")',
    color: 'FF776B|000000',
    showCapture: false,
    class_button: ["btn", "btn-sm", "btn-primary"]
  },
  methods: {
    loadLocations: function(){
      //vueMapController.locations = [];
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
