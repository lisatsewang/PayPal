var express = require('express');
var app = express();
var port = 8000;

// import data
var history = require('./dataGenerator');

//middlewares
var bodyParser = require('body-parser');

app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static(__dirname + '/../public'));

app.get('/gethistory', function(req, res) {
  // res.send(history);
  res.status(200);
  res.json({data: history});
});


app.listen(port, function() {
  console.log('PayPal Homework app is listening on port 8000 :D')
});