'use strict';

angular.module('veggiesetgo.controllers.listings', ['veggiesetgo.services.categories','veggiesetgo.services.restaurants'])

// Data for this seed is stored in the "ionic-seed" firebase.
// To view the raw data, open https://ionic-seed.firebaseio.com/.json in a browser

// A simple controller that fetches a list of data from a service
.controller('ListingIndexCtrl', function($scope, $firebase, $stateParams) {
  var ref = new Firebase('https://veggiesetgo.firebaseio.com/restaurants/');
  var totalDisplayed = 15;
  var refQuery = ref.startAt().limit(totalDisplayed);
  $scope.restaurants = $firebase(refQuery);
  $scope.orderProp = 'name';

})

// A simple controller that shows a tapped item's data
.controller('ListingDetailCtrl', function($scope, $stateParams, $firebase) {
  var ref = new Firebase('https://veggiesetgo.firebaseio.com/restaurants/' + $stateParams.restaurantId);
  $scope.restaurant = $firebase(ref);

  ref.on('value', function(snapshot) {
    var lat = snapshot.val().address.map.lat;
    var lng = snapshot.val().address.map.long;
    var name = snapshot.val().name;
    $scope.map = {
      center: {
        latitude: lat,
        longitude: lng
      },
      zoom: 15,
      marker:
        {
          latitude: lat,
          longitude: lng,
          title: name
        }
}
});
})
