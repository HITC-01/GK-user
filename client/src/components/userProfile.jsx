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
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const { userData, following, handleFollow } = this.props;
    const data = userData || {};
    const followStatus = following ? 'following' : 'follow';
    const proBolt = data.pro === 'true' ? <i className="fas fa-bolt" /> : '';
    const username = data.userName && data.userName.length > 13 ? data.userName.slice(0, 10).concat('...') : data.userName;
    return (
      <div className="up">
        <img className="up-photo" src={data.profilePhoto} alt="Loading" />
        <br />
        <span className="up-username">
          {username}
        </span>
        <span className="up-bolt">
          {proBolt}
        </span>
        <br />
        <div className="up-count">
          <i className="fas fa-users" />
          <span className="up-followcount up-txt">
            {data.followers}
          </span>
          <i className="fas fa-headphones-alt" />
          <span className="up-trackcount up-txt">
            {data.trackCount}
          </span>
        </div>
        <br />
        <button type="button" className={`up-button-${followStatus}`} tabIndex="0" title="Following" onClick={handleFollow}>
          { followStatus }
        </button>
        <br />
        <div id="up-report-sign">
          <i className="far fa-flag" />
          <button type="button" onClick={this.showModal} className="up-report-button up-txt" onKeyDown={this.handleClick}>
            Report
          </button>
          <ReportPage show={this.state.show} handleClose={this.hideModal} />
        </div>
      </div>
    );
  }
}
export default UserProfile;

UserProfile.propTypes = {
  userData: PropTypes.instanceOf(Object).isRequired,
  handleFollow: PropTypes.func.isRequired,
};
