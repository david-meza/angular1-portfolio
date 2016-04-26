(function(angular) {
  
  'use strict';

  angular.module('appDirectives').component('ngNavbar', {
    
    restrict: 'E',
    replace: true,
    templateUrl: 'views/directives/navbar.html',
    controller: 'navbarCtrl'

  });

})(angular || window.angular);
