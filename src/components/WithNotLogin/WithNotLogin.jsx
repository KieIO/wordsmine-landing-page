import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie'
import { AUTH_TOKEN_KEY, AUTH_TOKEN_KEY_GOOGLE } from '../../utils/constant';
import { getProfile } from '../api/user.api';
import { UserContext } from '../../contexts/user.context';


const WithNotLogin = ({component: Component, ...props})  => {
    const [userContext] = useContext(UserContext)

    console.log("user context: ", userContext)
    return (
        <Route
        {...props}
            render = {(routeProps)=> {
                if (userContext) {
                    return <Redirect to="/" />
                } else  {
                    return <Component {...routeProps} />
                }
            }}
        />
    );
};

WithNotLogin.propTypes = {
    
};

export default WithNotLogin;