import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/hashtag.css';

const HashTag = ({ hash }) => {
  return (
    <div className={styles["utd-hash"]}>
      <span className={styles.hash}>
      #
        {hash}
      </span>
    </div>
  );
};

export default HashTag;

HashTag.propTypes = {
  hash: PropTypes.string,
};

HashTag.defaultProps = {
  hash: 'Songs',
};
