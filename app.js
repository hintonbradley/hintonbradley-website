// MODULE
var myWebsite = angular.module('myWebsite', ['ngRoute','ngResource']);

// ROUTES
myWebsite.config(function ($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})

	.when('/shoeswipe', {
		templateUrl: 'pages/shoeswipe.html',
		controller: 'shoeswipeController'
	})

	.when('/monkeyworks', {
		templateUrl: 'pages/monkeyworks.html',
		controller: 'monkeyworksController'
	})
})

// CONTROLLERS
myWebsite.controller('homeController', ['$scope', function($scope) {
	}]);

myWebsite.controller('shoeswipeController', ['$scope', function($scope) {
	}]);

myWebsite.controller('monkeyworksController', ['$scope', function($scope) {
	}]);
