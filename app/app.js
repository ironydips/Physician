'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.physician'
  ]).
config(['$httpProvider','$locationProvider', '$routeProvider', function($httpProvider, $locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $httpProvider.defaults.useXDomain = true;

  $routeProvider.otherwise({redirectTo: '/physician'});
}]);
