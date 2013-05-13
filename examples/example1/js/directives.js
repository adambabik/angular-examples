'use strict';

angular.module('myApp.directives', [])
	.directive('user', function userDirective() {
		return {
			template:
				'<div>' +
					'<div>User {{getIndex(index)}}</div>' +
					'<dl>' +
						'<dt>Name</dt>' +
						'<dd>{{localUser.name}}</dd>' +
						'<dt>Age:</dt>' +
						'<dd>{{localUser.age}}</dd>' +
					'</dl>' +
					'<a href="#" ng-click="delete($event, index)">delete</a>' +
				'</div>',
			replace: true,
			restrict: 'E',
			scope: {
				localUser: '=userAttr',
				index: '@indexAttr',
				index2: '&indexSecondAttr'
			},
			controller: function ($scope) {
				console.log('user directive controller', $scope, 'index', $scope.index2());

				$scope.getIndex = function (index) {
					return (index | 0 ) + 1;
				};

				$scope.delete = function (e, index) {
					console.log('delete', index);
					$scope.$parent.$parent.users.splice(index, 1);
				}
			}
		};
	});