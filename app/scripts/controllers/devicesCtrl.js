(function(angular) {

  'use strict';

  angular.module('appControllers').controller('devicesCtrl', ['$scope', 'deviceService', '$state',
    function($scope, deviceService, $state){

      $scope.route = $state.current.name;

      $scope.isMobile = deviceService.isMobile;

      $scope.activeTab = deviceService.activeTab;

      $scope.showTab = function (tab) {
        return $scope.isMobile() && $scope.activeTab.name !== tab;
      };

  }]);

})(window.angular);