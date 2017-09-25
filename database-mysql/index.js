var mysql = require('mysql');

console.log('mysql loco', PROCESS.env.MYSQL_LOCO);

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'PROCESS.env.MYSQL_LOCO',
  database : 'test'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
