'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:EditmovieCtrl
 * @description
 * # EditmovieCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('EditmovieCtrl', function ($scope, $routeParams, myFactory) {
  	$scope.movie_id = $routeParams._id;
  	myFactory.get({_id: $scope.movie_id}, function(response){
  		// here we pass a movie id & get a response - object
  		$scope.movie = response;

  		});

  	// update button clicked
  	$scope.updateMovie = function(){
  		$scope.movie.$update(function(response){
  			console.log("Movie updated!");
  		});
  	}
  });
