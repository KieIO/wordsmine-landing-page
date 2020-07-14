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
import Logout from './pages/Logout/Logout';
import { getProfile } from './components/api/user.api';


const  App = () => {
  const [userContext, setUserContext] = useState()

  useEffect(()=>{
    const getUserProfile = async () => {
      try {
        console.log("before* ", )

        const profile = await getProfile()
        console.log("after2:  ", profile)

        setUserContext(profile)
      } catch (error) {
        console.log("after* ")

        console.log("err* ", error)
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
        {/* <Route exact path="/logout" component={Logout} /> */}
        <Route path="/logout/:token" component={Logout} />
      </Switch>

    </UserContext.Provider>
  );
}

export default App;
