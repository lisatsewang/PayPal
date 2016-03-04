angular.module('app.sendMoney', [])
  .controller('sendMoneyCtrl', function($state, transactionServices) {
    var sendMoney = this;
    sendMoney.details = {};

    sendMoney.currencyOptions = [
        {id: '0', option: 'USD', symbol: '$'},
        {id: '1', option: 'EUR', symbol: '€'},
        {id: '2', option: 'GBP', symbol: '£'},
        {id: '3', option: 'JPY', symbol: '¥'},
    ];
    sendMoney.details.currency = sendMoney.currencyOptions[0];

    sendMoney.purposeOptions = [
        {id: '0', option: 'To family or friends'},
        {id: '1', option: 'For goods or services'},
    ];

    sendMoney.purpose = sendMoney.purposeOptions[0];

    sendMoney.clear = function() {
        sendMoney.email = "";
        sendMoney.amount = "";
        sendMoney.message = "";
    };

    sendMoney.loading = false;

    sendMoney.sendMoney = function(transaction) {
        sendMoney.loading = true;
        setTimeout(save.bind(this, transaction), 1000);
        function save(transaction) {
            sendMoney.loading = false;
            transactionServices.saveTransaction(transaction);
            $state.go('success');
        }
    };

  })


