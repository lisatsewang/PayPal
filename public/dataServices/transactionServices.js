angular.module('app.dataServices', [])
.factory('transactionServices', function($http) {

  var recentTransaction = [];
  var cache = [];

  // all transaction services return here
  return {
    saveTransaction: saveTransaction,
    getLastTransaction: getLastTransaction,
    getAllTransaction: getAllTransaction
  }

  // save transaction from send money page into var recentTransaction
  // non-presistent save
  // would need a database for presistent save
  function saveTransaction(transaction) {
    // generate current date and tansform it to locale string
    var date = new Date().toLocaleDateString();
    // get all chars before "@" as paypee
    var payee = transaction.email.match(/.+?(?=@)/)[0];
    // unshift(push to front) payment-detail object to recentTransaction
    recentTransaction.unshift({
      date: date,
      payee: payee,
      amount: transaction.currency.symbol + transaction.amount,
    });
  }

  // get the last transaction from recentTransaction array
  function getLastTransaction() {
    return recentTransaction[0];
  }

  // get all transactions
  function getAllTransaction() {
    // if data from server already cached
    if (cache.length > 0) {
      // return recentTransaction + ccache
      return recentTransaction.concat(cache);
    } else {
      // else get data from server
      return $http.get('/getHistory')
        .then(function(transactions) {
          // cache data
          cache = transactions.data.data;
          // return recentTransaction + ccache
          return recentTransaction.concat(cache);
        })
        .catch(function(err) {
          // console log error
          console.log("getHistoryAjax failed", err)
        })
    }

  }

})