import React from 'react';

import TrackDescription from './trackDescription.jsx';
import UserProfile from './userProfile.jsx';
import ReportPage from './reportPage.jsx';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      songData: {},
      isFollowing: true,
      show: false,
    };
    this.getUserData = this.getUserData.bind(this);
    this.getSongData = this.getSongData.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    const songId = Math.floor(Math.random() * 100) + 1;
    this.getSongData(songId)
      .then(() => {
        const { songData } = this.state;
        const { userId } = songData;
        this.getUserData(userId);
      }).then(() => {
        console.log('success!');
      })
      .catch(() => {
        console.log('error!');
      });
  }

  getSongData(songId) {
    const url = `/songs/${songId}`;
    return fetch(url, { method: 'GET' })
      .then((songData) => { return songData.json(); })
      .then((songDataArr) => {
        const songData = songDataArr[0];
        this.setState({ songData });
      });
  }

  getUserData(userId) {
    const url = `/users/${userId}`;
    return fetch(url, { method: 'GET' })
      .then((profile) => { return profile.json(); })
      .then((userDataArr) => {
        const userData = userDataArr[0];
        const { isFollowing } = Boolean.valueOf(userData.isFollowing);
        this.setState({ userData, isFollowing });
      });
  }

  handleModal() {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  handleFollow() {
    const { isFollowing } = this.state;
    this.setState({ isFollowing: !isFollowing });
  }

  render() {
    const {
      isFollowing,
      userData,
      songData,
      show,
    } = this.state;
    return (
      <div className="up-app">
        <UserProfile
          isFollowing={isFollowing}
          handleFollow={this.handleFollow}
          userData={userData}
          handleModal={this.handleModal}
        />
        <TrackDescription
          songData={songData}
        />
        <ReportPage show={show} handleClose={this.handleModal} />
      </div>
    );
  }
}

export default Page;
