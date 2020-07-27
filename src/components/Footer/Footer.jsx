import React from "react";
import { useState } from "react";
import FooterColumn from "./components/FooterColumn/FooterColumn";
import { Row, Col } from "antd";
import SocialFooter from "./components/SocialFooter/SocialFooter";
import Copyright from "./components/Copyright/Copyright";

import "./Footer.scss";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";

const Footer = () => {
  const [footerColumns] = useState([
    {
      title: 'footerAbout',
      data: [
        {
          name: 'footerCompany',
          slug: "/",
        },
        {
          name: 'footerBlog',
          slug: "/",
        },
      ],
    },
    {
      title: 'footerFeatures',
      data: [
        {
          name: 'footerExtension',
          slug: "/",
        },
        {
          name: 'footerMobileApp',
          slug: "/",
        },
      ],
    },
    {
      title: 'footerHelp',
      data: [
        {
          name: 'footerSignup',
          slug: "/",
        },
      ],
    },
    {
      title: 'footerStatistics',
      data: [
        {
          name: 'footerAddedWords',
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
