angular.module('app.success', [])
  .controller('successCtrl', function($state, transactionServices) {
    var success = this;
    success.details = transactionServices.getLastTransaction();
    success.toSendMoneyPage = function() {
      $state.go('sendMoney');
    }
    success.toHistoryPage = function() {
      $state.go('history');
    }
  })