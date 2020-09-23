import { message } from "antd";
import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { withTranslation } from "react-i18next";
import { loginWithGoogle } from "../../../../api/user.api";
import { UserContext } from "../../../../contexts/user.context";
import "./LoginWithGoogle.scss";

const LoginWithGoogle = ({ t }) => {
    const [, setUserContext] = useContext(UserContext);

    const handleLoginDone = async (response) => {
        try {
            if (!response || !response.tokenId || !response.profileObj) {
                return;
            }
            const rs = await loginWithGoogle(
                response.profileObj.email,
                response.tokenId
            );
            await setUserContext(rs);
        } catch (err) {
            const { t } = this.props;
            message.error(t("messageLoginFail"));
        }
    };


    return (
        <div className="auth-with-google">
            <GoogleLogin
                clientId="241375531558-120od43cqeo7oetk8nj7dt9c1jpsrssr.apps.googleusercontent.com"
                buttonText={t("authWithGoogle")}
                onSuccess={handleLoginDone}
                onFailure={handleLoginDone}
                cookiePolicy={"single_host_origin"}
            />
        </div>
    );
}

export default withTranslation()(LoginWithGoogle);
