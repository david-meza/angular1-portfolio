(function(angular) {

  'use strict';

  angular.module('appControllers').controller('experienceCtrl', ['$scope', '$http',
    function($scope, $http){

      $scope.openResume = function() {
        return $http
          .get('support/DavidMResume.pdf', {responseType: 'arraybuffer'})
          .then(function (response) {
            var file = new Blob([response.data], {type: 'application/pdf'});
            var fileURL = URL.createObjectURL(file);
            window.open(fileURL);
          });
      }

    }
  ]);

})(window.angular || angular);