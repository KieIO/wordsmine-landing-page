
import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import ButtonCustom from '../ButtonCustom/ButtonCustom';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const FormSignUp = () => {
    const onFinish = () => {
        console.log('on finish')
    }
    return (
        <section className="form">
            <Form {...layout} validateMessages={validateMessages}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish} >
                <Form.Item
                    label="Fullname"
                    name="username"
                    rules={[{ required: true, message: 'Please input your fullname!' }]}>
                    <Input placeholder="Please input your fullname" />
                </Form.Item>


                <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
                    <Input placeholder="Please input your email" />
                </Form.Item>

                <Form.Item name={['user', 'introduction']} label="Your Interests">
                    <Input.TextArea placeholder="Your Interest.  Ex: Sport, Coffee, Biology,.." />
                </Form.Item>

                <div class="form___checkbox-disflex">
                    {/* <checkbox class="form__checkbox"></checkbox> */}
                    <Checkbox onChange={onChange}> </Checkbox>
                    <span>I agree to the terms of service and privacy policy.</span>
                </div>
                <div class="form__btn-format">
                    <ButtonCustom >Submit</ButtonCustom>
                </div>
                {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item> */}
            </Form>

        </section>
    );
}


export default FormSignUp;