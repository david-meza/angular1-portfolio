(function(angular) {

  'use strict';

  angular.module('appControllers').controller('projectsCtrl', ['$scope', 'githubService',
    function($scope, githubService){

      $scope.projects = githubService.getProjects();

  }]);

})(window.angular);