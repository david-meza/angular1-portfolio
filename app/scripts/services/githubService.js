(function(angular) {

  'use strict';

  angular.module('appServices').factory('githubService', ['$http', '$q',
    function($http, $q){

      var ENDPOINT = '/users/david-meza/repos?sort=pushed&type=all';
      var _repos = [];

      function getRepos() {
        return $http.get('https://api.github.com' + ENDPOINT);
      }

      function extractFeatures(response) {
        if (response.status >= 200 && response.status < 300) {
          angular.forEach(response.data, extractIndividualRepo, _repos);
          return _repos;
        } else {
          return logError(response);
        }
      }

      function logError(response) {
        console.log('Failed to get data from github server', response);
        return $q.reject(response);
      }

      function capitalize(text) {
        return text.split('-').map(function(word) { return word[0].toUpperCase() + word.substring(1, word.length); }).join(' ');
      }

      function extractIndividualRepo(repo) {
        if (repo.stargazers_count === 0) { return; }
        var leanRepo = {
          description: repo.description,
          forks: repo.forks_count,
          demoUrl: repo.homepage,
          githubUrl: repo.html_url,
          language: repo.language,
          name: capitalize(repo.name),
          originalName: repo.name,
          createdAt: new Date(repo.created_at),
          pushedAt: new Date(repo.pushed_at),
          stars: repo.stargazers_count,
          watchers: repo.watchers_count
        };
        this.push(leanRepo);
      }

      function getProjects() {
        getRepos().then(extractFeatures, logError);
        return _repos;
      }

    

    return {
      getProjects: getProjects
    };

  }]);
  
})(window.angular);