(function(angular) {

  'use strict';

  angular.module('appControllers').controller('landingCtrl', ['$scope',
    function($scope){

      $scope.socialSites = [
        { icon: 'social:email',           name: 'Email',          url: 'mailto:hello@david-meza.com?subject=Found you on david-meza.com'},
        { icon: 'social:stack-overflow',  name: 'Stack Overflow', url: 'https://stackoverflow.com/users/4926060/david-meza'},
        { icon: 'social:github',          name: 'Github',         url: 'https://github.com/david-meza'},
        { icon: 'social:linkedin',        name: 'LinkedIn',       url: 'https://www.linkedin.com/in/jdavidmeza'},
        { icon: 'social:medium',          name: 'Medium',         url: 'https://medium.com/@DavidMe93'}
      ];

  }]);

})(window.angular);
