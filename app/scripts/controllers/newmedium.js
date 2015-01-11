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

    $scope.article = {name : '', amount : 1, targetTitle : '',  transactionPrice : 30, copyPrice : 10, totalPrice : 40};

    // load source Media from REST Interface
    $http.get('sourceMedia.json').then(function(sourceMediaResponse) {
      $scope.sourceMedia = sourceMediaResponse.data;
      $scope.article.sourceSel = $scope.sourceMedia[0];
    });

    // load target Media from REST Interface
    $http.get('targetMedia.json').then(function(targetMediaResponse) {
      $scope.targetMedia = targetMediaResponse.data;
      $scope.article.targetSel = $scope.targetMedia[0];
    });

    // load pricing from REST Interface
    $http.get('pricing.json').then(function(pricingResponse) {
      $scope.pricing = pricingResponse.data;
    });

  });
