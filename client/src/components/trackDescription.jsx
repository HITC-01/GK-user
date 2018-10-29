import React from 'react';
import PropTypes from 'prop-types';

const TrackDescription = ({ songData }) => {
  const data = songData[0] || {};
  const message = data.description || '';

  return (
    <div className="up-td-div">
      <p className="up-trackdescription">{message}</p>
      <button> Show more </button>
    </div>
  );
};

export default TrackDescription;

TrackDescription.propTypes = {
  songData: PropTypes.instanceOf(Array)
}