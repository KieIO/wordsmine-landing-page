import React from "react";
import { Carousel, Col, Row } from "antd";
// IMPORT IMAGES
import appStore from "../../assets/img/dowload-mobile-app-store.png";
// eslint-disable-next-line no-unused-vars
import chPlay from "../../assets/img/dowload-mobile-google-store.png";
import { useTranslation } from "react-i18next";
import background1 from "../../assets/img/background1.png";
import background2 from "../../assets/img/background2.png";
import background3 from "../../assets/img/background3.png";
import chromeExtensionLogo from "../../assets/img/chrome-extension-logo.png";
import "./AppDownload.scss";



const AppDownload = () => {
  const { t } = useTranslation();

  return (
    <section className="app-download u-margin-vertical-section u-margin-vertical-section">
      <Row className="app-download__row" gutter={[16, 24]}>
        <Col className="app-download__left" xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="app-download__left__wrap">
            <h2>{t("appDownloadTitle")}</h2>
            <div className="app-download__left__wrap__download">
              <a className="app-store" href="/">
                <img src={appStore} alt="app-store" />
              </a>
              <a className="chrome-extension-logo" href="/">
                <img src={chromeExtensionLogo} alt="chrome-extension" />
              </a>
            </div>
          </div>
        </Col>
        <Col
          className="app-download__right"
          xs={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <div className="app-download__right__wrap">
            <Carousel className="app-download__right__wrap__mobile" autoplay>
              <img
                className="app-download__right__wrap__mobile__background"
                src={background1}
                alt="background-1"
              />
              <img
                className="app-download__right__wrap__mobile__background"
                src={background2}
                alt="background-2"
              />
              <img
                className="app-download__right__wrap__mobile__background"
                src={background3}
                alt="background-3"
              />
            </Carousel>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default AppDownload;
