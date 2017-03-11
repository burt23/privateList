var crypto = require('crypto');

var hashPass = function(req, res, next) {
  if (req.body.password) {
    var hash = crypto.createHash('sha256');
    hash.update(req.body.password);
    req.body.password = hash.digest('hex');
    next();
  }
}

module.exports = hashPass;