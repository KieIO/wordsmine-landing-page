import React, { useState, useContext } from "react";
// import PropTypes from 'prop-types';
import { Form, Input, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AuthWithGoogle from "../../components/AuthWithGoogle/AuthWithGoogle";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { login, getProfile } from "../../api/user.api";
import { UserContext } from "../../contexts/user.context";
import "./Login.scss";
import { useTranslation } from 'react-i18next';
import LoginWithGoogle from "./components/LoginWithGoogle/LoginWithGoogle";

const Login = ({ history }) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [, setUserContext] = useContext(UserContext);
  const { t } = useTranslation();

  const onCheck = async () => {
    setIsLoading(true);
    try {
      const values = await form.validateFields();
      try {
        const result = await login(values);
        message.success(
          `${t('messageHello')}${
          !result.data.lastName ? ' Wordminer,' : ` ${result.data.authName},`
          } ${t('messageLoginSuccess')}`
        );
        form.resetFields();
        const rs = await getProfile();
        await setUserContext(rs);
        history.push("/");
      } catch (err) {
        console.debug("result: ", err);
        message.error(t('messageLoginFail'));
      }
    } catch (err) {
      console.debug("result: ", err);
    }
    setIsLoading(false);
  };

  return (
    <section className="login-wrap">
      <div className="back-to-home">
        <Link className="icon-back" to="/">
          <span className=" lnr lnr-arrow-left"></span>
        </Link>
        <span className="content">
          {t('backTo')}{" "}
          <Link className="link" to="/">
            {t('homePage')}
          </Link>
        </span>
      </div>
      <div className="card-container">
        {/* <img className="login-avatar"
                    src="https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
                    alt="user" /> */}
        <div className="title-form">{t('loginPageTitle')}</div>

        <div className="social-authen">
          {/* <AuthWithGoogle /> */}
          <LoginWithGoogle/>
          <div className="or">{t('or')}</div>
        </div>
        <Form form={form} name="dynamic_rule" className="content-form">
          <Form.Item
            className="form-item-custom"
            name="authEmail"
            type="email"
            rules={[
              { transform: (value) => (value ? value.trim() : "") },
              {
                required: true,
                message: t('warningEmptyEmail'),
              },
              {
                type: "email",
                message: t('warningInvalidEmail'),
              },
            ]}
          >
            {/* <div className="custom-input-with-email"> */}
            <Input
              placeholder={t('emailPlaceholder')}
              type="email"
              prefix={<MailOutlined />}
            />
            {/* </div> */}
          </Form.Item>

          <Form.Item
            className="form-item-custom"
            name="password"
            type="password"
            rules={[
              { transform: (value) => (value ? value.trim() : "") },
              {
                required: true,
                message: t('warningEmptyPassword'),
              },
            ]}
          >
            {/* <div className="custom-input-with-email"> */}
            <Input.Password
              placeholder={t('passwordPlaceholder')}
              type="password"
              prefix={<LockOutlined />}
            />
            {/* </div> */}
          </Form.Item>

          <Form.Item className="form-item-btn">
            <ButtonCustom
              size="small"
              type="success"
              onClick={onCheck}
              loading={isLoading}
            >
              {t('continue')}
            </ButtonCustom>
          </Form.Item>
        </Form>
        <div className="other-option">
          {t('loginPageOption')} <Link to="/register">{t('loginPageRegisterOption')}</Link>
        </div>
      </div>
    </section>
  );
};

// Login.propTypes = {

// };

export default Login;
