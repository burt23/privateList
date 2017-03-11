var mysql = require('mysql');
var dbConfig = require('./dbConfig.js');

var connection = mysql.createConnection({
  host: 'localhost',
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

module.exports = {

  selectAll : function(callback) {
  connection.query('SELECT * FROM messages', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
},

  insert : function(message, callback) {
    connection.query('INSERT INTO messages (message) VALUES (?)', [message], function(err, results, fields) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, true);
      }
    })
  },

  checkUsername : function(username, callback) {
    connection.query('SELECT * FROM users WHERE user = ? ', [username], function(err, results, fields) {
      if(err) {
        callback(err, null);
      } else if (results.length === 0){
        console.log('inside checkUser', results);
        callback(err, true);
      }
      console.log('check user ? ?????');
      console.log('check user ? ?????', results);
    })
  },

  addUser : function(username, password, callback) {
    connection.query('INSERT INTO users (user, password) values (?, ?)', [username, password], function(err, results, fields) {
      if(err){
        console.log(err)
        callback(err, null)
      } else {
        callback(null, true);
      }
    })
  },

  validateUser : function(username, password, callback) {
    connection.query('SELECT id FROM users where user = ? AND password = ?', [username, password], function(err, results, fields) {
      if(err){
        console.log('error in validate user', err);
        callback(err, null);
      }
        console.log('user id from results', results);
        callback(null, results);
    })
  }
}