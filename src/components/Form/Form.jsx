
import React, {useState, useEffect} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import ButtonCustom from '../ButtonCustom/ButtonCustom';
import CustomInput from '../CustomInput/CustomInput';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const FormSignUp = () => {
    const [form] = Form.useForm();
    const [checkNick, setCheckNick] = useState(false);

    useEffect(() => {
        form.validateFields(['nickname']);
    }, [checkNick]);

    const onCheckboxChange = e => {
        setCheckNick(e.target.checked);
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
                ]}
            >
                    <div className="custom-input">
                        <span className="custom-input__placeholder">Email</span>
                        <Input placeholder="example@email.com" />
                    </div>
            </Form.Item>

            <Form.Item
                name="interest"
                // label="Your interest"
            >
                    {/* <CustomInput label="Your interest" placeholder="Ex: Sport, Coffee, Biology,.."/> */}
                    <div className="custom-input">
                        <span className="custom-input__placeholder">Your interest</span>
                        <Input placeholder="Ex: Sport, Coffee, Biology,.." />
                    </div>
            </Form.Item>
            
            <Form.Item >
                <Checkbox checked={checkNick} onChange={onCheckboxChange}>
                    Nickname is required
                </Checkbox>
            </Form.Item>

            <Form.Item >
                <Checkbox checked={checkNick}  onChange={onChangeBox}> I agree to the terms of service and privacy policy.</Checkbox>
            </Form.Item>
            <Form.Item >
                <Button type="primary" onClick={onCheck}>
                    Check
        </Button>
            </Form.Item>
        </Form>
        </section>
    );

    // const [form] = Form.useForm();
    // const onFinish = () => {
    //     console.log('on finish')
    // }


    // const onChange = (e) => {
    //     console.log(`checked = ${e.target.checked}`);
    // }

    // const validateMessages =  {
    //     required: '${label} is required!',
    //     types: {
    //         email: '${label} is not validate email!',
    //         number: '${label} is not a validate number!',
    //     },
    //     number: {
    //         range: '${label} must be between ${min} and ${max}',
    //     },
    // };

    // const onCheck = async () => {
    //     try {
    //         const values = await form.validateFields();
    //         console.log('Success:', values);
    //     } catch (errorInfo) {
    //         console.log('Failed:', errorInfo);
    //     }
    // };


    // return (
    //     <section className="form">
    //         <Form {...layout} validateMessages={validateMessages}
    //             name="basic"
    //             initialValues={{ remember: true }}
    //             onFinish={onFinish} >
    //             <Form.Item
    //                 label="Fullname"
    //                 name="username"
    //                 rules={[{ required: true, message: 'Please input your fullname!' }]}>
    //                 <Input placeholder="Please input your fullname" />
    //             </Form.Item>
    //             <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
    //                 <Input placeholder="Please input your email" />
    //             </Form.Item>

    //             <Form.Item name={['user', 'introduction']} label="Your Interests">
    //                 <Input.TextArea placeholder="Your Interest.  Ex: Sport, Coffee, Biology,.." />
    //             </Form.Item>

    //             <div class="form___checkbox-disflex">
    //                 <Checkbox onChange={onChange}> </Checkbox>
    //                 <span>I agree to the terms of service and privacy policy.</span>
    //             </div>
    //             <Form.Item >
    //             {/* <div class="form__btn-format" htmlType="submit"> */}
    //                 <ButtonCustom >Submit</ButtonCustom>
    //             {/* </div> */}
    //                 <Button type="primary" onClick={onCheck}>
    //                     Check
    //     </Button>


    //             </Form.Item>
    //         </Form>

    //     </section>
    // );
}


export default FormSignUp;