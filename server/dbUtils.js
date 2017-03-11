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
        callback(err, true);
      }
    })
  },

  checkUsername : function(username, callback) {
    connection.query('SELECT * FROM users WHERE user = ? ', [username], function(err, results, fields) {
      if(err) {
        callback(err, null);
      } else if (results.length === 0){
        console.log(results);
        callback(err, true);
      }
    })
  },

  addUser : function(username, password, callback) {
    connection.query('INSERT INTO users (user, password) values (?, ?)', [username, password], function(err, results, fields) {
      if(err){
        console.log(err)
        callback(err, null)
      } else {
        callback(err, true);
      }
    })
  }
}