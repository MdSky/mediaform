'use strict';

/**
 * @ngdoc function
 * @name mediaformApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mediaformApp
 */
angular.module('mediaformApp')
  .controller('OverviewCtrl', function ($scope, $http, Cart) {

    $scope.cart = Cart;




  });
