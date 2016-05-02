(function(angular) {

  'use strict';

  angular.module('appControllers').controller('contactCtrl', ['$scope', '$mdToast', 'deviceService', '$state', function($scope, $mdToast, deviceService, $state){

    function processResponse(response) {
      if (response.status >= 200 && response.status < 300) {
        $state.go('contact.success');
      } else {
        return deviceService.informUser('Sorry, something went wrong with our servers. Please try again in a few minutes.');
      }
    }

    $scope.submitForm = function() {
      // Shouldn't really happen since button is disabled until form is valid
      if ($scope.contactForm.$invalid) { return deviceService.informUser('Form is invalid. Please fill out all the fields.'); } 
      
      var data = JSON.stringify($scope.data);
      deviceService.sendEmail(data, processResponse);
    };

  }]);

})(window.angular || angular);