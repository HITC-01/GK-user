import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/userProfile.css';

const UserProfile = ({
  userData, isFollowing, handleFollow, handleModal,
}) => {
  const data = userData || {};
  const followStatus = isFollowing ? 'following' : 'follow';
  const username = data.userName && data.userName.length > 16 ? data.userName.slice(0, 14).concat('...') : data.userName;
  const SI_SYMBOL = [' ', 'k'];

  const abbreviateNumbers = (number) => {
    const tier = Math.log10(number) / 3 | 0;
    if (tier === 0) return number;

    const suffix = SI_SYMBOL[tier];
    const scale = 10 ** (tier * 3);
    const scaled = number / scale;

    return scaled.toFixed(1) + suffix;
  };

  const followCount = abbreviateNumbers(data.followers);
  const trackCount = abbreviateNumbers(data.trackCount);
  const icon = {
    bolt: <i className="fas fa-bolt" style={{ color: '#f50' }} />,
    followers: <i className="fas fa-users" />,
    headphones: <i className="fas fa-headphones-alt" />,
    report: <i className="far fa-flag" />,
  };


  return (
    <div className={styles.container}>
      <img className={styles.photo} src={data.profilePhoto} alt="Loading" />
      <br />
      <span title={`Visit ${username}'s profile`} className={styles.username}>
        {username}
        {data.pro === 'true' ? icon.bolt : ''}
      </span>
      <br />
      {icon.followers}
      <span title={`${data.followers} followers`} className={`${styles.followcount} ${styles.black}`}>
        {followCount}
      </span>
      {icon.headphones}
      <span title={`${data.trackCount} tracks`} className={`${styles.trackcount} ${styles.black}`}>
        {trackCount}
      </span>
      <br />
      <button
        type="button"
        className={`${styles.button} ${styles[`${followStatus}`]}`}
        title={`${followStatus}`}
        onClick={handleFollow}
      >
        { followStatus }
      </button>
      <br />
      <div id="up-report-sign">
        {icon.report}
        <button
          type="button"
          onClick={handleModal}
        className={`${styles.reportButton} ${styles.black}`}
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
