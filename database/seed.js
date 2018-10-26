const faker = require('faker')
const db = require('./index.js')
const Promise = require('bluebird')

const generator = ()=> {
  let result = []
  for (var i = 0;i <100; i++) {
    let random = Math.floor(Math.random() * Math.floor(100));
    let details = {
      pro: `${faker.random.boolean()}`,
      isFollowing: `${faker.random.boolean()}`,
      followers: faker.random.number(),
      trackCount: faker.random.number(),
      userName: faker.name.findName(),
      profilePhoto: faker.image.people(),
      location: `${faker.address.city()}, ${faker.address.country()}`,
      description: faker.lorem.paragraph(),
      userRandomIdx: random
    }
    result.push(details);
  }
  return result;
}

var gen = Promise.resolve(generator());
gen.then((seeded)=>{
  let item = seeded

  for (let i in seeded){
    let current = seeded[i];

    var queryStringUsers = 'INSERT INTO users (pro, isFollowing, followers, trackCount, userName, profilePhoto, location) values (?,?,?,?,?,?,?)'
  
    let postUsers = [
      current.pro,
      current.isFollowing,
      current.followers,
      current.trackCount,
      current.userName,
      current.profilePhoto, 
      current.location
    ]
  
    db.query(queryStringUsers, postUsers, function(error, results, fields){
      if(error) {
        console.log(error.message)
      } else {
        console.log('data saved in file')
      }
    })
  }

  return item
}).then((seeded)=>{
  for(let i in seeded){
    var queryStringSongs = 'INSERT INTO songs (userId, description) values (?,?)'
    let curr = seeded[i]
    let postSongs = [
      curr.userRandomIdx,
      curr.description
    ]
    
    db.query(queryStringSongs, postSongs, function(error, results, fields){
      if(error) {
        console.log(error)
      } else {
        console.log('data saved')
      }
    })



  }
}).catch(error => {
  console.log(error)
})