const db = require('../dbUtils.js');
const hashPassNewUser = require('../middleware/hashPassNewUser.js');

//NEW USER SIGN UP
module.exports = (req, res) => {
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
};
