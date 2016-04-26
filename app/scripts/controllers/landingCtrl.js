(function(angular) {

  'use strict';

  angular.module('appControllers').controller('landingCtrl', ['$scope',
    function($scope){

      $scope.socialSites = [
        { icon: 'social:github',          name: 'Github',         url: 'https://github.com/david-meza'},
        { icon: 'social:linkedin',        name: 'LinkedIn',       url: 'https://www.linkedin.com/in/jdavidmeza'},
        { icon: 'social:stack-overflow',  name: 'Stack Overflow', url: 'https://stackoverflow.com/users/4926060/david-meza'},
        { icon: 'social:medium',          name: 'Medium',         url: 'https://medium.com/@DavidMe93'},
        { icon: 'social:twitter',         name: 'Twitter',        url: 'https://twitter.com/DavidMe93'},
        { icon: 'social:facebook',        name: 'Facebook',       url: 'https://facebook.com/jdmeza93'},
        { icon: 'social:instagram',       name: 'Instagram',      url: 'https://www.instagram.com/davidmeza93/'}
      ];

  }]);

})(window.angular);