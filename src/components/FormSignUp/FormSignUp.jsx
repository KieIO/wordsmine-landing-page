import React, { useState } from "react";
import { Form, Input, message, Checkbox } from "antd";
import ButtonLarge from "../ButtonLarge/ButtonLarge";
import { API_SIGN_UP } from "../../utils/constant";
import { useTranslation } from "react-i18next";
import happyIcon from "../../img/happy.svg";
import "./FormSignUp.scss";

const FormSignUp = () => {
  const { t } = useTranslation();

  const [form] = Form.useForm();
  const [checkAgreePolicy, setcheckAgreePolicy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onCheckboxChange = (e) => {
    setcheckAgreePolicy(!checkAgreePolicy);
  };

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
      if (checkAgreePolicy) {
        try {
          const result = await submit(values);
          console.debug("result: ", result);
          message.success("Thanks for your submission");
          form.resetFields();
        } catch (err) {
          console.debug("result: ", err);
          message.error("Something went wrong, please try later");
        }
      } else {
        message.warning("Please check agree policy to submit form");
      }
    } catch (err) {
      console.debug("result: ", err);
    }
    setIsLoading(false);
  };

  return (
    <section className="form">
      <Form id="form-cta" form={form} name="dynamic_rule">
        <Form.Item
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your full name",
            },
          ]}
        >
          <div className="custom-input">
            <span className="custom-input__placeholder">
              {t("ctaFullName")}
            </span>
            <Input placeholder="David Copperfield" />
          </div>
        </Form.Item>
        <Form.Item
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
          <div className="custom-input">
            <span className="custom-input__placeholder">{t("ctaEmail")}</span>
            <Input placeholder="davicopper@email.com" type="email" />
          </div>
        </Form.Item>

        {/* <Form.Item name="interest">
          <div className="custom-input">
            <span className="custom-input__placeholder">{t('ctaInterest')}</span>
            <Input placeholder="Learn vocabulary, grammar, etc" />
          </div>
        </Form.Item> */}

        <Form.Item className="check-box">
          <Checkbox checked={checkAgreePolicy} onChange={onCheckboxChange}>
            {" "}
            {t("ctaRule")}
          </Checkbox>
        </Form.Item>

        <Form.Item className="form__btn-start">
          <ButtonLarge type="primary" onClick={onCheck} loading={isLoading}>
            {t("ctaButton")} &nbsp;{" "}
            <img src={happyIcon} alt="problem" width="30px;"></img>
          </ButtonLarge>
        </Form.Item>
      </Form>
    </section>
  );
};

export default FormSignUp;
