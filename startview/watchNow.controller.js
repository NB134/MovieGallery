angular
.module("mg")
  .controller("watchNow", function ($scope, $location, UserData, $mdDialog) {
    let index=UserData.getloggedUser();
    $scope.User = UserData.data[index];
    $scope.movies=[
      {
        title:"Title 1",
        duration:"136min",
        genre:"Drama",
        year:"2017",
        imgSrc:"https://images.unsplash.com/photo-1551149248-3386a530fc23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        desc:"Commodo nulla id ea tempor dolor amet. Laborum pariatur in ut minim consectetur amet velit. Incididunt occaecat labore occaecat cupidatat non amet ut laborum nulla. Voluptate duis ut elit mollit aliquip aliqua exercitation veniam labore. Aute tempor commodo nisi amet nulla sit incididunt. Incididunt nulla eiusmod veniam sunt proident excepteur.",
        cast:["actor one","actress one","actor two","actress two","actor three"]
      },
      {
        title:"Title 2",
        duration:"112min",
        genre:"Comedy",
        year:"2012",
        imgSrc:"https://images.unsplash.com/photo-1620757482036-71ba3116a7f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        desc:"Excepteur eiusmod aliquip minim et. Dolor aliqua eu elit pariatur consequat dolore. Ipsum Lorem pariatur dolor ex reprehenderit laboris eu eu cillum reprehenderit.",
        cast:["actress one","actress two","actor two","actress three","actor one"]
      },
      {
        title:"Title 3",
        duration:"97min",
        genre:"Action",
        year:"2019",
        imgSrc:"https://images.unsplash.com/photo-1621145107464-c37d6b81dd58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        desc:"Sunt velit nostrud dolor consequat fugiat sunt officia. Exercitation incididunt est anim dolor mollit consequat fugiat sint. Voluptate culpa eiusmod reprehenderit velit ipsum tempor ipsum ex do officia sint velit. Ullamco id reprehenderit enim dolor culpa officia est esse amet quis. Consequat tempor laboris adipisicing nulla adipisicing eu ipsum. Pariatur enim occaecat enim fugiat in aliqua commodo sit tempor in ullamco pariatur sit amet.",
        cast:["actor one","actor two","actress one","actress two","actor three"]
        
      },
      {
        title:"Title 4",
        duration:"105min",
        genre:"Adventure",
        year:"2021",
        imgSrc:"https://images.unsplash.com/photo-1613932149675-a9e8d538f451?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        desc:"Eiusmod mollit veniam do ad reprehenderit. Deserunt elit nulla adipisicing commodo ut nulla eu quis eiusmod deserunt consequat consequat. Do consectetur amet nostrud eu nostrud. Exercitation velit ad enim nulla.",
        cast:["actor one","actor four","actress one","actor two","actor three"]
      }

    ]
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
    $scope.watchNow=function()
    {
      
        let tier=UserData.data[index].tier;
        if(tier==0)
        {
            $location.path("/userHome");
        }
        else
        {
          $scope.showAlert();
        }
    }
    $scope.viewMedia=function(media)
    {
      console.log("viewMedia");
      UserData.setMedia(media);
      $location.path("/mediaView")
    }
  });