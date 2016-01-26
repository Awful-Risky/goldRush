angular.module('goldRush', [])

// angular.module('goldRush').
// 	.factory('treasurePoints', [function() {
// 		var xyNotes= []

		
// 		return {}

// 	}]);



angular.module('goldRush')
	.controller('goldMapper', ['$scope', function($scope) {
		
		$scope.xyNotes= []
		// $scope.showIcon = false;
		$scope.clickEvent = function(event) {
			// $scope.x = ((event.clientX) - 16);
			// $scope.y = ((event.clientY) - 37);
			
			// console.log(event.pageX);
			// console.log(event.pageY);
			
			// $scope.showIcon = true;
			$scope.xyNotes.push({
				x : ((event.clientX) -16),
				y : ((event.clientY) - 37),
			})
			console.log($scope.xyNotes);
		}
		$scope.removeIcon = function (obj) {
			obj.showIcon = !obj.showIcon;
		}
}])



//Testing....













