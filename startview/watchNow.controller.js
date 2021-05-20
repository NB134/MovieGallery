angular
.module("mg")
  .controller("watchNow", function ($scope, $location, UserData, $window) {
    let index=UserData.getloggedUser();
    $scope.User = UserData.data[index];
    $scope.movies=[
      {
        title:"Title 1",
        duration:"136min",
        year:"2017",
        imgSrc:"https://images.unsplash.com/photo-1551149248-3386a530fc23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      },
      {
        title:"Title 2",
        duration:"112min",
        year:"2012",
        imgSrc:"https://images.unsplash.com/photo-1620757482036-71ba3116a7f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      },
      {
        title:"Title 3",
        duration:"97min",
        year:"2019",
        imgSrc:"https://images.unsplash.com/photo-1621145107464-c37d6b81dd58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        
      },
      {
        title:"Title 4",
        duration:"105min",
        year:"2021",
        imgSrc:"https://images.unsplash.com/photo-1613932149675-a9e8d538f451?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      }

    ]
    $scope.watchNow=function()
    {
      
        let tier=UserData.data[index].tier;
        if(tier==0)
        {
            $location.path("/userHome");
        }
        else
        {
            $window.alert("Not a premium Member");
        }
    }
  });