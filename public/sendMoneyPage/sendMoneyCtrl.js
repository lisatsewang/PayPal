angular.module('app.sendMoney', [])
  .controller('sendMoneyCtrl', function($state, transactionServices) {

    // bind scope to var sendMoney
    var sendMoney = this;

    // set loading state to false
    sendMoney.loading = false;

    // container for payment details from sendMoneyTemplate
    sendMoney.details = {};

    // set currency options
    sendMoney.currencyOptions = [
        {id: '0', option: 'USD', symbol: '$'},
        {id: '1', option: 'EUR', symbol: '€'},
        {id: '2', option: 'GBP', symbol: '£'},
        {id: '3', option: 'JPY', symbol: '¥'},
    ];
    // set default currency
    sendMoney.details.currency = sendMoney.currencyOptions[0];

    // set purpose options
    sendMoney.purposeOptions = [
        {id: '0', option: 'To family or friends'},
        {id: '1', option: 'For goods or services'},
    ];
    // set default option
    sendMoney.purpose = sendMoney.purposeOptions[0];

    // clear fields
    sendMoney.clear = function() {
        sendMoney.email = "";
        sendMoney.amount = "";
        sendMoney.message = "";
    };

    // sends money
    sendMoney.sendMoney = function(transaction) {
        // set loading state to true to ng-show loading screen
        sendMoney.loading = true;
        // wait 1 sec to turn of loading screen and save transaction
        // navigate to success page
        setTimeout(save.bind(this, transaction), 1000);
        function save(transaction) {
            sendMoney.loading = false;
            transactionServices.saveTransaction(transaction);
            $state.go('success');
        }
    };

  })


