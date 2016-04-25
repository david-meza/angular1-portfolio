'use strict';

function easeInOutCubic (t) { 
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

angular.module('portfolio', ['appServices', 'appFilters', 'appControllers', 'appDirectives', 'ui.router', 'ngMaterial', 'duScroll', 'dcbImgFallback', 'ngAnimate'])

  .value('duScrollDuration', 600)
  .value('duScrollOffset', 0)
  .value('duScrollEasing', easeInOutCubic)

  .config([ '$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
  }])

  .config([ '$mdThemingProvider', function ($mdThemingProvider) {
    $mdThemingProvider.theme('altTheme')
      .primaryPalette('purple')
      .accentPalette('red')
      .warnPalette('yellow');
  }])

  .config([ '$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet('img/icons/core.svg', 48)
      .iconSet('routes', 'img/icons/routes.svg', 48);       
  }])

  .config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'devicesCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/main.html',
          controller: 'devicesCtrl'
        })
        .state('blog', {
          url: '/blog',
          templateUrl: 'views/main.html',
          controller: 'devicesCtrl'
        })
        .state('projects', {
          url: '/projects',
          templateUrl: 'views/main.html',
          controller: 'devicesCtrl'
        })
        .state('experience', {
          url: '/experience',
          templateUrl: 'views/main.html',
          controller: 'devicesCtrl'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'views/main.html',
          controller: 'devicesCtrl'
        });

  }]);
