var App = angular.module('MyApp', ['ngResource']);

/******************************
	 	
	 Angular Resources

*******************************/

/******************************
	 	
	 Angular Controllers 

*******************************/
App.controller('EmployeeManagementViewCtrl', function($scope) {

	$scope.triggerRandomBtnAction = function() {
		alert("Random Button was clicked!!");
	}

});