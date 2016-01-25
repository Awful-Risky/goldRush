angular.module('goldRush', [])

angular.module('goldRush').
	.factory('treasurePoints', [function() {
		var coords= [
			{
				coordx: center,
				coordy: center,
				note: click to start
			}
		
			}]

		// var notes= ["note0","note1","note2"]
		// i=((coords.length)-1))
		
		// return {
		// 	coords[i]:note[i]}
	}]);




angular.module('goldRush')
	.controller('goldMapper', ['$scope', function($scope) {
		// $scope.showEvent = function(event) {
		// 	console.log(event);

		// }
	
		$scope.showIcon = false;
		$scope.clickEvent = function(event) {
			$scope.x = ((event.clientX) - 16);
			$scope.y = ((event.clientY) - 37);
			push{
				x: event.clientX
				y: $scope.y
				notes: 
			}
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