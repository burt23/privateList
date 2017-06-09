const db = require('../dbUtils');
// TODO: add hashpass
const hashPass = require('../middleware/hashPass.js');

//USER LOGIN
module.exports = (req, res) => {
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
};
