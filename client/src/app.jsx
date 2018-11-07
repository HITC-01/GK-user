import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/page.jsx';

window.Page = Page;
ReactDOM.render(<Page />, document.getElementById('app'));