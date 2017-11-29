var express = require('express');
var mongoose = require('mongoose');

var app = express();
var db = require('./db.js');
var api = require('./routes/api.js');

var bodyParser = require('body-parser');

// connect database, setup options in db.js
// mongoose.Promise = global.Promise;
// var promise = mongoose.connect(db.url, db.options);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);

app.use('/api', api);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/views/layouts/layout.html');
});

app.listen(app.get('port'), function() {
  console.log('\nExpress started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
