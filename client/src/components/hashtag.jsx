import React from 'react';
import PropTypes from 'prop-types';

const HashTag = ({ hash }) => {
  return (
    <div>
      <span className="up-hash">
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
