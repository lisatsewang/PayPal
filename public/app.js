angular.module('app', [
  'ui.router',
  'app.homePage',
  'app.sendMoney',
  'app.success',
  'app.history',
  'app.dataServices'
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
      .state('success', {
        url: '/success',
        templateUrl: './successPage/successTemplate.html',
        controller: 'successCtrl',
        controllerAs: 'success'
      })
      .state('history', {
        url:'/history',
        templateUrl: './historyPage/historyTemplate.html',
        controller: 'historyCtrl',
        controllerAs: 'history',
        resolve: {
          getHistoryPrep: getHistory
        }
      })
      
      // resolve function
      //
      function getHistory($http, transactionServices) {
        return transactionServices.getAllTransaction();
      }

  })

    
