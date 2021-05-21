angular
  .module("mg")
  .controller("login", function ($scope, $location, UserData, $mdDialog) {
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
    $scope.logIn = function () {
      if ($scope.loginForm.$valid) {
          console.log($scope.loginForm.valid);
        let length = UserData.data.length;
        if (length) {
          let index = UserData.data.findIndex((x) => {
            if (
              x.username === $scope.User.username &&
              x.password === $scope.User.password
            ) {
              return true;
            } else {
              return false;
            }
          });
          if (index == -1) {
            let form = document.getElementById("login");
            $window.alert("User not registered");
            form.reset();
          } else {
            UserData.setloggedUser(index);
            $location.path("/watchNow");
          }
        } else {
          let form = document.getElementById("login");
          $window.alert("User not registered");
          form.reset();
        }
      } else {
        $scope.showAlert();
        return undefined;
      }
    };
  });
