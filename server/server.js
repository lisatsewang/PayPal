var express = require('express');
var app = express();
var port = 8000;

// import data
var history = require('./dataGenerator');

//middlewares
var bodyParser = require('body-parser');

app.use(bodyParser.json()); 

// serves all public folder
// so localhost:8000 will serve angular views and ctrls
app.use(express.static(__dirname + '/../public'));

// rout to fetch mock data
app.get('/gethistory', function(req, res) {
  res.status(200);
  res.json({data: history});
});

// server listen on port 800
app.listen(port, function() {
  console.log('PayPal Homework app is listening on port 8000 :D')
});