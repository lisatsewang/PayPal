angular.module('app.homePage', [])
  .controller('homePageCtrl', function($state) {
    var home = this;
    home.toSendMoneyPage = function() {
      $state.go('sendMoney');
    }
    home.toHistoryPage = function() {
      $state.go('history');
    }
  });
