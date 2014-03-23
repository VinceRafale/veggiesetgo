angular.module('veggiesetgo.services.firebaseRefs', [])
.factory('FireRef', ['FBURL', 'Firebase',
	function(FBURL, Firebase) {
		return {
			restaurants: function() {
			return new Firebase(FBURL+'/restaurants');
		}
	  }
	}])