import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({
  userData, isFollowing, handleFollow, handleModal,
}) => {
  const data = userData || {};
  const followStatus = isFollowing ? 'following' : 'follow';
  const username = data.userName && data.userName.length > 13 ? data.userName.slice(0, 11).concat('...') : data.userName;
  const SI_SYMBOL = [' ', 'k', 'M', 'G', 'T', 'P', 'E'];

  const abbreviateNumbers = (number) => {
    const tier = Math.log10(number) / 3 | 0;
    if (tier == 0) return number;

    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;

    return scaled.toFixed(1) + suffix;
  };

  const followCount = abbreviateNumbers(data.followers);
  const trackCount = abbreviateNumbers(data.trackCount);

  return (
    <div className="up-container">
      <img className="up-photo" src={data.profilePhoto} alt="Loading" />
      <br />
      <span title={`Visit ${username}'s profile`} className="up-username">
        {username}
        {data.pro === 'true' ? <i className="fas fa-bolt" style={{ color: '#f50' }} /> : ''}
      </span>
      <br />
      <i className="fas fa-users" />
      <span title={`${data.followers} followers`} className="up-followcount black">
        {followCount}
      </span>
      <i className="fas fa-headphones-alt" />
      <span title={`${data.trackCount} tracks`} className="up-trackcount black">
        {trackCount}
      </span>
      <br />
      <button
        type="button"
        className={`up-button up-${followStatus}`}
        tabIndex="0"
        title={`${followStatus}`}
        onClick={handleFollow}
      >
        { followStatus }
      </button>
      <br />
      <div id="up-report-sign">
        <i className="far fa-flag" />
        <button
          type="button"
          onClick={handleModal}
          className="up-report-button black"
          onKeyDown={handleModal}
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
  handleModal: PropTypes.func,
};

UserProfile.defaultProps = {
  userData: {},
  isFollowing: false,
  handleFollow: () => {},
  handleModal: () => {},
};
