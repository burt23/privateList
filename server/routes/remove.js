const db = require('../dbUtils.js')

//REMOVE POST FROM DB
module.exports = (req, res) => {
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
};
