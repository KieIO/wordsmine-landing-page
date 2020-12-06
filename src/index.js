import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
// eslint-disable-next-line no-unused-vars
import i18n from './i18n';

const trackingId = "G-CGSPWGLBGH"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
