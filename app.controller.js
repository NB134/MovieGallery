let app=angular.module("mg",["ngRoute"]);

app.factory("UserData", function () {
    let self = this;
    self.data = [];
    self.reset = function () {
      this.data = [];
    };
    self.loggedUser;
    self.getloggedUser=function()
    {
        return self.loggedUser;
    }
    self.setloggedUser=function(index)
    {
        self.loggedUser=index;
    }
    return {
      reset: self.reset,
      data: self.data,
      getloggedUser:self.getloggedUser,
      setloggedUser:self.setloggedUser
    };
  });

app.controller("main",function($scope,$location,UserData)
{
    $scope.isActive=function(viewLocation){
        return viewLocation===$location.path();
    }
    $scope.loggedOut=function()
    {
      let status=UserData.getloggedUser()+1;
      if(!status)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    $scope.logOut=function()
    {
      UserData.setloggedUser(undefined);
      $location.path("/");
    }
    $scope.navToggle=false;
    $scope.checkOnLoad=function()
    {
        $scope.navToggle=false;
    }
});