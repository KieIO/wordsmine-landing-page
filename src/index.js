import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/Register/Register';

ReactDOM.render(
  <BrowserRouter basename="/">
    <Switch>
        <Route exact path="/" component={App}/>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </BrowserRouter>,
    // <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
