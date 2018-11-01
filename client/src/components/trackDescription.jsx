import React from 'react';
import PropTypes from 'prop-types';

import HashTag from './hashtag.jsx';
// import { start } from 'repl';

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
    const hashtags = songData.hashtags || '';
    const message = songData.description || '';
    const { isToggleOn } = this.state;
    const showDescription = isToggleOn ? 'show' : 'hide'; 
    const hash = hashtags.length > 2 ?  <HashTag hash={hashtags} /> : '';
    const clickDisplay = isToggleOn ? 'Show More v' : 'Show Less ^ ';
    
    return (
      <div className="up-td-wrapper">
        <div className={`up-td-panel-${showDescription} `}>
          <p className="up-trackdescription">{message}</p>
          <div className="up-td-hash">
            {hash}
          </div>
          </div>
          <div className={`up-fade-${showDescription}`} />
        <br />
        <div className="up-outisde"> 
          <span onClick={this.handleClick} className={`up-${showDescription}`}>
          {clickDisplay}
        </span>
        </div>
      </div>
    );
  };
}; 

export default TrackDescription;

TrackDescription.propTypes = {
  songData: PropTypes.instanceOf(Object),
};

TrackDescription.defaultProps = {
  songData: {},
};
