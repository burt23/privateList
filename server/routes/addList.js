const db = require('../dbUtils.js')

//INSERT POST INTO DB
module.exports = (req, res) => {
  list = req.body.list;
  user_id = req.body.user_id;
  console.log('list inside addlist', list);
  console.log('user_id inside adduser_id', user_id);
  db.insert(list, user_id, function(err, success) {
    if(err){
      console.log(err)
      res.sendStatus(400);
      res.send('Insert Error');
    }
    if(success){
      console.log('successful insertion', success);
      db.selectAll(user_id, function(error, messages){
        if(error){
          console.log(error);
        }
        console.log('bout to send messages', messages);
        res.send(messages);
      })
    }
  })
};
