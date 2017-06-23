// Require the db utility function which is referencing all interactions with our mysql db
const db = require('../dbUtils.js')

// function is run upon initially loading the portal dashboard for authenticated users

module.exports = (req, res) => {
  // store JSON variables sent through bodyParser middleware
  user_id = req.body.user_id;
  console.log('devices list requested for user_id:', user_id)

    // store the new device in the database
    db.getDevices(user_id, (e, devices) => {
      if (e) res.send(400)
      console.log('returned DL for user_id:', devices);
      res.send(devices);
    }
  )
};
