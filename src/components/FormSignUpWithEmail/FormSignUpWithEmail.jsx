import { Form, message } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { API_SIGN_UP } from "../../utils/constant";
import ButtonLarge from "../ButtonLarge/ButtonLarge";
import "./FormSignUpWithEmail.scss";


const FormSignUpWithEmail = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (values) => {
    return fetch(API_SIGN_UP, {
      method: "POST",
      body: JSON.stringify({ ...values }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
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
      });
  };

  const onCheck = async () => {
    setIsLoading(true);
    try {
      const values = await form.validateFields();

      try {
        await submit(values);
        message.success("Thanks for your submission");
        form.resetFields();
      } catch (err) {
        message.error("Something went wrong, please try later");
      }
    } catch (err) {
      message.error("Something went wrong, please try later");
    }
    setIsLoading(false);
  };

  return (
    <section className="form-signup-with-email">
      <Form id="form-try" form={form} name="dynamic_rule" className="content-form">
        {/* <Form.Item
          className="form-item-email"
          name="email"
          type="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
            {
              type: "email",
              message: "Email is not valid",
            },
          ]}
        >
          <div className="custom-input-with-email">
            <Input placeholder="Email" type="email" />
          </div>
        </Form.Item> */}

        <Form.Item className="form-item-btn">
          <ButtonLarge type="primary" onClick={onCheck} loading={isLoading}>
            {t("bannerTryNowButton")}
          </ButtonLarge>
        </Form.Item>
      </Form>
    </section>
  );
};

export default FormSignUpWithEmail;
