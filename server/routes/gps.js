// Require the db utility function which is referencing all interactions with our mysql db
const db = require('../dbUtils.js')


module.exports = (req, res) => {
  // store JSON variables sent through bodyParser middleware
  console.log('inside GPS')

  const device = {
    device_id: req.body.device_id,
    device_name: req.body.device_name,
    device_lat: req.body.device_lat,
    device_long: req.body.device_long,
    user_id: req.body.user_id
  }

  console.log('inside GPS, device: ', device);

    // store the new device in the database
    db.addDevice(device, (e, results) => {
      if (e) res.send(400)
      console.log('addDevice function being called from /routes/gps.js, referencing dbUtils.jsj', results);
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
