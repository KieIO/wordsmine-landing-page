import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './pages/HomePage/HomePage';
import './sass/index.scss'
import { AUTH_TOKEN_KEY } from './utils/constant';


function App() {
  const [token, setToken] = useState(null)
  useEffect(()=>{
    const token = Cookies.get(AUTH_TOKEN_KEY)
    // console.log("token: ", token)
    setToken(token)
    // TODO: call api get user profile to validate token

    
  }, [])


  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" render={()=> 
        token ? <Redirect to="/"/> : <Login/>
      } />
      <Route path="/register" render={() =>
        token ? <Redirect to="/" /> : <Register />
      } />
    </Switch>
  );
}

export default App;
