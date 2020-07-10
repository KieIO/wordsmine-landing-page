import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './pages/HomePage/HomePage';
import { AUTH_TOKEN_KEY, AUTH_TOKEN_KEY_GOOGLE } from './utils/constant';
import { UserContext } from './contexts/user.context';
import WithNotLogin from './components/WithNotLogin/WithNotLogin';
import './sass/index.scss'


const  App = () => {
  const [userContext, setUserContext] = useState({authToken: null})

  useEffect(()=>{
    let authToken = Cookies.get(AUTH_TOKEN_KEY)
    if (!authToken) {
       authToken = Cookies.get(AUTH_TOKEN_KEY_GOOGLE)
      }
    // TODO: call api get user profile to validate token
    // console.log("token*: ", authToken)
    setUserContext({authToken})
  }, [])



  return (
    <UserContext.Provider value={[userContext, setUserContext]}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <WithNotLogin path="/login" component={Login} />
        <WithNotLogin path="/register" component={Register} />
      </Switch>

    </UserContext.Provider>
  );
}

export default App;
