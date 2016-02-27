var express = require('express');
var app = express();
var port = 8000;

// import data
var history = require('./dataGenerator');
//middlewares
var bobyParser = require('body-parser');

app.get('/history', function(req, res) {
  res.send(history);
});
app.get('/', function(req, res) {
  res.send("hello world!");
});

app.listen(port, function() {
  console.log('PayPal Homework app is listening on port 8000 :D')
});