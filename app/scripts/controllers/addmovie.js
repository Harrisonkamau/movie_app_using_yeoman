'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:AddmovieCtrl
 * @description
 * # AddmovieCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('AddmovieCtrl', function ($scope, myFactory, $location) {
	$scope.movie = new myFactory();
	$scope.saveMovie = function(){
		// create a new resource using your movie object
   
   			console.log($scope.movie);
   
   			myFactory.save($scope.movie, function(){
   				console.log("Recorded a new movie");
   				$location.path('/');
   	});
   // }
   
   	// this will pass a post to your API
   
   };
  	
  });
