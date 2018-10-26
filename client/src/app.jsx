import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import TrackDescription from './components/trackDescription.jsx';
import UserProfile from './components/userProfile.jsx'

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
      <h1>Testing</h1>
      </div>
    )
  }
}
 

ReactDOM.render(<App />, document.getElementById('app'))