import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/page.css';

import Nav from './nav.jsx';
import TrackDescription from './trackDescription.jsx';
import UserProfile from './userProfile.jsx';
import ReportPage from './reportPage.jsx';

class Page extends React.Component {
  constructor(props) {
    super(props);
    const path = parseInt(window.location.pathname.split('/').pop());
    this.url =props.url;
    this.state = {
      data: {},
      isFollowing: true,
      show: false,
      songId: path,
    };
    this.getData = this.getData.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.getData()
      .catch(() => {
        console.log('Error in Component Mount');
      });
  }

  getData() {
    const { songId } = this.state;
    const url = `/track/22`;
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
      <div> 
      <Nav />
      <div className={styles["up-app"]}>
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
      </div>
    );
  }
}

Page.propTypes = {
  url: PropTypes.string,
};

Page.defaultProps = {
  url: '',
};

export default Page;
