boilerplate.controller('initCtrl',
  ['$scope',
  function($scope) {
    $scope.init = function() {
      // place all set up here; load api if necessary
      console.log('loaded init');
    };

    $scope.init();
  }])
