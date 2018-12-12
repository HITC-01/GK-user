const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'hitcuser',
  password: '',
});

connection.getConnection((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to mysql');
});

module.exports = connection;
