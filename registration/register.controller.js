angular
.module("mg")
  .controller("register", function ($scope, $location, UserData) {
    $scope.User = {};
    $scope.Register=function()
    {
        UserData.data.push($scope.User);
        let index=UserData.data.length-1;
        console.log(index);
        UserData.setloggedUser(index);
        $location.path("/tierSelector");
    }
  });