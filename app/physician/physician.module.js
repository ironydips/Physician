'use strict';

angular.module('myApp.physician', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/physician', {
    template: '<physician></physician>'
  });
}])
