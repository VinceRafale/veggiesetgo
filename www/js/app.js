'use strict';
// Ionic Starter App, v0.9.20-alpha

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('veggiesetgo',
  [ 'veggiesetgo.config'
  , 'ionic'
  , 'google-maps'
  , 'angularGeoFire'
  , 'veggiesetgo.services.categories'
  , 'veggiesetgo.services.restaurants'
  , 'veggiesetgo.services.firebaseRefs'
  , 'veggiesetgo.controllers.cuisines'
  , 'veggiesetgo.controllers.listings'
  , 'veggiesetgo.controllers.locations'
  , 'firebase']
  )

