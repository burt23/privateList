var mysql = require('mysql');
var dbConfig = require('./dbconfig.js');
var crypto = require('crypto');

var connection = mysql.createConnection({
  host: 'localhost',
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

module.exports = {

  selectAll : function(userId, callback) {
  connection.query('SELECT * FROM messages where user_id = ?', [userId], function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      console.log('selectALLLLLLLLLLLLLLLLL results', results);
      callback(null, results);
    }
  });
},

  insert : function(message, userId, callback) {
    connection.query('INSERT INTO messages (user_id, message) VALUES (?,?)', [userId, message], function(err, results, fields) {
      if(err) {
        console.log('resultsERRRRR', results);
        callback(err, null);
      } else {
        console.log('results AFTER INSERT', results);
        callback(null, true);
      }
    })
  },

  getUserSalt: function(username, callback){
    connection.query('SELECT salt FROM users WHERE user = ?', [username], function(err, results, fields) {
      if(err){
        callback(err, null)
      } else {
        console.log('getUserSalt', results);
        callback(null, results);
      }
    })
  },

  checkUsername : function(username, callback) {
    connection.query('SELECT * FROM users WHERE user = ? ', [username], function(err, results, fields) {
      if(err) {
        callback(err, null);
      } else if (results.length === 0){
        console.log('inside checkUser NEW USER ADDED', results);
        callback(err, true);
      } else {
        console.log('USER ALREADY EXISTS, try again ??????', results);
        callback(err, false);
      }
    })
  },

  addUser : function(username, password, salt, callback) {
    connection.query('INSERT INTO users (user, password, salt) values (?, ?, ?)', [username, password, salt], function(err, results, fields) {
      if(err){
        console.log(err)
        callback(err, null, null)
      } else {
        console.log('insertID', results.insertId);
        callback(null, true, results.insertId);
      }
    })
  },

  validateUser : function(username, password, salt, callback) {
    connection.query('SELECT id FROM users where user = ? AND password = ?', [username, password], function(err, results, fields) {
      if(err){
        console.log('error in validate user', err);
        callback(err, null);
      } else if (results.length === 0) {
        callback(null, false, null);
      } else {
        callback(null, true, results[0].id);
      }
    })
  },

  deleteMessage: function(message_id, callback) {
    connection.query('DELETE FROM messages WHERE id = ?', [message_id], function(err, results, fields) {
      if(err) {
        console.log(err);
        callback(err, false, null);
      } else {
        callback(err, true, results);
      }
    })
  },

  getToken: function(userId, callback){
    var randomString = crypto.randomBytes(30).toString('hex').slice(0, 30);
    console.log('random strin ', randomString);
    connection.query('UPDATE MESSAGES SET secret=? WHERE user_id = ?', [randomString, userId], function(error, results, fields){
      if(error){
        console.log(error)
        callback(error, null)
      } else {
        callback(null, randomString);
      }
    })
  },

  checkToken: function(userToken, callback){
    connection.query('SELECT * FROM MESSAGES WHERE secret = ?', [userToken], function(error, results, fields) {
      if(error){
        console.log(error);
        callback(error, null)
      } else {
        console.log('check token results', results);
        callback(error, results);

      }
    })
  },

  addDevice: function(device, callback){
    console.log('Adding device:', device);
    console.log('device_id', device.device_id);
    console.log('device_name', device.device_name);
    console.log('user_id', device.user_id);

    connection.query('INSERT INTO devices (device_id, device_name, user_id, device_lat, device_long) VALUES (?, ?, ?, ?, ?)', [device.device_id, device.device_name, device.user_id, device.device_lat, device.device_long ], function(error, results){
      if(error){
        console.log('error adding bt device' )
        callback(error)
      }
      console.log('added to db from addDevice query', results)
      callback(error, results)
    })
  },

  getDevices: function(user_id, callback) {
    console.log('user_id inside of getDevices', user_id)

    connection.query('SELECT * FROM devices WHERE user_id = ?', [user_id], function(error, devices) {
      if (error, null) callback(error)

      console.log('devices from getDevices mysql query', devices);
      callback(error, devices);
    })
  },

  saveGPS: function(device, callback) {
    console.log('saving the device gps info', device);
    connection.query('INSERT INTO devices WHERE device_id = ? ', [device.long, device.lat], function(error, results){
      if(error){
        console.log('error', error);
        callback(error, null)
      } else {
        console.log('sucess ;?', results)
        callback(error, results)
      }
    })
  }
}
