const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/users/:user', (req, res) => {
  const userId = req.params.user;
  const queryString = `SELECT * FROM users where id = ${userId}`;
  db.query(queryString, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(data));
    }
  });
});

app.get('/songs/:song', (req, res) => {
  const songId = req.params.song;
  const queryString = `SELECT * FROM songs where id = ${songId}`;
  db.query(queryString, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(data));
    }
  });
});

app.listen(port, () => {
  console.log('Listening to port 3001!');
});
