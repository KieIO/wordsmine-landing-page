import { message } from 'antd';
import React, { Component} from 'react';
import { withTranslation } from 'react-i18next';
import { loginWithGoogle } from '../../../../api/user.api';
import LogoGoogle from '../../../../assets/img/google-logo.png';
import { auth, signInWithGoogle } from '../../../../utils/firebase.utils';
import './LoginWithGoogle.scss';


class LoginWithGoogle extends Component {
    state = {
        isClickLogin: false
    }

    unsubscribeFromAuth = null;
    
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user && this.state.isClickLogin) {
                try {
                    console.log("user changed: ", user)
                    // this.setState({ currentUser: user });
                    const { email, refreshToken } = user;
                    // login
                    const rs = await loginWithGoogle({ email, refreshToken })
                    // todo: save current user
                    console.log("rs: ", rs)    
                } catch (err) {
                    const { t } = this.props;
                    message.error(t('messageLoginFail'))
                }
            }
        });
       
    }

    componentWillUnmount() {
        if (this.unsubscribeFromAuth) {
            this.unsubscribeFromAuth();
        }
    }

    handleLogin = (e) => {
        this.setState({isClickLogin: true }, () => {
            e.stopPropagation()
            signInWithGoogle()
        })
    }

    render() {
        const { t } = this.props;
        return (
            <div className="auth-with-google" >
                <div className="content" onClick={this.handleLogin}>
                    <img className="logo" src={LogoGoogle} alt="Google" />
                    <span className="title">{t('authWithGoogle')}</span>
                </div>
            </div>
        )
    }

};

export default withTranslation()(LoginWithGoogle);