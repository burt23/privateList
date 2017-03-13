var crypto = require('crypto');
var db = require('../dbUtils.js');

//validate username and return salt
var getSalt = function(username, callback){
  //query db for username match
  return db.getUserSalt(username, function(error, results){
    if(error){
      console.log(error);
    } else {
      callback(null, results);
    }
  })
}

var sha512 = function(password, salt){
  var hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  var value = hash.digest('hex');
  return {
    salt: salt,
    passwordHash: value
  }
}

var hashPass = function(req, res, next) {
  if(req.body.password){
    var userSalt = getSalt(req.body.username, function(error, salt){
      if(error){
        console.log(error);
      } else {
        var passwordData = sha512(req.body.password, salt[0].salt);
        req.body.password = passwordData.passwordHash;
        next();
      }
    });
  }
}

module.exports = hashPass;