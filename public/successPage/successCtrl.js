angular.module('app.success', [])
  .controller('successCtrl', function($state, transactionServices) {
    
    // bind scope to var success
    var success = this;

    // get last transaction from app.dataServices module transactionServices factory
    // ../dataService/transactionService.js
    success.details = transactionServices.getLastTransaction();

    // navigate to 'sendMoney'
    success.toSendMoneyPage = function() {
      $state.go('sendMoney');
    }

    //navigate to 'history'
    success.toHistoryPage = function() {
      $state.go('history');
    }
  })