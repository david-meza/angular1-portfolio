(function(angular) {
  
  'use strict';

  angular.module('appDirectives').component('sidenavToggle', {
    
    templateUrl: 'views/directives/sidenav-toggle.html',
    controller: ['$scope', '$rootScope', '$mdSidenav',
      function ($scope, $rootScope, $mdSidenav) {

        // Start the circular progress icon
        $scope.progress = 'indeterminate';

        $scope.toggleSidenav = function () {
          $mdSidenav('left').toggle();
        };

        $rootScope.$on('loading:progress', function(){
          $scope.progress = 'indeterminate';
        });

        $rootScope.$on('loading:finish', function(){
          $scope.progress = undefined;
        });

      }
    ]

  });

})(angular || window.angular);
