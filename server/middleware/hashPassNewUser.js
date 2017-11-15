var crypto = require('crypto');

// generate random salt

var randomString = function(length){
  return crypto.randomBytes(Math.ceil(length/2))
    .toString('hex')
    .slice(0, length);
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
  if (req.body.password) {
    var salt = randomString(40);
    var passwordData = sha512(req.body.password, salt);
    
    req.body.password = passwordData.passwordHash;
    req.body.salt = passwordData.salt;

    next();
  }
}

module.exports = hashPass;
