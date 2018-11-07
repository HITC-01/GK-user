import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/page.css';

import TrackDescription from './trackDescription.jsx';
import UserProfile from './userProfile.jsx';
import ReportPage from './reportPage.jsx';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.url = props.url;
    this.songId = props.songId;
    this.state = {
      data: {},
      isFollowing: true,
      show: false,
      songId: id,
    };
    this.getData = this.getData.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.getData(this.songId)
      .catch(() => {
        console.log('Error in Component Mount');
      });
  }

<<<<<<< HEAD
  getData(songId) {
    const url = `${this.url}/user/songs/${songId}`;
=======
  getData() {
    const { songId } = this.state;
    const url = `/user/${songId}`;
>>>>>>> e31aaa8986558ef5d19a2e0d9e7e44cdbce75692
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
      <div className={styles['up-app']}>
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

Page.propTypes = {
  url: PropTypes.string,
  songId: PropTypes.number,
};

Page.defaultProps = {
  url: '',
  songId: 1,
};

export default Page;
