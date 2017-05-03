const db = require('../dbUtils.js');

module.exports = (req, res) => {
  const userId = req.body.id;
  console.log(userId);

  db.selectAll(userId, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('inside get');
      console.log('data', data);
      // res.sendStatus(200);
      res.send(data);
    }
  });
};
