'use strict';


angular.module('veggiesetgo.services.categories', [])
	.factory('Categories', function() {
    var Categories = {};

Categories.cuisines = 	[
	{"id":"0","cuisineName":"American"},
	{"id":"1","cuisineName":"Argentinian"},
	{"id":"2","cuisineName":"Asian"},
	{"id":"3","cuisineName":"Asian Fusion"},
	{"id":"4","cuisineName":"Bakery"},
	{"id":"5","cuisineName":"Bar"},
	{"id":"6","cuisineName":"Brasserie"},
	{"id":"7","cuisineName":"Brazilian"},
	{"id":"8","cuisineName":"Breakfast"},
	{"id":"9","cuisineName":"Breakfast and Brunch"},
	{"id":"10","cuisineName":"British (Modern)"},
	{"id":"11","cuisineName":"Burger"},
	{"id":"12","cuisineName":"Café"},
	{"id":"13","cuisineName":"Cajon/Creole"},
	{"id":"14","cuisineName":"Canadian"},
	{"id":"15","cuisineName":"Cantonese"},
	{"id":"16","cuisineName":"Caribbean"},
	{"id":"17","cuisineName":"Chinese"},
	{"id":"18","cuisineName":"Coffee Shop"},
	{"id":"19","cuisineName":"Cuban"},
	{"id":"20","cuisineName":"Diner"},
	{"id":"21","cuisineName":"Diners"},
	{"id":"22","cuisineName":"English"},
	{"id":"23","cuisineName":"Ethiopian"},
	{"id":"24","cuisineName":"Fondue"},
	{"id":"25","cuisineName":"French"},
	{"id":"26","cuisineName":"French Bakery"},
	{"id":"27","cuisineName":"Gastropub"},
	{"id":"28","cuisineName":"German"},
	{"id":"29","cuisineName":"Global"},
	{"id":"30","cuisineName":"Greek"},
	{"id":"31","cuisineName":"Himalayan"},
	{"id":"32","cuisineName":"Indian"},
	{"id":"33","cuisineName":"Italian"},
	{"id":"34","cuisineName":"Japanese"},
	{"id":"35","cuisineName":"Korean "},
	{"id":"36","cuisineName":"Latin American"},
	{"id":"37","cuisineName":"Lebanese"},
	{"id":"38","cuisineName":"Lounge"},
	{"id":"39","cuisineName":"Mediterranean"},
	{"id":"40","cuisineName":"Mexican"},
	{"id":"41","cuisineName":"Middle Eastern"},
	{"id":"42","cuisineName":"Nepalese"},
	{"id":"43","cuisineName":"Peruvian"},
	{"id":"44","cuisineName":"Pizza"},
	{"id":"45","cuisineName":"Sandwich"},
	{"id":"46","cuisineName":"Small Plates"},
	{"id":"47","cuisineName":"Spanish"},
	{"id":"48","cuisineName":"Sports Bar"},
	{"id":"49","cuisineName":"Sushi"},
	{"id":"50","cuisineName":"Tapas"},
	{"id":"51","cuisineName":"Tapas Bar"},
	{"id":"52","cuisineName":"Tex Mex"},
	{"id":"53","cuisineName":"Thai"},
	{"id":"54","cuisineName":"Vietnamese"},
	{"id":"55","cuisineName":"Wine Bar"}];
Categories.ratings = [
	  {"id":0, "ratingNumber":1 },
	  {"id":1, "ratingNumber":2 },
	  {"id":2, "ratingNumber":3 },
	  {"id":3, "ratingNumber":4 },
	  {"id":4, "ratingNumber":5 }
	];
Categories.prices = [
	{"id":0, "pricePoint":'$'},
	{"id":1, "pricePoint":'$$'},
	{"id":2, "pricePoint":'$$$'},
	{"id":3, "pricePoint":'$$$$'}
];
	return Categories;
})