import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';


const WithNotLogin = ({component: Component, path})  => {
    const [userContext] = useContext(UserContext)
    return (
        <Route
            path = {path}
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


export default WithNotLogin;