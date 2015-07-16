'use strict';

/**
 * @ngdoc function
 * @name mediaformApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mediaformApp
 */
angular.module('mediaformApp')
  .controller('OverviewCtrl', function ($scope, $http, $log, Cart, MediaService) {

    $scope.cart = Cart;

    $scope.selectMedia = function(media) {
      MediaService.setMedia(media);
    };

    $scope.selectNewMedia = function(){
      $log.info("Overview.selectNewMedia();");
      MediaService.selectNewMedia();
    }

  });
