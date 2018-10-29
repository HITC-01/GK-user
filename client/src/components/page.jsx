import React from 'react';

import TrackDescription from './trackDescription.jsx';
import UserProfile from './userProfile.jsx';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      songData: [],
    };
    this.getUserData = this.getUserData.bind(this);
    this.getSongData = this.getSongData.bind(this);
  }

  componentDidMount() {
    const songId = Math.floor(Math.random() * 100) + 1;
    this.getSongData(songId)
      .then(() => {
        const item = this.state.songData[0].userId;
        this.getUserData(item);
      }).then(() => {
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
      .then((songData) => {
        this.setState({ songData });
      });
  }

  getUserData(id) {
    const url = `/users/${id}`;
    return fetch(url, { method: 'GET' })
      .then(profile => profile.json())
      .then((userData) => {
        this.setState({ userData });
      });
  }

  render() {
    return (
      <div className="up-app">
        <UserProfile userData={this.state.userData} />
        <TrackDescription songData={this.state.songData} />
      </div>
    );
  }
}

export default Page;
