angular.module('goldRush', [])
angular.module('goldRush').controller('goldMapper', ['$scope', function($scope) {
		// $scope.showEvent = function(event) {
		// 	console.log(event);

		// }
	
		$scope.showIcon = false;
		$scope.clickEvent = function(event) {
			$scope.x = ((event.clientX) - 16);
			$scope.y = ((event.clientY) - 37);
			$scope.showIcon = !$scope.showIcon;
			console.log(event.pageX);
			console.log(event.pageY);
		}
		$scope.removeIcon = function () {
			$scope.showIcon = !$scope.showIcon;
		}
}])






//Testing....
    // $scope.coords = {}
    // $scope.y = event.clientY;
    // &scope.x = event.clientX;
    
    // coords.push("X coords: " + x + ", Y coords: " + y;