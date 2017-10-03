const mysql = require('mysql');
const dbConfig = require('./dbconfig.js');
const crypto = require('crypto');

const connection = mysql.createConnection({
  host: 'localhost',
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

module.exports = {

  selectAll: (userId, callback) => {
    connection.query('SELECT * FROM messages where user_id = ?', [userId], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('selectALLLLLLLLLLLLLLLLL results', results);
        callback(null, results);
      }
    });
  },

  insert: (message, userId, callback) => {
    connection.query('INSERT INTO messages (user_id, message) VALUES (?,?)', [userId, message], (err, results) => {
      if(err) {
        console.log('resultsERRRRR', results);
        callback(err, null);
      } else {
        console.log('results AFTER INSERT', results);
        callback(null, true);
      }
    });
  },

  addList: (list, userId, callback) => {
    connection.query('INSERT INTO lists (list_name, user_id) VALUES (?, ?)', [list, userId], (err, results) => {
      if(err) {
        console.error(err)
        callback(err, null);
      } else {
        console.log('insert into addList', results);
        callback(null, results);
      }
    })
  },

  getUserSalt: (username, callback) => {
    connection.query('SELECT salt FROM users WHERE user = ?', [username], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('getUserSalt', results);
        callback(null, results);
      }
    });
  },

  checkUsername: (username, callback) => {
    connection.query('SELECT * FROM users WHERE user = ? ', [username], (err, results) => {
      if (err) {
        callback(err, null);
      } else if (results.length === 0) {
        console.log('inside checkUser NEW USER ADDED', results);
        callback(err, true);
      } else {
        console.log('USER ALREADY EXISTS, try again ??????', results);
        callback(err, false);
      }
    });
  },

  addUser: (username, password, salt, callback) => {
    connection.query('INSERT INTO users (user, password, salt) values (?, ?, ?)', [username, password, salt], (err, results, fields) => {
      if(err){
        console.log(err);
        callback(err, null, null);
      } else {
        console.log('insertID', results.insertId);
        callback(null, true, results.insertId);
      }
    })
  },

  validateUser: (username, password, salt, callback) => {
    connection.query('SELECT id FROM users where user = ? AND password = ?', [username, password], (err, results) => {
      if (err) {
        console.log('error in validate user', err);
        callback(err, null);
      } else if (results.length === 0) {
        callback(null, false, null);
      } else {
        callback(null, true, results[0].id);
      }
    });
  },

  deleteMessage: (message_id, callback) => {
    connection.query('DELETE FROM messages WHERE id = ?', [message_id], (err, results) => {
      if (err) {
        console.log(err);
        callback(err, false, null);
      } else {
        callback(err, true, results);
      }
    });
  },

  getToken: (userId, callback) => {
    var randomString = crypto.randomBytes(30).toString('hex').slice(0, 30);
    console.log('random strin ', randomString);
    connection.query('UPDATE MESSAGES SET secret=? WHERE user_id = ?', [randomString, userId], (error, results) => {
      if (error) {
        console.log(error);
        callback(error, null);
      } else {
        callback(null, randomString);
      }
    });
  },

  checkToken: (userToken, callback) => {
    connection.query('SELECT * FROM MESSAGES WHERE secret = ?', [userToken], (error, results) => {
      if (error) {
        console.log(error);
        callback(error, null);
      } else {
        console.log('check token results', results);
        callback(error, results);
      }
    });
  }
};
