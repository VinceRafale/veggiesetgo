'use strict';

angular.module('veggiesetgo.config', [])

app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', { url: "/tab", abstract: true, templateUrl: "views/partials/tabs.html" })

    .state('tab.nearby-main', {
      url: '/nearby',
      views: {
        'nearby-tab': {
          templateUrl: 'views/locations/main.html',
          controller: 'MapCtrl'
        }
      }
    })

    // the pet tab has its own child nav-view and history
    .state('tab.listing-index', { url: '/restaurants', views: { 'explore-tab': {
          templateUrl: 'views/listings/list.html',
          controller: 'ListingIndexCtrl'
        }
      }
    })

    .state('tab.listing-detail1', {
      url: '/e/restaurant/:restaurantId',
      views: {
        'explore-tab': {
          templateUrl: 'views/listings/detail.html',
          controller: 'ListingDetailCtrl'
        }
      }
    })


    .state('tab.listing-photo1', {
      url: '/e/restaurant/:restaurantId/photo',
      views: {
        'explore-tab': {
          templateUrl: 'views/listings/photo.html',
          controller: 'ListingDetailCtrl'
        }
      }
    })


    .state('tab.listing-map1', {
      url: '/e/restaurant/:restaurantId/map',
      views: {
        'explore-tab': {
          templateUrl: 'views/listings/map.html',
          controller: 'ListingDetailCtrl'
        }
      }
    })


    .state('tab.cuisines', {
      url: '/cuisines',
      views: {
        'cuisine-tab': {
          templateUrl: 'views/cuisines/list.html',
          controller: 'cuisController'
        }
      }
    })


    .state('tab.cuisine-single', {
      url: '/cuisines/:cuisineId',
      views: {
        'cuisine-tab': {
          templateUrl: 'views/cuisines/cuisine.html',
          controller: 'cuisDetailController'
        }
      }
    })

      .state('tab.listing-detail2', {
      url: '/c/restaurant/:restaurantId',
      views: {
        'cuisine-tab': {
          templateUrl: 'views/listings/c/detail.html',
          controller: 'ListingDetailCtrl'
        }
      }
    })

        .state('tab.listing-photo2', {
      url: '/c/restaurant/:restaurantId/photo',
      views: {
        'cuisine-tab': {
          templateUrl: 'views/listings/c/photo.html',
          controller: 'ListingDetailCtrl'
        }
      }
    })


    .state('tab.listing-map2', {
      url: '/c/restaurant/:restaurantId/map',
      views: {
        'cuisine-tab': {
          templateUrl: 'views/listings/c/map.html',
          controller: 'ListingDetailCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'views/about/main.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/restaurants');

})

  // your Firebase URL goes here
  // should look something like: https://blahblahblah.firebaseio.com
  .constant('FBURL', 'https://veggiesetgo.firebaseio.com/')


