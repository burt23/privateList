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
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
},

  insert : function(user, callback) {
    connection.query('INSERT INTO USERS (NAME) VALUES (?)', [user.name], function(err, results, fields) {
      if(err) {
        callback(err, null);
      } else {
        callback(err, null);
      }
    })
  }

}