angular.module('app', [
  'ui.router',
  'app.homePage',
  'app.sendMoney'
  ])
  .config(function($urlRouterProvider, $stateProvider, $httpProvider) {
    
    $urlRouterProvider.otherwise("/");

    // paths
    $stateProvider
      .state('homepage',{
        url: '/',
        templateUrl: './homePage/homePageTemplate.html',
        controller: 'homePageCtrl',
        controllerAs: 'home'
      })
      .state('sendMoney', {
        url: '/sendMoney',
        templateUrl: './sendMoneyPage/sendMoneyTemplate.html',
        controller: 'sendMoneyCtrl',
        controllerAs: 'sendMoney'
      })
      // .state('successPage', {
      //   url: '/successPage',
      //   templateUrl: './successPage/successPageTemplate.html',
      //   controller: 'successCtrl',
      //   controllerAs: 'success'
      // })
      .state('history', {
        url:'/history',
        templateUrl: './historyPage/historyTemplate.html',
        // controller: 'historyCtrl',
        controllerAs: 'history',
        // resolve: {
        //   gethistory: gethistory
        // }
      })
      
      // resolve functions
      // function gethistory($http) {
        
      // }

  })

    
