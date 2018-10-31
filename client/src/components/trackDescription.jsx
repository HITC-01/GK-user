import React from 'react';
import PropTypes from 'prop-types';

import HashTag from './hashtag.jsx';

const TrackDescription = ({ songData }) => {
  const data = songData || {};
  const message = data.description || '';

  return (
    <div className="up-td-div">
      <p className="up-trackdescription">{message}</p>
      <HashTag />
      <br />
      <button type="button" className="up-bt-show-more"> Show more </button>
    </div>
  );
};

export default TrackDescription;

TrackDescription.propTypes = {
  songData: PropTypes.instanceOf(Object),
};

TrackDescription.defaultProps = {
  songData: {},
};
