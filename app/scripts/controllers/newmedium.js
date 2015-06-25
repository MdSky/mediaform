'use strict';

/**
 * @ngdoc function
 * @name mediaformApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mediaformApp
 */
angular.module('mediaformApp')
  .controller('NewMediaCtrl', function ($scope, $location, $http, Cart) {
    $scope.cart = Cart;

    $scope.article = {name : '',
        amount : 1,
        targetTitle : '',
        transactionPrice : 30,
        copyPrice : 10,
        totalPrice : 40,
        calcPrice: function() {
            if (this.targetSel.copies) {
                this.totalPrice = this.sourceSel.price + this.amount * this.targetSel.price;
            } else {
                if (this.targetSel.price) {
                    this.totalPrice = this.sourceSel.price + this.targetSel.price;
                } else {
                    this.totalPrice = this.sourceSel.price;
                }
            }
        }};

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

    // submit check
    $scope.submit = function(form) {
        // Trigger validation flag.
        $scope.submitted = true;

        // If form is invalid, return and let AngularJS show validation errors.
        if (form.$invalid) {
            return;
        } else {
            $scope.cart.addArticle($scope.article);
            $location.path( '#/' );
        }
    };

  });
