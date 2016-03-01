angular.module('app.sendMoney', [])
  .controller('sendMoneyCtrl', function($state) {
    var sendMoney = this;

    sendMoney.currencyOptions = 
      [
        {id: '0', option: 'USD'},
        {id: '1', option: 'EUR'},
        {id: '2', option: 'GBP'},
        {id: '3', option: 'JPY'},
      ];
    sendMoney.currency = sendMoney.currencyOptions[0];
    
    switch (sendMoney.currency) {
        case 0:
            sendMoney.currency
    }

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
    sendMoney.sendMoney = function() {

    };

  })




// <div ng-controller="ExampleController">
//   <form name="myForm">
//     <label for="mySelect">Make a choice:</label>
//     <select name="mySelect" id="mySelect"
//       ng-options="option.name for option in data.availableOptions track by option.id"
//       ng-model="data.selectedOption"></select>
//   </form>
//   <hr>
//   <tt>option = {{data.selectedOption}}</tt><br/>
// </div>

//   $scope.data = {
//     availableOptions: [
//       {id: '1', name: 'Option A'},
//       {id: '2', name: 'Option B'},
//       {id: '3', name: 'Option C'}
//     ],
//     selectedOption: {id: '3', name: 'Option C'} //This sets the default value of the select in the ui
//     };