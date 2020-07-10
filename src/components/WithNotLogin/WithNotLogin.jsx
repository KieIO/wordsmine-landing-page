import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie'
import { AUTH_TOKEN_KEY, AUTH_TOKEN_KEY_GOOGLE } from '../../utils/constant';


const WithNotLogin = ({component: Component, ...props})  => {
    return (
        <Route
        {...props}
            render = {(routeProps)=> {
                let authToken = Cookies.get(AUTH_TOKEN_KEY)
                if (!authToken) {
                    authToken = Cookies.get(AUTH_TOKEN_KEY_GOOGLE)
                }
                
                if (authToken) {
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