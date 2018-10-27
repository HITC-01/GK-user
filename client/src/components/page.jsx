import React from 'react';
import $ from 'jquery';

import TrackDescription from './trackDescription.jsx';
import UserProfile from './userProfile.jsx'

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      songData: [],
    };
    this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    const songId = Math.floor(Math.random() * 100) + 1;
    this.getSongData(songId)
    .then((data)=> {
      console.log(data);
    }).catch(()=> {
      console.log('error!');
    })
  }

  getSongData(id) {
    const url = `/songs/${id}`;
    return fetch(url, { method: 'GET' })
      .then(stream => stream.json())
      .then((res) => {
        console.log('this is the res', res)
        const { songData } = this.state;

        this.setState({ songData: res.data });
      });
  }

  getUserData(id) {
    const url = `/user/${id}`;
    return fetch (url, { method: 'GET' })
      .then(profile => profile.json())
      .then((res) => {
        this.setState({
          userInfo: res,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Testing</h1>
        <UserProfile />
        <TrackDescription />
      </div>
    );
  }
}

export default Page;
