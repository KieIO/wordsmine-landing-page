import React, { useEffect } from 'react';
import { logout } from '../../api/user.api';
import { EXPIRE_TOKEN_LOGOUT_TIME } from '../../utils/constant';

const Logout = ({history, match: {params}}) => {
    useEffect(()=>{
         const handleLogout = async () => {
             const { token } = params
             const time = parseInt(atob(token))
             const currentTime = Date.now();

             console.debug(currentTime, time, currentTime - time)
             if ((currentTime - time) <= EXPIRE_TOKEN_LOGOUT_TIME) {
                 try {
                     await logout()
                     history.push("/")
                 } catch (err) {
                     console.debug(err.message)
                     history.push("/")
                 }
             } else {
                 history.push('/') //Redirect when logout successfully if remove extension
             }
        }

        handleLogout()

    }, [history, params])
    return (

        <div>
            Loading ...
        </div>
    );
};


export default Logout;