import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import { Form, Input, Button, message } from 'antd';


const Login = () => {
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
        <section class="login__wrap">
            <div class="login__card card-container">
                <img class="login__avatar"
                    src="https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
                    alt="user" />
                <h3 class="login__name">User</h3>
                <Form form={form} name="dynamic_rule" className="content-form">
                    <Form.Item
                        className="form-item-email"
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
                        <Input placeholder="Your email" type="email" />
                        {/* </div> */}
                    </Form.Item>

                    <Form.Item
                        className="form-item-email"
                        name="password"
                        type="password"
                        rules={[
                            { transform: (value) => (value ? value.trim() : '') },
                            {
                                required: true,
                                message: 'Please input your password',
                            },
                            {
                                min: 8,
                                message: 'Please input your password',
                            },
                            {
                                min: 16,
                                message: 'Please input your password',
                            },
                            {
                                type: 'email',
                                message: 'Email is not valid',

                            }
                        ]}
                    >
                        {/* <div className="custom-input-with-email"> */}
                        <Input.Password placeholder="Your password" type="password" />
                        {/* </div> */}
                    </Form.Item>

                    <Form.Item className="form-item-btn">
                        <Button type="primary" onClick={onCheck} loading={isLoading}>
                            Login
          </Button>
                    </Form.Item>
                </Form>
            </div>

        </section>
    );
};

Login.propTypes = {

};

export default Login;