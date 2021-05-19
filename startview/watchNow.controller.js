angular
.module("mg")
  .controller("watchNow", function ($scope, $location, UserData, $window) {
    $scope.User = {};
    $scope.watchNow=function()
    {
      let index=UserData.getloggedUser();
        let tier=UserData.data[index].tier;
        if(tier==0)
        {
            $location.path("/movies");
        }
        else
        {
            $window.alert("Not a premium Member");
        }
    }
  });