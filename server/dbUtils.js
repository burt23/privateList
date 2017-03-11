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
  }

}