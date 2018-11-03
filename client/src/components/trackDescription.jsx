import React from 'react';
import PropTypes from 'prop-types';

import HashTag from './hashtag.jsx';

class TrackDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isToggleOn } = this.state;
    this.setState({
      isToggleOn: !isToggleOn,
    });
  }

  render() {
    const { songData } = this.props || {};
    const { isToggleOn } = this.state;
    const hashtags = songData.hashtags || '';
    const message = songData.description || '';
    const showDescription = isToggleOn ? 'show' : 'hide';
    const hash = hashtags.length > 2 ? <HashTag hash={hashtags} /> : '';
    const clickDisplay = isToggleOn ? '--- Show More v ---' : '--- Show Less ^ ---';
    return (
      <div className="utd-wrapper">
        <div className={`utd-panel utd-${showDescription} `}>
          <p className="utd">{message}</p>
          <div className="utd-hash">
            {hash}
          </div>
        </div>
        <div className={`up-fade-${showDescription}`} />
        <br />
        <div className="utd-button-div">
          <button type="button" className="utd-toggle" onClick={this.handleClick}>
            {clickDisplay}
          </button>
        </div>
      </div>
    );
  }
}

export default TrackDescription;

TrackDescription.propTypes = {
  songData: PropTypes.instanceOf(Object),
};

TrackDescription.defaultProps = {
  songData: {},
};
