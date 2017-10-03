const db = require('../dbUtils.js');

// INSERT POST INTO DB
module.exports = (req, res) => {
  const list = req.body.list;
  const user_id = req.body.user_id;

  console.log('list inside addlist', list);
  console.log('user_id inside adduser_id', user_id);

  db.addList(list, user_id, (err, success) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
      res.send('Insert Error');
    }

    if (success) {
      console.log('successful insertion', success);
      db.getLists(user_id, (error, messages) => {
        if (error) {
          console.log(error);
        }
        console.log('bout to send messages', messages);
        res.send(messages);
      });
    }
  });
};
