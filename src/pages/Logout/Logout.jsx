import React, { useEffect } from 'react';
import { logout } from '../../components/api/user.api';
import { EXPIRE_TOKEN_LOGOUT_TIME } from '../../utils/constant';

const Logout = ({history, match: {params}}) => {
    useEffect(()=>{
         const handleLogout = async () => {
            try {
                await logout()
                console.log("logout success ")
            } catch (err) {
                console.debug(err.message)
            }

        }

        const { token } = params
        const time = atob(token)
        const currentTime = Date.now();

        if (currentTime - time < EXPIRE_TOKEN_LOGOUT_TIME) {
            handleLogout()  
            history.push('/')
        } else {
            history.push('/')
        }

    }, [history, params])
    return (

        <div>
            Loading ...
        </div>
    );
};


export default Logout;