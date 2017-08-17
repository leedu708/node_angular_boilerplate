var boilerplate = angular.module('boilerplate', ['ui.router', 'ngAnimate', 'ngSanitize', 'ngStorage']);

boilerplate.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/index.html',
      controller: 'testCtrl'
    })
});

boilerplate.run(function($rootScope, $location, $window, $state, $localStorage) {

});
