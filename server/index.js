const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/songs', express.static(path.join(__dirname, '../client/dist')));
app.use('/songs/:songId', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


app.get('/track/:songId', (req, res) => {
  const songId = req.params.songId;
  const select = `
  songs.description,
  songs.hashtags,
  users.pro,
  users.isFollowing,
  users.followers,
  users.trackCount,
  users.userName,
  users.profilePhoto,
  users.location
  `;
  const queryString = `SELECT ${select} FROM songs INNER JOIN users ON songs.id = ${songId} AND songs.userId=users.id`;
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
