(function(angular) {

  'use strict';

  angular.module('appControllers').controller('blogCtrl', ['$scope', 'mediumService',
    function($scope, mediumService){

      $scope.posts = mediumService.getPosts();

  }]);

})(window.angular);