import React, { useEffect, useState, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { UserContext } from './contexts/user.context';
import './sass/index.scss'
import Logout from './pages/Logout/Logout';
import { getProfile } from './api/user.api';
import Policy from './pages/Policy/Policy';
import WithNotLogin from './components/WithNotLogin/WithNotLogin';
import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';


const App = () => {
  const [userContext, setUserContext] = useState()

  useEffect(() => {
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
    <Suspense fallback={null}>
      <UserContext.Provider value={[userContext, setUserContext]}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <WithNotLogin path="/login" component={Login} />
          {/* <WithNotLogin path="/register" component={Register} /> */}
          <Route path="/logout/:token" component={Logout} />
          <Route exact path="/policy" component={Policy} />
        </Switch>

      </UserContext.Provider>
    </Suspense>
  );
}

export default App;
