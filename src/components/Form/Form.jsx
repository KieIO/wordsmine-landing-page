
import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import ButtonCustom from '../ButtonCustom/ButtonCustom';
import CustomInput from '../CustomInput/CustomInput';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const FormSignUp = () => {
    const [form] = Form.useForm();
    const [checkAgreePolicy, setcheckAgreePolicy] = useState(false);

    // const validateMessages = {
    //     required: '${label} is required!',
    //     types: {
    //         email: '${label} is not validate email!',
    //     },
    // };

    // useEffect(() => {
    //     form.validateFields(['isCheckBox']);
    // }, [checkAgreePolicy, form]);

    const onCheckboxChange = e => {
        setcheckAgreePolicy(e.target.checked);
    };

    const submit = async (values) => {
        return fetch('https://formspree.io/mnqgzzev', {
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
                // if (status === HTTP_STATUS_SUCCESS) {
                return result;
                // }
                // if (result && result.message) {
                // 	throw new Error(result.message);
                // } else {
                // 	throw new Error('Có lỗi xảy ra. Vui lòng thử lại');
                // }
            })
            .catch((err) => {
                // if (err.toString() === ERROR_CONNECTION_REFUSED.server) {
                // 	throw new Error(ERROR_CONNECTION_REFUSED.client);
                // }
                throw err;
            })
    }

    const onCheck = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);


            const result = await submit(values)
            console.log("result: ", result)
        } catch (err) {
            console.log("err: ", err)
        }
    }

    const onChangeBox = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <section className="form">
            <Form form={form} name="dynamic_rule">
                <Form.Item
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your full name',
                        },
                    ]}
                >
                    <div className="custom-input">
                        <span className="custom-input__placeholder">Your fullname</span>
                        <Input placeholder="Fullname" />
                    </div>
                </Form.Item>
                <Form.Item
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
                    <div className="custom-input">
                        <span className="custom-input__placeholder">Email</span>
                        <Input placeholder="example@email.com" type="email" />
                    </div>
                </Form.Item>

                <Form.Item
                    name="interest"
                >
                    <div className="custom-input">
                        <span className="custom-input__placeholder">Your interest</span>
                        <Input placeholder="Ex: Sport, Coffee, Biology,.." />
                    </div>
                </Form.Item>


                {/* <Form.Item 
                name="isCheckBox"
                >
                    <Checkbox checked={checkAgreePolicy} onChange={onCheckboxChange}> I agree to the terms of service and privacy policy.</Checkbox>
                </Form.Item> */}

                <Form.Item >
                    <ButtonCustom type="primary" onClick={onCheck}>
                        Check
                </ButtonCustom>
                </Form.Item>
            </Form>
        </section>
    );
}


export default FormSignUp;