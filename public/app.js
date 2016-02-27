angular.module('app', [])
  .config(router)
  .run(requireUserSignin)

  router.$inject = ['$urlRouterProvider', '$stateProvider', '$httpProvider'];

  function router($urlRouterProvider, $stateProvider, $httpProvider) {
    $urlRouterProvider.otherwise("/");

    // paths
    $stateProvider
      .state('homepage',{
        url: '/',
        templateUrl: './homepage/homepageTemplate.html',
        controller: 'homepageCtrl',
        controllerAs: 'home'
      })
      .state('sendMoney', {
        url: '/sendMoney',
        templateUrl: './sendMoneyPage/sendMoneyTemplate.html',
        controller: 'sendMoneyCtrl',
        controllerAs: 'sendMoney'
      })
      .state('successPage', {
        url: '/successPage',
        templateUrl: './successPage/successPageTemplate.html',
        controller: 'successCtrl',
        controllerAs: 'success'
      })
      .state('histroy', {
        url:'/history',
        templateUrl: './historyPage/historyTemplate.html',
        controller: 'historyCtrl',
        controllerAs: 'history',
        resolve: {
          gethistory: gethistory
        }
      })
      
      // resolve functions
      function gethistory($http) {
        
      }
  }

    
