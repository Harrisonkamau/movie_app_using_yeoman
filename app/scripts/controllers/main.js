'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('MainCtrl', function ($scope, myFactory) {
// passes a get to your resource
  $scope.movies = myFactory.query();
  // 
   
  });
