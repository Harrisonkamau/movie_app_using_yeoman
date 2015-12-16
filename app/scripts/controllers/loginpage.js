'use strict';

var interceptor = function($q, $location){
	return {
		request: function(config){
			return config;
		},
		response: function(result){
			console.log('Resp: ' + JSON.stringify(result.data));
			if(result.data.code == 102){
				// create a session
				sessionStorage.mysession = result.data.user;
				$location.path('/');
			} else if(result.data == 409){
				alert("Failed");
				$location.path('/loginPage');
			}
			
			return result;
		},
		responseError: function(rejection){
			console.log('Resp: '+ rejection.status);
			if(rejection/status == 404){
				$location.path('/loginPage');
			} else{
				return $q.reject(rejection);
			}
			
		}
	}
};
/**
 * @ngdoc function
 * @name movieappApp.controller:LoginpageCtrl
 * @description
 * # LoginpageCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('LoginpageCtrl', function ($scope, $http) {
  	$scope.loginUser = function(){
  		console.log('Posting data: '+ JSON.stringify($scope.user));
  		$http.post("http://127.0.0.1:8081/movies/login", $scope.user);	
  		}
  		
  })
  .config(function($httpProvider){
  		// push your interceptor to $httpProvider array
  		$httpProvider.interceptors.push(interceptor);
  });
