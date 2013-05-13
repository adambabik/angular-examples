'use strict';

angular.module('myApp.controllers', [])
	.controller('MainCtrl', function MainCtrl($scope) {
		$scope.users = [
			{ name: 'Frank Sinatra', age: 34 },
			{ name: 'Angelina Jolie', age: 25 },
			{ name: 'Keira Knightley', age: 29 },
			{ name: 'Kirsten Dunst', age: 27 }
		];

		$scope.$watch('currentUser', function () {
			console.log('currentUser', $scope.currentUser);
		});

		$scope.$watch('users', function (newVal, oldVal) {
			console.log('changed users', $scope.users, newVal, '<-', oldVal);
			if (newVal.length !== oldVal.length) {
				$scope.currentUser = null;
			}
		}, true);
	});