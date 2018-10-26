const faker = require('faker');
const Promise = require('bluebird');
const db = require('./index.js');

const generator = () => {
  const result = [];
  for (let i = 0; i < 100; i += 1) {
    const random = Math.floor(Math.random() * Math.floor(100));
    const details = {
      pro: `${faker.random.boolean()}`,
      isFollowing: `${faker.random.boolean()}`,
      followers: faker.random.number(),
      trackCount: faker.random.number(),
      userName: faker.name.findName(),
      profilePhoto: faker.image.people(),
      location: `${faker.address.city()}, ${faker.address.country()}`,
      description: faker.lorem.paragraph(),
      userRandomIdx: random,
    };
    result.push(details);
  }
  return result;
};

const gen = Promise.resolve(generator());
gen.then((seeded) => {
  const item = seeded;
  const queryStringUsers = 'INSERT INTO users (pro, isFollowing, followers, trackCount, userName, profilePhoto, location) values (?,?,?,?,?,?,?)';

  for (let i = 0; i < seeded.length; i += 1) {
    const current = seeded[i];
    const userData = [
      current.pro,
      current.isFollowing,
      current.followers,
      current.trackCount,
      current.userName,
      current.profilePhoto,
      current.location,
    ];
    db.query(queryStringUsers, userData, (error) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log('data saved in file');
      }
    });
  }
  return item;
}).then((seeded) => {
  const queryStringSongs = 'INSERT INTO songs (userId, description) values (?,?)';

  for (let i = 0; i < seeded.length; i += 1) {
    const current = seeded[i];
    const songData = [
      current.userRandomIdx,
      current.description,
    ];
    db.query(queryStringSongs, songData, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('data saved');
      }
    });
  }
}).catch((error) => {
  console.log(error);
});
