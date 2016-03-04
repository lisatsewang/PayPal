angular.module('app.dataServices', [])
.factory('transactionServices', function($http) {

  var recentTransaction = [];
  var cache = [];

  return {
    saveTransaction: saveTransaction,
    getLastTransaction: getLastTransaction,
    getAllTransaction: getAllTransaction
  }

  function saveTransaction(transaction) {

    var date = new Date().toLocaleDateString();
    var payee = transaction.email.match(/.+?(?=@)/)[0];
    recentTransaction.unshift({
      date: date,
      payee: payee,
      amount: transaction.currency.symbol + transaction.amount,
    });
  }

  function getLastTransaction() {
    return recentTransaction[0];
  }

  function getAllTransaction() {

    if (cache.length > 0) {
      return recentTransaction.concat(cache);
    } else {
      return $http.get('/getHistory')
        .then(function(transactions) {
          cache = transactions.data.data;
          console.log(cache);
          return recentTransaction.concat(cache);
        })
        .catch(function(err) {
          console.log("getHistoryAjax failed", err)
        })
    }

  }

})