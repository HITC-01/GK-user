var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'soundcloud'
})

connection.connect(function(err) {
  if(err) throw err;
    console.log('successfully connected')
})

 
module.exports = connection;