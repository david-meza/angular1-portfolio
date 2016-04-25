(function(angular) {

  'use strict';

  angular.module('appDirectives').directive('sidenavContent', function(){
    
    return { 
      restrict: 'E',
      templateUrl: 'views/directives/sidenav-content.html',
      controller: ['$scope', function ($scope) {

        $scope.routes = [
          { name: 'About',      icon: 'routes:about',      url: 'about'},
          { name: 'Blog',       icon: 'routes:blog',       url: 'blog'},
          { name: 'Projects',   icon: 'routes:projects',   url: 'projects'},
          { name: 'Experience', icon: 'routes:experience', url: 'experience'},
          { name: 'Contact',    icon: 'routes:contact',    url: 'contact'}
        ];

        $scope.toggleList = function (listName) {
          $scope.currentList = $scope.currentList === listName ? '' : listName;
        };

      }]
    };

  });

})(window.angular);