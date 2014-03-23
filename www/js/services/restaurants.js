'use strict';

angular.module('veggiesetgo.services.restaurants', ['veggiesetgo.services.firebaseRefs'])
.factory('Restaurants', ['FBURL', 'Firebase', 'angularFireCollection', 'FireRef',
function(FBURL, Firebase, angularFireCollection, FireRef) {
	return {
		collection: function() {
			return angularFireCollection(FireRef.restaurants());
		}
	, find: function(restaurantId) {
		return FireRef.restaurants().child(restaurantId);
		}
	}
}])