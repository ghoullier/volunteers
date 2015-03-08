'use strict';

/**
 * @ngInject
 */
function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  // Declare routes
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'partials/views/index.html',
      controller: 'Index as vm'
    })
    .state('list', {
      url: '/list',
      templateUrl: 'partials/views/list.html',
      controller: 'List as vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/views/login/index.html',
      controller: 'Login as vm'
    })
    .state('register', {
      abstract: true,
      url: '/register',
      templateUrl: 'partials/views/register/_layout.html',
      controller: 'Register as vm'
    })
    .state('register.profile', {
      url: '/profile',
      templateUrl: 'partials/views/register/profile.html',
      controller: 'RegisterProfile as vm'
    })
    .state('register.skills', {
      url: '/competences',
      templateUrl: 'partials/views/register/skills.html',
      controller: 'RegisterSkills as vm'
    })
  ;
  // Default route
  $urlRouterProvider.otherwise('/');
  // Configure html5
  $locationProvider.html5Mode(false);
}

module.exports = RouteConfig;
