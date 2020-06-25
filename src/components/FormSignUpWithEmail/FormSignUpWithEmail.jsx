import React from 'react';
import ButtonLarge from '../ButtonLarge/ButtonLarge'
import { Form, message, Input } from 'antd';
import { API_SIGN_UP } from '../../utils/constant';


const FormSignUpWithEmail = () => {
    const [form] = Form.useForm();

    const submit = async (values) => {
        return fetch(API_SIGN_UP, {
            method: "POST",
            body: JSON.stringify({ ...values }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                // status = response.status;
                return response.json();
            })
            .then((result) => {
                return result;
            })
            .catch((err) => {
                throw err;
            })
    }

    const onCheck = async () => {
        try {
            const values = await form.validateFields();
                try {
                    console.log("value: ", values)
                    // const result = await submit(values)
                    // console.debug("result: ", result)
                    message.success("Thanks for your submission")
                    form.resetFields()
                } catch (err) {
                    console.debug("result: ", err)
                    message.error("Something went wrong, please try later")
                }
        } catch (err) {
            console.debug("result: ", err)
        }
    }

    return ( 
        <section className="form-signup-with-email">
            <Form form={form} name="dynamic_rule" className="content-form">
                <Form.Item
                    className = "form-item-email"
                    name="email"
                    type="email"
                    rules={[
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
                    <div className="custom-input-with-email">
                        <Input placeholder="Your email" type="email"/>
                    </div>
                </Form.Item>

                <Form.Item className="form__btn-start">
                    <ButtonLarge type="primary" onClick={onCheck} style={{ margin: 0, marginLeft: "-2px", borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
                        Get started
                    </ButtonLarge>
                </Form.Item>
            </Form>
        </section>
     );
}
 
export default FormSignUpWithEmail;