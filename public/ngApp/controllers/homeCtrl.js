boilerplate.controller('homeCtrl',
  ['$scope',
  function($scope) {
    $scope.init = function() {
      $scope.test = "Hello World";
    };

    $scope.init();
  }])
