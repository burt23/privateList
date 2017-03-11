var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');
var cors = require('cors');
var soundCloud = require('./soundcloudUtils.js');
var db = require('./dbUtils.js');
// var items = require('../database-mongo');

var app = express();
app.use(bodyParser.json());
app.use(cors());

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/songs', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('inside get');
      res.json(data);

    }
  });
});

app.post('/songs/users', function (req, res) {
  userQuery = req.body.term;
  console.log('userQuery:', userQuery);
  res.sendStatus(201);
  res.end();
})
app.listen(3000, function() {
  console.log('listening on port 3000!');
});

