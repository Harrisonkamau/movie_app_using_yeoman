'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:NewseriesCtrl
 * @description
 * # NewseriesCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('NewseriesCtrl', function ($scope, $http) {
  		// $scope.name = "Charge your laptop:)";
 $http.get('http://jsonplaceholder.typicode.com/posts/1/comments')
 	  .success(function(response){
 	  	$scope.blogs = response;
 	  	console.log(response);
 	  })
 	  .error(function(response){
 	  	cosole.log('Error: '+ response);
 	  })
    
  });
  // var express = require('express');
  // var app = express();
  // var port = process.env.PORT || 4000;
  // var newSeries = {
  // 		title: "White House Down",
  // 		year_of_release: 2009,
  // 		main_actor: "Anderson Wales" 
  // }
  // app.get('/newSeries', function(req, res){
  // 	res.send(newSeries);
  // 	res.json(newSeries);
  // })
  // app.post('/newSeries', function(req, res){
  // 	res.json(newSeries);
  // })
  // app.listen(port, function(){
  // 	console.log("server running on " + port);
  // })
