angular.module('castgaming', ['ui.router'])
  .config( function( $stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

    $stateProvider
      .state( 'home', {
        url: '/',
        controller: 'homeCtrl',
        templateUrl: './views/home/home.html'
      })
      .state('thread', {
        url: '/threads',
        controller: 'threadCtrl',
        templateUrl: './views/thread/thread.html',
        params: {game: null}
      })
      .state('post', {
        url: '/post',
        controller: 'postCtrl',
        templateUrl: './views/post/post.html'
      })
  })
