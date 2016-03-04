angular.module('app.homePage', [])
  .controller('homePageCtrl', function($state) {

    // bind scope to var home
    var home = this;

    // navigate to sendMoney page
    home.toSendMoneyPage = function() {
      $state.go('sendMoney');
    }

    // navigate to history page
    home.toHistoryPage = function() {
      $state.go('history');
    }
  });
