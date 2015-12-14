'use strict';

/**
 * @ngdoc service
 * @name movieappApp.myFactory
 * @description
 * # myFactory
 * Factory in the movieappApp.
 */
angular.module('movieappApp')
  .factory('myFactory', function ($resource) {
      return $resource("http://127.0.0.1:8081/movies/:id", {id : '@_id'}, 
      {
      	update: {
      		method: 'PUT'
      	}

      });

  });
