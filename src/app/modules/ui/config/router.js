'use strict';

/**
 * @ngInject
 */
function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  // Declare routes
  $stateProvider
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

    .state('festival', {
      abstract: true,
      url: '/festival',
      templateUrl: 'partials/views/festival/_layout.html',
      controller: 'Festival as vm'
    })
    .state('festival.form', {
      url: '/form/:id',
      templateUrl: 'partials/views/festival/form.html',
      controller: 'FestivalForm as vm'
    })
    .state('festival.list', {
      url: '/list',
      templateUrl: 'partials/views/festival/list.html',
      controller: 'FestivalList as vm',
      resolve: {
        list: FestivalListResolver
      }
    })

    .state('edition', {
      abstract: true,
      url: '/edition',
      templateUrl: 'partials/views/edition/_layout.html',
      controller: 'Edition as vm'
    })
    .state('edition.form', {
      url: '/form/:id',
      templateUrl: 'partials/views/edition/form.html',
      controller: 'EditionForm as vm'
    })
    .state('edition.list', {
      url: '/list',
      templateUrl: 'partials/views/edition/list.html',
      controller: 'EditionList as vm',
      resolve: {
        list: EditionListResolver
      }
    })
  ;
  // Default route
  $urlRouterProvider.otherwise('/login');
  // Configure html5
  $locationProvider.html5Mode(false);
}

module.exports = RouteConfig;

/**
 * @ngInject()
 */
function EditionListResolver(ApiEdition) {
  return ApiEdition.getList();
}

/**
 * @ngInject()
 */
function FestivalListResolver(ApiFestival) {
  return ApiFestival.getList();
}
