const db = require('../dbUtils.js')

module.exports = (req, res) => {
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
};
