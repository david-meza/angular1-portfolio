(function(angular) {

  'use strict';

  angular.module('portfolio', ['appServices', 'appFilters', 'appControllers', 'appDirectives', 'ui.router', 'ngMaterial', 'duScroll', 'dcbImgFallback', 'ngAnimate', 'ngMessages'])

    .value('duScrollDuration', 600)
    .value('duScrollOffset', 0)
    .value('duScrollEasing', function(t) { 
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    })

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

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $locationProvider
        // .html5Mode(true)
        .hashPrefix('!');
        
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
          controller: 'aboutCtrl'
        })
        .state('blog', {
          url: '/blog',
          templateUrl: 'views/states/blog.html',
          controller: 'blogCtrl'
        })
        .state('projects', {
          url: '/projects',
          templateUrl: 'views/states/projects.html',
          controller: 'projectsCtrl'
        })
        .state('experience', {
          url: '/experience',
          templateUrl: 'views/states/experience.html',
          controller: 'experienceCtrl'
        })
        .state('contact', {
          url: '/contact',
          views: {
            '': {
              templateUrl: 'views/states/contact.html'
            },
            'form-content@contact': {
              templateUrl: 'views/partials/contact-form.html',
              controller: 'contactCtrl'
            }
          }
        })
        .state('contact.success', {
          url: '/success',
          views: {
            'form-content@contact': {
              templateUrl: 'views/partials/contact-form-submitted.html',
            }
          }
        });

    }]);

})(angular || window.angular);
