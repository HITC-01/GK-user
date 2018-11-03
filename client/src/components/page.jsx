import React from 'react';

import TrackDescription from './trackDescription.jsx';
import UserProfile from './userProfile.jsx';
import ReportPage from './reportPage.jsx';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isFollowing: true,
      show: false,
    };
    this.getData = this.getData.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    const songId = Math.floor(Math.random() * 100) + 1;
    this.getData(songId)
      .catch(() => {
        console.log('Error in Component Mount');
      });
  }

  getData(songId) {
    const url = `/songs/${songId}`;
    return fetch(url, { method: 'GET' })
      .then((resData) => { return resData.json(); })
      .then((dataArray) => {
        const data = dataArray[0];
        const { isFollowing } = Boolean.valueOf(data.isFollowing);
        this.setState({ data, isFollowing });
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
      data,
      show,
    } = this.state;
    return (
      <div className="up-app">
        <UserProfile
          isFollowing={isFollowing}
          handleFollow={this.handleFollow}
          userData={data}
          handleModal={this.handleModal}
        />
        <TrackDescription
          songData={data}
        />
        <ReportPage show={show} handleClose={this.handleModal} />
      </div>
    );
  }
}

export default Page;
