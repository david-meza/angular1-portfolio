(function(angular) {
  
  'use strict';

  angular.module('appDirectives').component('toolbar', {
    
    bindings: {
      title: '@'
    },
    templateUrl: 'views/directives/toolbar.html'

  });

})(angular || window.angular);
