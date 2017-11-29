var boilerplate = angular.module('boilerplate', ['ui.router', 'ngAnimate', 'ngSanitize', 'ngStorage']);

boilerplate.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('app', {
      abstract: true,
      url: '/',
      template: '<div ui-view></div>',
      controller: 'initCtrl'
    })

    .state('app.home', {
      url: 'home',
      templateUrl: 'views/index.html',
      controller: 'homeCtrl'
    })
});

boilerplate.run(function($rootScope, $location, $window, $state, $localStorage) {

});
