angular
  .module("mg")
  .controller("login", function ($scope, $location, UserData, $window) {
    $scope.User = {};
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
        $window.alert("Pls fill in the details");
        return undefined;
      }
    };
  });
