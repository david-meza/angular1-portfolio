(function(angular) {

  'use strict';

  angular.module('appServices').factory('deviceService', ['$window', '$q', '$http',
    function($window, $q, $http){

      var _width = $window.innerWidth;

      function isMobile() {
        return _width <= 959;
      }

      function scrollTo(target) {
        var contentArea = angular.element(document.getElementById('main-scrollable'));
        var ngTarget = angular.element(document.getElementById(target));
        contentArea.scrollToElementAnimated(ngTarget);
      }

      function logError(response) {
        console.log('Failed to send email', response);
        return $q.reject(response);
      }

      function postEmail(data) {
        return $http({
          url: 'https://formspree.io/hello@david-meza.com',
          method: 'POST',
          data: data,
          headers: {
            'Accept': 'application/json'
          }
        });
      }

      function sendEmail(data, callback) {
        postEmail(data).then(callback, logError);
      }

      function informUser(message, hide) {
        var toast = $mdToast.simple()
          .textContent(message)
          .action('ok')
          .highlightAction(false)
          .hideDelay(hide || 3000)
          .position('bottom right');
        
        $mdToast.show(toast);
      };

      return {
        isMobile: isMobile,
        scrollTo: scrollTo,
        sendEmail: sendEmail,
        informUser: informUser
      };

    }
  ]);
  
})(window.angular);