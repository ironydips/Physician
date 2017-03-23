'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$httpProvider','$locationProvider', '$routeProvider', function($httpProvider, $locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $httpProvider.defaults.useXDomain = true;

  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
