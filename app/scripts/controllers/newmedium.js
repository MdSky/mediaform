'use strict';

/**
 * @ngdoc function
 * @name mediaformApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mediaformApp
 */
angular.module('mediaformApp')
  .controller('NewMediaCtrl', function ($scope, $location, $http, $log, Cart, MediaService) {
    $scope.cart = Cart;
    $scope.article = MediaService.getMedia();
    $scope.sourceMedia = MediaService.getSourceMediaList();
    $scope.targetMedia = MediaService.getTargetMediaList();

    $log.info("current article: " + JSON.stringify(MediaService.getMedia()));

    // submit check
    $scope.submit = function (form) {
      // Trigger validation flag.
      $scope.submitted = true;

      // If form is invalid, return and let AngularJS show validation errors.
      if (form.$invalid) {
        return;
      } else {
        $scope.cart.addArticle($scope.article);
        $location.path('#/');
      }
    };

  });
