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
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    const songId = Math.floor(Math.random() * 100) + 1;
    this.getSongData(songId)
      .then(() => {
        const { songData } = this.state;
        const { userId } = songData;
        this.getUserData(userId);
      }).then(() => {
        console.log('items included');
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
        const { isFollowing } = userData;
        this.setState({ userData, isFollowing });
      });
  }

  handleFollow() {
    const { isFollowing } = this.state;
    this.setState({ isFollowing: !isFollowing });
  }


  render() {
    const { isFollowing, userData, songData } = this.state;
    return (
      <div className="up-app">
        <UserProfile
          following={isFollowing}
          handleFollow={this.handleFollow}
          userData={userData}
        />
        <TrackDescription
          songData={songData}
        />
      </div>
    );
  }
}

export default Page;
