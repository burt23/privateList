const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const cookie = require('cookie-parser');
const handler = require('./handler.js');

const app = express();

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../react/dist'));
app.use(cookie());

app.get('/', function(req, res) {
  console.log('cookies:', req.cookies);
});

app.post('/users', handler.users);
app.post('/login', handler.login);
app.post('/email', handler.email);
app.post('/signup', handler.signup);
app.post('/items/users', handler.post);
app.post('/items/remove', handler.remove);
app.post('/token/new', handler.newToken);
app.post('/token', handler.checkToken);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
