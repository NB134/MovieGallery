angular
.module("mg")
  .controller("TierSelector", function ($scope, $location, UserData) {
    $scope.User = {};
    $scope.tierSelect=function(tier)
    {
        UserData.data[UserData.getloggedUser()].tier=tier;
        $location.path("/watchNow");
    }
  });