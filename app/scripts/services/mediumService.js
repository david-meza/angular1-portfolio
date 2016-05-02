(function(angular) {

  'use strict';

  angular.module('appServices').factory('mediumService', ['$http', '$q',
    function($http, $q){

      var URL = 'scripts/posts.json';
      var _posts = [];

      function getListOfPosts() {
        return $http({
          method: 'GET',
          url: URL,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
      }

      function extractFeatures(response) {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          angular.forEach(response.data.payload.posts, extractIndividualPost, _posts);
          return _posts;
        } else {
          return logError(response);
        }
      }

      function logError(response) {
        console.log('Failed to get data from medium server', response);
        return $q.reject(response);
      }

      function extractIndividualPost(post) {
        if (post.virtuals.wordCount < 100) { return; }

        post.firstPublishedAt = new Date(post.firstPublishedAt);

        this.push(post);
      }

      function getPosts() {
        getListOfPosts().then(extractFeatures, logError);
        return _posts;
      }

    

    return {
      getPosts: getPosts
    };

  }]);
  
})(window.angular || angular);