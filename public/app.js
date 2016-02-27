angular.module('app', [])
  .config(router)
  .run(requireUserSignin)

  .directive('pagination', function($parse){
    return {
      restrict: 'A',
      template: '',
      scope: {
        limit: '=limit'
      },
      link: function(scope, elem, attrs) {
        var dataExpr = $parse(attrs.data);
        scope.$watchCollection(dataExpr, function(val) {
          scope.data = val;
        });
      }
    }
  })

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

    
