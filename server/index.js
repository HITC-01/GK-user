require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/songs/:song', (req, res) => {
  const songId = req.params.song;
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
  console.log(`Listening to port ${port}!`);
});
