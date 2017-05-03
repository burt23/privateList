const db = require('../dbUtils.js');

module.exports = (req, res) => {
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
}
