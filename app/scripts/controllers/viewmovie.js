'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:ViewmovieCtrl
 * @description
 * # ViewmovieCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('ViewmovieCtrl', function ($scope, $routeParams, myFactory) {
  	$scope.movie_id = $routeParams._id;
  	myFactory.get({id: $scope.movie_id}, function(response){
  		// here we pass a movie id & get a response - object
  		$scope.moviedetails = response;

  	});
  });
