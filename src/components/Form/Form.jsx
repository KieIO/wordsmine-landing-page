
  import React from 'react'
  import { Form, Input, Button, Checkbox } from 'antd';



  const FormSignUp = () => {
    return (
        <Form
          name="basic"
          initialValues={{ remember: true }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      );
  }


  export default FormSignUp