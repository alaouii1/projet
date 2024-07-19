(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.checkLunch = function () {
      console.log("Lunchcheck function called");
      if (!$scope.lunchMenu) {
        $scope.message = "Please enter data first";
        $scope.messageClass = "red";
        $scope.inputClass = "input-border-red";
      } else {
        var dishes = $scope.lunchMenu.split(',').filter(function (dish) {
          return dish.trim() !== '';
        });
        if (dishes.length <= 3) {
          $scope.message = "Enjoy!";
          $scope.messageClass = "green";
          $scope.inputClass = "input-border-green";
        } else {
          $scope.message = "Too much!";
          $scope.messageClass = "green";
          $scope.inputClass = "input-border-green";
        }
      }
    };
  }
})();
