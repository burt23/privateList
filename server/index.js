var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');
var cors = require('cors');
var sc = require('./soundcloudUtils.js');
var db = require('./dbUtils.js');
var session = require('express-session');
var cookie = require('cookie-parser');

var app = express();

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(cookie());

app.get('/', function(req, res) {
  console.log('cookies:', req.cookies);
});

app.get('/users', function (req, res) {
  console.log('cookies:', req.cookies);

  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('inside get');
      res.json(data);
    }
  });
});

app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log('username:', username);
  console.log('password:', password);

  //CHECK DB FOR USERNAME
  db.checkUsername(username, function(err, valid){
    if(err){
      console.log(err);
    } else if (valid) {
      //ADD USERNAME AND PASSWORD TO DB
      console.log('ready to add');
      db.addUser(username, password, function(err, success){
        if(err){
          console.log(err);
        } else if (success) {
          console.log('user added successfully');
        }
      })
    }
  })

  res.sendStatus(201);
  res.end();
})

app.post('/items/users', function (req, res) {
  userQuery = req.body.term;
  console.log('userQuery:', userQuery);
  db.insert(userQuery, function(err, success) {
    if(err){
      console.log(err)
    }
    if(success){
      console.log('successful insertion', success)
    }
  })
  res.sendStatus(201);
  res.end();
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

