const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const cookie = require('cookie-parser');
const handler = require('./handler.js');
const hashPassNewUser = require('./middleware/hashPassNewUser.js');
const hashPass = require('./middleware/hashPass.js');
// const encryptPost = require('./middleware/encryptPost.js');



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
app.post('/login', hashPass, handler.login);
app.post('/email', handler.email);
app.post('/signup', hashPassNewUser, handler.signup);
app.post('/items/users', handler.post);
app.post('/items/remove', handler.remove);
app.post('/token/new', handler.newToken);
app.post('/token', handler.checkToken);
app.post('/lists/add', handler.addList);
app.post('/wizard', handler.wizard);
app.post('/wizard/gps', handler.gps);
app.post('/portal/init', handler.init);


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
