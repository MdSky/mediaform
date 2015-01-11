'use strict';

/**
 * @ngdoc function
 * @name mediaformApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mediaformApp
 */
angular.module('mediaformApp')
  .controller('NewMediaCtrl', function ($scope, $http, Cart) {
    $scope.cart = Cart;

    // load source Media from REST Interface
    $http.get('/sourceMedia.json').then(function(articlesResponse) {
      $scope.sourceMedia = articlesResponse.data;
    });

    // load target Media from REST Interface
    $http.get('/targetMedia.json').then(function(articlesResponse) {
      $scope.targetMedia = articlesResponse.data;
    });

    $scope.sourceSel = $scope.sourceMedia[0];
    $scope.targetSel = $scope.targetMedia[0];
  });
