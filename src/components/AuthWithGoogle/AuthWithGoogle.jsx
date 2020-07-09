import React, { useEffect, Component } from 'react';
import LogoGoogle from '../../assets/img/google-logo.png'
import { GoogleLogin } from 'react-google-login';
import { message } from 'antd';

class AuthWithGoogle extends Component {
    componentDidMount() {
        this.googleSDK()
    }

    prepareLoginButton = () => {
        this.auth2.attachClickHandler(
            this.refs.googleLoginBtn,
            {},
            googleUser => {
                const profile = googleUser.getBasicProfile()
                console.log("profile: ", profile)
                message.success(`Hello ${profile.getName()}, you login successfully`)


                // const token = googleUser.getAuthResponse().id_token
                // const email = profile.getEmail()
                // const googleID = profile.getId()
                // const displayName = profile.getName()
                // const avatar = profile.getImageUrl()
                // const { authenWithSocial, typeID } = this.props
                // authenWithSocial({ email, googleID, displayName, avatar, typeID })
            },
            error => {
                console.error(error)
            }
        )
    }

    googleSDK = () => {
        window.googleSDKLoaded = () => {
            window.gapi.load('auth2', () => {
                this.auth2 = window.gapi.auth2.init({
                    client_id: '1056138370544-e9h2fhpfajmhtd75jvf38gatra6h5342.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email',
                })
                this.prepareLoginButton()
            })
        }
            ; (function (d, s, id) {
                // eslint-disable-next-line one-var
                let js,
                    fjs = d.getElementsByTagName(s)[0]
                if (d.getElementById(id)) {
                    return
                }
                js = d.createElement(s)
                js.id = id
                js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded'
                fjs.parentNode.insertBefore(js, fjs)
            })(document, 'script', 'google-jssdk')
    }

    render() {
        return (
            <div className="auth-with-google" >
                <div className="content" ref="googleLoginBtn">
                    <img className="logo" src={LogoGoogle} alt="Google" />
                    <span className="title">Continue with Google</span>
                </div>
            </div>

            // <div className="login-with-google">
            //     <button type="button" className="loginBtn loginBtn--google" ref="googleLoginBtn">
            //         <i className="fab fa-google" />
            //         Google
            //     </button>
            // </div>

            //         <div className="auth-with-google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
            //     <div className="content">
            //         <img className="logo" src={LogoGoogle} alt="Google"/>
            //         <span className="title">Continue with Google</span>
            //     </div>
            // </div>
        )
    }




    // {/* <GoogleLogin
    //     clientId="1056138370544-e9h2fhpfajmhtd75jvf38gatra6h5342.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
    //     buttonText="LOGIN WITH GOOGLE"
    //     onSuccess={responseGoogle}
    //     onFailure={responseGoogle}
    // /> */}
    // {/* <GoogleLogin
    //     clientId="1056138370544-e9h2fhpfajmhtd75jvf38gatra6h5342.apps.googleusercontent.com"
    //     buttonText="Login"
    //     onSuccess={responseGoogle}
    //     onFailure={responseGoogleFailure}
    //     render={renderProps => (
    //         <div className="auth-with-google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
    //     <div className="content">
    //         <img className="logo" src={LogoGoogle} alt="Google"/>
    //         <span className="title">Continue with Google</span>
    //     </div>
    // </div>
    //     )}
    //     cookiePolicy={'single_host_origin'}
    // /> */}

};

export default AuthWithGoogle;