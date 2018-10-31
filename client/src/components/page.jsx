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
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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
      .then(songData => {return songData.json()})
      .then((songDataArr) => {
        const songData = songDataArr[0];
        this.setState({ songData });
      });
  }

  getUserData(id) {
    const url = `/users/${id}`;
    return fetch(url, { method: 'GET' })
      .then(profile => {return profile.json()})
      .then((userDataArr) => {
        const userData = userDataArr[0];
        let { isFollowing } = userData;
        if (isFollowing === 'true') {
          isFollowing = true;
        } else {
          isFollowing = false;
        }
        this.setState({ userData, isFollowing });
      });
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
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
          showModal={this.showModal}
        />
        <TrackDescription
          songData={songData}
        />
        <ReportPage show={show} handleClose={this.hideModal} />
      </div>
    );
  }
}

export default Page;
