// Require the db utility function which is referencing all interactions with our mysql db
const db = require('../dbUtils.js')


module.exports = (req, res) => {
  // store JSON variables sent through bodyParser middleware
  device_name = req.body.device_name;
  device_id = req.body.device_id;
  user_id = req.body.user_id;

    // store the new device in the database
    db.addDevice(device_id, device_name, user_id, (e, devices) => {
      if (e) res.send(400)
      console.log('addDevice function being called from api @/wizard, referencing dbUtils.jsj', devices);
      res.send(201);
    }
  )
};


// mysql -h private.czcxajtopxzy.us-west-2.rds.amazonaws.com -P 3306 -u private -p
        // if (error) {
        //   console.error(error);
        //   res.send(error)
        // }
      // got the devices, now check for
  // console.log('list inside WIZARDDDDDDDDDDD', device_name);
  // console.log('user_id inside WIZARDDDDDDDDDDD', device_id);
  // console.log('user_id inside WIZARDDDDDDDDDDD user_id', user_id);
