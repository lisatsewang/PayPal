angular.module('app.history', [])
  .controller('historyCtrl', function($state, transactionServices, getHistoryPrep) {

    var history = this;
    history.details = getHistoryPrep;
    console.log(history.details[0]);
    
    
    history.toHomePage = function() {
      $state.go('homepage');
    }
  })