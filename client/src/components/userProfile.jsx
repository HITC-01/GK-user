import React from 'react';
import PropTypes from 'prop-types';

import ReportPage from './reportPage.jsx'


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    // debugger;
    this.setState({ show: true });
    // debugger;
  }

  hideModal() {
    // debugger;
    this.setState({ show: false });
    // debugger;
  }

  render() {
    const data = this.props.userData[0] || {};
    let followStatus = '' || 'Loading';
    let bolt = '';
    let username = data.userName || '';
    if (data.isFollowing === 'true') {
      followStatus = 'Following';
    } else {
      followStatus = 'Follow';
    }
  
    if (data.pro === 'true') {
      bolt = <i className="fas fa-bolt" />;
    }
  
    if (data.userName && data.userName.length > 13) {
      username = data.userName.slice(0, 10).concat('...');
    }
  
    if (data.isFollowing === 'false') {
      followStatus = (
        <button type="button" className="up-button-unfollow" tabIndex="0" title="Following">
      Following
        </button>
      );
    } else {
      followStatus = (
        <button type="button" className="up-button-follow" tabIndex="0" title="Follow">
      Follow
        </button>
      );
    }
  
    return (
      <div className="up">
        <img className="up-photo" src={data.profilePhoto} alt="Loading" />
        <br />
        <span className="up-username">
          {username}
        </span>
        <span className="up-bolt">
          {bolt}
        </span>
        <br />
        <div className="up-count">
          <i className="fas fa-users" />
          <span className="up-followcount">
            {data.followers}
          </span>
          <i className="fas fa-headphones-alt" />
          <span className="up-trackcount">
            {data.trackCount}
          </span>
        </div>
        <br />
        {followStatus}
        <br />
        <div id="up-report-sign">
          <i className="far fa-flag" />
          <span onClick={this.showModal} className="up-report-word">
            Report!
            </span>
            <ReportPage show={this.state.show} handleClose={this.hideModal} />
        </div>
      </div>
      );
    }
}
export default UserProfile;

UserProfile.propTypes = {
  userData: PropTypes.instanceOf(Array),
};
