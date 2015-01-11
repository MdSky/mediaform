'use strict';

/**
 * @ngdoc overview
 * @name mediaformApp
 * @description
 * # mediaformApp
 *
 * Main module of the application.
 */
var mediaformApp = angular
  .module('mediaformApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

// Cofnig
mediaformApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl'
      })
      .when('/newmedia', {
        templateUrl: 'views/newmedia.html',
        controller: 'NewMediaCtrl'
      })
      .when('/address', {
        templateUrl: 'views/address.html',
        controller: 'AddressCtrl'
      })
      .when('/finishing', {
        templateUrl: 'views/finishing.html',
        controller: 'FinishCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// Factories
mediaformApp.factory('Cart', function() {
    var items = [];
    return {
      getItems: function() {
        return items;
      },
      addArticle: function(article) {
        items.push(article);
      },
      sum: function() {
        return items.reduce(function(total, article) {
          return total + article.price;
        }, 0);
      }
    };
  });
