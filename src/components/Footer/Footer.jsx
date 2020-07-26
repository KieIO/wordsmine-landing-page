import React from "react";
import { useState } from "react";
import FooterColumn from "./components/FooterColumn/FooterColumn";
import { Row, Col } from "antd";
import SocialFooter from "./components/SocialFooter/SocialFooter";
import Copyright from "./components/Copyright/Copyright";

import "./Footer.scss";

const Footer = () => {
  const [footerColumns] = useState([
    {
      title: "About",
      data: [
        {
          name: "Company",
          slug: "/",
        },
        {
          name: "Blog",
          slug: "/",
        },
      ],
    },
    {
      title: "Features",
      data: [
        {
          name: "WordsMine! Extension",
          slug: "/",
        },
        {
          name: "WordsMine! Mobile App",
          slug: "/",
        },
      ],
    },
    {
      title: "Help",
      data: [
        {
          name: "Sign up",
          slug: "/",
        },
      ],
    },
    {
      title: "Statistics",
      data: [
        {
          name: "Added Words: 0",
          slug: "/",
        },
      ],
    },
  ]);
  return (
    <footer className="footer">
      <div className="footer__top">
        <Row justify="center" align="center">
          {footerColumns.map((item, index) => (
            <Col key={index} className="feature__item" lg={5} sm={6}>
              <FooterColumn {...item} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="footer__bottom">
        <SocialFooter />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
