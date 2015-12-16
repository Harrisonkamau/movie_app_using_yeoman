'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('MainCtrl', function ($scope, myFactory,$location) {
// passes a get to your resource
  $scope.movies = myFactory.query();
  // 
   
 if(sessionStorage.length == 0){
		alert("You are not logged in!");
    	$location.path('/loginPage');
    	return;
    } else{
    	$scope.message = sessionStorage.mysession;
    	 alert('welcome: '+ $scope.message);
    }
   
    

  });
