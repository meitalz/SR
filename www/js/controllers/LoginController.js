
angular.module('starter', ['ionic']).controller('LoginController', ['$scope', '$location', function($scope, $location) {

$scope.username;
$scope.password;
$scope.okPressed = false;

$scope.submitLogin = function(){

	 $location.path='Main.html';
	 
	 $scope.okPressed=true;
	 //alert('username: ' + $scope.username + "\npassword: " + $scope.password);
	 
};

}]);
