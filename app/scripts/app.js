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

// Config
mediaformApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/overview.html',
      controller: 'OverviewCtrl'
    })
    .when('/newmedium', {
      templateUrl: 'views/newmedium.html',
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
mediaformApp.factory('Cart', function () {
  var items = [];
  return {
    getItems: function () {
      return items;
    },
    addArticle: function (article) {
      items.push(article);
    },
    sum: function () {
      return items.reduce(function (total, article) {
        return total + article.totalPrice;
      }, 0);
    }
  };
});

mediaformApp.factory('MediaService', function ($http,$log) {
  var media = {};
  var sourceMedia = [];
  var targetMedia = [];

  // load source Media from REST Interface
  $http
    .get('sourceMedia.json')
    .then(function (sourceMediaResponse) {
      sourceMedia = sourceMediaResponse.data;
    }).catch(function (result) {
      var message = "Fehler: Quellmedien konnten nicht geladen werden! Grund: "
        + result.status
        + " " + result.statusText
        + ", " + result.data.message;
      $log.error(message);
    });

  // load target Media from REST Interface
  $http
    .get('targetMedia.json')
    .then(function (targetMediaResponse) {
      targetMedia = targetMediaResponse.data;
    }).catch(function (result) {
      var message = "Fehler: Zielmedien konnten nicht geladen werden! Grund: "
        + result.status
        + " " + result.statusText
        + ", " + result.data.message;
      $log.error(message);
    });

  return {
    getMedia: function () {
      return media;
    },
    setMedia: function (newMedia) {
      media = newMedia;
    },
    getSourceMediaList: function() {
      return sourceMedia;
    },
    getTargetMediaList: function() {
      return targetMedia;
    },
    selectNewMedia: function () {
      var newMedia = {
        name: '',
        amount: 1,
        targetTitle: '',
        totalPrice: 40,
        sourceSel: sourceMedia[0],
        targetSel: targetMedia[0],
        calcPrice: function () {
          if (this.targetSel.copies) {
            this.totalPrice = this.sourceSel.price + this.amount * this.targetSel.price;
          } else {
            if (this.targetSel.price) {
              this.totalPrice = this.sourceSel.price + this.targetSel.price;
            } else {
              this.totalPrice = this.sourceSel.price;
            }
          }
        }
      };

      $log.info("SourceSel: " + JSON.stringify(newMedia.sourceSel));
      $log.info("TargetSel: " + JSON.stringify(newMedia.targetSel));

      media = newMedia;
    }
  };
});
