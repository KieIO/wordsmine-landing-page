import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './pages/HomePage/HomePage';
import { UserContext } from './contexts/user.context';
import WithNotLogin from './components/WithNotLogin/WithNotLogin';
import './sass/index.scss'
import Logout from './pages/Logout/Logout';
import { getProfile } from './components/api/user.api';


const  App = () => {
  const [userContext, setUserContext] = useState()

  useEffect(()=>{
    const getUserProfile = async () => {
      try {
        const profile = await getProfile()
        setUserContext(profile)
      } catch (error) {
        //  setUserContext(null)
      }
    }

    getUserProfile()
  }, [])



  return (
    <UserContext.Provider value={[userContext, setUserContext]}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <WithNotLogin path="/login" component={Login} />
        <WithNotLogin path="/register" component={Register} />
        <Route path="/logout/:token" component={Logout} />
      </Switch>

    </UserContext.Provider>
  );
}

export default App;
