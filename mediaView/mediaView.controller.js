angular.module("mg").controller("mediaView", function ($scope, UserData) {

  $scope.media=UserData.getMedia();
  console.log($scope.media);
});
  