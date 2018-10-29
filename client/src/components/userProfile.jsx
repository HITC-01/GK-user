import React from 'react';
import PropTypes from 'prop-types';


const UserProfile = ({ userData }) => {
  const data = userData[0] || {};
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
      <button type="button" className="up-button-unfollow" tabIndex="0" title="Unfollow">
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
        <span className="up-followcount">
          <i className="fas fa-users" />
          {data.followers}
        </span>
        <span className="up-trackcount">
          <i className="fas fa-headphones-alt" />
          {data.trackCount}
        </span>
      </div>
      <br />
      {followStatus}
      <div id="up-report-sign">
        <i className="far fa-flag" />
        Report!
      </div>
    </div>
  );
};
export default UserProfile;

UserProfile.propTypes = {
  userData: PropTypes.instanceOf(Array),
};
