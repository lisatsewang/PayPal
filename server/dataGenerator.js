function generateHistory () {
  var history = [];
  for (var i = 0; i < 250; i++) {
    history.push({
      name: getName(),
      currency: getCurrency(),
      amount: getAmount(),
      store: getStore()
    });
  }
  return history;
}

function getName() {
  var names = [ 
    'Sommer Melton', 'Mason Warren', 'Mellissa Gambrell', 'Sunday Kollman', 'Lavonia Rock', 
    'Dominica Tousignant', 'Deana Glines', 'Rosena Wiegand', 'Eva Martz', 'Alissa Patillo', 
    'Fe Holding', 'Jerrold Farkas', 'Jessica Taniguchi', 'Linette Naughton', 'Rachael Burney', 
    'Christia Calmes', 'Cedrick Hillman', 'Sandy Stamper', 'Dewayne Andreas', 'Yuki Wasielewski'
  ];
  var index = Math.floor(100 * Math.random()) % names.length;
  return names[index];
}

function getCurrency() {
  var currencies = ['USD', 'EUR', 'GBP', 'JPY'];
  var index = Math.floor(100 * Math.random()) % currencies.length;
  return currencies[index];
}

function getAmount() {
  var num = 42 * Math.random();
  return num.toFixed(2);
}

function getStore() {
  var stores = ['Super Duper', 'Shake Shack', 'Five Guys', 'Nation\'s', 'In-N-Out', 'Burger King', 'Dunkin\' Donuts'];
  var index = Math.floor(100 * Math.random()) % stores.length;
  return stores[index];
}

module.exports = generateHistory();

