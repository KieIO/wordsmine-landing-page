import React, { useEffect } from 'react';
import { logout } from '../../api/user.api';
import { EXPIRE_TOKEN_LOGOUT_TIME } from '../../utils/constant';

const Logout = ({history, match: {params}}) => {
    useEffect(()=>{
         const handleLogout = async () => {
            try {
                await logout()
                history.push("/")
            } catch (err) {
                console.debug(err.message)
                history.push("/")
            }

        }

        const { token } = params
        const time = atob(token)
        const currentTime = Date.now();

        if (currentTime - time < EXPIRE_TOKEN_LOGOUT_TIME) {
            handleLogout()  
            console.log("logout success")
            // history.push('/')
        } else {
            console.log("not logout")
            // history.push('/')
        }

    }, [history, params])
    return (

        <div>
            Loading ...
        </div>
    );
};


export default Logout;