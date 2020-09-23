import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { Form, Input, message } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { register } from "../../api/user.api";
import { useTranslation } from 'react-i18next';
import LoginWithGoogle from "../Login/components/LoginWithGoogle/LoginWithGoogle";

const Register = (props) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const onCheck = async () => {
    setIsLoading(true);
    try {
      const values = await form.validateFields();
      try {
        const result = await register(values);

        if (result !== 400) {
          message.success(t('messageRegisterSuccess'));
          props.history.push("/login");
        }
        else {
          message.error(t('messageRegisterFail'));
        }
        // await submit(values)
        form.resetFields();
      } catch (err) {
        message.error(t('messageRegisterFail'));
        console.debug("result: ", err);
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
        {/* <img class="login-avatar"
                    src="https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
                    alt="user" /> */}
        <div className="title-form">{t('registerPageTitle')}</div>
        <div className="social-authen">
          <LoginWithGoogle />
          <div className="or">{t('or')}</div>
        </div>
        <Form form={form} name="dynamic_rule" className="content-form">
          <Form.Item
            className="form-item-custom"
            name="authEmail"
            type="authEmail"
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
            name="username"
            type="text"
            rules={[
              {
                required: true,
                message: t('warningEmptyName'),
              },
            ]}
          >
            <Input
              placeholder={t('namePlaceholder')}
              type="text"
              prefix={<UserOutlined />}
            />
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
              {
                min: 6,
                message: t('warningMinLengthPassword'),
              },
              {
                max: 15,
                message: t('warningMaxLengthPassword'),
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

          <Form.Item
            className="form-item-custom"
            name="confirmPassword"
            type="password"
            dependencies={["password"]}
            rules={[
              { transform: (value) => (value ? value.trim() : "") },
              {
                required: true,
                message: t('warningConfirmPassword'),
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    t('warningPasswordNotMatch')
                  );
                },
              }),
            ]}
          >
            {/* <div className="custom-input-with-email"> */}
            <Input.Password
              placeholder={t('confirmPasswordPlaceholder')}
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
          {t('registerPageOption')} <Link to="/login">{t('registerPageLoginOption')}</Link>
        </div>
      </div>
    </section>
  );
};

Register.propTypes = {};

export default Register;
