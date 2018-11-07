import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/page.jsx';
import Nav from './components/nav.jsx'

window.Page = Page;
ReactDOM.render(<Page />, document.getElementById('app'));ReactDOM.render(<Nav />, document.getElementById('nav'));