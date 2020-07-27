import React from "react";
import { useState } from "react";
import FooterColumn from "./components/FooterColumn/FooterColumn";
import { Row, Col } from "antd";
import SocialFooter from "./components/SocialFooter/SocialFooter";
import Copyright from "./components/Copyright/Copyright";
import { useTranslation } from 'react-i18next';

import "./Footer.scss";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";

const Footer = () => {
  const { t } = useTranslation()

  const [footerColumns] = useState([
    {
      title: t('footerAbout'),
      data: [
        {
          name: t('footerCompany'),
          slug: "/",
        },
        {
          name: t('footerBlog'),
          slug: "/",
        },
      ],
    },
    {
      title: t('footerFeatures'),
      data: [
        {
          name: t('footerExtension'),
          slug: "/",
        },
        {
          name: t('footerMobileApp'),
          slug: "/",
        },
      ],
    },
    {
      title: t('footerHelp'),
      data: [
        {
          name: t('footerSignup'),
          slug: "/",
        },
      ],
    },
    {
      title: t('footerStatistics'),
      data: [
        {
          name: t('footerAddedWords'),
          slug: "/",
        },
      ],
    },
  ]);
  return (
    <footer className="footer">
      <div className="footer__top">
        <Row justify="center" align="center" gutter={[24, 8]}>
          {footerColumns.map((item, index) => (
            <Col key={index} className="feature__item" lg={6} sm={12}>
              <FooterColumn {...item} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="footer__bottom">
        <ChangeLanguage />
        <SocialFooter />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
