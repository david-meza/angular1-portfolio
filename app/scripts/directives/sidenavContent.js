(function(angular) {

  'use strict';

  angular.module('appDirectives').directive('sidenavContent', function(){
    
    return { 
      restrict: 'E',
      templateUrl: 'views/directives/sidenav-content.html',
      controller: ['$scope', '$state', function ($scope, $state) {

        function getCurrentState() {
          return $state.current.name;
        }

        function updateLocalState(newValue) {
          $scope.activeRoute = newValue;
        }

        $scope.$watch(getCurrentState, updateLocalState);

        $scope.routes = [
          { name: 'About',      icon: 'routes:about',      url: 'about'},
          { name: 'Blog',       icon: 'routes:blog',       url: 'blog'},
          { name: 'Projects',   icon: 'routes:projects',   url: 'projects'},
          { name: 'Experience', icon: 'routes:experience', url: 'experience'},
          { name: 'Contact',    icon: 'routes:contact',    url: 'contact'}
        ];

      }]
    };

  });

})(window.angular);