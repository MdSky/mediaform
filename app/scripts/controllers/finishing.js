'use strict';

/**
 * @ngdoc function
 * @name mediaformApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mediaformApp
 */
angular.module('mediaformApp')
  .controller('FinishCtrl', function ($scope, $http, Cart) {

    var cart = Cart;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sendOrder = function() {
      $http.post("http://sdljlasdfjla", cart).then(function (result
      ){
        $scope.message = "Successfull!";
      }).catch(function (reason) {
        $scope.message = "Auftrag konnte nicht gespeichert werden! Grund: " + reason;
      });
    }
  });
