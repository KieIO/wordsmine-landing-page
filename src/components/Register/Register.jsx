import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Form, Input, message} from 'antd';
import { MailOutlined, LockOutlined, UserOutlined} from '@ant-design/icons';
import ButtonLarge from '../ButtonLarge/ButtonLarge';
import { Link } from 'react-router-dom';
import AuthWithGoogle from '../AuthWithGoogle/AuthWithGoogle';
import ButtonCustom from '../ButtonCustom/ButtonCustom';

const Register = props => {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false)

    const onCheck = async () => {
        setIsLoading(true)
        try {
            const values = await form.validateFields();
            console.log("value: ", values)

            try {
                // await submit(values)
                message.success("Thanks for your submission")
                form.resetFields()
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
        <section class="login-wrap">
            <div className="back-to-home">
                <Link className="icon-back" to='/'>
                    <span className=" lnr lnr-arrow-left"></span>
                </Link>
                <span className="content">
                    Back to <Link className="link" to='/'>home page</Link>
                </span>
            </div>
            <div class="card-container">
                {/* <img class="login-avatar"
                    src="https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
                    alt="user" /> */}
                <div className="title-form">Register</div>

                <div className="social-authen">
                    <AuthWithGoogle />
                    <div className="or">OR</div>
                </div>
                <Form form={form} name="dynamic_rule" className="content-form">
                    <Form.Item
                        className="form-item-custom"
                        name="email"
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
                        <Input placeholder="Your email" type="email" prefix={<MailOutlined />}/>
                        {/* </div> */}
                    </Form.Item>
                    <Form.Item
                        className="form-item-custom"
                        name="username"
                        type="text"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name',
                            },
                        ]}
                    >
                        <Input placeholder="Your name" type="text" prefix={<UserOutlined />} />
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
                            {
                                min: 6,
                                message: 'Your password should more than 6 characters',
                            },
                            {
                                max: 15,
                                message: 'Your password should less than 15 characters',
                            },
                        ]}
                    >
                        {/* <div className="custom-input-with-email"> */}
                        <Input.Password placeholder="Your password" type="password" prefix={<LockOutlined />} />
                        {/* </div> */}
                    </Form.Item>

                    <Form.Item
                        className="form-item-custom"
                        name="confirmPassword"
                        type="password"
                        dependencies={['password']}
                        rules={[
                            { transform: (value) => (value ? value.trim() : '') },
                            {
                                required: true,
                                message: 'Please input your confirm password',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords that you entered do not match');
                                },
                            }),
                        ]}
                    >
                        {/* <div className="custom-input-with-email"> */}
                        <Input.Password placeholder="Your confirm password" type="password" prefix={<LockOutlined />}/>
                        {/* </div> */}
                    </Form.Item>

                    <Form.Item className="form-item-btn">
                        <ButtonCustom size="small" type="success" onClick={onCheck} loading={isLoading}>
                            Continue
                        </ButtonCustom>
                    </Form.Item>
                </Form>
                <div className="other-option">
                    You have an account? <Link to="/login">Login</Link>
                </div>
            </div>

        </section>
    );
};

Register.propTypes = {
    
};

export default Register;