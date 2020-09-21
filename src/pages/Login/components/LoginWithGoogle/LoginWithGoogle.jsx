import { message } from "antd";
import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { loginWithGoogle } from "../../../../api/user.api";
// import LogoGoogle from "../../../../assets/img/google-logo.png";
// import { auth, signInWithGoogle } from "../../../../utils/firebase.utils";
import "./LoginWithGoogle.scss";
import GoogleLogin from "react-google-login";

class LoginWithGoogle extends Component {
  state = {
    isClickLogin: false,
  };

  unsubscribeFromAuth = null;

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
  //     console.log("login", user);
  //     if (user && this.state.isClickLogin) {
  //       try {
  //         console.log("user changed: ", user);
  //         // this.setState({ currentUser: user });
  //         // login
  //         const { email } = user;
  //         const idToken = await user.getIdToken();
  //         const rs = await loginWithGoogle(email, idToken);
  //         // todo: save current user
  //         console.log("rs: ", rs);
  //       } catch (err) {
  //         const { t } = this.props;
  //         message.error(t("messageLoginFail"));
  //       }
  //     } else if (user) {
  //       const { email } = user;
  //       const idToken = await user.getIdTokenResult();
  //       console.log(idToken);
  //       const rs = await loginWithGoogle(email, idToken.token);
  //     }
  //   });
  // }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }

  handleLoginDone = async (response) => {
    try {
      if (!response || !response.tokenId || !response.profileObj) {
        return;
      }
      const rs = await loginWithGoogle(
        response.profileObj.email,
        response.tokenId
      );
      console.log("rs: ", rs);
    } catch (err) {
      const { t } = this.props;
      message.error(t("messageLoginFail"));
    }
  };

  // handleLogin = (e) => {
  //   this.setState({ isClickLogin: true }, () => {
  //     //   e.stopPropagation();
  //     signInWithGoogle();
  //   });
  // };

  render() {
    const { t } = this.props;
    return (
      <div className="auth-with-google">
        {/* <div className="content" onClick={this.handleLogin}>
          <img className="logo" src={LogoGoogle} alt="Google" />
          <span className="title">{t("authWithGoogle")}</span>
        </div> */}
        <GoogleLogin
          clientId="241375531558-120od43cqeo7oetk8nj7dt9c1jpsrssr.apps.googleusercontent.com"
          buttonText={t("authWithGoogle")}
          onSuccess={this.handleLoginDone}
          onFailure={this.handleLoginDone}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default withTranslation()(LoginWithGoogle);
