import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import { Form, Input, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AuthWithGoogle from '../../components/AuthWithGoogle/AuthWithGoogle';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import { login, getProfile} from '../../api/user.api';
import { UserContext } from '../../contexts/user.context';
import './Login.scss'


const Login = ({history}) => {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false)
    const [, setUserContext] = useContext(UserContext)

    const onCheck = async () => {
        setIsLoading(true)
        try {
            const values = await form.validateFields();
            try {
                const result = await login(values)
                message.success(`Hello${result.data.authName ? ` ${result.data.authName},` : ','} you login successfully`)
                form.resetFields()
                const rs = await getProfile()
                await setUserContext(rs)
                history.push("/")
            } catch (err) {
                console.debug("result: ", err)
                message.error("Something went wrong, please try later")
            }
        } catch (err) {
            console.debug("result: ", err)
        }
        setIsLoading(false)
    }

    return (
        <section className="login-wrap">
            <div className="back-to-home">
                <Link className="icon-back" to='/'>
                    <span className=" lnr lnr-arrow-left"></span>
                </Link>
                <span className="content">
                    Back to <Link className="link" to='/'>home page</Link>
                </span>
            </div>
            <div className="card-container">
                {/* <img className="login-avatar"
                    src="https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
                    alt="user" /> */}
                    <div className="title-form">Login</div>

                <div className="social-authen">
                    <AuthWithGoogle/>
                    <div className="or">OR</div>
                </div>
                <Form form={form} name="dynamic_rule" className="content-form">
                    <Form.Item
                        className="form-item-custom"
                        name="authEmail"
                        type="email"
                        rules={[
                            { transform: (value) => (value ? value.trim() : '') },
                            {
                                required: true,
                                message: 'Please input your email',
                            },
                            {
                                type: 'email',
                                message: 'Email is not valid',

                            }
                        ]}
                    >
                        {/* <div className="custom-input-with-email"> */}
                        <Input placeholder="Your email" type="email" prefix={<MailOutlined />} />
                        {/* </div> */}
                    </Form.Item>

                    <Form.Item
                        className="form-item-custom"
                        name="password"
                        type="password"
                        rules={[
                            { transform: (value) => (value ? value.trim() : '') },
                            {
                                required: true,
                                message: 'Please input your password',
                            },
                        ]}
                    >
                        {/* <div className="custom-input-with-email"> */}
                        <Input.Password placeholder="Your password" type="password" prefix={<LockOutlined />} />
                        {/* </div> */}
                    </Form.Item>

                    <Form.Item className="form-item-btn">
                        <ButtonCustom size="small" type="success" onClick={onCheck} loading={isLoading}>
                            Continue
                        </ButtonCustom>
                    </Form.Item>
                </Form>
                <div className="other-option">
                    You do not have account? <Link to="/register">Register</Link>
                </div>
            </div>

        </section>
    );
};

// Login.propTypes = {

// };

export default Login;