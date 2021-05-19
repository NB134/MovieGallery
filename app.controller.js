let app=angular.module("mg",["ngRoute"]);
app.controller("main",function($scope,$location)
{
    $scope.isActive=function(viewLocation){
        return viewLocation===$location.path();
    }
    $scope.navToggle=false;
    $scope.checkOnLoad=function()
    {
        $scope.navToggle=false;
    }
});