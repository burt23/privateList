const db = require('../dbUtils.js')

//INSERT POST INTO DB
module.exports = (req, res) => {
  userQuery = req.body.term;
  userId = req.body.id;
  db.insert(userQuery, userId, function(err, success) {
    if(err){
      console.log(err)
      res.sendStatus(400);
      res.send('Insert Error');
    }
    if(success){
      console.log('successful insertion', success);
      db.selectAll(userId, function(error, messages){
        if(error){
          console.log(error);
        }
        console.log('bout to send messages', messages);
        res.send(messages);
      })
    }
  })
};
