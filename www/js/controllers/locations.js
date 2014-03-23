'use strict';

angular.module('veggiesetgo.controllers.locations', ['veggiesetgo.services.categories','veggiesetgo.services.restaurants','google-maps'])

/*  .controller('SomeCtrl', function($scope, $geofire, $log) {
    $scope.myPoints = [];

    var geo = $geofire(new Firebase('https://<<your-firebase>>.firebaseio.com/'));
    var someObj = { id: "some-key", make: "Tesla" };
    // Trivial example of inserting some data and querying data
    geo.$insertByLocWithId([37.771393,-122.447104], someObj.id, someObj).catch(function(err) { $log.error(err); });
    // Query for data
    geo.$getPointsNearLoc([37.771393,-122.447104],5)
          .then(function(array) {
            $scope.myPoints = array;
          });
  });
*/

    .controller('MapCtrl', function($scope) {
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(43.07493,-89.381388),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener(document.getElementById('map'), 'mousedown', function(e) {
          e.preventDefault();
          return false;
        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

/*        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });
*/
        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
    });