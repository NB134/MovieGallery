angular
.module("mg")
  .controller("register", function ($scope, $location, $mdDialog, UserData) {
    $scope.User = {};
    $scope.showAlert = function (ev) {
      $mdDialog.show(
        $mdDialog
          .alert()
          .parent(angular.element(document.querySelector("#popupContainer")))
          .clickOutsideToClose(true)
          .title("Validation Error")
          .textContent("Please fill in the details before submitting.")
          .ariaLabel("Please submit the details before submitting.")
          .ok("Got it!")
          .targetEvent(ev)
      );
    };
    $scope.Register=function()
    {
      if ($scope.registerForm.$valid)
      {
        UserData.data.push($scope.User);
        let index=UserData.data.length-1;
        console.log(index);
        UserData.setloggedUser(index);
        $location.path("/tierSelector");
      }
      else
      {
        $scope.showAlert();
      }
    }
  });