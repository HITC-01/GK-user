import React from 'react';
import PropTypes from 'prop-types';


const UserProfile = ({
  userData, isFollowing, handleFollow, showModal,
}) => {
  const data = userData || {};
  const followStatus = isFollowing ? 'following' : 'follow';
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
        <button
          type="button"
          className={`up-button-${followStatus}`}
          tabIndex="0"
          title="Following"
          onClick={handleFollow}
        >
          { followStatus }
        </button>
        <br />
        <div id="up-report-sign">
          <i className="far fa-flag" />
          <button
            type="button"
            onClick={showModal}
            className="up-report-button up-txt"
            onKeyDown={showModal}
          >
            Report
          </button>
        </div>
      </div>
  );
};
export default UserProfile;

UserProfile.propTypes = {
  userData: PropTypes.instanceOf(Object),
  isFollowing: PropTypes.bool,
  handleFollow: PropTypes.func,
  showModal: PropTypes.func,
};

UserProfile.defaultProps = {
  userData: {},
  isFollowing: false,
  handleFollow: {},
  showModal: {},
};
