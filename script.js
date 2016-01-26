angular.module('goldRush', [])

// angular.module('goldRush').
// 	.factory('treasurePoints', [function() {
// 		var xyNotes= []

		
// 		return {}

// 	}]);



angular.module('goldRush')
	.controller('goldMapper', ['$scope', function($scope) {
		
		$scope.xyNotes= []

		$scope.clickEvent = function(event) {

			$scope.xyNotes.push({
				x : ((event.clientX) -16),
				y : ((event.clientY) - 37),
				notes : '',
				showTextBox : false,
				showIcon : false,
				showToolTip: false,
			})
			console.log($scope.xyNotes);
		}
		$scope.removeIcon = function (obj) {
			obj.showIcon = !obj.showIcon;
		}

		$scope.removeInputBox = function (obj) {
			console.log('yes')
			obj.showTextBox = !obj.showTextBox;
			obj.showToolTip = !obj.showToolTip;
		}
}])



//Testing....













