function generateHistory () {
  var history = [];
  for (var i = 0; i < 250; i++) {
    history.push({
      date: getADate(i),
      payee: getPayee(),
      currency: getCurrency(),
      amount: getAmount(),
    });
  }
  return history;
}

function getADate(index) {
    var start = new Date(2015, 0, 1);
    var end = new Date();
    var j = (index + 0.8) / 250;
    var date = new Date(start.getTime() + j * (end.getTime() - start.getTime()));
    return date.toLocaleDateString();
}

function getPayee() {
  var names = [ 
    'Sommer Melton', 'Mason Warren', 'Mellissa Gambrell', 'Sunday Kollman', 'Lavonia Rock',
    'Super Duper', 'Shake Shack', 'Five Guys', 'Nation\'s', 'In-N-Out', 'Burger King', 'Dunkin\' Donuts', 
    'Dominica Tousignant', 'Deana Glines', 'Rosena Wiegand', 'Eva Martz', 'Alissa Patillo', 
    'Fe Holding', 'Jerrold Farkas', 'Jessica Taniguchi', 'Linette Naughton', 'Rachael Burney', 
    'Super Duper', 'Shake Shack', 'Five Guys', 'Nation\'s', 'In-N-Out', 'Burger King', 'Dunkin\' Donuts'
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

module.exports = generateHistory();

