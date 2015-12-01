'use strict';

/**
 * @ngdoc overview
 * @name movieappApp
 * @description
 * # movieappApp
 *
 * Main module of the application.
 */
angular
  .module('movieappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/movieRelease', {
        templateUrl: 'views/movierelease.html',
        controller: 'releaseCtrl',
        controllerAs: 'release'
      })
      .when('/newSeries', {
        templateUrl: 'views/newseries.html',
        controller: 'NewseriesCtrl',
        controllerAs: 'newSeries'
      })
      .when('/contactList', {
        templateUrl: 'views/contactlist.html',
        controller: 'ContactlistCtrl',
        controllerAs: 'contactList'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
