import React, { useEffect } from 'react';
import { logout } from '../../components/api/user.api';

const Logout = () => {
    useEffect(()=>{
        const handleLogout = async () => {
            try {
                // await getlistWord()
                await logout()
                console.log("logout success ")
            } catch (err) {
                console.debug(err.message)
            }

        }

        handleLogout()
    }, [])
    return (

        <div>
            Loading ...
        </div>
    );
};


export default Logout;