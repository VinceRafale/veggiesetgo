'use strict';

angular.module('veggiesetgo.controllers.cuisines', ['veggiesetgo.services.categories','veggiesetgo.services.restaurants'])

.controller('cuisController', function($scope,$stateParams,Categories) {
    $scope.cuisines = Categories.cuisines;
})


.controller('cuisDetailController', function($scope, $firebase, $stateParams, Categories) {
    $scope.cuisineId = $stateParams.cuisineId;
    var ref = new Firebase('https://veggiesetgo.firebaseio.com/cuisines/' + $stateParams.cuisineId + '/restaurants/');
    $scope.restaurants = $firebase(ref);
    var restRef = new Firebase('https://veggiesetgo.firebaseio.com/restaurants/');
    $scope.selectRestaurants = $firebase(restRef);
    })
