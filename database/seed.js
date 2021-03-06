const faker = require('faker');
const Promise = require('bluebird');
const db = require('./index.js');

const generator = () => {
  const result = [];
  for (let i = 0; i < 100; i += 1) {
    const hashtags = ['happy', ' ', 'sad', 'rainy days', 'cloudy months', 'marlobarlo', ' ', 'lisapizza', 'brenden tenden', 'glorydory'];
    const details = {
      pro: `${faker.random.boolean()}`,
      isFollowing: `${faker.random.boolean()}`,
      followers: faker.random.number({ min: 1, max: 500 }),
      trackCount: faker.random.number({ min: 1, max: 500 }),
      userName: faker.name.findName(),
      profilePhoto: faker.image.avatar(),
      location: `${faker.address.city()}, ${faker.address.country()}`,
      description: faker.lorem.paragraphs(),
      userRandomIdx: faker.random.number({ min: 1, max: 100 }),
      hashtags: hashtags[faker.random.number({ min: 0, max: 10 })],
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
  const queryStringSongs = 'INSERT INTO songs (userId, description, hashtags) values (?,?,?)';

  for (let i = 0; i < seeded.length; i += 1) {
    const current = seeded[i];
    const songData = [
      current.userRandomIdx,
      current.description,
      current.hashtags,
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
