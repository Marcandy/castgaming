angular.module('castgaming').controller('gameThreadCtrl', function($scope, $stateParams, mainService) {
  // let gameId = $stateParams.gameId;

  $scope.listThreads = function() {
    mainService.getThreadsForGame($stateParams.gameId).then( game => {
      console.log(game);
      $scope.threads = game.data.threads;
    } );
  }

  $scope.listThreads();

  $scope.createThread = function(newThread) {
    mainService.postThread(newThread)
    .then(result => {
      console.log(result);
      $scope.newThread = result.data;
      $scope.listThreads();
    })
  }

  $scope.getUser = function() {
    mainService.getUser().then( result => {

        $scope.user = result.data["0"];
        console.log($scope.user);
      })
  }

  $scope.getUser();



});
