import React from 'react';

import TrackDescription from './trackDescription.jsx';
import UserProfile from './userProfile.jsx';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      songData: {},
      isFollowing: true,
    };
    this.getUserData = this.getUserData.bind(this);
    this.getSongData = this.getSongData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    const songId = Math.floor(Math.random() * 100) + 1;
    this.getSongData(songId)
      .then(() => {
        const item = this.state.songData.userId;
        this.getUserData(item);
      }).then(() => {
        const follow = this.state.userData.isFollowing
        this.setState({isFollowing: follow })
        console.log('updated userData');
      })
      .catch(() => {
        console.log('error!');
      });
  }

  getSongData(id) {
    const url = `/songs/${id}`;
    return fetch(url, { method: 'GET' })
      .then(songData => songData.json())
      .then((songDataArr) => {
        const songData = songDataArr[0];
        this.setState({ songData });
      });
  }

  getUserData(id) {
    const url = `/users/${id}`;
    return fetch(url, { method: 'GET' })
      .then(profile => profile.json())
      .then((userDataArr) => {
        const userData = userDataArr[0];
        this.setState({ userData });
      });
  }

  handleClick() {
    console.log('an item was clicked!')
  }

  handleFollow() {
   const {isFollowing} = this.state;
   this.setState({isFollowing: !isFollowing});
  }


  render() {
    return (
      <div className="up-app">
        <UserProfile following={this.state.isFollowing} handleFollow={this.handleFollow} userData={this.state.userData} />
        <TrackDescription songData={this.state.songData} />
      </div>
    );
  }
}

export default Page;
