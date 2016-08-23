var morgan = require('morgan');
var bodyParser = require('body-parser');
var request = require('request');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client')); 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// ROUTES
app.get('/api/categories', function(req, res) {
  var urlAPI = 'https://api.meetup.com/2/categories?key=4e47134a736d2f51696c4b8653b684c&sign=true';
 
  request({url: urlAPI}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.get('/api/groups', function(req, res) {
  var urlAPI = 'https://api.meetup.com/2/groups?key=4e47134a736d2f51696c4b8653b684c&sign=true&photo-host=public&zip=' + req.query.zip + '&category_id=' + req.query.category_id + '&page=20;';
 
  request({url: urlAPI}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

// APP
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(process.env.PORT || 8000);
console.log("App listening on port 8080");