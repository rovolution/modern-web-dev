var App = angular.module('MyApp', ['ngResource']);

/******************************
	 	
	 Angular Resources

*******************************/
App.factory("Employees", function() {
	return $resource('/api/employees');
});

/******************************
	 	
	 Angular Controllers 

*******************************/
App.controller('EmployeeManagementViewCtrl', function($scope, Employees) {

	$scope.triggerRandomBtnAction = function() {
		alert("Random Button was clicked!!");
	}

});