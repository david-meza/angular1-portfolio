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
      .primaryPalette('deep-purple')
      .accentPalette('red')
      .warnPalette('yellow')
      .backgroundPalette('grey');
  }])

  .config([ '$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet('img/icons/core.svg', 48)
      .iconSet('routes', 'img/icons/routes.svg', 48)       
      .iconSet('social', 'img/icons/social.svg', 48);       
  }])

  .config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/states/landing.html',
          controller: 'landingCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/states/about.html',
          controller: 'devicesCtrl'
        })
        .state('blog', {
          url: '/blog',
          templateUrl: 'views/states/blog.html',
          controller: 'devicesCtrl'
        })
        .state('projects', {
          url: '/projects',
          templateUrl: 'views/states/projects.html',
          controller: 'devicesCtrl'
        })
        .state('experience', {
          url: '/experience',
          templateUrl: 'views/states/experience.html',
          controller: 'devicesCtrl'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'views/states/contact.html',
          controller: 'devicesCtrl'
        });

  }]);
