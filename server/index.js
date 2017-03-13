var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');
var cors = require('cors');
var sc = require('./soundcloudUtils.js');
var db = require('./dbUtils.js');
var session = require('express-session');
var cookie = require('cookie-parser');
var hashPass = require('./middleware/hashPass.js');
var hashPassNewUser = require('./middleware/hashPassNewUser.js');
var mailer = require('./nodemailer.js');

var app = express();

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(cookie());

app.get('/', function(req, res) {
  console.log('cookies:', req.cookies);
});

app.post('/users', function (req, res) {
  var userId = req.body.id;
  console.log(userId);

  db.selectAll(userId, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('inside get');
      console.log('data', data);
      // res.sendStatus(200);
      res.send(data);
    }
  });
});

//USER LOGIN
app.post('/login', hashPass, function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var salt = req.body.salt;
  console.log('SIGNUPusername:', username);
  console.log('SIGNUPpassword:', password);

  db.validateUser(username, password, salt, function(err, success, user_id){
    if(err){
      console.log('unable to validate');
      res.status(401).send('try again buddy');
    } else if (success) {
      console.log('made it this far, correctly entered user/pass', user_id);
      res.status(200).send({user_id: user_id});
    } else if (!success) {
      console.log('dont think that was the right combo', user_id);
      res.status(401).send(success);
    }
  });
});

//EMAIL TOKEN
app.post('/email', function(req, res){
  var email = req.body.email;
  var token = req.body.token;
  console.log('useremail', email);
  console.log('useremaiTOKEN', token);

  mailer.sendEmail(email, token, function(error, results){
    if(error){
      console.log(error)
    }
    console.log('successful email', results);
    res.send(results);
  })

  res.send('one your way');
})

//NEW USER SIGN UP
app.post('/signup', hashPassNewUser, function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var salt = req.body.salt;
  console.log('username:', username);
  console.log('password:', password);
  console.log('salt:', salt);

  //CHECK DB FOR USERNAME
  db.checkUsername(username, function(err, valid){
    if(err){
      console.log(err);
      res.sendStatus(401);
      res.end('Validation Failure');
    } else if (valid) {
      //ADD USERNAME AND PASSWORD TO DB
      console.log('ready to add');
      db.addUser(username, password, salt, function(err, success, id){
        if(err){
          console.log(err);
        } else if (success) {
          //GET USER_ID

          res.status(201);
          res.send({ user_added: id });
        }
      })
    }
  })
})

//INSERT POST INTO DB
app.post('/items/users', function (req, res) {
  userQuery = req.body.term;
  userId = req.body.id;
  db.insert(userQuery, userId, function(err, success) {
    if(err){
      console.log(err)
      res.sendStatus(400);
      res.send('Insert Error');
    }
    if(success){
      console.log('successful insertion', success);
      db.selectAll(userId, function(error, messages){
        if(error){
          console.log(error);
        }
        console.log('bout to send messages', messages);
        res.send(messages);
      })
    }
  })
});


//REMOVE POST FROM DB
app.post('/items/remove', function (req, res) {
  message_id = req.body.message_id;
  console.log('message id inside post', message_id);
  db.deleteMessage(message_id, function(err, success, results){
    if(err){
      console.log(err)
    }
    if(success){
      res.send(success);
    }
  })
});

app.post('/token/new', function(req, res) {
  console.log('inside token get');
  var userId = req.body.user_id;
  console.log(userId);
  //generate random token and store in messages
  db.getToken(userId, function(error, accessToken){
    if(error){
      console.log(error)
    } else {
      console.log('accessToken', accessToken);
      res.send(accessToken);

    }
  })
})

app.post('/token', function(req, res) {
  userToken = req.body.accessToken;
  console.log('inside token post', userToken);
  db.checkToken(userToken, function(error, messages) {
    if(error){
      console.log(error);
    } else {
      console.log('inside tokenafter db query', messages)
      res.send(messages);

    }
  })

})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

