'use strict';

/**
 * @ngdoc overview
 * @name mediaformApp
 * @description
 * # mediaformApp
 *
 * Main module of the application.
 */
angular
  .module('mediaformApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl'
      })
      .when('/address', {
        templateUrl: '../views/address.html',
        controller: 'AddressCtrl'
      })
      .when('/finishing', {
        templateUrl: '../views/finishing.html',
        controller: 'FinishCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
