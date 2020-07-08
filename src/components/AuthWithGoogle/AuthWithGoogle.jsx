import React from 'react';
import LogoGoogle from '../../assets/img/google-logo.png'

const AuthWithGoogle = () => {
    return (
        <div className="auth-with-google">
            <div className="content">
                <img className="logo" src={LogoGoogle} alt="Google"/>
                <span className="title">Continue with Google</span>
            </div>
        </div>
    );
};

export default AuthWithGoogle;