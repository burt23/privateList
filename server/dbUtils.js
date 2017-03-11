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

  checkUsername : function(username, callback) {
    connection.query('SELECT * FROM users WHERE user = ? ', [username], function(err, results, fields) {
      if(err) {
        callback(err, null);
      } else if (results.length === 0){
        console.log('inside checkUser NEW USER ADDED', results);
        callback(err, true);
      } else {
        console.log('USER ALREADY EXISTS, try again ? ?????');
        console.log('check user ? ?????', results);
        callback(err, false);
      }
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
      } else if (results.length === 0) {
        console.log('user id from results length=0', results);
        callback(null, false, null);
      } else {
        console.log('results from successful entry: ', results[0].id);
        callback(null, true, results[0].id);
      }
    })
  }
}