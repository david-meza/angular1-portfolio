(function(angular) {

  'use strict';

  angular.module('appControllers').controller('devicesCtrl', ['$scope', 'deviceService',
    function($scope, deviceService){

      $scope.isMobile = deviceService.isMobile;

  }]);

})(window.angular);