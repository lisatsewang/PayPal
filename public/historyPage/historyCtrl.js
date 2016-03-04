angular.module('app.history', [])
  .controller('historyCtrl', function($state, transactionServices, getHistoryPrep) {

    // bind scope to var history
    var history = this;
    history.details = getHistoryPrep;
    console.log(history.details[0]);
    
    // navigate to homepage
    history.toHomePage = function() {
      $state.go('homepage');
    }
  })