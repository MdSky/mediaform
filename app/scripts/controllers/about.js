'use strict';

/**
 * @ngdoc function
 * @name mediaformApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mediaformApp
 */
angular.module('mediaformApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
