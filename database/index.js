const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'hitc-user.catgvkx1a4hz.us-west-1.rds.amazonaws.com',
  user: 'gkim',
  database: 'hitcuser',
  password: 'HackReactor',
});

connection.getConnection((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to mysql');
});

module.exports = connection;
