'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    template: '<view1></view1>'
  });
}])

// function View1Ctrl(){
// 	var ctrl = this;
// 	ctrl.value = function(val){
// 		console.log(val)
// 	}
// }

// .controller('View1Ctrl', [function() {

// 	var ctrl = this;
// 	ctrl.value = function(val){
// 		console.log(val)
// 	}

// }]);